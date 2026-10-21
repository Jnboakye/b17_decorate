import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Base for outline icons: 24×24, 1.5 stroke, inherits colour from text. */
function Outline({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconCurtains(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M2.5 4h19" />
      <circle cx="2.5" cy="4" r=".6" fill="currentColor" />
      <circle cx="21.5" cy="4" r=".6" fill="currentColor" />
      <path d="M4 4v16h3.6c-.9-2.6-1.3-5-1.3-7.3C8 10.8 9.2 8 9.5 4" />
      <path d="M20 4v16h-3.6c.9-2.6 1.3-5 1.3-7.3C16 10.8 14.8 8 14.5 4" />
      <path d="M5.4 12.6h2.1M16.5 12.6h2.1" />
    </Outline>
  );
}

export function IconBlinds(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M3.5 4h17" strokeWidth={2} />
      <path d="M5 7.5h14M5 10.5h14M5 13.5h14M5 16.5h14" />
      <path d="M4.5 19.5h15" strokeWidth={2} />
      <path d="M18 4v-.01M15.5 4v13" />
      <circle cx="15.5" cy="18.2" r=".1" />
    </Outline>
  );
}

export function IconDrill(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M3 7.5h10.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H9.2l-1 7.5H5.2l1-7.5H5a2 2 0 0 1-2-2z" />
      <path d="M15.5 9.5h2.5l3 .9-3 .9h-2.5" />
      <path d="M6.5 10h3" />
    </Outline>
  );
}

export function IconRuler(props: IconProps) {
  return (
    <Outline {...props}>
      <rect x="2.5" y="8" width="19" height="8" rx="1.5" />
      <path d="M6 8v3M9.5 8v4.5M13 8v3M16.5 8v4.5" />
    </Outline>
  );
}

export function IconDrop(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M11 3.5c3.2 3.8 5.2 6.8 5.2 9.5a5.2 5.2 0 0 1-10.4 0c0-2.7 2-5.7 5.2-9.5z" />
      <path d="M8.8 13.6a2.4 2.4 0 0 0 2.2 2.3" />
      <path d="M19 3v3.6M17.2 4.8h3.6" />
    </Outline>
  );
}

export function IconRemote(props: IconProps) {
  return (
    <Outline {...props}>
      <rect x="8" y="9" width="8" height="12.5" rx="2" />
      <circle cx="12" cy="13" r="1.3" />
      <path d="M10.5 17h3" />
      <path d="M9.2 6.2a4 4 0 0 1 5.6 0M6.8 3.8a7.4 7.4 0 0 1 10.4 0" />
    </Outline>
  );
}

export function IconCamera(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M3.5 6.5l13.3 3.6a1 1 0 0 1 .7 1.2l-1 3.6a1 1 0 0 1-1.2.7L2 12z" />
      <path d="M17.6 11.4l3.4 1.2-1 3.4-3.4-.9" />
      <path d="M9 14.2l-1.4 5.3H3.5M3.5 17.5v4" />
      <circle cx="6.5" cy="9.6" r=".1" />
    </Outline>
  );
}

export function IconSpeaker(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M7 7.5c0-1.4 2.2-2.5 5-2.5s5 1.1 5 2.5V18c0 1.4-2.2 2.5-5 2.5S7 19.4 7 18z" />
      <ellipse cx="12" cy="7.5" rx="5" ry="2.5" />
      <path d="M20 9.5a5 5 0 0 1 0 6M3.9 9.5a5 5 0 0 0 0 6" />
    </Outline>
  );
}

export function IconLamp(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 2v5" />
      <path d="M5.5 13.5a6.5 6.5 0 0 1 13 0z" />
      <path d="M10 16.5a2 2 0 0 0 4 0" />
      <path d="M12 20.5v1M7.5 19l-.8.8M16.5 19l.8.8" />
    </Outline>
  );
}

export function IconHome(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M3.5 10.5L12 3.5l8.5 7" />
      <path d="M5.5 9v11.5h13V9" />
      <path d="M10 20.5v-5.5h4v5.5" />
    </Outline>
  );
}

export function IconBuilding(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M4 20.5V4.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 9.5h4a1 1 0 0 1 1 1v10" />
      <path d="M2.5 20.5h19" />
      <path d="M7.5 7h1M10.5 7h1M7.5 10.5h1M10.5 10.5h1M7.5 14h1M10.5 14h1M17.5 13h.01M17.5 16.5h.01" />
    </Outline>
  );
}

export function IconWindow(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M5 21V10a7 7 0 0 1 14 0v11z" />
      <path d="M12 3v18M5 13h14" />
      <path d="M3.5 21h17" />
    </Outline>
  );
}

export function IconSun(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
    </Outline>
  );
}

export function IconMic(props: IconProps) {
  return (
    <Outline {...props}>
      <rect x="9" y="2.5" width="6" height="11.5" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v4M8.5 21.5h7" />
    </Outline>
  );
}

export function IconLadder(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M7 21.5L10 2.5M17 21.5L14 2.5" />
      <path d="M9.3 7h5.4M8.6 11.5h6.8M7.9 16h8.2" />
    </Outline>
  );
}

export function IconChat(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.6L3.5 20.5l1.4-4.4A8.5 8.5 0 1 1 20.5 11.5z" />
      <path d="M8.5 10h7M8.5 13.5h4.5" />
    </Outline>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M5 3.5h3.2l1.6 4.2-2.1 1.3a11 11 0 0 0 5.3 5.3l1.3-2.1 4.2 1.6V17a2 2 0 0 1-2 2A15.5 15.5 0 0 1 3 5.5a2 2 0 0 1 2-2z" />
    </Outline>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Outline {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </Outline>
  );
}

export function IconPin(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 21.5s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </Outline>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <Outline {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r=".4" fill="currentColor" />
    </Outline>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M4 12h15M13.5 6.5L19 12l-5.5 5.5" />
    </Outline>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M7 17L17 7M8.5 7H17v8.5" />
    </Outline>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M4.5 12.5l4.5 4.5 10.5-10.5" />
    </Outline>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M12 4.5v15M4.5 12h15" />
    </Outline>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M3.5 8h17M3.5 16h17" />
    </Outline>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
    </Outline>
  );
}

export function IconChevronLeft(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M15 5l-7 7 7 7" />
    </Outline>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M9 5l7 7-7 7" />
    </Outline>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2c.6 4.9 2.9 8.6 10 10-7.1 1.4-9.4 5.1-10 10-.6-4.9-2.9-8.6-10-10 7.1-1.4 9.4-5.1 10-10z" />
    </svg>
  );
}

/** WhatsApp glyph (brand mark, filled). */
export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

/** TikTok glyph (brand mark, filled). */
export function IconTikTok(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}
