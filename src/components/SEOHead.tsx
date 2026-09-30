// Head metadata is now server-rendered via each route's head() (see src/lib/seo.ts).
// This component is kept as a no-op so existing page imports keep compiling.
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

const SEOHead = (_props: SEOHeadProps) => null;

export default SEOHead;
