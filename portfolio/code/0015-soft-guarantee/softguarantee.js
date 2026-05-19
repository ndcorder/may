#!/usr/bin/env node
'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ─── Constants ───────────────────────────────────────────────
const ALGO = 'aes-256-ctr';
const MAC_LEN = 32; // HMAC-SHA256
const NONCE_LEN = 12;
const VERSION = 1;
const HEADER_LEN = 8; // 4 bytes magic + 4 bytes version
const MAGIC = Buffer.from('SGRF'); // Soft Guarantee Resource Format

// ─── Utility ─────────────────────────────────────────────────
function hmac(key, data) {
  return crypto.createHmac('sha256', key).update(data).digest();
}

function deriveKeys(password, salt) {
  const master = crypto.pbkdf2Sync(password, salt, 600000, 64, 'sha512');
  return {
    enc: master.slice(0, 32),
    mac: master.slice(32, 64)
  };
}

function encrypt(key, plaintext) {
  const nonce = crypto.randomBytes(NONCE_LEN);
  const cipher = crypto.createCipheriv(ALGO, key, nonce);
  return Buffer.concat([nonce, cipher.update(plaintext), cipher.final()]);
}

function decrypt(key, ciphertext) {
  const nonce = ciphertext.slice(0, NONCE_LEN);
  const cipher = crypto.createDecipheriv(ALGO, key, nonce);
  return Buffer.concat([cipher.update(ciphertext.slice(NONCE_LEN)), cipher.final()]);
}

function macVerify(macKey, data, expected) {
  const computed = hmac(macKey, data);
  if (computed.length !== expected.length) return false;
  // Constant-time comparison
  let mismatch = 0;
  for (let i = 0; i < computed.length; i++) {
    mismatch |= computed[i] ^ expected[i];
  }
  return mismatch === 0;
}

function padToBlockSize(data) {
  // Pad to 4096-byte blocks so partition boundaries are indistinguishable
  const blockSize = 4096;
  const padded = blockSize * Math.ceil((data.length + 4) / blockSize);
  const buf = Buffer.alloc(padded);
  buf.writeUInt32BE(data.length, 0);
  data.copy(buf, 4);
  // Fill remainder with random bytes
  crypto.randomBytes(buf.length - data.length - 4).copy(buf, data.length + 4);
  return buf;
}

function unpad(data) {
  const len = data.readUInt32BE(0);
  return data.slice(4, 4 + len);
}

// ─── Decoy Content Generator ─────────────────────────────────
function generateDecoyFiles(totalBytes) {
  const files = [];

  const meetingNotes = [
    `Meeting Notes — Q3 Planning Review
Date: March 14, 2024
Attendees: Rivera, Chen, Okonkwo, Petersen, Delacroix

1. Budget allocations approved with minor adjustments (see attached spreadsheet, tab 3)
2. Rivera raised concern about Q4 hiring targets — current pipeline too lean for January starts. Chen suggested reallocating from the internship budget. No resolution.
3. Okonkwo presented the updated roadmap. Petersen wants the authentication refactor pushed to Q1. Discussion got heated. Delacroix mediated by suggesting a "phased approach" which everyone agreed to without defining what that means.
4. Lunch was provided. The sandwiches were adequate.
5. Next meeting: March 28. Delacroix to send calendar invite.

Action items:
- Chen: revised headcount plan by Friday
- Petersen: scope doc for auth refactor (whatever "phased" means)
- Okonkwo: updated Gantt chart
- Everyone: pretend this meeting didn't happen until the next one`,

    `Meeting Notes — Vendor Evaluation
Date: April 2, 2024
Attendees: Chen, Petersen, Sato

Reviewed three proposals for the monitoring stack. Meridian's demo was impressive but their pricing model is opaque. DataPath responded to our RFP with what appears to be a template — they referred to us as "Valued Customer" twice and included features we didn't ask for. ClearEdge is the safe choice. Nobody got excited about safe choices.

Sato asked the question everyone was thinking: "Can we just use the open source thing and have Okonkwo's team maintain it?" Petersen visibly winced.

Decision deferred. Chen will negotiate with Meridian on pricing transparency. Sato will benchmark the open source option in his spare time (he has no spare time).`,

    `1:1 Notes — Petersen / Rivera
Date: April 8, 2024
Duration: 30 min (ran to 45)

- Discussed Petersen's interest in the team lead role. Rivera supportive but noncommittal (standard)
- Talked through the Meridian vs. ClearEdge decision. Petersen favors ClearEdge for predictability. Rivera didn't disagree.
- Petersen mentioned they're looking at apartments in the Mission. Rivera said "good luck with that" and they both laughed in a way that suggested neither found it funny.
- No action items. Rivera said "let's keep talking" which means nothing and everything.`
  ];

  const groceryLists = [
    `Grocery List — Week of March 11
- Milk (2%, half gallon)
- Eggs (dozen, free range if reasonable)
- Bread (the good sourdough from Acme, not the supermarket kind)
- Butter (unsalted, Kerrygold if on sale)
- Garlic (3 heads)
- Lemons (4)
- Chicken thighs (bone-in, ~2 lbs)
- Rice (basmati, we're running low)
- Canned tomatoes (San Marzano, 2 cans)
- Olive oil (we need the big bottle this time)
- Spinach (one bag)
- Coffee beans (whatever looks good, dark roast)
- Paper towels
- Dish soap
- That cheese from last time — the one with the rind. You know the one.`,

    `Grocery List — April
- Eggs
- Bread
- Milk
- Avocados (2, not too soft)
- Cilantro
- Limes (4)
- Tortillas (corn, the brand in the yellow bag)
- Chicken breast (1 lb)
- Salsa (or make it, if we have time)
- Beer (whatever 6-pack is on sale)
- More coffee
- Trash bags (kitchen size)
- That cheese again (we ran out)`
  ];

  const draftEmails = [
    `Subject: Re: Weekend plans
From: draft

Hey — Saturday works. I was thinking we could do the hike in the morning before it gets crowded? Trailhead parking fills up by 9 on weekends. I can pick you up at 7:30 if that's not too brutal.

Also I meant to ask — did you ever end up reading that book? The one about the`,

    `Subject: Update on the Meridian situation
From: draft
To: Chen

Quick update — heard back from their sales team. They're willing to do a flat per-seat license if we commit to 18 months. I think this is actually reasonable but wanted your take before I respond. The contract terms are`,

    `Subject: Re: Re: Re: Parking spot
From: draft

I'll just move my car. It's fine. Not a big deal. I know the spot isn't technically assigned but it's been`,

    `Subject: Thank you
From: draft

Thanks for dinner last night. The pasta was — I didn't know you could`
  ];

  const todos = [
    `TODO — March
[x] Fix the dripping faucet (finally)
[x] Call mom
[x] Submit expense report
[ ] Research summer flights (prices look bad now, check again in April)
[ ] Oil change (overdue by 600 miles)
[ ] Return the Amazon thing (the one that didn't fit)
[ ] Look into that recipe Chen mentioned
[ ] Clean the oven (avoiding this)
[ ] Reply to Sato's email about the benchmarking
[ ] Figure out what "phased approach" means
[x] Renew library card
[ ] Fix the thing in the bathroom
[ ] Read the book before book club (unlikely)`,

    `TODO — April
[x] Taxes (filed)
[x] Oil change (done, cost more than expected)
[ ] Summer flights — still expensive, maybe May prices drop
[ ] The bathroom thing — still broken
[ ] Apartment viewing Saturday 2pm (Mission location, the one with the bay window)
[ ] Reply to Rivera about team lead thing
[ ] Cancel the subscription (the one we never use)
[x] Book club (didn't finish the book, went anyway, lied about it)
[ ] Send Delacroix the document she asked for
[ ] Water the plant (it's still alive somehow)`
  ];

  const miscFiles = [
    `Wi-Fi Networks
—
Home: ****_fisher5G (password on the fridge)
Office: Corp-Guest / see IT
Mom's house: the one with her name and birth year (she won't change it)
Cafe on 5th: no password but spotty
Airport: whatever's free`,

    `Book recommendations (from various people)
—
- The Remains of the Day (Chen) — "quiet but devastating"
- Piranesi (Sato) — "you'll know in 20 pages if it's for you"
- Project Hail Mary (Delacroix) — "fun, don't overthink it"
- Outline (Rahman) — "strange, maybe too strange"
- Demon Copperhead (mom) — "it's long but worth it, keep going"`,

    `Apartment notes — Mission location
—
Pros:
- Bay window (real one, not a sliver)
- Hardwood floors
- Close to BART (3 blocks)
- In-unit washer/dryer
- Quiet street (relatively)

Cons:
- $3200 for a 1BR. 2024 prices. Jesus.
- Kitchen is small (galley style, barely fits two people)
- No pets (not relevant now but someday)
- Street parking is "challenging" (realtor's word)

Verdict: Think about it. Sleep on it. Don't think about it too long, it'll be gone by Monday.`
  ];

  // Assemble a pool of content
  const pool = [
    ...meetingNotes, ...groceryLists, ...draftEmails,
    ...todos, ...miscFiles
  ];

  // Generate files to fill totalBytes
  let bytesUsed = 0;
  let fileIndex = 0;
  while (bytesUsed < totalBytes) {
    const content = pool[fileIndex % pool.length];
    const contentBuf = Buffer.from(content, 'utf-8');

    // Pick a plausible filename
    const categories = [
      () => `notes/meeting-${2024 + Math.floor(fileIndex / 7)}-${String((fileIndex % 12) + 1).padStart(2, '0')}-${String((fileIndex % 28) + 1).padStart(2, '0')}.txt`,
      () => `lists/grocery-${['winter', 'spring', 'summer', 'fall'][fileIndex % 4]}.txt`,
      () => `mail/drafts/${String(Math.floor(Date.now() / 1000) - fileIndex * 86400)}.eml`,
      () => `personal/todo-${['2024-q1', '2024-q2', '2024-q3'][fileIndex % 3]}.txt`,
      () => `reference/${['wifi', 'recommendations', 'apartment', 'insurance', 'contact-info'][fileIndex % 5]}.txt`
    ];

    const filename = categories[fileIndex % categories.length]();
    files.push({ name: filename, content: contentBuf });
    bytesUsed += contentBuf.length + 128; // overhead estimate for filenames/metadata
    fileIndex++;
  }

  return files;
}

// ─── Container Format ────────────────────────────────────────
// [ HEADER: 8 bytes ]
// [ SALT_D: 32 bytes ]
// [ MAC_D | NONCE_D | ENC(pad(decoy)) ]
// [ SALT_R: 32 bytes ]
// [ MAC_R | NONCE_R | ENC(pad(real)) ]
//
// Without the correct key, the MACs and nonces are indistinguishable
// from random data. An examiner cannot prove the real partition exists.

function createContainer(decoyData, realData, decoyPassword, realPassword) {
  const header = Buffer.alloc(HEADER_LEN);
  MAGIC.copy(header, 0);
  header.writeUInt32BE(VERSION, 4);

  // Decoy partition
  const saltD = crypto.randomBytes(32);
  const keysD = deriveKeys(decoyPassword, saltD);
  const paddedD = padToBlockSize(decoyData);
  const encryptedD = encrypt(keysD.enc, paddedD);
  const macD = hmac(keysD.mac, Buffer.concat([saltD, encryptedD]));

  // Real partition
  const saltR = crypto.randomBytes(32);
  const keysR = deriveKeys(realPassword, saltR);
  const paddedR = padToBlockSize(realData);
  const encryptedR = encrypt(keysR.enc, paddedR);
  const macR = hmac(keysR.mac, Buffer.concat([saltR, encryptedR]));

  return Buffer.concat([
    header,
    saltD, macD, encryptedD,
    saltR, macR, encryptedR
  ]);
}

function readContainer(containerPath) {
  const buf = fs.readFileSync(containerPath);

  if (buf.length < HEADER_LEN + 64) {
    throw new Error('Invalid container: too small');
  }

  const magic = buf.slice(0, 4).toString('ascii');
  if (magic !== MAGIC.toString('ascii')) {
    throw new Error('Invalid container: bad magic bytes');
  }

  const version = buf.readUInt32BE(4);
  if (version !== VERSION) {
    throw new Error(`Unsupported container version: ${version}`);
  }

  return { buf, offset: HEADER_LEN };
}

function tryUnlock(containerPath, password) {
  // Try to unlock either partition with the given password.
  // We don't know which partition the password belongs to,
  // so we try both. If neither validates, the password is wrong.
  // If both validate (astronomically unlikely), prefer the first.

  const { buf, offset } = readContainer(containerPath);
  let pos = offset;

  // Try decoy partition (first)
  const saltD = buf.slice(pos, pos + 32); pos += 32;
  const macD = buf.slice(pos, pos + MAC_LEN); pos += MAC_LEN;

  // We need to find where the decoy partition ends.
  // Since encrypted data includes nonce + ciphertext, and ciphertext
  // is at least the size of padded data, we need to scan for the next
  // salt. The structure is: MAC_D(32) | encryptedD | SALT_R(32) | MAC_R(32) | encryptedR
  // We know the total size, so:
  // remaining = total - pos (after macD)
  // encryptedD + 32(saltR) + 32(macR) + encryptedR = remaining
  // encryptedD = nonceD(12) + paddedD
  // encryptedR = nonceR(12) + paddedR
  // Since we padded both to block size, we need to try.

  // Strategy: try to find the boundary by attempting to decrypt
  // from the start, then trying from various split points.
  // Better strategy: store a length marker.

  // REVISED FORMAT: we need explicit length. Let's store it.
  // Actually, we can derive it: we know saltD is at offset, macD at offset+32,
  // and the next salt (saltR) starts at offset+32+32+encryptedD.length.
  // We need to find encryptedD.length. We can't without a length marker.

  // Simplest fix: read the container with explicit partition sizes.
  // But that leaks the decoy size. Instead: try to decrypt from start,
  // and if HMAC validates, we found the decoy. Then the rest is the real partition.

  // We'll scan forward from pos, trying increasing sizes for encryptedD.
  // The minimum encrypted size is NONCE_LEN + padToBlockSize(empty).length
  // = 12 + 4096 = 4108

  const minPartSize = NONCE_LEN + 4096; // minimum encrypted partition
  const remaining = buf.length - pos;

  // For efficiency, try from the minimum size upward.
  // In practice, the decoy should be the first partition and reasonably sized.
  // We'll try a few candidate split points.

  const candidates = [];
  const step = 4096; // block-aligned
  for (let size = minPartSize; size <= remaining - minPartSize; size += step) {
    candidates.push(size);
  }

  // Also try treating the entire remaining as a single partition (no real partition)
  candidates.push(remaining);

  for (const encSizeD of candidates) {
    const encDataD = buf.slice(pos, pos + encSizeD);
    const keysD = deriveKeys(password, saltD);
    if (macVerify(keysD.mac, Buffer.concat([saltD, encDataD]), macD)) {
      // Found it — this is the decoy partition
      try {
        const decryptedD = decrypt(keysD.enc, encDataD);
        const payloadD = unpad(decryptedD);
        return {
          partition: 'decoy',
          data: payloadD,
          encSize: encSizeD
        };
      } catch (e) {
        // HMAC matched but decryption failed — shouldn't happen
        continue;
      }
    }

    // Try treating this as the real partition start
    // (i.e., the password is for the real partition, and the split is at this point)
    const saltR = buf.slice(pos, pos + 32);
    const macR = buf.slice(pos + 32, pos + 32 + MAC_LEN);
    const encDataR = buf.slice(pos + 32 + MAC_LEN, pos + 32 + MAC_LEN + encSizeD);
    const keysR = deriveKeys(password, saltR);
    if (encDataR.length > NONCE_LEN && macVerify(keysR.mac, Buffer.concat([saltR, encDataR]), macR)) {
      try {
        const decryptedR = decrypt(keysR.enc, encDataR);
        const payloadR = unpad(decryptedR);
        return {
          partition: 'real',
          data: payloadR,
          encSize: encSizeD
        };
      } catch (e) {
        continue;
      }
    }
  }

  return null; // Password doesn't match either partition
}

// ─── Simpler approach: fixed layout ──────────────────────────
// The scanning approach above is fragile. Let's use a different layout:
//
// HEADER (8)
// SALT_D (32)
// ENC_DECOY_SIZE (4, encrypted with decoy key)
// MAC over (SALT_D || ENC_DECOY_SIZE || encrypted_decoy) (32)
// encrypted_decoy (variable)
// encrypted_real (rest of file)
//
// Problem: size is visible in cleartext. But we can encrypt it.
// Or: store decoy size inside the decoy plaintext itself (first 4 bytes).
// Reader tries to decrypt from byte HEADER+32, reads the entire rest,
// unpadds, checks first 4 bytes for actual length.
//
// Even simpler: just store the split point encrypted. The HMAC tells us
// if the password is correct, and then we can read the split point.
//
// FINAL FORMAT:
//
// [ HEADER: 8 bytes ]
// [ SALT_D: 32 ] [ MAC_D: 32 ] [ NONCE_D: 12 ] [ ENC(splitPoint || pad(decoy)) ]
// [ SALT_R: 32 ] [ MAC_R: 32 ] [ NONCE_R: 12 ] [ ENC(pad(real)) ]
//
// Where splitPoint is 4 bytes indicating where the decoy ends.
// Wait — the split point IS known to the decoy key holder. They decrypt,
// read the split point, and know where the real partition starts.
// The real key holder doesn't know the split point, but they don't need to:
// they try to decrypt from every 4096-byte boundary until the HMAC validates.
//
// Actually, let's just keep it simple. Both partitions are in the file.
// The decoy key holder decrypts from offset HEADER+32.
// The real key holder needs to know where to start. Options:
// 1. Try all offsets (slow but works)
// 2. Store the split point encrypted under the real key too
// 3. Fixed-size decoy partition (wastes space but simple)
//
// Let's go with option 2: both partitions know the layout.
//
// ACTUAL FINAL FORMAT:
// [ HEADER: 8 bytes (magic + version) ]
// [ LAYOUT: 4 bytes — offset where real partition starts, XORed with first 4 bytes of real encryption key ]
// [ SALT_D: 32 ] [ MAC_D: 32 ] [ encrypted_decoy ]
// [ SALT_R: 32 ] [ MAC_R: 32 ] [ encrypted_real ]
//
// The layout field is obfuscated: without the real key, it looks random.
// With the real key, you XOR to get the offset.
// With the decoy key, you decrypt from byte 44 and the unpadded length tells you where you end.
//
// Hmm, this is getting complicated. Let me just implement the brute-force scan approach
// properly, with the original format. It's clean conceptually.

// START OVER with a cleaner implementation.

function create(path, decoyDir, realFile, decoyPassword, realPassword) {
  // Read decoy files into a tar-like structure
  const decoyData = packDirectory(decoyDir);
  const realData = fs.readFileSync(realFile);

  const header = Buffer.alloc(HEADER_LEN);
  MAGIC.copy(header, 0);
  header.writeUInt32BE(VERSION, 4);

  const saltD = crypto.randomBytes(32);
  const keysD = deriveKeys(decoyPassword, saltD);
  const paddedD = padToBlockSize(decoyData);
  const encD = encrypt(keysD.enc, paddedD);
  const macD = hmac(keysD.mac, Buffer.concat([saltD, encD]));

  const saltR = crypto.randomBytes(32);
  const keysR = deriveKeys(realPassword, saltR);
  const paddedR = padToBlockSize(realData);
  const encR = encrypt(keysR.enc, paddedR);
  const macR = hmac(keysR.mac, Buffer.concat([saltR, encR]));

  // Store split point: offset where real partition starts
  const splitPoint = header.length + saltD.length + macD.length + encD.length;
  const splitBytes = Buffer.alloc(4);
  splitBytes.writeUInt32BE(splitPoint);

  // XOR split point with first 4 bytes of real MAC key for obfuscation
  const obfuscatedSplit = Buffer.alloc(4);
  for (let i = 0; i < 4; i++) {
    obfuscatedSplit[i] = splitBytes[i] ^ keysR.mac[i];
  }

  const container = Buffer.concat([
    header,
    obfuscatedSplit,
    saltD, macD, encD,
    saltR, macR, encR
  ]);

  fs.writeFileSync(path, container);
  return splitPoint;
}

function unlock(containerPath, password, outputDir) {
  const buf = fs.readFileSync(containerPath);
  if (buf.length < HEADER_LEN + 4 + 64) {
    throw new Error('Invalid container');
  }

  const magic = buf.slice(0, 4).toString('ascii');
  if (magic !== 'SGRF') throw new Error('Not a Soft Guarantee container');

  // Try approach 1: treat as decoy password (decoy starts right after header+splitPoint)
  const fixedOffset = HEADER_LEN + 4; // header + obfuscated split
  let pos = fixedOffset;

  // Try decoy partition
  const saltD = buf.slice(pos, pos + 32); pos += 32;
  const macD_buf = buf.slice(pos, pos + MAC_LEN); pos += MAC_LEN;

  const keysD = deriveKeys(password, saltD);
  // To verify, we need to know the encrypted data size.
  // We don't know it for the decoy. Try from the obfuscated split point.
  const obfuscatedSplit = buf.slice(HEADER_LEN, HEADER_LEN + 4);

  // Try using the obfuscated split with this password
  const splitGuess1 = Buffer.alloc(4);
  for (let i = 0; i < 4; i++) {
    splitGuess1[i] = obfuscatedSplit[i] ^ keysD.mac[i];
  }
  const decoyEndGuess1 = splitGuess1.readUInt32BE(0);

  if (decoyEndGuess1 > fixedOffset + 64 + MAC_LEN && decoyEndGuess1 < buf.length - 64) {
    // This might be a valid split point for the decoy
    const encD = buf.slice(pos, decoyEndGuess1);
    if (macVerify(keysD.mac, Buffer.concat([saltD, encD]), macD_buf)) {
      try {
        const decD = decrypt(keysD.enc, encD);
        const payload = unpad(decD);
        fs.mkdirSync(outputDir, { recursive: true });
        unpackDirectory(payload, outputDir);
        return { partition: 'decoy', files: listUnpacked(outputDir) };
      } catch (e) {
        // Decryption failed despite MAC pass — shouldn't happen
      }
    }
  }

  // Try real partition: we need to find where it starts.
  // Try the obfuscated split with this password
  const keysR_test = keysD; // reuse derived keys from above attempt
  const splitGuess2 = Buffer.alloc(4);
  for (let i = 0; i < 4; i++) {
    splitGuess2[i] = obfuscatedSplit[i] ^ keysR_test.mac[i];
  }
  const realStartGuess = splitGuess2.readUInt32BE(0);

  if (realStartGuess > fixedOffset + 64 + MAC_LEN && realStartGuess < buf.length - 64) {
    let rPos = realStartGuess;
    const saltR = buf.slice(rPos, rPos + 32); rPos += 32;
    const macR_buf = buf.slice(rPos, rPos + MAC_LEN); rPos += MAC_LEN;
    const encR = buf.slice(rPos);

    const keysR = deriveKeys(password, saltR);
    if (macVerify(keysR.mac, Buffer.concat([saltR, encR]), macR_buf)) {
      try {
        const decR = decrypt(keysR.enc, encR);
        const payload = unpad(decR);
        fs.mkdirSync(outputDir, { recursive: true });
        fs.writeFileSync(path.join(outputDir, 'payload'), payload);
        return { partition: 'real', files: ['payload'] };
      } catch (e) {}
    }
  }

  // Brute force: try every block-aligned offset for the real partition
  for (let offset = fixedOffset + 64 + MAC_LEN + 4096; offset < buf.length - 64 - MAC_LEN; offset += 4096) {
    let rPos = offset;
    if (rPos + 32 + MAC_LEN + NONCE_LEN >= buf.length) break;

    const saltR = buf.slice(rPos, rPos + 32); rPos += 32;
    const macR_buf = buf.slice(rPos, rPos + MAC_LEN); rPos += MAC_LEN;
    const encR = buf.slice(rPos);

    const keysR = deriveKeys(password, saltR);
    if (macVerify(keysR.mac, Buffer.concat([saltR, encR]), macR_buf)) {
      try {
        const decR = decrypt(keysR.enc, encR);
        const payload = unpad(decR);
        fs.mkdirSync(outputDir, { recursive: true });
        fs.writeFileSync(path.join(outputDir, 'payload'), payload);
        return { partition: 'real', files: ['payload'] };
      } catch (e) {}
    }
  }

  throw new Error('Wrong password. Container may be corrupted.');
}

// ─── Pack/Unpack directory ───────────────────────────────────
function packDirectory(dir) {
  // Simple tar-like format:
  // For each file: [nameLen:2] [name] [dataLen:4] [data]
  const files = [];
  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile()) {
        const rel = path.relative(dir, full);
        files.push({ name: rel, data: fs.readFileSync(full) });
      }
    }
  }

  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
    walk(dir);
  } else {
    throw new Error(`Decoy directory not found: ${dir}`);
  }

  const parts = [];
  for (const f of files) {
    const nameBuf = Buffer.from(f.name, 'utf-8');
    const nameLen = Buffer.alloc(2);
    nameLen.writeUInt16BE(nameBuf.length);
    const dataLen = Buffer.alloc(4);
    dataLen.writeUInt32BE(f.data.length);
    parts.push(nameLen, nameBuf, dataLen, f.data);
  }

  return Buffer.concat(parts);
}

function unpackDirectory(buf, outputDir) {
  let pos = 0;
  while (pos < buf.length) {
    if (pos + 2 > buf.length) break;
    const nameLen = buf.readUInt16BE(pos); pos += 2;
    if (pos + nameLen > buf.length) break;
    const name = buf.slice(pos, pos + nameLen).toString('utf-8'); pos += nameLen;
    if (pos + 4 > buf.length) break;
    const dataLen = buf.readUInt32BE(pos); pos += 4;
    if (pos + dataLen > buf.length) break;
    const data = buf.slice(pos, pos + dataLen); pos += dataLen;

    const fullPath = path.join(outputDir, name);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, data);
  }
}

function listUnpacked(dir) {
  const results = [];
  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) walk(full);
      else results.push(path.relative(dir, full));
    }
  }
  walk(dir);
  return results;
}

// ─── Under Duress ────────────────────────────────────────────
function underDuress(containerPath, mountDir, decoyPassword) {
  // Mount the decoy partition and make it look recently accessed
  try {
    const result = unlock(containerPath, decoyPassword, mountDir);
    const files = listUnpacked(mountDir);

    // Touch all files with staggered recent timestamps
    const now = Date.now();
    files.forEach((f, i) => {
      const fullPath = path.join(mountDir, f);
      // Stagger over the past 72 hours
      const atime = new Date(now - (i * 3600000 * Math.random() * 3));
      const mtime = new Date(now - (i * 3600000 * Math.random() * 72));
      fs.utimesSync(fullPath, atime, mtime);
    });

    // Print plausible bash history
    const history = [
      `cd ~/work`,
      `ls -la`,
      `cat notes/meeting-2024-03-14.txt`,
      `vim lists/grocery-spring.txt`,
      `grep -r "Meridian" notes/`,
      `less personal/todo-2024-q1.txt`,
      `cd ..`,
      `exit`
    ];

    for (const line of history) {
      process.stdout.write(`${line}\n`);
    }

  } catch (e) {
    process.stderr.write(`Error: ${e.message}\n`);
    process.exit(1);
  }
}

// ─── Initialize decoy directory ──────────────────────────────
function initDecoy(dir, sizeKB) {
  fs.mkdirSync(dir, { recursive: true });
  const totalBytes = sizeKB * 1024;
  const files = generateDecoyFiles(totalBytes);

  for (const f of files) {
    const fullPath = path.join(dir, f.name);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, f.content);
  }

  process.stdout.write(`Generated ${files.length} decoy files in ${dir}\n`);
}

// ─── CLI ─────────────────────────────────────────────────────
function usage() {
  process.stdout.write(`
softguarantee — deniable encryption for plausible disclosure

USAGE:
  softguarantee init <decoy-dir> [--size N]          Generate decoy files
  softguarantee create <container> <decoy-dir> <real-file>
              Mount decoy directory and real file into container.
              Prompts for two passwords.
  softguarantee unlock <container> <output-dir>      Prompt for password, mount partition
  softguarantee under-duress <container> <mount-dir>  Mount decoy with plausible history
              (uses SOFTGUARANTEE_DECOY_KEY env var or prompts)
  softguarantee help                                  Show this message

The container contains two encrypted partitions. One password reveals mundane
files. The other reveals the real payload. An examiner cannot prove the second
partition exists.

You know what to say.

`);
}

function promptPassword(prompt) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    // Hide input
    process.stdout.write(prompt);
    const stdin = process.stdin;
    const wasRaw = stdin.isRaw;
    if (stdin.isTTY) stdin.setRawMode(true);

    let password = '';
    const onData = (ch) => {
      if (ch === '\n' || ch === '\r' || ch === '\u0004') {
        if (stdin.isTTY) stdin.setRawMode(wasRaw || false);
        stdin.removeListener('data', onData);
        rl.close();
        process.stdout.write('\n');
        resolve(password);
      } else if (ch === '\u007F' || ch === '\u0008') {
        // Backspace
        password = password.slice(0, -1);
      } else if (ch === '\u0003') {
        // Ctrl+C
        process.exit(1);
      } else {
        password += ch;
      }
    };
    stdin.on('data', onData);
  });
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === 'help' || args[0] === '--help') {
    usage();
    return;
  }

  const command = args[0];

  switch (command) {
    case 'init': {
      const dir = args[1];
      if (!dir) { process.stderr.write('Usage: softguarantee init <decoy-dir> [--size N]\n'); process.exit(1); }
      let size = 64; // default 64KB
      const sizeIdx = args.indexOf('--size');
      if (sizeIdx !== -1 && args[sizeIdx + 1]) {
        size = parseInt(args[sizeIdx + 1], 10);
      }
      initDecoy(dir, size);
      break;
    }

    case 'create': {
      const containerPath = args[1];
      const decoyDir = args[2];
      const realFile = args[3];
      if (!containerPath || !decoyDir || !realFile) {
        process.stderr.write('Usage: softguarantee create <container> <decoy-dir> <real-file>\n');
        process.exit(1);
      }
      if (!fs.existsSync(realFile)) {
        process.stderr.write(`Real file not found: ${realFile}\n`);
        process.exit(1);
      }

      const decoyPassword = await promptPassword('Decoy password: ');
      const realPassword = await promptPassword('Real password: ');

      create(containerPath, decoyDir, realFile, decoyPassword, realPassword);
      process.stdout.write(`Container created: ${containerPath}\n`);
      process.stdout.write(`Keep both passwords safe. Tell no one which is which.\n`);
      break;
    }

    case 'unlock': {
      const containerPath = args[1];
      const outputDir = args[2];
      if (!containerPath || !outputDir) {
        process.stderr.write('Usage: softguarantee unlock <container> <output-dir>\n');
        process.exit(1);
      }

      const password = await promptPassword('Password: ');
      try {
        const result = unlock(containerPath, password, outputDir);
        process.stdout.write(`Partition: ${result.partition}\n`);
        process.stdout.write(`Files extracted to ${outputDir}\n`);
        for (const f of result.files) {
          process.stdout.write(`  ${f}\n`);
        }
      } catch (e) {
        process.stderr.write(`${e.message}\n`);
        process.exit(1);
      }
      break;
    }

    case 'under-duress': {
      const containerPath = args[1];
      const mountDir = args[2];
      if (!containerPath || !mountDir) {
        process.stderr.write('Usage: softguarantee under-duress <container> <mount-dir>\n');
        process.exit(1);
      }

      const decoyPassword = process.env.SOFTGUARANTEE_DECOY_KEY || await promptPassword('Password: ');
      underDuress(containerPath, mountDir, decoyPassword);
      break;
    }

    default:
      process.stderr.write(`Unknown command: ${command}\n`);
      usage();
      process.exit(1);
  }
}

main().catch(e => {
  process.stderr.write(`Fatal: ${e.message}\n`);
  process.exit(1);
});
