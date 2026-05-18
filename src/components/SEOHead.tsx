import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  type?: "website" | "article";
  image?: string;
  url?: string;
  author?: string;
  publishedTime?: string;
  canonical?: string;
  canonicalOnly?: boolean;
}

const SEOHead = ({
  title = "NIVI Analyse – Uavhengig rådgivning for kommunesektoren",
  description = "NIVI Analyse tilbyr strategisk analyse, kommuneøkonomi og organisasjonsutvikling. Erfarne seniorkonsulenter med direkte tilgang til spisskompetanse for norske kommuner.",
  type = "website",
  image = "https://nivianalyse.no/nivi-favicon.png",
  url,
  author,
  publishedTime,
  canonical,
  canonicalOnly = false,
}: SEOHeadProps) => {
  useEffect(() => {
    const resolvedCanonical = canonical || (typeof window !== "undefined" ? `https://nivianalyse.no${window.location.pathname}` : undefined);

    if (!canonicalOnly) {
      document.title = title;

      const updateMeta = (name: string, content: string, isProperty = false) => {
        const attr = isProperty ? "property" : "name";
        let element = document.querySelector(`meta[${attr}="${name}"]`);
        if (element) {
          element.setAttribute("content", content);
        } else {
          element = document.createElement("meta");
          element.setAttribute(attr, name);
          element.setAttribute("content", content);
          document.head.appendChild(element);
        }
      };

      updateMeta("description", description);
      updateMeta("og:title", title, true);
      updateMeta("og:description", description, true);
      updateMeta("og:type", type, true);
      updateMeta("og:image", image, true);
      if (url) updateMeta("og:url", url, true);
      
      updateMeta("twitter:card", "summary_large_image");
      updateMeta("twitter:title", title);
      updateMeta("twitter:description", description);
      updateMeta("twitter:image", image);

      if (author) updateMeta("author", author);
      if (publishedTime) updateMeta("article:published_time", publishedTime, true);
    }

    // Canonical link
    if (resolvedCanonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (link) {
        link.href = resolvedCanonical;
      } else {
        link = document.createElement("link");
        link.rel = "canonical";
        link.href = resolvedCanonical;
        document.head.appendChild(link);
      }
    }

    return () => {
      // Clean up canonical on unmount
      if (resolvedCanonical) {
        const link = document.querySelector('link[rel="canonical"]');
        if (link) link.remove();
      }
    };
  }, [title, description, type, image, url, author, publishedTime, canonical, canonicalOnly]);

  return null;
};

export default SEOHead;
