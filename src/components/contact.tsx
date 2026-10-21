import ContactForm from "./contact-form";
import Logo from "./logo";
import OpenStatus from "./open-status";
import { IconInstagram, IconMail, IconPhone, IconPin, IconTikTok, IconWhatsApp } from "./icons";
import { site } from "@/content/site";
import { consultationMessage, whatsappUrl } from "@/lib/whatsapp";
import { mapsUrl } from "@/lib/maps";

const details = [
  { icon: IconPhone, label: "Call us", value: site.phoneDisplay, href: site.phoneHref },
  {
    icon: IconWhatsApp,
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsappUrl(consultationMessage),
    external: true,
  },
  { icon: IconMail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    icon: IconPin,
    label: "Based in",
    value: `${site.location} · Working all across Ghana`,
    href: mapsUrl,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-linen-100 py-24 sm:py-32">
      <div className="container-x">
        <div
          data-reveal
          className="grid overflow-hidden rounded-[2rem] bg-linen-50 shadow-[0_50px_100px_-50px_rgb(13_26_58/0.45)] ring-1 ring-navy-900/[0.06] lg:grid-cols-12 lg:rounded-[2.5rem]"
        >
          {/* Info panel */}
          <div className="relative isolate flex flex-col overflow-hidden bg-navy-900 p-8 text-linen-50 sm:p-12 lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -right-32 -bottom-32 -z-10 size-96 rounded-full bg-[radial-gradient(closest-side,rgb(201_166_107/0.25),transparent)]"
            />
            {/* large B17 badge as a watermark */}
            <Logo
              variant="mark"
              title=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -bottom-16 -z-10 hidden size-72 text-white/[0.04] lg:block"
            />
            <p className="eyebrow eyebrow-light">Free consultation</p>
            <h2 id="contact-title" className="mt-5 text-[clamp(2.25rem,1.6rem+2.4vw,3.6rem)] leading-[1.05] font-light tracking-[-0.02em]">
              Let&apos;s talk about <span className="accent-light">your windows</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-linen-100/75">
              Fill in the form and we&apos;ll pick it up on WhatsApp — or reach us directly. No job is too
              big or too small.
            </p>

            <OpenStatus variant="panel" className="mt-8" />

            <ul className="mt-9 space-y-5">
              {details.map(({ icon: Icon, label, value, href, external }) => {
                const content = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-brass-300 transition-colors group-hover:bg-brass-400 group-hover:text-navy-950">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-[0.16em] text-linen-100/55 uppercase">{label}</span>
                      <span className="mt-0.5 block font-medium [overflow-wrap:anywhere] text-linen-50">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        className="group flex items-center gap-4"
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-8 lg:mt-auto">
              <span className="text-sm text-linen-100/60">Follow our work</span>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="B17 on Instagram"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-linen-50 transition-colors hover:bg-white/10"
              >
                <IconInstagram className="size-[1.1rem]" />
              </a>
              <a
                href={site.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="B17 on TikTok"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-linen-50 transition-colors hover:bg-white/10"
              >
                <IconTikTok className="size-4" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-12 lg:col-span-7">
            <h3 className="font-display text-2xl font-light text-navy-900 sm:text-3xl">Request your free consultation</h3>
            <p className="mt-2 mb-8 text-muted">Takes less than a minute. Fields marked * are required.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
