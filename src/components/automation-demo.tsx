"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { IconMic } from "./icons";

type Mode = "curtains" | "blinds";
type Preset = "open" | "half" | "closed";

/** How open the window treatment is: 1 = fully open, 0 = closed. */
const OPENNESS: Record<Preset, number> = { open: 1, half: 0.5, closed: 0 };

const presets: { id: Preset; label: string }[] = [
  { id: "open", label: "Open" },
  { id: "half", label: "50%" },
  { id: "closed", label: "Close" },
];

function voiceLine(mode: Mode, preset: Preset) {
  const thing = mode === "curtains" ? "living room curtains" : "bedroom blinds";
  if (preset === "open") return `“Alexa, open the ${thing}.”`;
  if (preset === "half") return `“Hey Google, set the ${thing} to 50%.”`;
  return `“Alexa, close the ${thing}.”`;
}

function statusText(mode: Mode, preset: Preset, moving: boolean) {
  const noun = mode === "curtains" ? "Curtains" : "Blinds";
  if (moving) {
    if (preset === "open") return `Opening ${noun.toLowerCase()}…`;
    if (preset === "closed") return `Closing ${noun.toLowerCase()}…`;
    return `Moving ${noun.toLowerCase()} to 50%…`;
  }
  if (preset === "open") return `${noun} open`;
  if (preset === "closed") return `${noun} closed`;
  return `${noun} 50% open`;
}

/** Outside view through the window: sky, sun, a few buildings and a palm tree. */
function OutsideView() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 size-full" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9fc0dc" />
          <stop offset="0.6" stopColor="#d9e4ea" />
          <stop offset="1" stopColor="#f6dcb0" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff6dc" />
          <stop offset="0.35" stopColor="#ffe9b8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffe9b8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#sky)" />
      <circle cx="300" cy="95" r="70" fill="url(#sun)" />
      <circle cx="300" cy="95" r="17" fill="#fff8e6" />
      {/* distant buildings */}
      <g fill="#a9b9cc">
        <rect x="10" y="205" width="40" height="95" />
        <rect x="55" y="185" width="28" height="115" />
        <rect x="88" y="215" width="46" height="85" />
        <rect x="245" y="195" width="34" height="105" />
        <rect x="284" y="222" width="52" height="78" />
        <rect x="340" y="200" width="30" height="100" />
      </g>
      <g fill="#8197b1">
        <rect x="140" y="232" width="60" height="68" />
        <rect x="205" y="214" width="34" height="86" />
        <rect x="372" y="236" width="40" height="64" />
      </g>
      {/* palm tree */}
      <g fill="#1e3160">
        <path d="M108 300 C110 262 113 232 120 200 L124 201 C118 233 116 262 115 300 Z" />
        <path d="M122 200 C108 186 88 184 70 192 C90 186 106 190 121 203 Z" />
        <path d="M122 200 C112 178 96 168 80 166 C98 174 110 184 120 203 Z" />
        <path d="M122 200 C126 180 140 168 158 166 C142 176 132 186 124 203 Z" />
        <path d="M122 200 C140 188 160 190 176 200 C158 194 140 194 124 203 Z" />
        <path d="M122 200 C122 182 116 170 106 160 C120 170 126 184 125 202 Z" />
      </g>
    </svg>
  );
}

export default function AutomationDemo() {
  const [mode, setMode] = useState<Mode>("curtains");
  const [preset, setPreset] = useState<Preset>("closed");
  const [moving, setMoving] = useState(false);
  const [voiceKey, setVoiceKey] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const played = useRef(false);

  const go = (next: Preset) => {
    played.current = true;
    if (next === preset) return;
    setPreset(next);
    setMoving(true);
    setVoiceKey((k) => k + 1);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setMoving(false), 1900);
  };

  // Play a short demo (curtains opening) the first time the scene scrolls into view
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played.current) {
          played.current = true;
          window.setTimeout(() => go("open"), reduce ? 0 : 600);
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const open = OPENNESS[preset];
  // Curtain panels bunch up to ~16% of their width when fully open
  const panelScale = 0.16 + 0.84 * (1 - open);
  // Roller blind: fully down when closed, rolled up (leaving a sliver) when open
  const blindShift = -open * 94;

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-4">
      {/* Scene */}
      <div
        ref={sceneRef}
        aria-hidden="true"
        className="relative aspect-[4/3.3] overflow-hidden rounded-[1.5rem] bg-[#e8ddcd]"
      >
        {/* wall texture */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,#f3ebdf,transparent_70%)]" />
        {/* floor */}
        <div className="absolute inset-x-0 bottom-0 h-[15%] bg-[linear-gradient(180deg,#bfa486,#a98d6e)]">
          <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
        </div>
        {/* pool of daylight on the floor */}
        <div
          className="absolute bottom-0 left-[22%] h-[15%] w-[56%] bg-[radial-gradient(60%_100%_at_50%_0%,rgb(255_244_214/0.95),transparent)] transition-opacity duration-[1.8s] ease-curtain"
          style={{ opacity: open * 0.9 } as CSSProperties}
        />

        {/* window */}
        <div className="absolute top-[17%] right-[21%] bottom-[22%] left-[21%] overflow-hidden rounded-[6px] bg-white shadow-[inset_0_0_0_7px_#fbf7f1,0_10px_30px_-10px_rgb(13_26_58/0.35)]">
          <div className="absolute inset-[7px] overflow-hidden">
            <OutsideView />
            {/* mullions */}
            <div className="absolute inset-y-0 left-1/2 w-[6px] -translate-x-1/2 bg-[#fbf7f1]" />
            <div className="absolute inset-x-0 top-[42%] h-[6px] bg-[#fbf7f1]" />
            {/* roller blind (blinds mode) */}
            <div
              className="absolute inset-x-0 top-0 h-full transition-transform duration-[2s] ease-curtain"
              style={{
                transform: `translateY(${mode === "blinds" ? blindShift : -100}%)`,
              }}
            >
              <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,#f1e8da_0_16px,rgb(241_232_218/0.45)_16px_27px)] shadow-[0_6px_14px_rgb(13_26_58/0.18)]" />
              <div className="absolute inset-x-0 bottom-0 h-[7px] rounded-full bg-navy-800" />
            </div>
          </div>
        </div>
        {/* blind cassette */}
        <div
          className={`absolute top-[15.2%] right-[20%] left-[20%] h-[3.2%] rounded-sm bg-[linear-gradient(180deg,#fbf7f1,#e6dccd)] shadow-sm transition-opacity duration-500 ${
            mode === "blinds" ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* curtains (curtains mode) */}
        <div
          className={`absolute top-[9%] right-[9%] bottom-[14%] left-[9%] transition-opacity duration-500 ${
            mode === "curtains" ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* rod */}
          <div className="absolute -inset-x-3 top-0 h-[7px] rounded-full bg-gradient-to-b from-brass-300 to-brass-600 shadow-sm" />
          <div className="absolute top-[-3px] -left-4 size-[13px] rounded-full bg-brass-500" />
          <div className="absolute top-[-3px] -right-4 size-[13px] rounded-full bg-brass-500" />
          {/* panels */}
          {(["left", "right"] as const).map((side) => (
            <div
              key={side}
              className={`pleats absolute top-[3px] bottom-0 w-1/2 shadow-[0_10px_25px_-8px_rgb(13_26_58/0.45)] transition-transform duration-[1.8s] ease-curtain [--fabric:#23376a] ${
                side === "left" ? "left-0 origin-left" : "right-0 origin-right"
              }`}
              style={{ transform: `scaleX(${panelScale})` }}
            >
              {/* heading tape + hem */}
              <div className="absolute inset-x-0 top-0 h-[5%] bg-black/15" />
              <div className="absolute inset-x-0 bottom-0 h-[3%] bg-black/20" />
            </div>
          ))}
        </div>

        {/* room dims when the window is covered */}
        <div
          className="pointer-events-none absolute inset-0 bg-navy-950 transition-opacity duration-[1.8s] ease-curtain"
          style={{ opacity: (1 - open) * 0.32 }}
        />

        {/* voice command bubble */}
        <div
          key={voiceKey}
          className={`absolute top-3 left-3 max-w-[72%] sm:top-4 sm:left-4 sm:max-w-[78%] ${voiceKey > 0 ? "fade-up" : "opacity-0"}`}
        >
          <div className="flex items-center gap-2.5 rounded-2xl rounded-tl-md bg-white/90 px-3 py-2 text-[0.6875rem] leading-snug font-medium text-navy-900 shadow-lg shadow-navy-900/15 backdrop-blur sm:px-3.5 sm:py-2.5 sm:text-[0.8125rem]">
            <span className="relative grid size-7 shrink-0 place-items-center rounded-full bg-navy-900 text-brass-300">
              <IconMic className="size-3.5" />
              <span className="absolute inset-0 animate-ping rounded-full bg-navy-900/30 [animation-iteration-count:2]" />
            </span>
            <span>{voiceLine(mode, preset)}</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4 px-2 pt-5 pb-2 sm:flex-row sm:items-center sm:justify-between sm:px-3">
        <div className="flex items-center gap-3">
          <span
            className={`size-2.5 rounded-full ${moving ? "animate-pulse bg-brass-300" : "bg-emerald-400"}`}
            aria-hidden="true"
          />
          <p className="text-sm font-medium text-linen-100/85" aria-live="polite">
            {statusText(mode, preset, moving)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex rounded-full bg-white/[0.07] p-1" role="group" aria-label="Window type">
            {(["curtains", "blinds"] as const).map((m) => (
              <button
                key={m}
                type="button"
                aria-pressed={mode === m}
                onClick={() => setMode(m)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold capitalize transition-colors ${
                  mode === m ? "bg-linen-50 text-navy-900" : "text-linen-100/70 hover:text-linen-50"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="flex rounded-full bg-white/[0.07] p-1" role="group" aria-label="Position">
            {presets.map((p) => (
              <button
                key={p.id}
                type="button"
                aria-pressed={preset === p.id}
                onClick={() => go(p.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  preset === p.id ? "bg-brass-400 text-navy-950" : "text-linen-100/70 hover:text-linen-50"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
