import type { AnchorHTMLAttributes, ReactNode } from "react";
import { IconArrowRight } from "./icons";

type Variant = "primary" | "secondary" | "light" | "brass" | "ghost-light";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-linen-50 shadow-lg shadow-navy-900/15 hover:bg-navy-800 hover:shadow-xl hover:shadow-navy-900/20",
  secondary:
    "border border-navy-900/20 bg-transparent text-navy-900 hover:border-navy-900/40 hover:bg-navy-900/[0.04]",
  light: "bg-linen-50 text-navy-900 hover:bg-white",
  brass: "bg-brass-400 text-navy-950 hover:bg-brass-300",
  "ghost-light":
    "border border-linen-50/25 text-linen-50 hover:border-linen-50/50 hover:bg-linen-50/[0.06]",
};

type Size = "md" | "sm";

const sizes: Record<Size, string> = {
  md: "px-6 py-3.5 text-[0.9375rem]",
  sm: "px-5 py-2.5 text-sm",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  /** show the animated arrow after the label */
  arrow?: boolean;
  external?: boolean;
};

export function buttonClasses(variant: Variant = "primary", extra = "", size: Size = "md") {
  return `group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-[0.01em] transition-all duration-300 ease-out-expo active:scale-[0.98] ${sizes[size]} ${variants[variant]} ${extra}`;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  icon,
  arrow = false,
  external = false,
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={buttonClasses(variant, className, size)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon}
      <span>{children}</span>
      {arrow && (
        <IconArrowRight className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
      )}
    </a>
  );
}

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

/** Eyebrow + large serif heading + optional intro paragraph. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div
      data-reveal
      className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      <p className={`eyebrow ${tone === "light" ? "eyebrow-light" : ""} ${center ? "justify-center" : ""}`}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-5 text-[clamp(2.25rem,1.5rem+2.8vw,3.9rem)] leading-[1.05] font-light tracking-[-0.02em] ${
          tone === "light" ? "text-linen-50" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-lg leading-relaxed ${center ? "mx-auto max-w-2xl" : ""} ${
            tone === "light" ? "text-linen-100/75" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
