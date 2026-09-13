import heroCoupleWebp1400 from "../assets/hero-couple-1400.webp";
import heroCoupleWebp800 from "../assets/hero-couple-800.webp";
import heroCoupleJpg1400 from "../assets/hero-couple-1400.jpg";
import storyCouplePhoto from "../assets/story-couple.jpg";
import churchIllustration from "../assets/church-illustration.jpg";
import vivaldiHallIllustration from "../assets/vivaldi-hall-illustration.webp";
import brideDressIllustration from "../assets/bride-dress-illustration.jpg";
import groomSuitIllustration from "../assets/groom-suit-illustration.jpg";
import registrationSigningIllustration from "../assets/registration-signing-illustration.jpg";
import collagePortrait2 from "../assets/collage-portrait-2.jpg";
import collageWalking from "../assets/collage-walking.jpg";
import collageSitting from "../assets/collage-sitting.jpg";
import collageWalkingWide from "../assets/collage-walking-wide.jpg";

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
  /** Reception venue: Vivaldi Hall entrance illustration */
  receptionMap: vivaldiHallIllustration,
  /** Bride's house: wedding dress illustration */
  brideDress: brideDressIllustration,
  /** Groom's house: wedding suit illustration */
  groomSuit: groomSuitIllustration,
  /** Civil ceremony: signing the marriage registration */
  registrationSigning: registrationSigningIllustration,
  /** Rooted Together: beach photo collage */
  rootsCollage: {
    big: collagePortrait2,
    small1: collageWalkingWide,
    small2: collageSitting,
    small3: collageWalking,
  },
};

/** Maps: driving-directions links (destination-only; Google Maps fills in the origin) */
export const venueLinks = {
  ceremonyDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Surp+Mariam+Astvatsatsin+Church+Nork+Marash+Yerevan+Armenia",
  celebrationDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Vivaldi+Hall+Yerevan+Armenia",
};
