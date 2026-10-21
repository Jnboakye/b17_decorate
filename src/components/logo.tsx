/**
 * B17 Window Blinds & Curtains logo.
 *
 * - <Logo /> is the full lockup: the round B17 badge (traced from the original
 *   logo.png, so it stays pin-sharp) next to the "Window Blinds & Curtains" wordmark.
 *   Its size follows the font size, so scale it with a text-size class,
 *   e.g. <Logo className="text-[16px]" />. Colour follows the text colour.
 * - <Logo variant="mark" /> is the round badge on its own (an SVG; size it with
 *   width/height classes).
 */

import type { SVGProps } from "react";

const MARK = [
  "M60 4310 a4360 4360 0 1 0 8720 0 a4360 4360 0 1 0 -8720 0 z M6605 6474 c61 -1 238 -7 395 -12 157 -6 427 -12 600 -14 328 -4 352 -7 365 -48 9 -28 -62 -231 -140 -400 -37 -80 -98 -210 -135 -290 -37 -80 -72 -163 -79 -185 -22 -72 -297 -653 -375 -795 -43 -76 -113 -238 -165 -380 -27 -74 -75 -196 -106 -270 -69 -162 -210 -563 -237 -675 -56 -229 -119 -478 -128 -499 -14 -39 -50 -269 -60 -386 -8 -100 -10 -106 -39 -132 -31 -28 -31 -28 -256 -28 -240 0 -271 5 -281 47 -23 89 111 574 235 853 16 36 43 108 61 160 56 167 70 204 100 270 16 36 52 121 80 190 28 69 64 154 80 190 50 112 100 232 130 310 55 143 82 206 172 400 101 218 286 601 322 670 14 25 33 68 45 97 11 28 54 104 96 169 41 65 75 123 75 129 0 7 18 40 40 74 51 79 58 110 31 135 -19 17 -51 18 -693 14 -708 -5 -707 -5 -756 -51 -31 -29 -115 -177 -177 -311 -55 -119 -86 -153 -129 -142 -45 11 -47 27 -53 419 -6 398 -4 424 42 467 45 42 24 42 940 24z m-1497 -44 c18 -11 38 -32 44 -48 9 -20 12 -484 13 -1862 1 -1835 1 -1835 22 -1882 24 -53 62 -78 120 -78 56 0 111 -18 123 -40 23 -43 7 -140 -28 -166 -23 -18 -888 -25 -945 -8 -23 7 -47 55 -47 94 0 69 30 96 130 115 59 12 87 33 111 82 24 48 24 48 24 1515 0 1362 -1 1468 -17 1484 -26 26 -69 2 -143 -80 -80 -89 -193 -191 -223 -200 -40 -13 -72 32 -72 101 0 46 -6 68 -30 108 -49 82 -38 124 49 181 74 49 344 326 396 408 71 110 192 259 224 276 53 28 203 28 249 0z m-2708 -5 c441 -18 575 -28 625 -49 21 -9 74 -25 119 -36 44 -11 97 -31 116 -44 20 -13 60 -36 89 -51 89 -45 229 -189 289 -297 149 -270 147 -608 -7 -908 -92 -179 -209 -289 -420 -396 -126 -64 -121 -76 56 -135 277 -92 564 -359 693 -643 49 -108 62 -188 62 -386 0 -300 -14 -364 -126 -560 -158 -277 -374 -462 -621 -530 -44 -13 -109 -31 -145 -42 -37 -11 -125 -23 -205 -29 -196 -14 -1724 -20 -1748 -7 -25 13 -46 67 -40 101 9 47 52 73 131 80 118 11 179 47 216 126 21 46 21 46 21 1746 0 1700 0 1700 -23 1742 -34 65 -83 108 -138 123 -98 26 -120 67 -69 128 53 63 71 66 390 72 160 3 308 7 330 7 22 1 204 -4 405 -12z",
  "M2170 6174 c-49 -10 -78 -26 -91 -51 -12 -21 -14 -146 -14 -704 0 -672 0 -678 21 -706 34 -46 66 -55 208 -61 189 -7 429 47 565 128 322 189 434 707 236 1091 -9 17 -50 66 -92 109 -72 76 -78 80 -191 124 -65 25 -139 50 -167 56 -54 11 -433 22 -475 14z",
  "M2090 4375 c-25 -27 -25 -27 -31 -733 -8 -896 -3 -969 71 -1007 129 -67 695 -36 855 46 146 75 243 157 317 267 113 168 139 265 140 518 0 157 -12 219 -62 336 -120 276 -316 430 -662 522 -73 19 -153 43 -178 52 -34 13 -90 18 -235 21 -190 5 -190 5 -215 -22z"
];

type MarkProps = SVGProps<SVGSVGElement> & { title?: string };

/** The round B17 badge. */
export function LogoMark({ title = "B17 Window Blinds & Curtains", ...props }: MarkProps) {
  const a11y = title ? { role: "img", "aria-label": title } : { "aria-hidden": true };
  return (
    <svg viewBox="0 23 884 884" fill="currentColor" {...a11y} {...props}>
      <g transform="translate(0 896) scale(.1 -.1)">
        <path fillRule="evenodd" d={MARK[0]} />
        {MARK.slice(1).map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}

type LogoProps =
  | ({ variant: "mark" } & MarkProps)
  | {
      variant?: "full";
      className?: string;
      /** "light" for light backgrounds (brass-brown ampersand), "dark" for navy backgrounds */
      tone?: "light" | "dark";
    };

export default function Logo(props: LogoProps) {
  if (props.variant === "mark") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { variant, ...rest } = props;
    return <LogoMark {...rest} />;
  }
  const { className = "", tone = "light" } = props;
  return (
    <span className={`inline-flex items-center gap-[0.55em] ${className}`}>
      <LogoMark title="" className="size-[2.75em] shrink-0" />
      <span className="font-display text-[1.32em] leading-[0.98] font-normal tracking-[-0.01em] whitespace-nowrap">
        <span className="block">Window Blinds</span>
        <span className="block">
          {/* opsz 36 selects Fraunces' decorative italic ampersand even at small sizes */}
          <em
            className={`font-light [font-variation-settings:'opsz'_36] ${
              tone === "dark" ? "text-brass-300" : "text-brass-600"
            }`}
          >
            &amp;
          </em>{" "}
          Curtains
        </span>
      </span>
    </span>
  );
}
