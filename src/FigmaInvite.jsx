import { figmaAssets, heroCouplePhoto, venueLinks } from "./constants/figmaAssets.js";
import { useInViewOnce } from "./hooks/useInViewOnce.js";
import { useReducedMotion } from "./hooks/useReducedMotion.js";
import { useWeddingCountdown } from "./hooks/useWeddingCountdown.js";
import { IconPin } from "./components/Icons/Icons.jsx";
import { ScheduleVine } from "./components/ScheduleVine.jsx";
import { LanguageSwitcher } from "./components/LanguageSwitcher/LanguageSwitcher.jsx";
import { MusicToggle } from "./components/MusicToggle/MusicToggle.jsx";
import { useI18n } from "./i18n/LanguageContext.jsx";
import {
  GOOGLE_FORM_ACTION,
  RSVP_FIELDS,
  isRsvpFormConfigured,
} from "./constants/rsvpForm.js";
import styles from "./FigmaInvite.module.css";
import { useEffect, useRef, useState } from "react";

const WEDDING_AT = new Date("2026-10-26T14:00:00");

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

function RsvpForm({ f }) {
  const [values, setValues] = useState({
    guestOf: "",
    guestCount: "1",
    attending: "",
  });
  const [status, setStatus] = useState("idle"); // idle | required | submitting | success
  const iframeRef = useRef(null);
  const formRef = useRef(null);
  const configured = isRsvpFormConfigured();

  useEffect(() => {
    if (status !== "submitting") return undefined;
    const iframe = iframeRef.current;
    if (!iframe) return undefined;
    const onLoad = () => setStatus("success");
    iframe.addEventListener("load", onLoad);
    return () => iframe.removeEventListener("load", onLoad);
  }, [status]);

  function update(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event) {
    const form = event.currentTarget;
    const name = form.elements.namedItem(RSVP_FIELDS.name)?.value.trim();
    const surname = form.elements.namedItem(RSVP_FIELDS.surname)?.value.trim();

    if (!name || !surname || !values.attending) {
      event.preventDefault();
      setStatus("required");
      return;
    }

    if (!configured) {
      event.preventDefault();
      setStatus("success");
      return;
    }

    setStatus("submitting");
  }

  if (status === "success") {
    return (
      <div className={styles.rsvpSuccess} role="status">
        <span className={styles.rsvpSuccessIcon}>✓</span>
        <h3 className={styles.rsvpSuccessTitle}>{f.rsvp.successTitle}</h3>
        <p className={styles.rsvpSuccessMessage}>{f.rsvp.successMessage}</p>
      </div>
    );
  }

  return (
    <>
      <form
        ref={formRef}
        className={styles.rsvpForm}
        action={GOOGLE_FORM_ACTION}
        method="POST"
        target="rsvp-hidden-iframe"
        onSubmit={handleSubmit}
      >
        <div className={styles.rsvpField}>
          <label className={styles.rsvpLabel} htmlFor="rsvp-name">
            {f.rsvp.nameLabel}
          </label>
          <input
            id="rsvp-name"
            className={styles.rsvpInput}
            type="text"
            name={RSVP_FIELDS.name}
            autoComplete="given-name"
            required
          />
        </div>

        <div className={styles.rsvpField}>
          <label className={styles.rsvpLabel} htmlFor="rsvp-surname">
            {f.rsvp.surnameLabel}
          </label>
          <input
            id="rsvp-surname"
            className={styles.rsvpInput}
            type="text"
            name={RSVP_FIELDS.surname}
            autoComplete="family-name"
            required
          />
        </div>

        <fieldset className={styles.rsvpField}>
          <legend className={styles.rsvpLabel}>{f.rsvp.guestOfLabel}</legend>
          <div className={styles.rsvpRadioRow}>
            {[
              ["groom", f.rsvp.guestOfGroom],
              ["bride", f.rsvp.guestOfBride],
              ["both", f.rsvp.guestOfBoth],
            ].map(([key, label]) => (
              <label key={key} className={styles.rsvpRadioOption}>
                <input
                  type="radio"
                  name={RSVP_FIELDS.guestOf}
                  value={label}
                  checked={values.guestOf === key}
                  onChange={() => update("guestOf", key)}
                />
                <span className={styles.rsvpRadioDot} aria-hidden="true" />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        <div className={styles.rsvpField}>
          <label className={styles.rsvpLabel} htmlFor="rsvp-guest-count">
            {f.rsvp.guestCountLabel}
          </label>
          <input
            id="rsvp-guest-count"
            className={styles.rsvpInput}
            type="number"
            min="1"
            max="10"
            name={RSVP_FIELDS.guestCount}
            value={values.guestCount}
            onChange={(e) => update("guestCount", e.target.value)}
          />
        </div>

        <div className={styles.rsvpField}>
          <label className={styles.rsvpLabel} htmlFor="rsvp-song">
            {f.rsvp.songLabel}
          </label>
          <input
            id="rsvp-song"
            className={styles.rsvpInput}
            type="text"
            name={RSVP_FIELDS.song}
          />
        </div>

        <div className={styles.rsvpRadioGroup}>
          {[
            ["yes", f.rsvp.attendingYes],
            ["no", f.rsvp.attendingNo],
          ].map(([key, label]) => (
            <label key={key} className={styles.rsvpRadioOption}>
              <input
                type="radio"
                name={RSVP_FIELDS.attending}
                value={label}
                checked={values.attending === key}
                onChange={() => update("attending", key)}
              />
              <span className={styles.rsvpRadioDot} aria-hidden="true" />
              {label}
            </label>
          ))}
        </div>

        {status === "required" && (
          <p className={styles.rsvpError} role="alert">
            {f.rsvp.requiredError}
          </p>
        )}

        <button
          className={styles.rsvpSubmit}
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? f.rsvp.submitting : f.rsvp.submit}
        </button>
      </form>
      <iframe
        ref={iframeRef}
        name="rsvp-hidden-iframe"
        title="rsvp"
        className={styles.rsvpHiddenFrame}
      />
    </>
  );
}

export default function FigmaInvite() {
  const { lang, setLang, t } = useI18n();
  const f = t.figma;
  const countdown = useWeddingCountdown(WEDDING_AT);
  const reducedMotion = useReducedMotion();

  const motion = reducedMotion ? "reduce" : "full";

  const scheduleHeartRef = useRef(null);
  const scheduleTrackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scheduleHeartRef.current || !scheduleTrackRef.current) return;
      
      const scheduleTrack = scheduleTrackRef.current;
      const rect = scheduleTrack.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const trackTop = rect.top;
      const trackHeight = rect.height;
      const trackBottom = rect.bottom;
      
      // Calculate scroll progress from very start to very end
      let percentage = 0;
      
      if (trackBottom < 0) {
        // Fully scrolled past
        percentage = 100;
      } else if (trackTop > windowHeight) {
        // Not yet in view
        percentage = 0;
      } else {
        // Calculate based on how much has been scrolled through
        const scrolledPast = windowHeight - trackTop;
        const totalScrollDistance = windowHeight + trackHeight;
        percentage = (scrolledPast / totalScrollDistance) * 100;
        percentage = Math.min(100, Math.max(0, percentage));
      }
      
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
      <LanguageSwitcher
        lang={lang}
        onChange={setLang}
        labels={t.language}
        variant="corner"
      />
      <MusicToggle labels={t.music} />

      <section
        id="home"
        className={styles.heroElegant}
        aria-label={f.hero.ariaSection}
      >
        <div className={styles.heroElegantBg}>
          <picture>
            <source
              type="image/webp"
              sizes="100vw"
              srcSet={`${heroCouplePhoto.webp800} 800w, ${heroCouplePhoto.webp1400} 1400w`}
            />
            <img
              className={styles.heroElegantPhoto}
              src={heroCouplePhoto.fallbackJpg}
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className={styles.heroElegantPhotoVeil} />
          <div className={styles.heroElegantOrb1} />
          <div className={styles.heroElegantOrb2} />
          <div className={styles.heroElegantOrb3} />
        </div>
        
        <div className={styles.heroElegantContent}>
          <div className={styles.heroElegantTop}>
            <div className={styles.heroElegantOrnament}>✦</div>

            <div className={styles.heroElegantKicker}>
              {f.hero.kicker}
            </div>

            <div className={styles.heroElegantNames}>
              <h1 className={styles.heroElegantName}>{f.logo.first}</h1>
              <div className={styles.heroElegantAmpersand}>
                <span className={styles.heroElegantAmpLine} />
                <span className={styles.heroElegantAmpSymbol} aria-label="&">
                  <svg viewBox="0 0 32 29">
                    <path
                      d="M16 28.5c-.3 0-.6-.1-.8-.3C9.4 23.4 0 15.6 0 8.8 0 3.9 3.9 0 8.8 0c2.6 0 5 .9 6.8 2.6.1.1.3.1.4 0C17.8.9 20.2 0 22.8 0 27.7 0 31.6 3.9 31.6 8.8c0 6.8-9.4 14.6-15.2 19.4-.2.2-.5.3-.8.3z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className={styles.heroElegantAmpLine} />
              </div>
              <h2 className={styles.heroElegantName}>{f.logo.second}</h2>
            </div>
          </div>

          <div className={styles.heroElegantBottom}>
            <div className={styles.heroElegantDate}>
              <span className={styles.heroElegantDateLine} />
              <span className={styles.heroElegantDateText}>{f.hero.dateLine}</span>
              <span className={styles.heroElegantDateLine} />
            </div>

            {!countdown.passed && (
              <div className={styles.heroElegantCountdown}>
                <p className={styles.heroElegantCountdownIntro}>
                  {f.hero.countdownIntro}
                </p>
                <div className={styles.heroElegantCountdownItems} aria-live="polite">
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
          </div>
        </div>
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
                    width={1333}
                    height={2000}
                  />
                  <div className={styles.storyNewImageOverlay}></div>
                </div>
              </div>
            </Reveal>
            
            <Reveal reducedMotion={reducedMotion} delayMs={200}>
              <div className={styles.storyNewText}>
                {f.story.lead.map((paragraph, i) => (
                  <p key={i} className={styles.storyNewLead}>
                    {paragraph}
                  </p>
                ))}
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
                  <h3 className={styles.eventsNewCardTitle}>{f.events.ceremonyTitle}</h3>
                  <span className={styles.eventsNewCardTime}>14:00</span>
                </div>
                <p className={styles.eventsNewCardQuote}>
                  «{f.events.ceremonyQuote}»
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
                    href={venueLinks.ceremonyDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {f.events.getDirections} →
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
                    <h3 className={styles.eventsNewCardTitle}>{f.events.celebrationTitle}</h3>
                    <span className={styles.eventsNewCardTime}>17:00</span>
                  </div>
                  <p className={styles.eventsNewCardQuote}>
                    «{f.events.celebrationQuote}»
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
                    <a
                      className={styles.eventsNewCardLink}
                      href={venueLinks.celebrationDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {f.events.getDirections} →
                    </a>
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
                <div className={styles.scheduleScrollHeart} ref={scheduleHeartRef}>
                  <svg
                    className={styles.scheduleScrollHeartIcon}
                    viewBox="0 0 32 29"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="scheduleHeartFill"
                        x1="0"
                        y1="0"
                        x2="32"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#93b380" />
                        <stop offset="1" stopColor="#5f7d52" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M16 28.5c-.3 0-.6-.1-.8-.3C9.4 23.4 0 15.6 0 8.8 0 3.9 3.9 0 8.8 0c2.6 0 5 .9 6.8 2.6.1.1.3.1.4 0C17.8.9 20.2 0 22.8 0 27.7 0 31.6 3.9 31.6 8.8c0 6.8-9.4 14.6-15.2 19.4-.2.2-.5.3-.8.3z"
                      fill="url(#scheduleHeartFill)"
                    />
                  </svg>
                  <span className={styles.scheduleScrollHeartNum}>26</span>
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
                  <img
                    src={figmaAssets.rootsPhotoPortrait}
                    alt={f.roots.altPortrait}
                    decoding="async"
                    width={1333}
                    height={2000}
                  />
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

      <section id="rsvp" className={styles.rsvpNew} aria-labelledby="rsvp-heading">
        <div className={styles.rsvpNewInner}>
          <Reveal reducedMotion={reducedMotion}>
            <div className={styles.rsvpNewHeader}>
              <span className={styles.rsvpNewOrnament}>✦</span>
              <p className={styles.rsvpNewEyebrow}>{f.rsvp.eyebrow}</p>
              <h2 id="rsvp-heading" className={styles.rsvpNewHeading}>
                {f.rsvp.heading}
              </h2>
              <p className={styles.rsvpNewIntro}>{f.rsvp.intro}</p>
            </div>
          </Reveal>

          <Reveal reducedMotion={reducedMotion} delayMs={120}>
            <div className={styles.rsvpNewCard}>
              <RsvpForm f={f} />
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal reducedMotion={reducedMotion}>
        <footer className={styles.footerNew}>
          <div className={styles.footerNewContent}>
            <p className={styles.footerNewLegal}>{f.footer.legal}</p>
          </div>
        </footer>
      </Reveal>
    </div>
  );
}
