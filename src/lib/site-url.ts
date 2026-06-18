const FALLBACK_SITE_URL = "http://localhost:3000";

let hasWarnedMissingSiteUrl = false;

export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

  if (url) {
    return url;
  }

  if (process.env.NODE_ENV === "production" && !hasWarnedMissingSiteUrl) {
    hasWarnedMissingSiteUrl = true;
    console.warn(
      "[pm-advocacia] NEXT_PUBLIC_SITE_URL não definida. URLs canônicas, sitemap e Open Graph usarão localhost.",
    );
  }

  return FALLBACK_SITE_URL;
}
