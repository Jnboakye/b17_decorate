"use client";

import Script from "next/script";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Section ids on the page → names shown in the Umami dashboard. */
const sectionNames: Record<string, string> = {
  top: "Hero",
  services: "Services",
  automation: "Automation",
  "smart-home": "Smart home",
  gallery: "Gallery",
  process: "Process",
  reviews: "Reviews",
  faq: "FAQ",
  contact: "Contact section",
};

/** Which part of the page a tap came from, e.g. "Hero", "Top menu", "Floating button". */
function placeOf(el: Element) {
  const tagged = el.closest("[data-track-place]");
  if (tagged) return tagged.getAttribute("data-track-place") || "Other";
  const section = el.closest("section[id]");
  if (section) return sectionNames[section.id] ?? section.id;
  if (el.closest("footer")) return "Footer";
  if (el.closest("header")) return "Top menu";
  return "Other";
}

/** The kind of enquiry a link starts, judged by where it points. */
function enquiryEvent(href: string) {
  if (href.startsWith("https://wa.me/")) return "WhatsApp click";
  if (href.startsWith("tel:")) return "Phone call click";
  if (href.startsWith("mailto:")) return "Email click";
  return null;
}

/**
 * Loads Umami (visitor numbers, countries, devices, where people came from) and records
 * every tap on a WhatsApp, phone or email link, with the part of the page it came from.
 * It works for every such link automatically — including ones added later.
 */
export default function Analytics({ websiteId }: { websiteId: string }) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!link) return;
      const event = enquiryEvent(link.getAttribute("href") ?? "");
      if (event) trackEvent(event, { place: placeOf(link) });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id={websiteId}
      data-exclude-hash="true"
      strategy="afterInteractive"
    />
  );
}
