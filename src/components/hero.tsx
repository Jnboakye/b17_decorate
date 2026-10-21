import Image from "next/image";
import type { CSSProperties } from "react";
import heroImage from "@/assets/images/hero-drapes.jpg";
import { ButtonLink } from "./ui";
import { IconCurtains, IconHome, IconPin, IconSparkle, IconWhatsApp } from "./icons";
import OpenStatus from "./open-status";
import { consultationMessage, whatsappUrl } from "@/lib/whatsapp";

const SLATS = 11;

const trust = [
  { icon: IconSparkle, title: "Free consultation", text: "Style, fabric & budget advice" },
  { icon: IconPin, title: "All across Ghana", text: "Based in Accra, working nationwide" },
  { icon: IconHome, title: "Any size job", text: "From one room to whole buildings" },
];

/** Words of the headline; `accent` words are set in italic brass. */
const headline: { w: string; accent?: boolean; br?: boolean }[] = [
  { w: "Curtains" },
  { w: "&" },
  { w: "blinds,", br: true },
  { w: "made", accent: true },
  { w: "to", accent: true },
  { w: "measure.", accent: true },
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="grain relative overflow-hidden bg-linen-100 pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* soft decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[42rem] rounded-full bg-[radial-gradient(closest-side,rgb(201_166_107/0.22),transparent)]"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Copy */}
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="eyebrow fade-up">Curtains · Blinds · Window automation</p>

          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.85rem,1.2rem+4.6vw,5.5rem)] leading-[1] font-light tracking-[-0.03em] text-navy-900"
          >
            {headline.map((item, i) => (
              <span key={i}>
                <span className={`rise ${item.accent ? "accent" : ""}`}>
                  <span style={{ "--d": i } as CSSProperties}>{item.w}</span>
                </span>
                {item.br ? <br /> : " "}
              </span>
            ))}
          </h1>

          <p
            className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ "--delay": "650ms" } as CSSProperties}
          >
            Custom curtains, window blinds and motorised window automation — designed around your
            space and beautifully installed in homes, offices and single rooms all across Ghana.
          </p>

          <div
            className="fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ "--delay": "800ms" } as CSSProperties}
          >
            <ButtonLink href="#contact" arrow>
              Book a free consultation
            </ButtonLink>
            <ButtonLink
              href={whatsappUrl(consultationMessage)}
              external
              variant="secondary"
              icon={<IconWhatsApp className="size-5 text-[#1fa855]" />}
            >
              Chat on WhatsApp
            </ButtonLink>
          </div>

          {/* live open / closed sign (phones & tablets) */}
          <div className="fade-up mt-5 lg:hidden" style={{ "--delay": "880ms" } as CSSProperties}>
            <OpenStatus variant="pill" />
          </div>

          <ul
            className="fade-up mt-12 grid gap-5 border-t border-navy-900/10 pt-7 sm:grid-cols-3 sm:gap-4"
            style={{ "--delay": "950ms" } as CSSProperties}
          >
            {trust.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-linen-200 text-brass-600">
                  <Icon className="size-4" />
                </span>
                <span>
                  <span className="block text-[0.9375rem] font-semibold text-navy-900">{title}</span>
                  <span className="block text-sm leading-snug text-muted">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-6 lg:pl-6 xl:pl-12">
          <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[28rem] lg:max-w-[33rem]">
            {/* arch-shaped window with the photo */}
            <div className="arch relative aspect-[4/5] overflow-hidden bg-linen-300 shadow-[0_40px_80px_-30px_rgb(13_26_58/0.45)]">
              <Image
                src={heroImage}
                alt="Living and dining space dressed with deep blue velvet curtains over soft white sheers"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 33rem, (min-width: 640px) 28rem, 22rem"
                className="object-cover object-[30%_50%]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
              {/* blinds tilt open on load */}
              <div className="blinds" aria-hidden="true">
                {Array.from({ length: SLATS }).map((_, i) => (
                  <span key={i} style={{ "--i": i } as CSSProperties} />
                ))}
              </div>
            </div>

            {/* thin arch outline offset behind the photo */}
            <div
              aria-hidden="true"
              className="arch absolute -inset-3 -z-10 border border-brass-500/40 [--arch-b:2.4rem] sm:-inset-4"
            />

            {/* rotating badge */}
            <div
              className="fade-up absolute -top-2 -right-3 sm:-right-8 lg:top-10 lg:-right-10"
              style={{ "--delay": "1500ms" } as CSSProperties}
            >
              <div className="relative grid size-28 place-items-center rounded-full bg-navy-900 text-linen-50 shadow-xl shadow-navy-900/30 sm:size-32">
                <svg viewBox="0 0 120 120" className="absolute inset-0 size-full animate-spin-slow" aria-hidden="true">
                  <defs>
                    <path id="badge-circle" d="M60 60 m-45 0 a45 45 0 1 1 90 0 a45 45 0 1 1 -90 0" />
                  </defs>
                  <text className="fill-brass-300 font-sans text-[9px] font-bold tracking-[0.18em] uppercase">
                    <textPath href="#badge-circle" textLength="280" lengthAdjust="spacing">
                      Free consultation ✦ All across Ghana ✦
                    </textPath>
                  </text>
                </svg>
                <IconCurtains className="size-8 text-linen-50" />
                <span className="sr-only">Free consultation, all across Ghana</span>
              </div>
            </div>

            {/* live open / closed sign (desktop) — the curtains open when B17 is open */}
            <div
              className="fade-up absolute -bottom-8 -left-10 hidden w-[21.5rem] lg:block"
              style={{ "--delay": "1700ms" } as CSSProperties}
            >
              <OpenStatus variant="card" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
