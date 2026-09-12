/** Social / messaging link previews: absolute URLs for og:image and canonical */

const SHARE_IMAGE_PATH = "/social-share.jpg";

const SHARE_BY_LANG = {
  en: {
    title: "Andranik & Anushik, Wedding, 26 October 2026",
    description:
      "Join us in Yerevan, ceremony at Surp Mariam Astvatsatsin Church (Nork Marash), celebration at Vivaldi Hall. Save the date.",
    ogLocale: "en_GB",
    imageAlt: "Wedding invitation, Andranik and Anushik",
    siteName: "Andranik & Anushik",
    jsonLdName: "Andranik & Anushik, Wedding",
  },
  hy: {
    title: "Անդրանիկ և Անուշիկ · հարսանիք, 26 հոկտեմբեր 2026",
    description:
      "Հրավիրում ենք Երևան՝ պսակադրություն Մարիամ Աստվածածին եկեղեցում (Նորք Մարաշ), խնջույք Վիվալդի Հոլլում։ Պահեք ամսաթիվը։",
    ogLocale: "hy_AM",
    imageAlt: "Հարսանեկան հրավեր, Անդրանիկ և Անուշիկ",
    siteName: "Անդրանիկ և Անուշիկ",
    jsonLdName: "Անդրանիկ և Անուշիկ, հարսանիք",
  },
  ru: {
    title: "Андраник и Анушик · Свадьба, 26 октября 2026",
    description:
      "Приглашаем в Ереван: венчание в церкви Сурб Мариам Аствацацин (Норк Мараш), торжество в Vivaldi Hall.",
    ogLocale: "ru_RU",
    imageAlt: "Свадебное приглашение, Андраник и Анушик",
    siteName: "Андраник и Анушик",
    jsonLdName: "Андраник и Анушик, Свадьба",
  },
};

function ensureMeta(attrName, attrValue) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(attrName, attrValue, content) {
  const el = ensureMeta(attrName, attrValue);
  el.setAttribute("content", content);
}

export function applyShareMeta(lang = "en") {
  if (typeof window === "undefined") return;

  const locale = lang === "hy" ? "hy" : lang === "ru" ? "ru" : "en";
  const share = SHARE_BY_LANG[locale];

  const base = import.meta.env.BASE_URL || "/";
  const origin = window.location.origin;
  // Use SHARE_IMAGE_PATH directly if it's already a full URL
  const imageUrl = SHARE_IMAGE_PATH.startsWith("http") 
    ? SHARE_IMAGE_PATH 
    : new URL(
        SHARE_IMAGE_PATH,
        origin + (base.endsWith("/") ? base : `${base}/`),
      ).href;
  const pageUrl = `${origin}${window.location.pathname}${window.location.search}`;

  document.title = share.title;

  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute("content", share.description);

  setMeta("property", "og:title", share.title);
  setMeta("property", "og:description", share.description);
  setMeta("property", "og:type", "website");
  setMeta("property", "og:url", pageUrl);
  setMeta("property", "og:image", imageUrl);
  setMeta("property", "og:image:alt", share.imageAlt);
  setMeta("property", "og:site_name", share.siteName);
  setMeta("property", "og:locale", share.ogLocale);

  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", share.title);
  setMeta("name", "twitter:description", share.description);
  setMeta("name", "twitter:image", imageUrl);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = pageUrl;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MarriageEvent",
    name: share.jsonLdName,
    description: share.description,
    image: imageUrl,
    startDate: "2026-10-26T14:00:00+04:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: [
      {
        "@type": "Place",
        name: "Surp Mariam Astvatsatsin Church",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nork Marash, Yerevan",
          addressCountry: "AM",
        },
      },
      {
        "@type": "Place",
        name: "Vivaldi Hall",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Yerevan",
          addressCountry: "AM",
        },
      },
    ],
  };

  let ld = document.getElementById("wedding-event-jsonld");
  if (!ld) {
    ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "wedding-event-jsonld";
    document.head.appendChild(ld);
  }
  ld.textContent = JSON.stringify(jsonLd);
}
