import Logo from "./logo";
import { ButtonLink } from "./ui";
import { IconInstagram, IconTikTok, IconWhatsApp } from "./icons";
import { site } from "@/content/site";
import { consultationMessage, whatsappUrl } from "@/lib/whatsapp";
import { mapsUrl } from "@/lib/maps";

const columns = [
  {
    title: "Windows",
    links: [
      { label: "Custom curtains", href: "#services" },
      { label: "Window blinds", href: "#services" },
      { label: "Installation", href: "#services" },
      { label: "Curtain washing", href: "#services" },
      { label: "Window automation", href: "#automation" },
    ],
  },
  {
    title: "More services",
    links: [
      { label: "Security cameras", href: "#smart-home" },
      { label: "Smart home assistants", href: "#smart-home" },
      { label: "Decor lighting", href: "#smart-home" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "#process" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative isolate overflow-hidden bg-navy-950 text-linen-100">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(201_166_107/0.14),transparent)]"
      />
      <div className="container-x">
        {/* CTA band */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 py-16 sm:py-20 xl:flex-row xl:items-end">
          <h2 className="max-w-2xl text-[clamp(2.25rem,1.5rem+3vw,4.2rem)] leading-[1.03] font-light tracking-[-0.02em] text-linen-50">
            Ready to transform <span className="accent-light">your windows?</span>
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact" variant="brass" arrow>
              Book a free consultation
            </ButtonLink>
            <ButtonLink
              href={whatsappUrl(consultationMessage)}
              external
              variant="ghost-light"
              icon={<IconWhatsApp className="size-5" />}
            >
              WhatsApp us
            </ButtonLink>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-14 lg:grid-cols-12">
          <div className="col-span-2 max-sm:-order-2 lg:col-span-3">
            <a href="#top" aria-label={`${site.name} — back to top`} className="inline-block text-linen-50">
              <Logo tone="dark" className="text-[19px]" />
            </a>
            <p className="mt-6 max-w-xs leading-relaxed text-linen-100/60">
              {site.tagline} — for homes and businesses all across Ghana.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <IconInstagram className="size-[1.1rem]" />
              </a>
              <a
                href={site.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <IconTikTok className="size-4" />
              </a>
              <a
                href={whatsappUrl(consultationMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <IconWhatsApp className="size-[1.1rem]" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="lg:col-span-2">
              <h3 className="font-sans text-xs font-bold tracking-[0.2em] text-brass-300 uppercase">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-linen-100/70 transition-colors hover:text-linen-50">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 max-sm:-order-1 sm:col-span-1 lg:col-span-3">
            <h3 className="font-sans text-xs font-bold tracking-[0.2em] text-brass-300 uppercase">Contact</h3>
            <ul className="mt-5 space-y-3 text-linen-100/70">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-linen-50">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-linen-50">
                  {site.email}
                </a>
              </li>
              <li>
                <address className="not-italic">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.address.join(", ")} — open in Google Maps`}
                    className="transition-colors hover:text-linen-50"
                  >
                    {site.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </a>
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 pb-24 text-sm text-linen-100/60 sm:pb-10 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Curtains · Blinds · Automation · Ghana</p>
        </div>
      </div>
    </footer>
  );
}
