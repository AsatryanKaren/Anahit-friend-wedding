import { useEffect, useRef, useState } from "react";
import { createWeddingSong } from "./weddingSong.js";
import styles from "./MusicToggle.module.css";

/**
 * Background music with a mute toggle, fixed to the top-right corner.
 * Plays the couple's chosen song on loop (see weddingSong.js).
 *
 * Starts muted - the visitor has to tap to turn it on.
 */
export function MusicToggle({ labels }) {
  const engineRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const engine = createWeddingSong();
    engineRef.current = engine;
    return () => engine.dispose();
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
