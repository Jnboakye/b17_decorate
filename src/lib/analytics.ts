/**
 * Visitor tracking helpers (Umami).
 * The Umami script itself is loaded by src/components/analytics.tsx.
 */

type EventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    /** Added by the Umami script — only present on the live website. */
    umami?: { track: (event: string, data?: EventData) => unknown };
  }
}

/**
 * Record something a visitor did (e.g. "WhatsApp click") in Umami.
 * Safe to call anywhere: it quietly does nothing when tracking is off,
 * for example while you run the site on your computer.
 *
 * Google Ads later: this is the one place to also report a conversion.
 */
export function trackEvent(name: string, data?: EventData) {
  try {
    window.umami?.track(name, data);
  } catch {
    // Tracking must never break the website.
  }
}
