/**
 * Companies & organisations B17 has worked with — shown in the two
 * moving rows near the top of the page.
 *
 * - Clients with a logo go in `clientLogos`. To add one: save the logo
 *   (transparent PNG or SVG works best) in src/assets/clients/, import it
 *   below and add a line to the list.
 * - Clients without a logo go in `clientNames` and are shown as elegant
 *   text. `detail` is the smaller line under the name (optional).
 */
import type { StaticImageData } from "next/image";
import movenpick from "@/assets/clients/movenpick.png";
import trasacco from "@/assets/clients/trasacco.png";
import theSignature from "@/assets/clients/the-signature.png";
import belAqua from "@/assets/clients/bel-aqua.png";
import ggsh from "@/assets/clients/ggsh.png";
import premierPlush from "@/assets/clients/premierplush.png";
import kotoku from "@/assets/clients/kotoku.png";
import forte from "@/assets/clients/forte.png";

/** `scale` fine-tunes one logo's size in the strip (1 = automatic size). */
export type ClientLogo = { name: string; logo: StaticImageData; scale?: number };
export type ClientName = { name: string; detail?: string };

export const clientLogos: ClientLogo[] = [
  { name: "Mövenpick Ambassador Hotel Accra", logo: movenpick },
  { name: "Trasacco", logo: trasacco },
  { name: "The Signature Apartments", logo: theSignature },
  { name: "Bel-Aqua Mineral Water", logo: belAqua, scale: 0.85 },
  { name: "Ghanaian-German Specialist Hospital", logo: ggsh },
  { name: "PremierPlush Apartments", logo: premierPlush, scale: 1.08 },
  { name: "Kotoku Medical Centre", logo: kotoku },
  { name: "Forte Commodities Limited", logo: forte },
];

export const clientNames: ClientName[] = [
  { name: "SU Tower", detail: "Ridge" },
  { name: "Embassy of Japan", detail: "in Ghana" },
  { name: "Presbyterian Senior High School", detail: "Mampong" },
  { name: "Mulungushi Gardens", detail: "Residence" },
  { name: "Ignition", detail: "Apartments" },
  { name: "Mary Mother of God", detail: "Catholic Church" },
  { name: "Flo Jo", detail: "Company" },
];
