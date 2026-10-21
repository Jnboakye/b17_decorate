# B17 Window Blinds & Curtains — website

Made-to-measure curtains, blinds and window automation, all across Ghana.
Built with [Next.js](https://nextjs.org) 15, React 19 and Tailwind CSS 4. Hosted on Netlify.

## Run it on your computer

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Publish

Commit and push to `main` on GitHub. Netlify builds and publishes the site automatically
(build command `npm run build`).

Optional: in Netlify → Site configuration → Environment variables, add
`NEXT_PUBLIC_SITE_URL` with your final address (e.g. `https://www.yourdomain.com`) so
Google and social-media previews use the right link. Without it, Netlify's own site URL is used.

## Editing the content

Almost all the text lives in **`src/content/site.ts`**:

| What | Where |
| --- | --- |
| Phone, WhatsApp number, email, address, Instagram/TikTok, Google review link | `site` in `site.ts` |
| Customer reviews | `testimonials` in `site.ts` |
| Questions & answers | `faqs` in `site.ts` |
| Options in the contact form | `serviceOptions`, `propertyOptions` in `site.ts` |
| Client logos and names in the moving strip | **`src/content/clients.ts`** |

### Clients strip

- **With a logo:** save the logo (transparent PNG or SVG) in `src/assets/clients/`, import it at the
  top of `clients.ts` and add it to `clientLogos`. Add `scale: 0.9` (or `1.1`) if one logo looks
  too big or too small next to the others.
- **Without a logo:** add the name to `clientNames` — it is shown as elegant text. `detail` is the
  small line underneath (e.g. the area).

### Reviews

One review is shown as a large featured quote; add a second and they switch to cards automatically.

### Photos

Photos live in `src/assets/images/` (already resized for the web — keep new photos under ~2000 px wide).

- Gallery: `src/components/projects.tsx`
- Service cards: `src/components/services.tsx`
- Hero (top of page): `src/components/hero.tsx`

Real photos of your own finished projects will make the biggest difference — swap them in
whenever you have them.

### How the contact form works

The form doesn't need a server or email service. When someone presses **Send via WhatsApp**,
it opens WhatsApp with their details already written out, addressed to the number in
`site.whatsappNumber`. They just tap Send.

## Project structure

```
src/
  app/            layout (fonts, SEO), page, icons, social preview image
  components/     one file per section (hero, services, automation, gallery…)
  content/site.ts all editable text
  lib/            WhatsApp link helpers, site URL
  assets/images/  optimised photos
  fonts/          Fraunces + Manrope (open-source, self-hosted)
```

The original full-size photos and logo are still in `public/images/`.
