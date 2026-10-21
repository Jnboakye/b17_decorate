import Image from "next/image";
import type { CSSProperties } from "react";
import curtainsImg from "@/assets/images/curtains-chevron.jpg";
import blindsImg from "@/assets/images/blinds-venetian.jpg";
import installImg from "@/assets/images/sheers-window.jpg";
import { SectionHeading } from "./ui";
import { IconArrowRight, IconBlinds, IconDrill, IconDrop, IconRemote } from "./icons";

function Chips({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide ${
            light
              ? "border border-white/25 bg-white/10 text-linen-50 backdrop-blur-sm"
              : "border border-navy-900/10 bg-linen-100 text-navy-900/75"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Num({ n, light = false }: { n: string; light?: boolean }) {
  return (
    <span
      className={`font-display text-sm italic ${light ? "text-brass-300" : "text-brass-600"}`}
    >
      {n}
    </span>
  );
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-linen-100 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="services-title"
            eyebrow="What we do"
            title={
              <>
                Beautiful windows, <span className="accent">start to finish</span>
              </>
            }
            intro="Curtains and blinds are our speciality. We help you choose, make everything to your exact window measurements, install it properly — and keep it looking fresh."
          />
          <a
            data-reveal
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start border-b border-navy-900/30 pb-1 text-[0.9375rem] font-semibold text-navy-900 transition-colors hover:border-navy-900 lg:self-auto"
          >
            Get a free quote
            <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Custom curtains — the hero card */}
          <article
            data-reveal
            className="group relative isolate flex min-h-[32rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-navy-900 p-7 sm:p-9 md:row-span-2"
          >
            <Image
              src={curtainsImg}
              alt="Floor-length grey chevron curtains layered over white sheers in a bright living room"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
              className="-z-10 object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.04]"
            />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/95 via-navy-950/60 via-45% to-navy-950/0" />
            <span className="self-start rounded-full border border-white/15 bg-navy-950/50 px-3.5 py-1 backdrop-blur-sm">
              <Num n="01 — Our speciality" light />
            </span>
            <h3 className="mt-4 text-[2.4rem] leading-[1.05] font-light text-linen-50">
              <span className="whitespace-nowrap">Custom-made</span> curtains
            </h3>
            <p className="mt-4 max-w-sm leading-relaxed text-linen-100/85">
              Made to your exact window size in the fabric, colour and style you love — from airy
              sheers to blackout, linen and rich velvet.
            </p>
            <Chips light items={["Sheers", "Blackout", "Linen", "Velvet", "Any size"]} />
          </article>

          {/* Window blinds */}
          <article
            data-reveal
            style={{ "--reveal-delay": "100ms" } as CSSProperties}
            className="group flex flex-col overflow-hidden rounded-[2rem] bg-linen-50 ring-1 ring-navy-900/[0.06]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={blindsImg}
                alt="Close-up of light venetian blinds fitted to a window"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-[50%_35%] transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.05]"
              />
            </div>
            <div className="flex flex-1 flex-col p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <Num n="02" />
                <IconBlinds className="size-6 text-brass-600" />
              </div>
              <h3 className="mt-3 text-[1.85rem] leading-tight font-light text-navy-900">Window blinds</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Roller, zebra (day &amp; night), venetian, vertical and Roman blinds for clean lines and
                precise control of light and privacy.
              </p>
            </div>
          </article>

          {/* Installation */}
          <article
            data-reveal
            style={{ "--reveal-delay": "200ms" } as CSSProperties}
            className="group flex flex-col overflow-hidden rounded-[2rem] bg-linen-50 ring-1 ring-navy-900/[0.06]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={installImg}
                alt="Floor-to-ceiling white sheer curtains on a ceiling track beside a tall window"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-[50%_40%] transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.05]"
              />
            </div>
            <div className="flex flex-1 flex-col p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <Num n="03" />
                <IconDrill className="size-6 text-brass-600" />
              </div>
              <h3 className="mt-3 text-[1.85rem] leading-tight font-light text-navy-900">Expert installation</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Tracks, rods, brackets and blinds fitted straight, secure and neat — on any wall or
                ceiling, at any height.
              </p>
            </div>
          </article>

          {/* Curtain washing */}
          <article
            data-reveal
            className="relative flex flex-col overflow-hidden rounded-[2rem] bg-linen-200 p-7 sm:p-8"
          >
            {/* fabric swatch with bubbles */}
            <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 bottom-0 w-24 sm:w-28">
              <div className="pleats absolute inset-0 [--fabric:#e5d6bd] [mask-image:linear-gradient(90deg,transparent,#000_45%)]" />
              <span className="absolute top-[18%] left-2 size-7 rounded-full border border-white/80 bg-white/30" />
              <span className="absolute top-[38%] left-10 size-4 rounded-full border border-white/80 bg-white/30" />
              <span className="absolute top-[56%] left-4 size-10 rounded-full border border-white/80 bg-white/25" />
            </div>
            <div className="relative max-w-[78%]">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-linen-50 text-brass-600">
                  <IconDrop className="size-5" />
                </span>
                <Num n="04" />
              </div>
              <h3 className="mt-6 text-[1.85rem] leading-tight font-light text-navy-900">Curtain washing</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Professional washing that keeps your curtains fresh, bright and hanging beautifully.
              </p>
            </div>
          </article>

          {/* Window automation */}
          <article
            data-reveal
            style={{ "--reveal-delay": "100ms" } as CSSProperties}
            className="relative flex flex-col overflow-hidden rounded-[2rem] bg-navy-900 p-7 text-linen-50 sm:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-[radial-gradient(closest-side,rgb(201_166_107/0.28),transparent)]"
            />
            <div className="relative flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-white/10 text-brass-300">
                <IconRemote className="size-5" />
              </span>
              <Num n="05" light />
            </div>
            {/* mini control */}
            <div aria-hidden="true" className="relative mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5">
              <div className="flex items-center justify-between text-xs text-linen-100/70">
                <span>Bedroom blinds</span>
                <span className="font-semibold text-brass-300">75% open</span>
              </div>
              <div className="mt-2.5 h-1.5 rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brass-500 to-brass-300" />
              </div>
            </div>
            <h3 className="relative mt-6 text-[1.85rem] leading-tight font-light">Window automation</h3>
            <p className="relative mt-3 leading-relaxed text-linen-100/75">
              Motorised curtains and blinds you control with a remote, your phone or your voice.
            </p>
            <a
              href="#automation"
              className="group relative mt-6 inline-flex items-center gap-2 self-start text-[0.9375rem] font-semibold text-brass-300 hover:text-brass-200"
            >
              See how it works
              <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
