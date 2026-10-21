import { site } from "@/content/site";

/** Google Maps search link for the business address in site.ts. */
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.join(", "),
)}`;
