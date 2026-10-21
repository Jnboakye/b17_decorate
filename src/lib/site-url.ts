/**
 * Public URL of the website, used for SEO tags, the sitemap and social previews.
 * Netlify provides `URL` automatically at build time; set NEXT_PUBLIC_SITE_URL
 * in Netlify's environment variables to override it (e.g. a custom domain).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "http://localhost:3000"
).replace(/\/$/, "");
