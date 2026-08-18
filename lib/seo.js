import site from "@/constants/site";

/**
 * Builds a Next.js Metadata object with sane defaults so every route gets
 * title templating, canonical URL and Open Graph/Twitter cards for free.
 */
export function buildMetadata({ title, description, keywords, path = "/" } = {}) {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const pageTitle = title ? `${title} | ${site.name}` : `${site.name}: ${site.tagline}`;
  const pageDescription = description || site.description;
  const pageKeywords = keywords ? [...keywords, ...site.keywords] : site.keywords;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}
