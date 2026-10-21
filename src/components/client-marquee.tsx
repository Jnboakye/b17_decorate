import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { clientLogos, clientNames, type ClientLogo, type ClientName } from "@/content/clients";
import { IconSparkle } from "./icons";

/** Logo height (px) that gives wide and square logos a similar visual weight. */
function logoSize({ logo, scale = 1 }: ClientLogo) {
  const aspect = logo.width / logo.height;
  const h = Math.round(Math.min(60, Math.max(34, Math.sqrt(6200 / aspect))) * scale);
  return { h, w: Math.round(h * aspect) };
}

function LogoItem({ client }: { client: ClientLogo }) {
  const { w, h } = logoSize(client);
  return (
    <Image
      src={client.logo}
      alt=""
      width={w}
      height={h}
      draggable={false}
      className="block h-[calc(var(--h)*var(--logo-scale))] w-auto max-w-none opacity-90 transition duration-500 select-none hover:scale-[1.04] hover:opacity-100"
      style={{ "--h": `${h}px` } as CSSProperties}
    />
  );
}

function NameItem({ client }: { client: ClientName }) {
  return (
    <span className="flex flex-col items-center text-center leading-none whitespace-nowrap">
      <span className="font-display text-[1.35rem] font-normal tracking-[-0.01em] text-navy-900/80 sm:text-[1.55rem]">
        {client.name}
      </span>
      {client.detail && (
        <span className="mt-2 text-[0.625rem] font-bold tracking-[0.32em] text-brass-700 uppercase">
          {client.detail}
        </span>
      )}
    </span>
  );
}

/**
 * One endlessly scrolling row. The items are repeated so each half of the
 * track is wider than any screen, then the whole track slides by 50%.
 */
function Row({
  items,
  minPerHalf,
  seconds,
  reverse = false,
  separator,
}: {
  items: ReactNode[];
  minPerHalf: number;
  seconds: number;
  reverse?: boolean;
  separator?: ReactNode;
}) {
  const reps = Math.max(1, Math.ceil(minPerHalf / items.length));
  const half = Array.from({ length: reps }, () => items).flat();
  return (
    <div className="marquee-viewport group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <ul
        className={`marquee-track flex w-max items-center group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ "--marquee-duration": `${seconds}s` } as CSSProperties}
      >
        {[...half, ...half].map((item, i) => (
          <li key={i} className="flex shrink-0 items-center">
            <span className="flex items-center px-7 sm:px-10">{item}</span>
            {separator}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Two rows moving in opposite directions: client logos, then client names. */
export default function ClientMarquee() {
  if (!clientLogos.length && !clientNames.length) return null;

  return (
    <section
      aria-labelledby="clients-title"
      className="overflow-hidden border-y border-navy-900/[0.08] bg-linen-50 py-14 [--logo-scale:0.82] sm:py-16 sm:[--logo-scale:1]"
    >
      <div className="container-x">
        <h2
          id="clients-title"
          className="text-center font-sans text-xs leading-relaxed font-bold tracking-[0.22em] text-muted uppercase"
        >
          Trusted by hotels, hospitals, schools, churches &amp; homes across Ghana
        </h2>
        <ul className="sr-only">
          {[...clientLogos, ...clientNames].map((c) => (
            <li key={c.name}>{"detail" in c && c.detail ? `${c.name} ${c.detail}` : c.name}</li>
          ))}
        </ul>
      </div>

      <div aria-hidden="true" className="mt-10 space-y-9 sm:mt-12 sm:space-y-10">
        {clientLogos.length > 0 && (
          <Row
            items={clientLogos.map((c) => <LogoItem key={c.name} client={c} />)}
            minPerHalf={14}
            seconds={clientLogos.length * 2 * 3.4}
          />
        )}
        {clientNames.length > 0 && (
          <Row
            reverse
            items={clientNames.map((c) => <NameItem key={c.name} client={c} />)}
            minPerHalf={12}
            seconds={clientNames.length * 2 * 5.2}
            separator={<IconSparkle className="size-2.5 shrink-0 text-brass-500" />}
          />
        )}
      </div>
    </section>
  );
}
