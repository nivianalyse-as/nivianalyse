import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  type?: "website" | "article";
  image?: string;
  url?: string;
  author?: string;
  publishedTime?: string;
}

const SEOHead = ({
  title = "NIVI Analyse – Uavhengig rådgivning for kommunesektoren",
  description = "NIVI Analyse tilbyr strategisk analyse, kommuneøkonomi og organisasjonsutvikling. Erfarne seniorkonsulenter med direkte tilgang til spisskompetanse for norske kommuner.",
  type = "website",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url,
  author,
  publishedTime,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
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
  }, [title, description, type, image, url, author, publishedTime]);

  return null;
};

export default SEOHead;
