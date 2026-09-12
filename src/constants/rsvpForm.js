/**
 * Google Forms wiring for the RSVP section.
 *
 * TODO: once the Google Form exists, get a "pre-filled link" from it
 * (Form editor -> ⋮ menu -> "Get pre-filled link") and use the
 * entry.XXXXXXXXX query params it reveals to fill in the values below.
 *
 * - GOOGLE_FORM_ACTION: swap FORM_ID for the id in the form's own URL
 *   (also visible in the pre-filled link), and keep "/formResponse" at
 *   the end (not "/viewform").
 * - Each RSVP_FIELD entry must equal the corresponding "entry.NNNN..."
 *   name from the pre-filled link.
 *
 * Until these are real, submissions won't reach the linked Google
 * Sheet — the form still validates and shows a local confirmation.
 */
export const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/FORM_ID/formResponse";

export const RSVP_FIELDS = {
  name: "entry.TODO_NAME",
  surname: "entry.TODO_SURNAME",
  guestOf: "entry.TODO_GUEST_OF",
  guestCount: "entry.TODO_GUEST_COUNT",
  song: "entry.TODO_SONG",
  attending: "entry.TODO_ATTENDING",
};

export const isRsvpFormConfigured = () =>
  !GOOGLE_FORM_ACTION.includes("FORM_ID") &&
  !Object.values(RSVP_FIELDS).some((v) => v.includes("TODO"));
