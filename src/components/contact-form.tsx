"use client";

import { useRef, useState, type FormEvent } from "react";
import { propertyOptions, serviceOptions } from "@/content/site";
import { buildEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { IconArrowRight, IconCheck, IconWhatsApp } from "./icons";

const fieldClass =
  "mt-2 block w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3.5 text-[0.9375rem] text-navy-900 shadow-[0_1px_0_rgb(13_26_58/0.03)] transition placeholder:text-navy-900/35 focus:border-brass-500 focus:ring-4 focus:ring-brass-400/20 focus:outline-none aria-[invalid=true]:border-red-400";

type Errors = Partial<Record<"name" | "location", string>>;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [property, setProperty] = useState<string>("");
  const [services, setServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  const toggleService = (s: string) =>
    setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = "Please tell us your name.";
    if (!location.trim()) next.location = "Please tell us where the job is (area and town).";
    setErrors(next);
    if (next.name) return nameRef.current?.focus();
    if (next.location) return locationRef.current?.focus();

    const url = whatsappUrl(
      buildEnquiryMessage({ name, location, phone, property, services, message }),
    );
    // Count the enquiry in the visitor stats: which services and property type, never who sent it
    trackEvent("Contact form submitted", {
      services: services.length ? services.join(", ") : "None chosen",
      property: property || "Not given",
    });
    const win = window.open(url, "_blank");
    if (win) {
      try {
        win.opener = null;
      } catch {
        /* ignore */
      }
    } else {
      // Pop-up blocked (common on some phones): open WhatsApp in this tab instead
      window.location.href = url;
    }
    setSentUrl(url);
  };

  const reset = () => {
    setName("");
    setLocation("");
    setPhone("");
    setProperty("");
    setServices([]);
    setMessage("");
    setErrors({});
    setSentUrl(null);
  };

  if (sentUrl) {
    return (
      <div className="flex h-full flex-col items-start justify-center py-6" role="status">
        <span className="grid size-14 place-items-center rounded-full bg-[#25d366]/15 text-[#1a9e4b]">
          <IconWhatsApp className="size-7" />
        </span>
        <h3 className="mt-6 text-3xl font-light text-navy-900">Your message is ready in WhatsApp</h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted">
          We&apos;ve opened WhatsApp with your details filled in — just tap <strong>Send</strong>. We&apos;ll
          get back to you as soon as possible.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={sentUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track-place="Contact form (retry link)"
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-[0.9375rem] font-semibold text-linen-50 hover:bg-navy-800"
          >
            <IconWhatsApp className="size-5" />
            WhatsApp didn&apos;t open? Tap here
          </a>
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-navy-900/20 px-6 py-3.5 text-[0.9375rem] font-semibold text-navy-900 hover:bg-navy-900/[0.04]"
          >
            Start a new message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="form-note" className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-semibold text-navy-900">
            Your name <span className="text-brass-600">*</span>
          </label>
          <input
            ref={nameRef}
            id="cf-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((er) => ({ ...er, name: undefined }));
            }}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            placeholder="e.g. Ama Mensah"
            className={fieldClass}
          />
          {errors.name && (
            <p id="cf-name-error" className="mt-2 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cf-location" className="text-sm font-semibold text-navy-900">
            Location <span className="text-brass-600">*</span>
          </label>
          <input
            ref={locationRef}
            id="cf-location"
            name="location"
            autoComplete="address-level2"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              if (errors.location) setErrors((er) => ({ ...er, location: undefined }));
            }}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "cf-location-error" : undefined}
            placeholder="e.g. East Legon, Accra"
            className={fieldClass}
          />
          {errors.location && (
            <p id="cf-location-error" className="mt-2 text-sm text-red-600">
              {errors.location}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="cf-phone" className="text-sm font-semibold text-navy-900">
          Phone number <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="If different from your WhatsApp"
          className={fieldClass}
        />
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-navy-900">What do you need?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {serviceOptions.map((s) => {
            const checked = services.includes(s);
            return (
              <label key={s} className="cursor-pointer">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={checked}
                  onChange={() => toggleService(s)}
                />
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-brass-500 peer-focus-visible:ring-offset-2 ${
                    checked
                      ? "border-navy-900 bg-navy-900 text-linen-50"
                      : "border-navy-900/15 bg-white text-navy-900/80 hover:border-navy-900/40"
                  }`}
                >
                  {checked && <IconCheck className="size-3.5" />}
                  {s}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-navy-900">Type of property</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {propertyOptions.map((p) => {
            const checked = property === p;
            return (
              <label key={p} className="cursor-pointer">
                <input
                  type="radio"
                  name="property"
                  className="peer sr-only"
                  checked={checked}
                  onChange={() => setProperty(p)}
                />
                <span
                  className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-brass-500 peer-focus-visible:ring-offset-2 ${
                    checked
                      ? "border-brass-500 bg-brass-200/60 text-navy-900"
                      : "border-navy-900/15 bg-white text-navy-900/80 hover:border-navy-900/40"
                  }`}
                >
                  {p}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cf-message" className="text-sm font-semibold text-navy-900">
          Tell us about your windows
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Which rooms, roughly how many windows, any styles or colours you like…"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-navy-900 px-7 py-4 text-[0.9375rem] font-semibold text-linen-50 shadow-lg shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-xl active:scale-[0.98]"
        >
          <IconWhatsApp className="size-5 text-[#25d366]" />
          Send via WhatsApp
          <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        <p id="form-note" className="text-sm text-muted sm:max-w-[16rem] sm:text-right">
          Opens WhatsApp with your message ready to send.
        </p>
      </div>
    </form>
  );
}
