import type { CSSProperties, ReactNode } from "react";
import { SectionHeading } from "./ui";
import { IconCamera, IconLamp, IconSpeaker } from "./icons";

const NAVY = "#0d1a3a";
const BRASS = "#b08d57";

function CameraArt() {
  return (
    <svg viewBox="0 0 320 200" className="size-full" aria-hidden="true">
      <defs>
        <linearGradient id="fov" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor={BRASS} stopOpacity="0.32" />
          <stop offset="1" stopColor={BRASS} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* wall */}
      <rect x="270" y="0" width="50" height="200" fill="#e4d8c6" />
      {/* sweeping field of view */}
      <g style={{ transformOrigin: "122px 98px", animation: "sweep 7s ease-in-out infinite" }}>
        <path d="M122 98 L-10 34 L-10 178 Z" fill="url(#fov)" />
        <path d="M122 98 L-10 34 M122 98 L-10 178" stroke={BRASS} strokeOpacity="0.45" strokeDasharray="4 6" />
      </g>
      {/* bracket */}
      <rect x="254" y="66" width="16" height="58" rx="4" fill={NAVY} />
      <path d="M256 95 H214" stroke={NAVY} strokeWidth="9" strokeLinecap="round" />
      {/* camera body */}
      <g transform="rotate(-11 180 92)">
        <rect x="122" y="72" width="104" height="42" rx="13" fill="#fcfaf6" stroke={NAVY} strokeWidth="3" />
        <rect x="112" y="64" width="118" height="9" rx="4.5" fill={NAVY} />
        <circle cx="126" cy="93" r="15" fill={NAVY} />
        <circle cx="126" cy="93" r="8" fill="#2d4277" />
        <circle cx="122.5" cy="89.5" r="2.6" fill="#fff" opacity="0.75" />
        <circle cx="208" cy="84" r="3.6" fill="#e0533f" style={{ animation: "blink 1.8s ease-in-out infinite" }} />
        <path d="M160 104 H198" stroke={NAVY} strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function SpeakerArt() {
  return (
    <svg viewBox="0 0 320 200" className="size-full" aria-hidden="true">
      <defs>
        <pattern id="mesh" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.1" fill="#fff" />
        </pattern>
      </defs>
      {/* sound ripples */}
      <g fill="none" stroke={BRASS} strokeWidth="1.5">
        {[0, 0.9, 1.8].map((delay) => (
          <circle
            key={delay}
            cx="214"
            cy="74"
            r="44"
            style={{
              transformOrigin: "214px 74px",
              animation: `ripple 2.7s ease-out ${delay}s infinite`,
            }}
          />
        ))}
      </g>
      {/* speaker */}
      <path d="M182 74 V164 a32 10 0 0 0 64 0 V74 Z" fill={NAVY} />
      <path d="M182 80 V164 a32 10 0 0 0 64 0 V80 Z" fill="url(#mesh)" opacity="0.14" />
      <ellipse cx="214" cy="74" rx="32" ry="10" fill="#1e3160" />
      <ellipse
        cx="214"
        cy="74"
        rx="26"
        ry="7"
        fill="none"
        stroke="#dcc296"
        strokeWidth="2.5"
        style={{ animation: "glow 2.2s ease-in-out infinite" }}
      />
      {/* speech bubble */}
      <g transform="translate(26 44)">
        <rect width="136" height="46" rx="16" fill="#fcfaf6" stroke={NAVY} strokeOpacity="0.1" />
        <path d="M118 44 L134 58 L128 42 Z" fill="#fcfaf6" />
        <text x="16" y="28" fontSize="12.5" fontWeight="600" fill={NAVY} fontFamily="var(--font-manrope), sans-serif">
          “Close the curtains”
        </text>
      </g>
      {/* table line */}
      <rect x="150" y="170" width="140" height="5" rx="2.5" fill={NAVY} opacity="0.12" />
    </svg>
  );
}

function LampArt() {
  const lamps = [
    { x: 92, cord: 52, w: 46, fill: NAVY, delay: "0s" },
    { x: 160, cord: 78, w: 52, fill: BRASS, delay: "0.9s" },
    { x: 228, cord: 52, w: 46, fill: NAVY, delay: "1.8s" },
  ];
  return (
    <svg viewBox="0 0 320 200" className="size-full" aria-hidden="true">
      <defs>
        <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe3a6" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ffe3a6" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="pool" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffd98a" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffd98a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="320" height="3" fill={NAVY} opacity="0.12" />
      {lamps.map((l) => {
        const top = l.cord + l.w / 2;
        return (
          <g key={l.x}>
            <line x1={l.x} y1="0" x2={l.x} y2={l.cord} stroke={NAVY} strokeWidth="1.5" />
            <g style={{ animation: `glow 3.4s ease-in-out ${l.delay} infinite` }}>
              <path d={`M${l.x - l.w / 2 + 4} ${top} L${l.x - l.w} 184 H${l.x + l.w} L${l.x + l.w / 2 - 4} ${top} Z`} fill="url(#beam)" opacity="0.7" />
              <ellipse cx={l.x} cy="182" rx={l.w} ry="6" fill="url(#pool)" />
            </g>
            <path d={`M${l.x - l.w / 2} ${top} a${l.w / 2} ${l.w / 2} 0 0 1 ${l.w} 0 Z`} fill={l.fill} />
            <ellipse cx={l.x} cy={top + 1} rx={l.w / 5} ry="3.4" fill="#fff4d6" />
          </g>
        );
      })}
      <rect x="28" y="184" width="264" height="5" rx="2.5" fill={NAVY} opacity="0.85" />
    </svg>
  );
}

const extras: { title: string; text: string; icon: typeof IconCamera; art: ReactNode }[] = [
  {
    title: "Security cameras (CCTV)",
    text: "Indoor and outdoor camera systems installed neatly, with live viewing set up on your phone.",
    icon: IconCamera,
    art: <CameraArt />,
  },
  {
    title: "Smart home assistants",
    text: "Amazon Alexa and Google Gemini devices set up and connected to your lights, curtains and more.",
    icon: IconSpeaker,
    art: <SpeakerArt />,
  },
  {
    title: "Interior decor lighting",
    text: "Pendant, wall, strip and accent lighting that sets the mood and shows your interior at its best.",
    icon: IconLamp,
    art: <LampArt />,
  },
];

export default function Extras() {
  return (
    <section id="smart-home" aria-labelledby="extras-title" className="bg-linen-50 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="extras-title"
          eyebrow="More from B17"
          title={
            <>
              Smart, secure &amp; <span className="accent">beautifully lit</span>
            </>
          }
          intro="Beyond windows, we install the technology and lighting that make your home or office safer, smarter and more inviting."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
          {extras.map(({ title, text, icon: Icon, art }, i) => (
            <article
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${i * 110}ms` } as CSSProperties}
              className="group flex flex-col rounded-[2rem] bg-linen-100 p-3 ring-1 ring-navy-900/[0.06] transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgb(13_26_58/0.35)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-linen-200">{art}</div>
              <div className="px-4 pt-6 pb-5 sm:px-5">
                <div className="flex items-center gap-3">
                  <Icon className="size-5 text-brass-600" />
                  <h3 className="text-[1.6rem] leading-tight font-light text-navy-900">{title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
