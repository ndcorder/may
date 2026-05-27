// cover-art.js — Procedural cover art generation via Canvas
// Creates abstract compositions seeded from loss color palettes and art styles

const CoverArt = (function() {

  // Seeded pseudo-random for deterministic art per loss
  function seededRandom(seed) {
    let s = seed;
    return function() {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
  }

  // Convert hex to RGBA
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }

  // Art style renderers
  const styles = {
    softCircles(ctx, palette, rand, w, h) {
      for (let i = 0; i < 12; i++) {
        const x = rand() * w;
        const y = rand() * h;
        const r = 30 + rand() * 120;
        const color = palette[Math.floor(rand() * palette.length)];
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, hexToRgba(color, 0.6));
        grad.addColorStop(1, hexToRgba(color, 0));
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }
    },

    splitField(ctx, palette, rand, w, h) {
      const splitX = w * (0.35 + rand() * 0.3);
      const grad1 = ctx.createLinearGradient(0, 0, splitX, h);
      grad1.addColorStop(0, palette[0]);
      grad1.addColorStop(1, palette[1]);
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, splitX, h);

      const grad2 = ctx.createLinearGradient(splitX, 0, w, h);
      grad2.addColorStop(0, palette[2]);
      grad2.addColorStop(1, palette[3]);
      ctx.fillStyle = grad2;
      ctx.fillRect(splitX, 0, w - splitX, h);

      // Thin gap between fields
      ctx.fillStyle = hexToRgba(palette[4], 0.3);
      ctx.fillRect(splitX - 3, 0, 6, h);
    },

    horizontalBands(ctx, palette, rand, w, h) {
      const bandCount = 5 + Math.floor(rand() * 4);
      for (let i = 0; i < bandCount; i++) {
        const y = (i / bandCount) * h;
        const bh = h / bandCount + (rand() - 0.5) * 10;
        ctx.fillStyle = palette[i % palette.length];
        ctx.globalAlpha = 0.5 + rand() * 0.5;
        ctx.fillRect(0, y, w, bh);
      }
      ctx.globalAlpha = 1;
    },

    gradientField(ctx, palette, rand, w, h) {
      const grad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w * 0.7);
      grad.addColorStop(0, palette[0]);
      grad.addColorStop(0.5, palette[1]);
      grad.addColorStop(0.8, palette[2]);
      grad.addColorStop(1, palette[3]);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    },

    softRays(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[0];
      ctx.fillRect(0, 0, w, h);
      const cx = w * 0.5, cy = h * 0.3;
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI + rand() * 0.3;
        const length = h * (0.6 + rand() * 0.4);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        const grad = ctx.createLinearGradient(0, 0, 0, length);
        grad.addColorStop(0, hexToRgba(palette[1 + (i % 3)], 0.4));
        grad.addColorStop(1, hexToRgba(palette[1 + (i % 3)], 0));
        ctx.fillStyle = grad;
        ctx.fillRect(-15, 0, 30, length);
        ctx.restore();
      }
    },

    geometricRuins(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[4];
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 6; i++) {
        const x = rand() * w;
        const y = rand() * h;
        const size = 40 + rand() * 100;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rand() * 0.5);
        ctx.fillStyle = hexToRgba(palette[i % 4], 0.3 + rand() * 0.3);
        ctx.fillRect(-size/2, -size/2, size, size * (1.5 + rand()));
        ctx.restore();
      }
    },

    displacedShapes(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[4];
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 7; i++) {
        const x = w * 0.2 + rand() * w * 0.6;
        const y = h * 0.2 + rand() * h * 0.6;
        const r = 20 + rand() * 50;
        ctx.beginPath();
        ctx.arc(x + rand() * 20 - 10, y + rand() * 20 - 10, r, 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(palette[i % 4], 0.5);
        ctx.fill();
      }
    },

    warmGlow(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[4];
      ctx.fillRect(0, 0, w, h);
      const grad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w * 0.5);
      grad.addColorStop(0, hexToRgba(palette[0], 0.8));
      grad.addColorStop(0.4, hexToRgba(palette[1], 0.5));
      grad.addColorStop(1, hexToRgba(palette[2], 0));
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    },

    foldedPlanes(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[0];
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 5; i++) {
        const x = rand() * w * 0.3;
        const y = rand() * h;
        const pw = w * (0.3 + rand() * 0.4);
        const ph = h * (0.15 + rand() * 0.3);
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rand() - 0.5) * 0.15);
        ctx.fillStyle = hexToRgba(palette[1 + (i % 4)], 0.6);
        ctx.fillRect(0, 0, pw, ph);
        ctx.restore();
      }
    },

    vaultedArches(ctx, palette, rand, w, h) {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, palette[0]);
      bg.addColorStop(1, palette[1]);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 4; i++) {
        const x = w * (0.15 + i * 0.2);
        const archH = h * (0.4 + rand() * 0.2);
        ctx.beginPath();
        ctx.arc(x, h * 0.8, archH, Math.PI, 0);
        ctx.strokeStyle = hexToRgba(palette[2 + (i % 3)], 0.2 + i * 0.05);
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    },

    gridDigits(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[2];
      ctx.fillRect(0, 0, w, h);
      const cols = 6, rows = 6;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (rand() > 0.4) {
            const x = (c / cols) * w + 5;
            const y = (r / rows) * h + 5;
            ctx.fillStyle = hexToRgba(palette[r % 4], 0.3 + rand() * 0.4);
            ctx.fillRect(x, y, w/cols - 10, h/rows - 10);
          }
        }
      }
    },

    fractureLines(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[0];
      ctx.fillRect(0, 0, w, h);
      const cx = w * (0.4 + rand() * 0.2);
      const cy = h * (0.4 + rand() * 0.2);
      for (let i = 0; i < 12; i++) {
        const angle = rand() * Math.PI * 2;
        const length = 50 + rand() * 150;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * length, cy + Math.sin(angle) * length);
        ctx.strokeStyle = hexToRgba(palette[1 + (i % 4)], 0.4);
        ctx.lineWidth = 1 + rand() * 2;
        ctx.stroke();
      }
    },

    recedingWaves(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[0];
      ctx.fillRect(0, 0, w, h);
      const cx = w * 0.5, cy = h * 0.5;
      for (let i = 0; i < 6; i++) {
        const r = 30 + i * 30;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = hexToRgba(palette[1 + (i % 4)], 0.5 - i * 0.07);
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    },

    vastSpace(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[0];
      ctx.fillRect(0, 0, w, h);
      const cx = w * 0.5, cy = h * 0.5;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 30);
      grad.addColorStop(0, hexToRgba(palette[1], 0.6));
      grad.addColorStop(1, hexToRgba(palette[1], 0));
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    },

    layeredPages(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[2];
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 5; i++) {
        const x = 20 + i * 15 + rand() * 10;
        const y = 20 + i * 10 + rand() * 8;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rand() - 0.5) * 0.08);
        ctx.fillStyle = hexToRgba(palette[i % 4], 0.5);
        ctx.fillRect(0, 0, w - 60, h - 50);
        ctx.restore();
      }
    },

    flashFragments(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[4];
      ctx.fillRect(0, 0, w, h);
      const grad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w * 0.3);
      grad.addColorStop(0, hexToRgba(palette[0], 0.9));
      grad.addColorStop(0.5, hexToRgba(palette[1], 0.4));
      grad.addColorStop(1, hexToRgba(palette[2], 0));
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    },

    buriedGlyphs(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[0];
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 8; i++) {
        const x = rand() * w;
        const y = rand() * h;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rand() * Math.PI);
        ctx.fillStyle = hexToRgba(palette[2 + (i % 3)], 0.15 + rand() * 0.15);
        // Simple geometric "glyph"
        const s = 15 + rand() * 25;
        ctx.fillRect(-s/2, -2, s, 4);
        ctx.fillRect(-2, -s/2, 4, s);
        ctx.restore();
      }
    },

    twoThreads(ctx, palette, rand, w, h) {
      ctx.fillStyle = palette[4];
      ctx.fillRect(0, 0, w, h);
      for (let thread = 0; thread < 2; thread++) {
        ctx.beginPath();
        ctx.moveTo(0, h * (0.3 + thread * 0.4));
        for (let x = 0; x < w; x += 10) {
          const y = h * (0.3 + thread * 0.4) + Math.sin(x * 0.02 + thread * 2) * 30;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = hexToRgba(palette[thread], 0.7);
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
  };

  // Generate cover art for a loss and return as data URL
  function generate(loss, width, height) {
    width = width || 300;
    height = height || 300;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    const rand = seededRandom(loss.id * 7919);

    const renderer = styles[loss.artStyle] || styles.gradientField;
    renderer(ctx, loss.colorPalette, rand, width, height);

    return canvas.toDataURL('image/png');
  }

  // Generate a small thumbnail (for carousels)
  function generateThumbnail(loss) {
    return generate(loss, 150, 150);
  }

  return {
    generate,
    generateThumbnail,
    styles
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CoverArt;
}
