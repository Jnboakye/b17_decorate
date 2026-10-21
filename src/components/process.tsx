import type { CSSProperties } from "react";
import { SectionHeading } from "./ui";
import { IconChat, IconCurtains, IconDrill, IconRuler } from "./icons";

const steps = [
  {
    icon: IconChat,
    title: "Free consultation",
    text: "Tell us about your space on WhatsApp or by phone. We'll advise on styles, fabrics and options — free of charge.",
  },
  {
    icon: IconRuler,
    title: "Measure & choose",
    text: "We take precise measurements of every window and help you pick fabrics, colours, blinds and fittings.",
  },
  {
    icon: IconCurtains,
    title: "Made for your windows",
    text: "Your curtains and blinds are made to your exact measurements — no off-the-shelf compromises.",
  },
  {
    icon: IconDrill,
    title: "Install & enjoy",
    text: "We install everything neatly and leave your space tidy. Need your curtains washed later? We do that too.",
  },
];

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="grain relative bg-linen-200 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="process-title"
          align="center"
          eyebrow="How it works"
          title={
            <>
              From first chat to <span className="accent">finishing touch</span>
            </>
          }
          intro="A simple, personal process — whether it's one window or a whole building."
        />

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* connecting line */}
          <span
            aria-hidden="true"
            className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-[repeating-linear-gradient(90deg,rgb(138_106_58/0.5)_0_6px,transparent_6px_12px)] lg:block"
          />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${i * 120}ms` } as CSSProperties}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative grid size-14 place-items-center rounded-full bg-navy-900 text-brass-300 shadow-lg shadow-navy-900/20 ring-8 ring-linen-200">
                <Icon className="size-6" />
              </span>
              <span className="mt-6 font-display text-sm text-brass-700 italic">Step {String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-[1.65rem] leading-tight font-light text-navy-900">{title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
