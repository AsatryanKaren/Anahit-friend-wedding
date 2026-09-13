import songUrl from "../../assets/audio/cant-help-falling-in-love.mp3";

const TARGET_VOLUME = 0.45;
const FADE_MS = 600;

// Module-level singleton: React StrictMode (and HMR) can mount this
// component's effect more than once. Keeping one shared <audio>
// instead of creating a new one per mount guarantees we only ever
// have a single playback, instead of two overlapping copies.
let sharedAudio = null;
let fadeTimer = null;

function getAudio() {
  if (!sharedAudio) {
    sharedAudio = new Audio(songUrl);
    sharedAudio.loop = true;
    sharedAudio.volume = 0;
  }
  return sharedAudio;
}

function fadeTo(target) {
  if (!sharedAudio) return;
  if (fadeTimer) window.clearInterval(fadeTimer);
  const steps = 15;
  const start = sharedAudio.volume;
  const stepMs = FADE_MS / steps;
  let i = 0;
  fadeTimer = window.setInterval(() => {
    i += 1;
    sharedAudio.volume = start + ((target - start) * i) / steps;
    if (i >= steps) window.clearInterval(fadeTimer);
  }, stepMs);
}

export function createWeddingSong() {
  function start() {
    return getAudio()
      .play()
      .then(() => fadeTo(TARGET_VOLUME));
  }

  function setMuted(muted) {
    fadeTo(muted ? 0 : TARGET_VOLUME);
  }

  // Intentionally a no-op: the shared <audio> stays alive across
  // remounts so playback is never duplicated (see comment above).
  function dispose() {}

  return { start, setMuted, dispose };
}
