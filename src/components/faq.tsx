import { faqs } from "@/content/site";
import { ButtonLink, SectionHeading } from "./ui";
import { IconPlus, IconWhatsApp } from "./icons";
import { consultationMessage, whatsappUrl } from "@/lib/whatsapp";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-linen-50 py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="faq-title"
              eyebrow="FAQ"
              title={
                <>
                  Questions, <span className="accent">answered</span>
                </>
              }
              intro="Can't find what you're looking for? Send us a message — we're happy to help."
            />
            <div data-reveal className="mt-8">
              <ButtonLink
                href={whatsappUrl(consultationMessage)}
                external
                variant="secondary"
                icon={<IconWhatsApp className="size-5 text-[#1fa855]" />}
              >
                Ask us on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>

        <div data-reveal className="lg:col-span-8">
          <ul className="divide-y divide-navy-900/10 border-y border-navy-900/10">
            {faqs.map((f, i) => (
              <li key={f.q}>
                <details className="group" open={i === 0}>
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-left">
                    <span className="font-display text-xl font-light text-navy-900 sm:text-2xl">{f.q}</span>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-navy-900/15 text-navy-900 transition-all duration-300 group-open:rotate-45 group-open:border-navy-900 group-open:bg-navy-900 group-open:text-linen-50">
                      <IconPlus className="size-4" />
                    </span>
                  </summary>
                  <p className="max-w-2xl pr-14 pb-7 leading-relaxed text-muted">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
