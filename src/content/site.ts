/**
 * ─────────────────────────────────────────────────────────────
 *  B17 Windows & Curtains — website content
 * ─────────────────────────────────────────────────────────────
 *  Most of the text on the website lives in this one file, so you
 *  can update it without touching the page layout.
 *
 *  Look for "TODO" comments — those are placeholders to replace
 *  with real information before going live.
 */

export const site = {
  name: "B17 Windows & Curtains",
  shortName: "B17",
  tagline: "Made-to-measure curtains, blinds & window automation",
  description:
    "Custom curtains, window blinds, motorised window automation and curtain washing for homes and businesses all across Ghana. Free consultation — no job too big or too small.",

  // Contact details
  phoneDisplay: "+233 54 044 2449",
  phoneHref: "tel:+233540442449",
  /** WhatsApp number in international format, digits only (no +, spaces or leading 0). */
  whatsappNumber: "233540442449",
  email: "B17dealss@gmail.com",
  location: "East Legon, Accra",
  /** Full address, shown in the footer — one line per item. */
  address: ["FD 125, Kingspark Avenue", "Adjiriganor, Accra, Ghana"],
  serviceArea: "All across Ghana",

  socials: {
    instagram: "https://www.instagram.com/b17windows",
    tiktok: "https://www.tiktok.com/@b17windows",
  },

  /** Link that opens "Write a review" on the B17 Google Business Profile. */
  googleReviewUrl: "https://g.page/r/CZutK1OunE3cEBM/review",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Automation", href: "#automation" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
] as const;

/** Options shown in the contact form ("What do you need?"). */
export const serviceOptions = [
  "Custom curtains",
  "Window blinds",
  "Installation",
  "Curtain washing",
  "Window automation",
  "Security cameras",
  "Smart home assistant",
  "Decor lighting",
] as const;

export const propertyOptions = [
  "Home / apartment",
  "Office / commercial",
  "Single room",
  "Other",
] as const;

// Client logos and names for the moving strip live in src/content/clients.ts

/**
 * Customer reviews.
 *
 * To add another review, copy one entry and change the details. One review
 * is shown as a large featured quote; two or more are shown as cards.
 * (`placeholder: true` adds a "Sample" label — only for example text.)
 */
export type Testimonial = {
  quote: string;
  name: string;
  area: string;
  service: string;
  placeholder?: boolean;
};

// Draft wording written for these clients — check each one is happy with it
// before the site goes live. Keep reviews short so the three cards stay even.
export const testimonials: Testimonial[] = [
  {
    quote:
      "My custom curtains fit every window perfectly and completely changed the feel of my home. Professional, neat and easy to work with.",
    name: "Derrick Bonney",
    area: "Labone, Accra",
    service: "Custom curtains",
  },
  {
    quote:
      "They handled our curtains, blinds and automation from start to finish. Everything now opens at the touch of a button — superb work.",
    name: "Richard Antwi",
    area: "Airport Residential, Accra",
    service: "Custom curtains, blinds & automation",
  },
  {
    quote:
      "My blinds were fitted neatly and look beautiful. I finally have the light and privacy I wanted at home. Highly recommended.",
    name: "Eunice Ofori",
    area: "Dansoman, Accra",
    service: "Blinds installation",
  },
];

export const faqs = [
  {
    q: "Is the consultation really free?",
    a: "Yes. Tell us about your windows and what you have in mind, and we'll advise you on styles, fabrics and options — at no cost and with no obligation.",
  },
  {
    q: "Do you work outside Accra?",
    a: "Yes. We're based in East Legon, Accra, and we work all across Ghana. Wherever your home or business is, get in touch and we'll plan the job with you.",
  },
  {
    q: "Can you make curtains for any window size?",
    a: "Absolutely. Our curtains are custom-made to your exact window measurements, so tall, wide and hard-to-reach windows are no problem.",
  },
  {
    q: "Can my curtains or blinds be motorised?",
    a: "Yes. We install motorised curtains and blinds that you can control with a remote, your phone or a voice assistant such as Alexa or Google — and set to open and close on a schedule.",
  },
  {
    q: "Do you take on small jobs?",
    a: "Always. No job is too big or too small for us — we're just as happy to dress a single room as an entire office building.",
  },
  {
    q: "Do you also clean curtains?",
    a: "Yes. We offer professional curtain washing to keep your curtains fresh, bright and hanging beautifully.",
  },
  {
    q: "What else do you install?",
    a: "Besides curtains and blinds, we install security cameras (CCTV), smart home assistants like Amazon Alexa and Google Gemini, and interior decor lighting.",
  },
] as const;
