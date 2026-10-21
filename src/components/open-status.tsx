"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { describeStatus, getBusinessStatus, type BusinessStatus } from "@/lib/hours";

type State = { status: BusinessStatus; showZone: boolean };

/**
 * Live opening status, worked out in the visitor's browser from the hours in
 * src/content/site.ts (Ghana time). Re-checks every 30 seconds.
 */
function useBusinessStatus() {
  const [state, setState] = useState<State | null>(null);
  useEffect(() => {
    const update = () =>
      setState({
        status: getBusinessStatus(new Date()),
        // Visitors outside GMT see "GMT" after the times so there's no confusion
        showZone: new Date().getTimezoneOffset() !== 0,
      });
    update();
    const id = window.setInterval(update, 30_000);
    const onVisible = () => document.visibilityState === "visible" && update();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);
  return state;
}

function Dot({ open, size = "size-2" }: { open: boolean; size?: string }) {
  return (
    <span className={`relative flex shrink-0 ${size}`} aria-hidden="true">
      {open && <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />}
      <span className={`relative inline-flex size-full rounded-full ${open ? "bg-emerald-500" : "bg-red-500"}`} />
    </span>
  );
}

const miniPleats: CSSProperties = {
  backgroundColor: "#c9a66b",
  backgroundImage:
    "repeating-linear-gradient(90deg, rgb(255 255 255 / 0.28) 0 1px, transparent 1px 3px, rgb(0 0 0 / 0.16) 3px 4px)",
};

/** A tiny window whose curtains open when B17 is open and close when it's closed. */
function MiniWindow({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block size-12 shrink-0 overflow-hidden rounded-xl bg-navy-900">
      {/* sky: day when open, night when closed */}
      <span
        className={`absolute inset-x-[6px] top-[8px] bottom-[6px] overflow-hidden rounded-[3px] transition-[background-color] duration-1000 ${
          open ? "bg-[#cfe0ea]" : "bg-navy-700"
        }`}
      >
        <span
          className={`absolute inset-0 transition-opacity duration-1000 ${open ? "opacity-100" : "opacity-0"}`}
          style={{ background: "linear-gradient(180deg,#9fc0dc,#ffe7b3)" }}
        />
        {/* sun (open) / moon (closed) */}
        <span
          className={`absolute top-[4px] right-[5px] size-[7px] rounded-full transition-all duration-1000 ${
            open
              ? "bg-[#fff6dc] shadow-[0_0_6px_2px_rgb(255_233_184/0.95)]"
              : "bg-transparent shadow-[inset_-2px_-1px_0_0_#efe7db]"
          }`}
        />
        <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-white/45" />
      </span>
      {/* curtain rod */}
      <span className="absolute inset-x-[4px] top-[5px] h-[2px] rounded-full bg-brass-300" />
      {/* curtain panels */}
      {(["left", "right"] as const).map((side) => (
        <span
          key={side}
          className={`absolute top-[6px] bottom-[5px] w-[20px] transition-transform duration-[1.4s] ease-curtain ${
            side === "left" ? "left-[4px] origin-left" : "right-[4px] origin-right"
          }`}
          style={{ ...miniPleats, transform: `scaleX(${open ? 0.25 : 1})` }}
        />
      ))}
    </span>
  );
}

type Props = {
  /** card = creative desktop hero card · pill = compact light pill · panel = for dark backgrounds */
  variant: "card" | "pill" | "panel";
  className?: string;
};

export default function OpenStatus({ variant, className = "" }: Props) {
  const state = useBusinessStatus();
  const open = state?.status.open ?? false;
  const detail = state ? describeStatus(state.status, state.showZone) : "Checking opening hours";
  const ready = state ? "opacity-100" : "opacity-0";

  if (variant === "card") {
    return (
      <div
        role="status"
        className={`flex items-center gap-3.5 rounded-2xl border border-white/60 bg-linen-50/90 p-3.5 pr-4 shadow-[0_20px_50px_-20px_rgb(13_26_58/0.45)] backdrop-blur-md transition-opacity duration-700 ${ready} ${className}`}
      >
        <MiniWindow open={open} />
        <span className="min-w-0 flex-1">
          <span className="block text-[0.9375rem] font-semibold text-navy-900">
            {open ? "We're open" : "We're closed"}
          </span>
          <span className="mt-1 flex items-center gap-1.5 text-xs leading-snug text-muted">
            <Dot open={open} />
            <span>{detail}</span>
          </span>
        </span>
        <span
          aria-hidden="true"
          className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-500 ${
            open ? "bg-emerald-500" : "bg-red-500"
          }`}
        >
          <span
            className={`absolute top-1 left-1 size-4 rounded-full bg-white shadow transition-transform duration-500 ease-out-expo ${
              open ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </span>
      </div>
    );
  }

  if (variant === "panel") {
    return (
      <div
        role="status"
        className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-[0.9375rem] transition-opacity duration-700 ${ready} ${className}`}
      >
        <Dot open={open} size="size-2.5" />
        <span className={`font-semibold ${open ? "text-emerald-300" : "text-red-300"}`}>
          {open ? "Open now" : "Closed now"}
        </span>
        <span className="text-linen-100/70">· {detail}</span>
      </div>
    );
  }

  // pill
  return (
    <div
      role="status"
      className={`inline-flex max-w-full items-center gap-2.5 rounded-full bg-white/80 px-4 py-2.5 text-sm shadow-[0_6px_20px_-12px_rgb(13_26_58/0.4)] ring-1 ring-navy-900/10 backdrop-blur transition-opacity duration-700 ${ready} ${className}`}
    >
      <Dot open={open} />
      <span className={`font-semibold whitespace-nowrap ${open ? "text-emerald-700" : "text-red-600"}`}>
        {open ? "Open now" : "Closed now"}
      </span>
      <span className="truncate text-muted">· {detail}</span>
    </div>
  );
}
