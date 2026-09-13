import heroCoupleWebp1400 from "../assets/hero-couple-1400.webp";
import heroCoupleWebp800 from "../assets/hero-couple-800.webp";
import heroCoupleJpg1400 from "../assets/hero-couple-1400.jpg";
import storyCouplePhoto from "../assets/story-couple.jpg";
import churchIllustration from "../assets/church-illustration.jpg";
import receptionDanceIllustration from "../assets/reception-dance-illustration.png";
import brideHairIllustration from "../assets/bride-hair-illustration.png";
import groomTuxedoIllustration from "../assets/groom-tuxedo-illustration.png";
import registrationCertificateIcon from "../assets/registration-certificate-icon.png";
import collagePortrait2 from "../assets/collage-portrait-2.jpg";
import collageWalking from "../assets/collage-walking.jpg";
import collageSitting from "../assets/collage-sitting.jpg";
import collageWalkingWide from "../assets/collage-walking-wide.jpg";
import rsvpSuccessIllustration from "../assets/rsvp-success-illustration.png";
import loveLetterNote from "../assets/love-letter-note.jpeg";

/** Hero background: the couple, by the sea */
export const heroCouplePhoto = {
  webp800: heroCoupleWebp800,
  webp1400: heroCoupleWebp1400,
  fallbackJpg: heroCoupleJpg1400,
};

/** Placeholder imagery - replace with actual wedding photos */
export const figmaAssets = {
  /** Hero: outdoor reception illustration (orchard) */
  heroInvitationCover: "https://placehold.co/800x1000/f5d4cf/b8736e?text=Hero+Image",
  /** Our Journey: couple portrait */
  storyPhotoPortrait: storyCouplePhoto,
  /** Ceremony venue: church illustration */
  ceremonyMap: churchIllustration,
  /** Reception: celebration dance illustration */
  receptionMap: receptionDanceIllustration,
  /** Bride's house: hair and flowers illustration */
  brideDress: brideHairIllustration,
  /** Groom's house: tuxedo illustration */
  groomSuit: groomTuxedoIllustration,
  /** Civil ceremony: marriage certificate icon */
  registrationSigning: registrationCertificateIcon,
  /** Rooted Together: beach photo collage */
  rootsCollage: {
    big: collagePortrait2,
    small1: collageWalkingWide,
    small2: collageSitting,
    small3: collageWalking,
  },
  /** RSVP form: success state illustration */
  rsvpSuccess: rsvpSuccessIllustration,
  /** Our Journey: handwritten love note keepsake */
  loveLetterNote: loveLetterNote,
};

/** Maps: driving-directions links (destination-only; Google Maps fills in the origin) */
export const venueLinks = {
  ceremonyDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Surp+Mariam+Astvatsatsin+Church+Nork+Marash+Yerevan+Armenia",
  celebrationDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Vivaldi+Hall+Yerevan+Armenia",
};
