import { figmaAssets, venueLinks } from "./constants/figmaAssets.js";
import { useInViewOnce } from "./hooks/useInViewOnce.js";
import { useReducedMotion } from "./hooks/useReducedMotion.js";
import { useActiveNavSection } from "./hooks/useActiveNavSection.js";
import { useScrollPast } from "./hooks/useScrollPast.js";
import { useWeddingCountdown } from "./hooks/useWeddingCountdown.js";
import { FamilyTreeVisual } from "./components/FamilyTreeVisual.jsx";
import {
  IconCelebration,
  IconChevronDown,
  IconChurch,
  IconPin,
} from "./components/Icons/Icons.jsx";
import { ScheduleVine } from "./components/ScheduleVine.jsx";
import { LanguageSwitcher } from "./components/LanguageSwitcher/LanguageSwitcher.jsx";
import { useI18n } from "./i18n/LanguageContext.jsx";
import styles from "./FigmaInvite.module.css";
import { useEffect, useRef } from "react";

const WEDDING_AT = new Date("2026-06-24T14:00:00");

const NAV_IDS = [
  { id: "home", key: "home" },
  { id: "story", key: "story" },
  { id: "events", key: "details" },
  { id: "attire", key: "attire" },
  { id: "schedule", key: "schedule" },
  { id: "roots", key: "roots" },
];

function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delayMs = 0,
  reducedMotion,
  ...rest
}) {
  const [ref, visible] = useInViewOnce({ disabled: reducedMotion });
  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delayMs}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default function FigmaInvite() {
  const { lang, setLang, t } = useI18n();
  const f = t.figma;
  const countdown = useWeddingCountdown(WEDDING_AT);
  const reducedMotion = useReducedMotion();
  const navScrolled = useScrollPast(40);
  const activeNavId = useActiveNavSection(88);

  const motion = reducedMotion ? "reduce" : "full";
  const navIds = NAV_IDS;
  
  const scheduleLineRef = useRef(null);
  const scheduleHeartRef = useRef(null);
  const scheduleTrackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scheduleLineRef.current || !scheduleHeartRef.current || !scheduleTrackRef.current) return;
      
      const scheduleTrack = scheduleTrackRef.current;
      const rect = scheduleTrack.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const trackTop = rect.top;
      const trackHeight = rect.height;
      const trackBottom = rect.bottom;
      
      if (trackBottom < 0 || trackTop > windowHeight) {
        return;
      }
      
      const visibleTop = Math.max(0, -trackTop);
      const visibleBottom = Math.min(trackHeight, windowHeight - trackTop);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const scrollProgress = visibleHeight / trackHeight;
      
      const percentage = Math.min(100, Math.max(0, scrollProgress * 100));
      
      scheduleLineRef.current.style.height = `${percentage}%`;
      scheduleHeartRef.current.style.top = `${percentage}%`;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={styles.page} data-motion={motion}>
      <header
        className={`${styles.topNav} ${navScrolled ? styles.topNavScrolled : ""}`.trim()}
      >
        <div className={styles.topNavBrand}>
          <p className={styles.logo}>
            <span className={styles.logoName}>{f.logo.first}</span>
            <span className={styles.logoAmp}>&amp;</span>
            <span className={styles.logoName}>{f.logo.second}</span>
          </p>
          <LanguageSwitcher
            lang={lang}
            onChange={setLang}
            labels={t.language}
            variant="inline"
          />
        </div>
        <div className={styles.topNavRight}>
          <nav aria-label={f.nav.ariaLabel}>
            <ul className={styles.navLinks}>
              {navIds.map(({ id, key }) => (
                <li key={id}>
                  <a
                    className={activeNavId === id ? styles.active : undefined}
                    href={`#${id}`}
                    aria-current={activeNavId === id ? "true" : undefined}
                  >
                    {f.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className={styles.heroElegant}
        aria-label={f.hero.ariaSection}
      >
        <div className={styles.heroElegantBg}>
          <div className={styles.heroElegantOrb1} />
          <div className={styles.heroElegantOrb2} />
          <div className={styles.heroElegantOrb3} />
        </div>
        
        <div className={styles.heroElegantContent}>
          <div className={styles.heroElegantOrnament}>✦</div>
          
          <div className={styles.heroElegantKicker}>
            {f.hero.kicker}
          </div>
          
          <div className={styles.heroElegantNames}>
            <h1 className={styles.heroElegantName}>Andranik</h1>
            <div className={styles.heroElegantAmpersand}>
              <span className={styles.heroElegantAmpLine} />
              <span className={styles.heroElegantAmpSymbol}>&</span>
              <span className={styles.heroElegantAmpLine} />
            </div>
            <h2 className={styles.heroElegantName}>Anushik</h2>
          </div>

          <div className={styles.heroElegantDate}>
            {f.hero.dateLine}
          </div>

          <div className={styles.heroElegantDivider}>
            <span className={styles.heroElegantDividerLine} />
            <span className={styles.heroElegantDividerDot}>◆</span>
            <span className={styles.heroElegantDividerLine} />
          </div>

          {!countdown.passed && (
            <div className={styles.heroElegantCountdown} aria-live="polite">
              <div className={styles.heroElegantCountdownItems}>
                <div className={styles.heroElegantCountdownItem}>
                  <span className={styles.heroElegantCountdownNum}>{countdown.days}</span>
                  <span className={styles.heroElegantCountdownLabel}>{f.hero.days}</span>
                </div>
                <span className={styles.heroElegantCountdownSep}>·</span>
                <div className={styles.heroElegantCountdownItem}>
                  <span className={styles.heroElegantCountdownNum}>{countdown.hours}</span>
                  <span className={styles.heroElegantCountdownLabel}>{f.hero.hours}</span>
                </div>
                <span className={styles.heroElegantCountdownSep}>·</span>
                <div className={styles.heroElegantCountdownItem}>
                  <span className={styles.heroElegantCountdownNum}>{countdown.mins}</span>
                  <span className={styles.heroElegantCountdownLabel}>{f.hero.mins}</span>
                </div>
              </div>
            </div>
          )}

          <div className={styles.heroElegantOrnament}>✦</div>
        </div>

        <a
          href="#story"
          className={styles.heroElegantScroll}
          aria-label={f.hero.chevronAria}
        >
          <IconChevronDown />
        </a>
      </section>

      <section id="story" className={styles.storyNew}>
        <div className={styles.storyNewInner}>
          <Reveal reducedMotion={reducedMotion}>
            <div className={styles.storyNewHeader}>
              <span className={styles.storyNewOrnament}>❖</span>
              <p className={styles.storyNewEyebrow}>{f.story.eyebrow}</p>
              <h2 className={styles.storyNewHeading}>{f.story.heading}</h2>
              <div className={styles.storyNewUnderline}>
                <span className={styles.storyNewUnderlineDot}></span>
              </div>
            </div>
          </Reveal>
          
          <div className={styles.storyNewContent}>
            <Reveal reducedMotion={reducedMotion} delayMs={100}>
              <div className={styles.storyNewImage}>
                <div className={styles.storyNewImageFrame}>
                  <img
                    src={figmaAssets.storyPhotoPortrait}
                    alt={f.story.altPortrait}
                    decoding="async"
                    width={4032}
                    height={3024}
                  />
                  <div className={styles.storyNewImageOverlay}></div>
                </div>
              </div>
            </Reveal>
            
            <Reveal reducedMotion={reducedMotion} delayMs={200}>
              <div className={styles.storyNewText}>
                <p className={styles.storyNewLead}>{f.story.lead}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="events" className={styles.eventsNew}>
        <div className={styles.eventsNewInner}>
          <Reveal reducedMotion={reducedMotion}>
            <header className={styles.eventsNewHeader}>
              <span className={styles.eventsNewOrnament}>✧</span>
              <p className={styles.eventsNewEyebrow}>{f.events.eyebrow}</p>
              <h2 className={styles.eventsNewTitle}>{f.events.title}</h2>
              <div className={styles.eventsNewDivider}></div>
            </header>
          </Reveal>
          <div
            className={styles.eventsNewCards}
          >
            <Reveal reducedMotion={reducedMotion}>
              <article className={styles.eventsNewCard}>
                <div className={styles.eventsNewCardHeader}>
                  <IconChurch className={styles.eventsNewCardIcon} />
                  <h3 className={styles.eventsNewCardTitle}>{f.events.ceremonyTitle}</h3>
                  <span className={styles.eventsNewCardTime}>14:00</span>
                </div>
                <p className={styles.eventsNewCardQuote}>
                  &ldquo;{f.events.ceremonyQuote}&rdquo;
                </p>
                <div className={styles.eventsNewCardDetails}>
                  <div className={styles.eventsNewCardLocation}>
                    <IconPin className={styles.eventsNewCardPin} />
                    <div>
                      <p className={styles.eventsNewCardVenue}>
                        {f.events.ceremonyVenue}
                      </p>
                      <p className={styles.eventsNewCardAddress}>
                        {f.events.ceremonyAddress}
                      </p>
                    </div>
                  </div>
                  <a
                    className={styles.eventsNewCardLink}
                    href={venueLinks.saintAnnaGoogleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {f.events.openMaps} →
                  </a>
                </div>
                <div className={styles.eventsNewCardMap}>
                  <img
                    src={figmaAssets.ceremonyMap}
                    alt={f.events.mapAltCeremony}
                    decoding="async"
                  />
                </div>
              </article>
            </Reveal>
            {(
              <Reveal reducedMotion={reducedMotion} delayMs={120}>
                <article className={styles.eventsNewCard}>
                  <div className={styles.eventsNewCardHeader}>
                    <IconCelebration className={styles.eventsNewCardIcon} />
                    <h3 className={styles.eventsNewCardTitle}>{f.events.celebrationTitle}</h3>
                    <span className={styles.eventsNewCardTime}>18:00</span>
                  </div>
                  <p className={styles.eventsNewCardQuote}>
                    &ldquo;{f.events.celebrationQuote}&rdquo;
                  </p>
                  <div className={styles.eventsNewCardDetails}>
                    <div className={styles.eventsNewCardLocation}>
                      <IconPin className={styles.eventsNewCardPin} />
                      <div>
                        <p className={styles.eventsNewCardVenue}>
                          {f.events.receptionVenue}
                        </p>
                        <p className={styles.eventsNewCardAddress}>
                          {f.events.receptionAddress}
                        </p>
                      </div>
                    </div>
                    <div className={styles.eventsNewCardLinks}>
                      <a
                        className={styles.eventsNewCardLink}
                        href={venueLinks.artVillageSite}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        artvillage.am →
                      </a>
                      <a
                        className={styles.eventsNewCardLink}
                        href={venueLinks.artVillageGoogleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {f.events.openMaps} →
                      </a>
                    </div>
                  </div>
                  <div className={styles.eventsNewCardMap}>
                    <img
                      src={figmaAssets.receptionMap}
                      alt={f.events.mapAltReception}
                      decoding="async"
                    />
                  </div>
                </article>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section
        id="attire"
        className={styles.attireNew}
        aria-labelledby="attire-heading"
      >
        <div className={styles.attireNewTop}>
          <Reveal reducedMotion={reducedMotion}>
            <div className={styles.attireNewHeader}>
              <span className={styles.attireNewOrnament}>✤</span>
              <p className={styles.attireNewEyebrow}>{f.attire.eyebrow}</p>
              <h2 id="attire-heading" className={styles.attireNewTitle}>
                {f.attire.title}
              </h2>
              {f.attire.leadWomenMark?.trim() || f.attire.leadMenMark?.trim() ? (
                <div className={styles.attireNewSubtitle}>
                  {f.attire.leadWomenMark?.trim() ? (
                    <p className={styles.attireNewSubtitleLine}>
                      <span className={styles.attireNewSubtitleMark}>
                        {f.attire.leadWomenMark}
                      </span>
                      {f.attire.leadWomenText ?? ""}
                    </p>
                  ) : null}
                  {f.attire.leadMenMark?.trim() ? (
                    <p className={styles.attireNewSubtitleLine}>
                      <span className={styles.attireNewSubtitleMark}>
                        {f.attire.leadMenMark}
                      </span>
                      {f.attire.leadMenText ?? ""}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>

        <div className={styles.attireNewBody}>
          <Reveal reducedMotion={reducedMotion} delayMs={80}>
            <div className={styles.attireNewPalette}>
              <div className={styles.attireNewPaletteHeader}>
                <span className={styles.attireNewKicker}>
                  {f.attire.paletteKicker}
                </span>
                <h3 className={styles.attireNewPaletteTitle}>
                  {f.attire.paletteTitle}
                </h3>
              </div>
              <div className={styles.attireNewPaletteGrid}>
                <div className={styles.attireNewPaletteSection}>
                  <h4 className={styles.attireNewPaletteSectionTitle}>
                    {f.attire.forHer}
                  </h4>
                  <ul
                    className={styles.attireNewSwatches}
                    aria-label={f.attire.womenAria}
                  >
                    {f.attire.paletteWomen.map((c) => (
                      <li
                        key={`w-${c.hex}-${c.name}`}
                        className={styles.attireNewSwatch}
                      >
                        <span
                          className={styles.attireNewSwatchColor}
                          style={{ "--swatch": c.hex }}
                          aria-hidden
                        />
                        <span className={styles.attireNewSwatchName}>
                          {c.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.attireNewPaletteSection}>
                  <h4 className={styles.attireNewPaletteSectionTitle}>
                    {f.attire.forHim}
                  </h4>
                  <ul
                    className={styles.attireNewSwatches}
                    aria-label={f.attire.menAria}
                  >
                    {f.attire.paletteMen.map((c) => (
                      <li
                        key={`m-${c.hex}-${c.name}`}
                        className={styles.attireNewSwatch}
                      >
                        <span
                          className={styles.attireNewSwatchColor}
                          style={{ "--swatch": c.hex }}
                          aria-hidden
                        />
                        <span className={styles.attireNewSwatchName}>
                          {c.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {(
        <section
          id="schedule"
          className={styles.schedule}
          aria-labelledby="schedule-heading"
        >
          <div className={styles.scheduleInner}>
            <Reveal reducedMotion={reducedMotion}>
              <header className={styles.scheduleHeader}>
                <p className={styles.scheduleEyebrow}>{f.schedule.eyebrow}</p>
                <h2 id="schedule-heading" className={styles.scheduleTitle}>
                  {f.schedule.title}
                </h2>
                <p className={styles.scheduleSub}>{f.schedule.sub}</p>
              </header>
            </Reveal>
            <div className={styles.scheduleFlow}>
              <div className={styles.scheduleTrack} ref={scheduleTrackRef}>
                <ScheduleVine className={styles.scheduleVine} />
                <div className={styles.scheduleScrollLine}>
                  <div className={styles.scheduleScrollLineProgress} ref={scheduleLineRef}></div>
                  <div className={styles.scheduleScrollHeart} ref={scheduleHeartRef}>❤️</div>
                </div>
                <ol className={styles.scheduleList}>
                  {f.schedule.rows.map((row, i) => {
                    const side =
                      i % 2 === 0
                        ? styles.scheduleItemStart
                        : styles.scheduleItemEnd;
                    return (
                      <Reveal
                        key={row.datetime + row.title}
                        as="li"
                        className={`${styles.scheduleItem} ${side}`.trim()}
                        reducedMotion={reducedMotion}
                        delayMs={i * 36}
                      >
                        <div className={styles.scheduleRow}>
                          <time
                            className={styles.scheduleTime}
                            dateTime={row.datetime}
                          >
                            <span className={styles.scheduleTimeInner}>
                              {row.time}
                            </span>
                          </time>
                          <div className={styles.scheduleCard}>
                            <h3 className={styles.scheduleCardTitle}>
                              {row.title}
                            </h3>
                            <p className={styles.schedulePlace}>{row.place}</p>
                            <p className={styles.scheduleDetail}>
                              {row.detail}
                            </p>
                            <span className={styles.scheduleTag}>{row.tag}</span>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        id="roots"
        className={styles.rootsNew}
        aria-labelledby="roots-heading"
      >
        <div className={styles.rootsNewInner}>
          <Reveal reducedMotion={reducedMotion}>
            <div className={styles.rootsNewHeader}>
              <span className={styles.rootsNewOrnament}>❋</span>
              <p className={styles.rootsNewEyebrow}>{f.roots.eyebrow}</p>
              <h2 id="roots-heading" className={styles.rootsNewHeading}>
                {f.roots.heading}
              </h2>
              <p className={styles.rootsNewSubline}>{f.roots.subline}</p>
            </div>
          </Reveal>
          
          <div className={styles.rootsNewContent}>
            <Reveal reducedMotion={reducedMotion} delayMs={100}>
              <div className={styles.rootsNewVisual}>
                <div className={styles.rootsNewVisualFrame}>
                  <FamilyTreeVisual />
                </div>
              </div>
            </Reveal>
            
            <Reveal reducedMotion={reducedMotion} delayMs={180}>
              <div className={styles.rootsNewText}>
                <p className={styles.rootsNewLead}>{f.roots.lead}</p>
                <blockquote className={styles.rootsNewQuote}>
                  <p>{f.roots.quote}</p>
                </blockquote>
                <ul className={styles.rootsNewList}>
                  <li>{f.roots.li1}</li>
                  <li>{f.roots.li2}</li>
                  <li>{f.roots.li3}</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal reducedMotion={reducedMotion}>
        <footer className={styles.footerNew}>
          <div className={styles.footerNewContent}>
            <div className={styles.footerNewOrnament}>✦</div>
            <p className={styles.footerNewNames}>{f.footer.names}</p>
            <nav className={styles.footerNewNav}>
              <ul className={styles.footerNewLinks}>
                {navIds.map(({ id, key }) => (
                  <li key={id}>
                    <a href={`#${id}`}>{f.nav[key]}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className={styles.footerNewLegal}>{f.footer.legal}</p>
          </div>
        </footer>
      </Reveal>
    </div>
  );
}
