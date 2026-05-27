// audio-engine.js — Web Audio API synthesis for loss-specific audio snippets
// Generates 5-second evocative sounds based on loss audioProfile

const AudioEngine = (function() {
  let ctx = null;
  let currentlyPlaying = null;

  function getContext() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    return ctx;
  }

  // Convert semitone interval to frequency multiplier
  function semitonesToRatio(semitones) {
    return Math.pow(2, semitones / 12);
  }

  // Create noise buffer for texture beds
  function createNoiseBuffer(audioCtx, duration, noiseLevel) {
    const sampleRate = audioCtx.sampleRate;
    const length = Math.floor(sampleRate * duration);
    const buffer = audioCtx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * noiseLevel;
    }
    return buffer;
  }

  // Apply ADSR envelope to gain node
  function applyEnvelope(gainNode, envelope, timeOffset) {
    const ctx = gainNode.context;
    const t = ctx.currentTime + timeOffset;
    const { attack, decay, sustain, release } = envelope;
    const totalDuration = attack + decay + (5.0 - attack - decay - release) + release;

    gainNode.gain.setValueAtTime(0, t);
    gainNode.gain.linearRampToValueAtTime(1, t + attack);
    gainNode.gain.linearRampToValueAtTime(sustain, t + attack + decay);
    gainNode.gain.setValueAtTime(sustain, t + 5.0 - release);
    gainNode.gain.linearRampToValueAtTime(0, t + 5.0);
  }

  // Pattern generators — each returns an array of {time, frequency, duration} events
  const patterns = {
    arpeggio(baseFreq, duration) {
      const notes = [0, 4, 7, 12, 7, 4]; // major triad ascending/descending
      const stepDuration = duration / (notes.length * 1.5);
      return notes.map((semitone, i) => ({
        time: i * stepDuration,
        frequency: baseFreq * semitonesToRatio(semitone),
        duration: stepDuration * 1.2
      }));
    },

    drone(baseFreq, duration) {
      return [{ time: 0, frequency: baseFreq, duration: duration }];
    },

    sustainedDrone(baseFreq, duration) {
      return [
        { time: 0, frequency: baseFreq, duration: duration },
        { time: 0, frequency: baseFreq * semitonesToRatio(4), duration: duration }
      ];
    },

    melodicFragment(baseFreq, duration) {
      const notes = [0, 3, 7, 5];
      const stepDuration = duration / (notes.length * 2);
      return notes.map((semitone, i) => ({
        time: i * stepDuration * 1.5,
        frequency: baseFreq * semitonesToRatio(semitone) * (1 - i * 0.05), // slight pitch droop
        duration: stepDuration * 1.3
      }));
    },

    hummedPhrase(baseFreq, duration) {
      const notes = [0, 2, 4, 2, 0];
      const stepDuration = duration / (notes.length + 2);
      return notes.map((semitone, i) => ({
        time: 0.5 + i * stepDuration,
        frequency: baseFreq * semitonesToRatio(semitone),
        duration: stepDuration * 0.9
      }));
    },

    echoDecay(baseFreq, duration) {
      const echoes = [];
      for (let i = 0; i < 4; i++) {
        echoes.push({
          time: i * 1.0,
          frequency: baseFreq,
          duration: 0.8
        });
      }
      return echoes;
    },

    searching(baseFreq, duration) {
      const notes = [0, 2, 5, 6, 10, 11]; // whole-tone adjacent, never resolving
      const stepDuration = duration / notes.length;
      return notes.map((semitone, i) => ({
        time: i * stepDuration,
        frequency: baseFreq * semitonesToRatio(semitone),
        duration: stepDuration * 0.7
      }));
    },

    gentlePulse(baseFreq, duration) {
      const pulses = [];
      const interval = 0.7;
      let t = 0;
      while (t < duration - 0.5) {
        pulses.push({
          time: t,
          frequency: baseFreq,
          duration: 0.5
        });
        t += interval;
      }
      return pulses;
    },

    hesitantPhrase(baseFreq, duration) {
      return [
        { time: 0.3, frequency: baseFreq, duration: 0.6 },
        { time: 1.2, frequency: baseFreq, duration: 0.4 },
        { time: 2.0, frequency: baseFreq * semitonesToRatio(2), duration: 0.8 },
        { time: 3.2, frequency: baseFreq, duration: 1.2 }
      ];
    },

    organDrone(baseFreq, duration) {
      return [
        { time: 0, frequency: baseFreq, duration: duration },
        { time: 0, frequency: baseFreq * semitonesToRatio(7), duration: duration },
        { time: 0, frequency: baseFreq * semitonesToRatio(12), duration: duration }
      ];
    },

    dialTones(baseFreq, duration) {
      // DTMF-inspired: pairs of frequencies
      const dtmf = [
        [baseFreq, baseFreq * 1.35],
        [baseFreq * 1.07, baseFreq * 1.22],
        [baseFreq * 0.92, baseFreq * 1.45],
        [baseFreq, baseFreq * 1.15]
      ];
      const stepDuration = duration / (dtmf.length + 2);
      const events = [];
      dtmf.forEach((freqs, i) => {
        freqs.forEach(f => {
          events.push({ time: 0.5 + i * stepDuration, frequency: f, duration: stepDuration * 0.6 });
        });
      });
      return events;
    },

    detunedBeat(baseFreq, duration) {
      return [
        { time: 0, frequency: baseFreq, duration: duration },
        { time: 0, frequency: baseFreq * 1.005, duration: duration }
      ];
    },

    recedingPhrase(baseFreq, duration) {
      const notes = [0, 4, 7, 4];
      return notes.map((semitone, i) => ({
        time: i * 1.0,
        frequency: baseFreq * semitonesToRatio(semitone),
        duration: 0.8
      }));
    },

    singleNoteSpace(baseFreq, duration) {
      return [
        { time: 1.0, frequency: baseFreq, duration: 2.5 }
      ];
    },

    franticThenStill(baseFreq, duration) {
      const events = [];
      // Frantic start
      for (let i = 0; i < 6; i++) {
        events.push({
          time: i * 0.15,
          frequency: baseFreq * semitonesToRatio([0, 3, 5, 7, 10, 12][i]),
          duration: 0.12
        });
      }
      // Then stillness
      events.push({
        time: 2.0,
        frequency: baseFreq,
        duration: 2.5
      });
      return events;
    },

    flashAndFade(baseFreq, duration) {
      return [
        { time: 0, frequency: baseFreq, duration: duration }
      ];
    },

    mouthedWords(baseFreq, duration) {
      // Rhythmic filtered bursts shaped like speech cadence
      const bursts = [];
      const rhythm = [0, 0.3, 0.5, 0.9, 1.1, 1.6, 2.0, 2.3, 2.5, 3.0, 3.5];
      rhythm.forEach(t => {
        bursts.push({
          time: t,
          frequency: baseFreq * (0.9 + Math.random() * 0.2),
          duration: 0.15 + Math.random() * 0.1
        });
      });
      return bursts;
    },

    twoPartInvention(baseFreq, duration) {
      const voice1 = [
        { time: 0, semitone: 0, dur: 1.0 },
        { time: 1.0, semitone: 4, dur: 0.8 },
        { time: 2.0, semitone: 7, dur: 1.2 }
      ];
      const voice2 = [
        { time: 0.5, semitone: 7, dur: 0.8 },
        { time: 1.5, semitone: 4, dur: 1.0 },
        { time: 2.8, semitone: 0, dur: 1.5 }
      ];
      return [...voice1, ...voice2].map(n => ({
        time: n.time,
        frequency: baseFreq * semitonesToRatio(n.semitone),
        duration: n.dur
      }));
    }
  };

  // Play a 5-second audio snippet for a given loss
  function playLoss(loss) {
    stop();
    const audioCtx = getContext();
    const profile = loss.audioProfile;
    const masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.6;
    masterGain.connect(audioCtx.destination);

    // Main filter
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = profile.filterFreq;
    filter.Q.value = profile.filterQ;
    filter.connect(masterGain);

    currentlyPlaying = { masterGain, sources: [] };

    // Generate melody events
    const patternFn = patterns[profile.melodyPattern] || patterns.drone;
    const events = patternFn(profile.baseFrequency, profile.duration);

    // Schedule each event
    events.forEach(event => {
      const envGain = audioCtx.createGain();
      applyEnvelope(envGain, profile.envelope, event.time);
      envGain.connect(filter);

      const osc = audioCtx.createOscillator();
      osc.type = profile.waveform;
      osc.frequency.value = event.frequency;
      osc.connect(envGain);

      const startTime = audioCtx.currentTime + event.time;
      osc.start(startTime);
      osc.stop(startTime + event.duration + profile.envelope.release + 0.1);
      currentlyPlaying.sources.push(osc);
    });

    // Layer oscillators (drone/pad layer)
    profile.layers.forEach(layer => {
      const layerGain = audioCtx.createGain();
      layerGain.gain.value = layer.gain;
      layerGain.connect(filter);

      const osc = audioCtx.createOscillator();
      osc.type = layer.waveform;
      osc.frequency.value = profile.baseFrequency * semitonesToRatio(layer.interval);
      osc.detune.value = layer.detune;

      // Layer envelope — fade in and sustain
      const layerEnv = audioCtx.createGain();
      applyEnvelope(layerEnv, { attack: 1.5, decay: 0.5, sustain: 0.7, release: 2.0 }, 0);
      osc.connect(layerEnv);
      layerEnv.connect(layerGain);

      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + profile.duration + 1);
      currentlyPlaying.sources.push(osc);
    });

    // Noise bed for texture
    if (profile.noiseBed > 0) {
      const noiseSource = audioCtx.createBufferSource();
      noiseSource.buffer = createNoiseBuffer(audioCtx, profile.duration + 1, 1);
      const noiseGain = audioCtx.createGain();
      noiseGain.gain.value = profile.noiseBed;
      const noiseFilter = audioCtx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.value = 800;
      noiseFilter.Q.value = 0.5;
      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);
      noiseSource.start(audioCtx.currentTime);
      noiseSource.stop(audioCtx.currentTime + profile.duration + 1);
      currentlyPlaying.sources.push(noiseSource);
    }

    return profile.duration;
  }

  function stop() {
    if (currentlyPlaying) {
      currentlyPlaying.sources.forEach(src => {
        try { src.stop(); } catch(e) {}
      });
      try { currentlyPlaying.masterGain.disconnect(); } catch(e) {}
      currentlyPlaying = null;
    }
  }

  function isPlaying() {
    return currentlyPlaying !== null;
  }

  return {
    playLoss,
    stop,
    isPlaying,
    getContext
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AudioEngine;
}
