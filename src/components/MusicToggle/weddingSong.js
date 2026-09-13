import songUrl from "../../assets/audio/cant-help-falling-in-love.mp3";

const TARGET_VOLUME = 0.45;
const FADE_MS = 600;

export function createWeddingSong() {
  let audio = null;
  let fadeTimer = null;

  function ensureAudio() {
    if (audio) return audio;
    audio = new Audio(songUrl);
    audio.loop = true;
    audio.volume = 0;
    return audio;
  }

  function fadeTo(target) {
    if (fadeTimer) window.clearInterval(fadeTimer);
    const steps = 15;
    const start = audio.volume;
    const stepMs = FADE_MS / steps;
    let i = 0;
    fadeTimer = window.setInterval(() => {
      i += 1;
      audio.volume = start + ((target - start) * i) / steps;
      if (i >= steps) window.clearInterval(fadeTimer);
    }, stepMs);
  }

  function start() {
    const el = ensureAudio();
    return el.play().then(() => fadeTo(TARGET_VOLUME));
  }

  function setMuted(muted) {
    if (!audio) return;
    fadeTo(muted ? 0 : TARGET_VOLUME);
  }

  function dispose() {
    if (fadeTimer) window.clearInterval(fadeTimer);
    if (audio) {
      audio.pause();
      audio.src = "";
    }
    audio = null;
  }

  return { start, setMuted, dispose };
}
