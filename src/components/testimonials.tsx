import type { CSSProperties } from "react";
import { site, testimonials, type Testimonial } from "@/content/site";
import { ButtonLink, SectionHeading } from "./ui";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

/** A single review, shown large. */
function Featured({ t }: { t: Testimonial }) {
  return (
    <figure
      data-reveal
      className="relative isolate mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] bg-navy-900 px-7 pt-14 pb-12 text-center text-linen-50 sm:rounded-[2.5rem] sm:px-16 sm:pt-16 sm:pb-14"
    >
      <div
        aria-hidden="true"
        className="absolute top-[-40%] left-1/2 -z-10 size-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(201_166_107/0.22),transparent)]"
      />
      {t.placeholder && (
        <span className="absolute top-6 right-6 rounded-full border border-dashed border-brass-300/60 px-2.5 py-1 text-[0.6875rem] font-bold tracking-[0.14em] text-brass-300 uppercase">
          Sample
        </span>
      )}
      <span aria-hidden="true" className="block font-display text-[6.5rem] leading-[0.55] text-brass-400">
        &ldquo;
      </span>
      <blockquote className="mx-auto mt-6 max-w-3xl font-display text-[clamp(1.35rem,0.95rem+1.35vw,2.05rem)] leading-[1.38] font-light text-linen-50">
        {t.quote}
      </blockquote>
      <figcaption className="mt-10 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center sm:gap-4 sm:text-left">
        <span className="grid size-14 shrink-0 place-items-center rounded-full bg-brass-400 text-base font-bold text-navy-950">
          {initials(t.name)}
        </span>
        <span>
          <span className="block text-lg font-semibold text-linen-50">{t.name}</span>
          <span className="block text-sm text-linen-100/70">
            {t.area} · {t.service}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Two or more reviews, shown as cards — three side by side on larger screens. */
function Cards() {
  return (
    <ul className="mx-auto mt-14 grid max-w-2xl gap-5 lg:max-w-none lg:grid-cols-3 lg:gap-6">
      {testimonials.map((t, i) => (
        <li key={i} data-reveal style={{ "--reveal-delay": `${(i % 3) * 110}ms` } as CSSProperties}>
          <figure className="group relative flex h-full flex-col rounded-[2rem] bg-linen-50 p-8 ring-1 ring-navy-900/[0.06] transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgb(13_26_58/0.3)] sm:p-9">
            {t.placeholder && (
              <span className="absolute top-6 right-6 rounded-full border border-dashed border-brass-600/50 px-2.5 py-1 text-[0.6875rem] font-bold tracking-[0.14em] text-brass-700 uppercase">
                Sample
              </span>
            )}
            <span aria-hidden="true" className="font-display text-7xl leading-none text-brass-400">
              &ldquo;
            </span>
            <blockquote
              className={`-mt-4 flex-1 font-display text-[1.25rem] leading-[1.45] font-light ${
                t.placeholder ? "text-navy-900/65 italic" : "text-navy-900"
              }`}
            >
              {t.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-start gap-3.5 border-t border-navy-900/10 pt-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-900 text-sm font-bold text-brass-300">
                {initials(t.name)}
              </span>
              {/* fixed height on wide screens keeps the dividers lined up across cards */}
              <span className="min-w-0 lg:min-h-[5rem]">
                <span className="block font-semibold text-navy-900">{t.name}</span>
                <span className="block text-sm text-muted">{t.area}</span>
                <span className="mt-1 block text-xs font-semibold text-brass-700">{t.service}</span>
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="relative overflow-hidden bg-linen-100 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="reviews-title"
          align="center"
          eyebrow="Reviews"
          title={
            <>
              Kind words from <span className="accent">our clients</span>
            </>
          }
        />

        {testimonials.length === 1 ? <Featured t={testimonials[0]} /> : <Cards />}

        <div
          data-reveal
          className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-5"
        >
          <p className="text-muted">Worked with us? We&apos;d love to hear about it.</p>
          <ButtonLink href={site.googleReviewUrl} external variant="secondary" size="sm" arrow>
            Leave a review on Google
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
