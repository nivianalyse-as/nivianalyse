// Server-rendered head metadata. Used by every route's head() so title,
// description, canonical and Open Graph tags are baked into the SSR HTML.
export const SITE_URL = "https://nivianalyse.no";
export const DEFAULT_OG_IMAGE = "https://nivianalyse.no/nivi-favicon.png";

type SeoInput = {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
};

export function seo({ path, title, description, type = "website", image = DEFAULT_OG_IMAGE, noindex }: SeoInput) {
  const url = `${SITE_URL}${path}`;
  const desc = description.length > 160 ? `${description.slice(0, 157).trimEnd()}…` : description;
  return {
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
      { name: "twitter:image", content: image },
      ...(noindex ? [{ name: "robots", content: "noindex" }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
