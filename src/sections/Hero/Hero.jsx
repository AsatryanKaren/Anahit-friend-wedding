import { useEffect, useMemo, useState } from "react";
import styles from "./Hero.module.css";
import shared from "../sectionShared.module.css";
import { Ornament } from "../../components/Ornament/Ornament.jsx";
import { Particles } from "../../components/Particles/Particles.jsx";
import { Petals } from "../../components/Petals/Petals.jsx";

function getTargetDate() {
  const now = new Date();
  const year = now.getFullYear();
  // June is month 5 in JS Date
  return new Date(year, 5, 24, 14, 0, 0, 0);
}

function formatCountdown(ms, lang) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);

  const pad2 = (n) => String(n).padStart(2, "0");
  if (lang === "hy") return `${days} օր · ${pad2(hours)}:${pad2(mins)}`;
  return `${days} d · ${pad2(hours)}:${pad2(mins)}`;
}

export function Hero({ t, lang }) {
  const [loaded, setLoaded] = useState(false);
  const target = useMemo(getTargetDate, []);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const msLeft = target.getTime() - now.getTime();
  const showCountdown = msLeft > 0 && msLeft < 1000 * 60 * 60 * 24 * 300;

  return (
    <section
      className={styles.hero}
      aria-label={t.hero.ariaLabel}
      data-loaded={loaded ? "1" : "0"}
    >
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.container}>
        {/* Left side - Names and subtitle */}
        <div className={styles.leftSide}>
          <div className={styles.names}>
            <h1 className={styles.nameLine}>
              <span className={styles.name}>{t.hero.names.first}</span>
            </h1>
            <div className={styles.divider}>
              <span className={styles.dividerLine} />
            </div>
            <h2 className={styles.nameLine}>
              <span className={styles.name}>{t.hero.names.second}</span>
            </h2>
          </div>
          
          <div className={styles.subtitle}>
            {t.hero.subtitle}
          </div>

          {showCountdown && (
            <div className={styles.countdown} aria-label={t.hero.countdownLabel}>
              <div className={styles.countdownLabel}>
                {t.hero.countdownLabel}
              </div>
              <div className={styles.countdownValue}>
                {formatCountdown(msLeft, lang)}
              </div>
            </div>
          )}
        </div>

        {/* Right side - Event details */}
        <div className={styles.rightSide}>
          <div className={styles.detailsCard}>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>📅</div>
              <div className={styles.detailContent}>
                <div className={styles.detailLabel}>{t.hero.dateLabel}</div>
                <div className={styles.detailValue}>{t.hero.date}</div>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>🕐</div>
              <div className={styles.detailContent}>
                <div className={styles.detailLabel}>{t.hero.timeLabel}</div>
                <div className={styles.detailValue}>{t.hero.time}</div>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>📍</div>
              <div className={styles.detailContent}>
                <div className={styles.detailLabel}>{t.hero.placeLabel}</div>
                <div className={styles.detailValue}>{t.hero.place}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        className={styles.scroll}
        href="#invitation"
        aria-label={t.hero.scrollHint}
      >
        <span className={styles.scrollText}>{t.hero.scrollHint}</span>
        <span className={styles.scrollIcon}>↓</span>
      </a>
    </section>
  );
}
