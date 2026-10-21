import Image from "next/image";
import type { CSSProperties } from "react";
import livingImg from "@/assets/images/living-blue-drapes.jpg";
import { ButtonLink, SectionHeading } from "./ui";
import { IconBuilding, IconHome, IconWindow } from "./icons";

const sectors = [
  {
    icon: IconHome,
    title: "Homes & apartments",
    text: "Bedrooms, living rooms, kitchens and whole houses — styled around the way you live.",
  },
  {
    icon: IconBuilding,
    title: "Offices & commercial spaces",
    text: "Offices, hotels, shops, restaurants and more — measured carefully and installed with minimal disruption.",
  },
  {
    icon: IconWindow,
    title: "Just one room",
    text: "One room, or even one window? We'll gladly take it on, with the same care as a big project.",
  },
];

export default function Sectors() {
  return (
    <section aria-labelledby="sectors-title" className="grain relative bg-linen-100 py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="relative lg:col-span-5">
          <div className="arch relative aspect-[4/5] overflow-hidden bg-linen-300 shadow-[0_40px_80px_-40px_rgb(13_26_58/0.5)]">
            <Image
              src={livingImg}
              alt="Open-plan living room with full-length blue curtains and sheers"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 36vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-2 bottom-10 rounded-2xl bg-navy-900 px-6 py-5 text-linen-50 shadow-xl shadow-navy-900/25 sm:-right-8">
            <p className="font-display text-4xl leading-none font-light">
              No job
            </p>
            <p className="mt-1 text-sm text-linen-100/75">too big or too small</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading
            id="sectors-title"
            eyebrow="Who we work with"
            title={
              <>
                Big projects. Small projects. <span className="accent">We do them all.</span>
              </>
            }
            intro="We work on residential and commercial projects of every size, anywhere in Ghana — and we're open to everything."
          />

          <ul className="mt-10 divide-y divide-navy-900/10 border-y border-navy-900/10">
            {sectors.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}
                className="flex gap-5 py-6"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-linen-50 text-brass-600 ring-1 ring-navy-900/[0.06]">
                  <Icon className="size-[1.35rem]" />
                </span>
                <span>
                  <span className="block font-display text-2xl font-light text-navy-900">{title}</span>
                  <span className="mt-1.5 block leading-relaxed text-muted">{text}</span>
                </span>
              </li>
            ))}
          </ul>

          <div data-reveal className="mt-10">
            <ButtonLink href="#contact" arrow>
              Tell us about your space
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
