import { site } from "@/content/site";

/** Build a wa.me link that opens a WhatsApp chat (optionally with a pre-filled message). */
export function whatsappUrl(message?: string, number: string = site.whatsappNumber) {
  const digits = number.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const consultationMessage = `Hello ${site.name}, I'd like to book a free consultation.`;

export type Enquiry = {
  name: string;
  location: string;
  phone?: string;
  property?: string;
  services: string[];
  message?: string;
};

/** Turn the contact-form fields into a tidy WhatsApp message (*text* renders bold in WhatsApp). */
export function buildEnquiryMessage(e: Enquiry) {
  const lines: string[] = [
    `Hello ${site.name}, I'd like to book a free consultation.`,
    "",
    `*Name:* ${e.name.trim()}`,
    `*Location:* ${e.location.trim()}`,
  ];
  if (e.phone?.trim()) lines.push(`*Phone:* ${e.phone.trim()}`);
  if (e.property?.trim()) lines.push(`*Property:* ${e.property.trim()}`);
  if (e.services.length) lines.push(`*Interested in:* ${e.services.join(", ")}`);
  if (e.message?.trim()) lines.push("", "*Details:*", e.message.trim());
  lines.push("", "(Sent from the B17 website)");
  return lines.join("\n");
}
