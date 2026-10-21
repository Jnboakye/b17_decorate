"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import velvetDining from "@/assets/images/gallery-velvet-dining.jpg";
import afroLounge from "@/assets/images/gallery-afro-lounge.jpg";
import chevronLiving from "@/assets/images/gallery-chevron-living.jpg";
import sheerKitchen from "@/assets/images/gallery-sheer-kitchen.jpg";
import blueDining from "@/assets/images/gallery-blue-dining.jpg";
import afroLiving from "@/assets/images/gallery-afro-living.jpg";
import openLiving from "@/assets/images/gallery-open-living.jpg";
import warmKitchen from "@/assets/images/gallery-warm-kitchen.jpg";
import { SectionHeading } from "./ui";
import { IconArrowRight, IconChevronLeft, IconChevronRight, IconClose, IconPlus } from "./icons";
import { whatsappUrl } from "@/lib/whatsapp";
import { site } from "@/content/site";

/**
 * Gallery images.
 * TIP: when you have photos of your own finished projects, add them to
 * src/assets/images/ and swap them in here — real work sells best.
 */
type Item = { src: StaticImageData; alt: string; caption: string; className: string };

const items: Item[] = [
  {
    src: velvetDining,
    alt: "Dining area framed by deep blue velvet curtains over white sheers",
    caption: "Velvet drapes over sheers",
    className: "col-span-2 row-span-2 lg:col-start-1 lg:row-start-1",
  },
  {
    src: afroLounge,
    alt: "Colourful Afro-modern lounge with woven poufs, carved busts and patterned cushions",
    caption: "Afro-modern lounge",
    className: "row-span-2 lg:col-start-3 lg:row-start-1",
  },
  {
    src: chevronLiving,
    alt: "Living room with grey chevron curtains and white sheers",
    caption: "Patterned curtains & sheers",
    className: "lg:col-start-4 lg:row-start-1",
  },
  {
    src: sheerKitchen,
    alt: "Bright kitchen with floor-to-ceiling white sheer curtains",
    caption: "Floor-to-ceiling sheers",
    className: "lg:col-start-4 lg:row-start-2",
  },
  {
    src: blueDining,
    alt: "Modern dining space with a gold branch chandelier and LED-lit staircase",
    caption: "Statement lighting",
    className: "lg:col-start-1 lg:row-start-3",
  },
  {
    src: afroLiving,
    alt: "Double-height living room with African masks and warm textured rugs",
    caption: "Bold textures & warm tones",
    className: "row-span-2 lg:col-start-2 lg:row-start-3",
  },
  {
    src: openLiving,
    alt: "Open-plan living room with full-length blue curtains",
    caption: "Soft blue drapes",
    className: "col-span-2 row-span-2 lg:col-start-3 lg:row-start-3",
  },
  {
    src: warmKitchen,
    alt: "Kitchen with warm wall lights over a wood-panel backsplash",
    caption: "Warm accent lighting",
    className: "lg:col-start-1 lg:row-start-4",
  },
];

export default function Projects() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const openAt = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setIndex(null);
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const current = index === null ? null : items[index];

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-linen-50 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="gallery-title"
          align="center"
          eyebrow="Inspiration"
          title={
            <>
              Ideas for <span className="accent">every room</span>
            </>
          }
          intro="Browse styles we love — from airy sheers and rich velvet drapes to clean-lined blinds and warm accent lighting."
        />

        <ul className="mt-14 grid grid-flow-row-dense auto-rows-[10.5rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] sm:gap-4 lg:auto-rows-[15rem] lg:grid-cols-4">
          {items.map((item, i) => (
            <li
              key={item.caption}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 80}ms` } as CSSProperties}
              className={item.className}
            >
              <button
                type="button"
                onClick={() => openAt(i)}
                className="group relative block size-full overflow-hidden rounded-[1.25rem] bg-linen-200 text-left sm:rounded-[1.5rem]"
                aria-label={`View larger: ${item.caption}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute right-3 bottom-3 left-3 flex items-end justify-between gap-2 sm:right-4 sm:bottom-4 sm:left-4">
                  <span className="text-sm font-semibold text-linen-50 sm:text-[0.9375rem]">{item.caption}</span>
                  <span className="hidden size-9 shrink-0 translate-y-2 place-items-center rounded-full bg-linen-50/90 text-navy-900 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:grid">
                    <IconPlus className="size-4" />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p data-reveal className="mt-10 text-center text-muted">
          Have a photo of your space?{" "}
          <a
            href={whatsappUrl(`Hello ${site.name}, here's a photo of my space — what would you suggest?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-semibold text-navy-900 underline decoration-brass-500/60 underline-offset-4 hover:decoration-navy-900"
          >
            Send it on WhatsApp for ideas
            <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </p>
      </div>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        aria-label={current?.caption ?? "Gallery image"}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-navy-950/90 backdrop:backdrop-blur-sm"
      >
        {current && (
          <div className="flex h-full flex-col items-center justify-center gap-4 p-4 sm:p-10" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="relative h-[75vh] w-full max-w-6xl">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                placeholder="blur"
                className="object-contain"
              />
            </div>
            <div className="flex w-full max-w-6xl items-center justify-between gap-4 text-linen-50">
              <p className="font-display text-xl font-light sm:text-2xl">
                {current.caption}
                <span className="ml-3 font-sans text-sm text-linen-100/50">
                  {(index ?? 0) + 1} / {items.length}
                </span>
              </p>
              <div className="flex gap-2">
                <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="grid size-11 place-items-center rounded-full border border-white/20 hover:bg-white/10">
                  <IconChevronLeft className="size-5" />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next image" className="grid size-11 place-items-center rounded-full border border-white/20 hover:bg-white/10">
                  <IconChevronRight className="size-5" />
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-linen-50 text-navy-900 shadow-lg sm:top-6 sm:right-6"
            >
              <IconClose className="size-5" />
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}
