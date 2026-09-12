/**
 * A short original ambient piano piece, synthesized entirely in the
 * browser via the Web Audio API - no audio file needed, so there is
 * nothing to license or download.
 *
 * A slow four-chord progression (Cmaj7 - Am7 - Fmaj7 - G7) loops
 * indefinitely, each chord voiced as soft triangle-wave notes through
 * a warm lowpass filter with a touch of delay for space.
 */

const CHORDS_HZ = [
  [261.63, 329.63, 392.0, 493.88], // Cmaj7
  [220.0, 261.63, 329.63, 392.0], // Am7
  [174.61, 220.0, 261.63, 329.63], // Fmaj7
  [196.0, 246.94, 293.66, 349.23], // G7
];

const CHORD_SECONDS = 5.2;
const ATTACK_SECONDS = 1.4;
const RELEASE_SECONDS = 2.2;
const LOOKAHEAD_MS = 1000;
const SCHEDULE_AHEAD_SECONDS = 2.5;
const TARGET_VOLUME = 0.16;

export function createGenerativeMusic() {
  let ctx = null;
  let masterGain = null;
  let intervalId = null;
  let chordIndex = 0;
  let nextChordTime = 0;
  let started = false;

  function ensureContext() {
    if (ctx) return ctx;
    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) return null;
    ctx = new AudioContextCtor();

    masterGain = ctx.createGain();
    masterGain.gain.value = 0;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1400;

    const delay = ctx.createDelay(1.2);
    delay.delayTime.value = 0.55;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.28;
    const wet = ctx.createGain();
    wet.gain.value = 0.25;

    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wet);

    masterGain.connect(filter);
    filter.connect(ctx.destination);
    filter.connect(delay);
    wet.connect(ctx.destination);

    return ctx;
  }

  function scheduleChord(freqs, startTime) {
    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = freq;

      const noteGain = ctx.createGain();
      const peak = 0.5 / freqs.length;
      noteGain.gain.setValueAtTime(0, startTime);
      noteGain.gain.linearRampToValueAtTime(peak, startTime + ATTACK_SECONDS);
      noteGain.gain.setValueAtTime(
        peak,
        startTime + CHORD_SECONDS - RELEASE_SECONDS,
      );
      noteGain.gain.linearRampToValueAtTime(0, startTime + CHORD_SECONDS);

      osc.connect(noteGain);
      noteGain.connect(masterGain);

      // Stagger note onsets very slightly for a gentle, rolled-chord feel.
      osc.start(startTime + i * 0.06);
      osc.stop(startTime + CHORD_SECONDS + 0.1);
    });
  }

  function schedulerTick() {
    while (nextChordTime < ctx.currentTime + SCHEDULE_AHEAD_SECONDS) {
      scheduleChord(CHORDS_HZ[chordIndex % CHORDS_HZ.length], nextChordTime);
      chordIndex += 1;
      nextChordTime += CHORD_SECONDS;
    }
  }

  function start() {
    const context = ensureContext();
    if (!context) return Promise.reject(new Error("Web Audio unsupported"));

    const beginScheduling = () => {
      if (!started) {
        started = true;
        nextChordTime = ctx.currentTime + 0.1;
        schedulerTick();
        intervalId = window.setInterval(schedulerTick, LOOKAHEAD_MS);
      }
      masterGain.gain.cancelScheduledValues(ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(
        TARGET_VOLUME,
        ctx.currentTime + 1.2,
      );
    };

    if (context.state === "suspended") {
      return context.resume().then(beginScheduling);
    }
    beginScheduling();
    return Promise.resolve();
  }

  function setMuted(muted) {
    if (!ctx || !masterGain) return;
    const now = ctx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.linearRampToValueAtTime(
      muted ? 0 : TARGET_VOLUME,
      now + 0.4,
    );
  }

  function dispose() {
    if (intervalId) window.clearInterval(intervalId);
    if (ctx) ctx.close().catch(() => {});
    ctx = null;
    masterGain = null;
    started = false;
  }

  return { start, setMuted, dispose };
}
