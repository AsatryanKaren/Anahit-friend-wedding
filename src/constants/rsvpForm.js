/**
 * Google Forms wiring for the RSVP section.
 */
export const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScgrXvGLd48-KhTtTjQgfEX3d460Kec6vOHL9Wj0iBJKYQCYw/formResponse";

export const RSVP_FIELDS = {
  name: "entry.598881145",
  surname: "entry.931324665",
  guestCount: "entry.241045873",
  song: "entry.557085722",
  attending: "entry.1636053782",
};

export const isRsvpFormConfigured = () =>
  !GOOGLE_FORM_ACTION.includes("FORM_ID") &&
  !Object.values(RSVP_FIELDS).some((v) => v.includes("TODO"));
