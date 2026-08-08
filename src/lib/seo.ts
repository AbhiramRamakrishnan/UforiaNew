export const SITE_URL = (() => {
  const configured = import.meta.env.VITE_SITE_URL?.trim();
  return configured ? configured.replace(/\/+$/, "") : "https://uforiafestival.com";
})();

export const BRAND_NAME = "Uforia";
export const BRAND_TAGLINE = "One Stage, Infinite Vibe";
export const BRAND_DESCRIPTION =
  "Uforia is a premier music and cultural festival showcasing global talent and India's independent music giants. Produced by Fynora Entertainments.";

export function siteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, `${SITE_URL}/`).toString();
}