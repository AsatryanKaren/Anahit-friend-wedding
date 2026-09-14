/**
 * Google Forms wiring for the RSVP section.
 */
export const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScgrXvGLd48-KhTtTjQgfEX3d460Kec6vOHL9Wj0iBJKYQCYw/formResponse";

export const RSVP_FIELDS = {
  name: "entry.598881145",
  surname: "entry.931324665",
  guestOf: "entry.794447136",
  guestCount: "entry.241045873",
  song: "entry.557085722",
  attending: "entry.1636053782",
};

export const isRsvpFormConfigured = () =>
  !GOOGLE_FORM_ACTION.includes("FORM_ID") &&
  !Object.values(RSVP_FIELDS).some((v) => v.includes("TODO"));

/**
 * The exact option text the live Google Form expects for its multiple-choice
 * questions. Kept separate from the button labels shown on the site, since
 * Google silently drops a radio answer that doesn't match one of its options
 * verbatim.
 */
export const RSVP_GOOGLE_OPTIONS = {
  guestOf: {
    groom: "Անդրանիկի",
    bride: "Անուշիկի",
  },
  attending: {
    yes: "Կարող եմ մասնակցել միջոցառմանը",
    no: "Չեմ կարող մասնակցել միջոցառմանը",
  },
};
