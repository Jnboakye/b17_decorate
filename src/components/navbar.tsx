"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./logo";
import { buttonClasses } from "./ui";
import {
  IconArrowUpRight,
  IconClose,
  IconInstagram,
  IconMenu,
  IconPhone,
  IconTikTok,
  IconWhatsApp,
} from "./icons";
import { navLinks, site } from "@/content/site";
import { consultationMessage, whatsappUrl } from "@/lib/whatsapp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  // Solid background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently on screen
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));
    const visible = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(`#${e.target.id}`, e.isIntersecting));
        // first nav section crossing the middle of the screen, or none (e.g. over the hero)
        setActive(navLinks.find((l) => visible.get(l.href))?.href ?? "");
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Mobile menu: lock scroll, close on Escape, manage focus
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const button = menuButton.current;
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      button?.focus();
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        solid
          ? "border-b border-navy-900/[0.07] bg-linen-100/85 shadow-[0_8px_30px_-12px_rgb(13_26_58_/_0.18)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only rounded-full bg-navy-900 px-4 py-2 text-sm text-linen-50 focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      <div
        className={`container-x flex items-center justify-between gap-6 transition-[height] duration-500 ease-out-expo ${
          scrolled ? "h-16" : "h-20 lg:h-24"
        }`}
      >
        <a href="#top" aria-label={`${site.name} — home`} className="shrink-0 text-navy-900">
          <Logo className={`transition-[font-size] duration-500 ${scrolled ? "text-[13.5px]" : "text-[14.5px] lg:text-[16px]"}`} />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-300 ${
                      isActive ? "text-navy-900" : "text-navy-900/65 hover:text-navy-900"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-brass-500 transition-transform duration-500 ease-out-expo ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-[0.9375rem] font-semibold text-navy-900 transition-colors hover:text-brass-600 xl:inline-flex"
          >
            <IconPhone className="size-4" />
            {site.phoneDisplay}
          </a>
          <div className="hidden sm:block">
            <a href="#contact" className={buttonClasses("primary", "", "sm")}>
              Free consultation
            </a>
          </div>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-navy-900/15 text-navy-900 transition-colors hover:bg-navy-900/5 lg:hidden"
          >
            {open ? <IconClose className="size-5" /> : <IconMenu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-0 -z-10 h-dvh overflow-y-auto bg-linen-100 px-5 pt-24 pb-10 transition-all duration-500 ease-out-expo sm:px-8 lg:hidden ${
          open ? "visible opacity-100" : "invisible -translate-y-4 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-navy-900/10 border-y border-navy-900/10">
            {[...navLinks, { label: "Contact", href: "#contact" }].map((link, i) => (
              <li key={link.href}>
                <a
                  ref={i === 0 ? firstLink : undefined}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="group flex items-center justify-between py-4 font-display text-3xl font-light text-navy-900"
                >
                  <span>
                    <span className="mr-4 font-sans text-xs font-semibold tracking-[0.2em] text-brass-600">
                      0{i + 1}
                    </span>
                    {link.label}
                  </span>
                  <IconArrowUpRight className="size-5 text-navy-900/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 grid gap-3">
          <a
            href={whatsappUrl(consultationMessage)}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className={buttonClasses("primary", "w-full")}
          >
            <IconWhatsApp className="size-5" />
            Chat on WhatsApp
          </a>
          <a href={site.phoneHref} tabIndex={open ? 0 : -1} className={buttonClasses("secondary", "w-full")}>
            <IconPhone className="size-5" />
            Call {site.phoneDisplay}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-between text-sm text-muted">
          <span>{site.location} · {site.serviceArea}</span>
          <span className="flex gap-2">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              tabIndex={open ? 0 : -1}
              className="grid size-10 place-items-center rounded-full border border-navy-900/15 text-navy-900"
            >
              <IconInstagram className="size-[1.1rem]" />
            </a>
            <a
              href={site.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              tabIndex={open ? 0 : -1}
              className="grid size-10 place-items-center rounded-full border border-navy-900/15 text-navy-900"
            >
              <IconTikTok className="size-4" />
            </a>
          </span>
        </div>
      </div>
    </header>
  );
}
