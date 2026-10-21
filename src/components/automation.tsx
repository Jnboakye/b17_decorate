import type { CSSProperties } from "react";
import AutomationDemo from "./automation-demo";
import { ButtonLink, SectionHeading } from "./ui";
import { IconLadder, IconRemote, IconSun, IconWhatsApp } from "./icons";
import { whatsappUrl } from "@/lib/whatsapp";
import { site } from "@/content/site";

const features = [
  {
    icon: IconRemote,
    title: "Remote, app or voice",
    text: "Control every window from a remote, your phone, or a voice assistant like Alexa or Google.",
  },
  {
    icon: IconSun,
    title: "Schedules that follow the sun",
    text: "Open with the morning light and close at sunset — automatically, even when you're away.",
  },
  {
    icon: IconLadder,
    title: "Made for hard-to-reach windows",
    text: "Ideal for tall, wide and high windows in homes, offices and commercial spaces.",
  },
];

export default function Automation() {
  return (
    <section
      id="automation"
      aria-labelledby="automation-title"
      className="relative isolate overflow-hidden bg-navy-900 py-24 text-linen-50 sm:py-32"
    >
      {/* background glow + fine lines */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] left-[-10%] -z-10 size-[44rem] rounded-full bg-[radial-gradient(closest-side,rgb(201_166_107/0.16),transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:84px_100%] [mask-image:linear-gradient(180deg,transparent,#000_30%,#000_70%,transparent)]"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="automation-title"
            tone="light"
            eyebrow="Window automation"
            title={
              <>
                Open your curtains with a tap — <span className="accent-light">or just ask.</span>
              </>
            }
            intro="Motorised curtains and blinds bring your windows into the smart home. Wake up to daylight, keep the heat out in the afternoon and close up at night — without lifting a finger."
          />

          <ul className="mt-10 space-y-6">
            {features.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}
                className="flex gap-4"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-brass-300">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block font-semibold text-linen-50">{title}</span>
                  <span className="mt-1 block leading-relaxed text-linen-100/70">{text}</span>
                </span>
              </li>
            ))}
          </ul>

          <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={whatsappUrl(`Hello ${site.name}, I'm interested in motorised curtains / blinds. Can you tell me more?`)}
              external
              variant="brass"
              icon={<IconWhatsApp className="size-5" />}
            >
              Ask about automation
            </ButtonLink>
          </div>
        </div>

        <div data-reveal className="lg:col-span-7" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
          <AutomationDemo />
          <p className="mt-4 text-center text-xs text-linen-100/50">
            Try it — tap the buttons to open and close the window.
          </p>
        </div>
      </div>
    </section>
  );
}
