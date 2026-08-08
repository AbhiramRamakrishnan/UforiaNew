export const SITE_URL = (() => {
  const configured = import.meta.env.VITE_SITE_URL?.trim();
  return configured ? configured.replace(/\/+$/, "") : "https://fynoraentertainments.com";
})();

export const BRAND_NAME = "Fynora Entertainments";
export const BRAND_TAGLINE = "The Voice of Void and Renaissance";
export const BRAND_DESCRIPTION =
  "Fynora Entertainments produces live entertainment, cultural events, campus festivals, and cinematic releases across Kerala and India.";

export function siteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, `${SITE_URL}/`).toString();
}
