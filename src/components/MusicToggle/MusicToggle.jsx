import { useEffect, useRef, useState } from "react";
import { createGenerativeMusic } from "./generativeMusic.js";
import styles from "./MusicToggle.module.css";

const RETRY_EVENTS = ["click", "touchstart", "keydown", "scroll"];

/**
 * Background music with a mute toggle, fixed to the top-right corner.
 * The music itself is an original piece synthesized in the browser
 * (see generativeMusic.js) - no audio file to load or license.
 *
 * Browsers block audio autoplay on most first visits (Safari on iOS
 * almost always does, and a Web Audio context starts "suspended"
 * until a user gesture resumes it). We try to start on mount, and if
 * that's blocked, we retry on the visitor's very first interaction
 * with the page - so the music starts the moment they tap or scroll,
 * even if not instantly on load.
 */
export function MusicToggle({ labels }) {
  const engineRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const engine = createGenerativeMusic();
    engineRef.current = engine;

    const tryStart = () => engine.start().catch(() => {});
    tryStart();

    const onFirstInteraction = () => {
      tryStart();
      cleanup();
    };
    const cleanup = () => {
      RETRY_EVENTS.forEach((evt) =>
        document.removeEventListener(evt, onFirstInteraction),
      );
    };
    RETRY_EVENTS.forEach((evt) =>
      document.addEventListener(evt, onFirstInteraction, {
        once: true,
        passive: true,
      }),
    );

    return () => {
      cleanup();
      engine.dispose();
    };
  }, []);

  function toggleMute() {
    const next = !muted;
    setMuted(next);
    const engine = engineRef.current;
    if (!engine) return;
    if (next) {
      engine.setMuted(true);
    } else {
      engine.start().catch(() => {});
      engine.setMuted(false);
    }
  }

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.button}
        onClick={toggleMute}
        aria-label={muted ? labels.unmute : labels.mute}
        aria-pressed={muted}
      >
        {muted ? (
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 9v6h4l5 4V5L8 9H4Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M16 9l5 6M21 9l-5 6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 9v6h4l5 4V5L8 9H4Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 8.5c1.2 1 1.9 2.2 1.9 3.5s-.7 2.5-1.9 3.5M18.8 6c2 1.7 3.2 3.7 3.2 6s-1.2 4.3-3.2 6"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
