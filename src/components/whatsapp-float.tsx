import { IconWhatsApp } from "./icons";
import { consultationMessage, whatsappUrl } from "@/lib/whatsapp";

/** Floating WhatsApp button, bottom-right on every screen size. */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(consultationMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with B17 on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-3 sm:right-6 sm:bottom-6"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-linen-50 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgb(37_211_102/0.7)] transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-1 animate-ping rounded-full bg-whatsapp/25 [animation-duration:2.8s]" />
        <IconWhatsApp className="relative size-7" />
      </span>
    </a>
  );
}
