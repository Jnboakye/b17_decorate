import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { faqs, site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import Analytics from "@/components/analytics";

const fraunces = localFont({
  src: [
    { path: "../fonts/Fraunces-Variable.woff2", style: "normal", weight: "100 900" },
    { path: "../fonts/Fraunces-Variable-Italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const manrope = localFont({
  src: "../fonts/Manrope-Variable.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

const title = "B17 Window Blinds & Curtains | Curtains, Blinds & Window Automation in Ghana";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | B17 Window Blinds & Curtains" },
  description: site.description,
  keywords: [
    "curtains Ghana",
    "blinds Ghana",
    "custom curtains Accra",
    "window blinds Accra",
    "motorised curtains",
    "window automation Ghana",
    "curtain installation",
    "curtain washing Accra",
    "CCTV installation Ghana",
    "smart home Ghana",
    "B17 Window Blinds & Curtains",
    "B17 Window Blinds and Curtains",
    "B17 Windows",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: site.name,
    title,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f7f2eb",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: site.description,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image.jpg`,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "FD 125, Kingspark Avenue, Adjiriganor, East Legon",
      addressLocality: "Accra",
      addressRegion: "Greater Accra",
      addressCountry: "GH",
    },
    areaServed: { "@type": "Country", name: "Ghana" },
    // Opening hours for Google (not shown on the page — the page shows a live open/closed sign)
    openingHoursSpecification: Object.entries(site.hours)
      .filter(([, h]) => h)
      .map(([day, h]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
        opens: h![0],
        closes: h![1],
      })),
    sameAs: Object.values(site.socials),
    knowsAbout: [
      "Custom curtains",
      "Window blinds",
      "Curtain installation",
      "Curtain washing",
      "Motorised curtains and blinds",
      "CCTV installation",
      "Smart home assistants",
      "Decor lighting",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

/**
 * Reveal-on-scroll. Plain JS so it works independently of React:
 * elements with `data-reveal` fade up the first time they enter the screen.
 */
const revealScript = `(function(){var d=document.documentElement;d.classList.add('js');
function show(el){el.setAttribute('data-shown','')}
function init(){var els=[].slice.call(document.querySelectorAll('[data-reveal]'));
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(show);return}
var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){show(e.target);io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:0.12});
els.forEach(function(el){io.observe(el)})}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init)}else{init()}})();`;

/**
 * Visitor tracking (Umami) runs only on the live website. It stays off on your computer
 * (localhost) and on Netlify preview builds, so your own testing doesn't end up in the
 * stats. The Website ID lives in src/content/site.ts.
 */
const umamiWebsiteId: string = site.umamiWebsiteId.trim();
const trackVisitors =
  umamiWebsiteId !== "" &&
  process.env.NODE_ENV === "production" &&
  !siteUrl.includes("localhost") &&
  process.env.CONTEXT !== "deploy-preview" &&
  process.env.CONTEXT !== "branch-deploy";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh bg-linen-100 font-sans text-ink antialiased">
        {children}
        {trackVisitors && <Analytics websiteId={umamiWebsiteId} />}
      </body>
    </html>
  );
}
