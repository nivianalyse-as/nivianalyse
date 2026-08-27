import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import heroImage from "@/assets/nivi-team-hero.webp";
import heroImage640 from "@/assets/nivi-team-hero-640.webp";
import heroImage960 from "@/assets/nivi-team-hero-960.webp";
import heroImage1280 from "@/assets/nivi-team-hero-1280.webp";

const heroSrcSet = `${heroImage640} 640w, ${heroImage960} 960w, ${heroImage1280} 1280w, ${heroImage} 1672w`;
const heroSizes = "(max-width: 767px) 92vw, (max-width: 1023px) 88vw, 50vw";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://nivianalyse.no/" },
      {
        rel: "preload",
        as: "image",
        href: heroImage640,
        imageSrcSet: heroSrcSet,
        imageSizes: heroSizes,
        fetchPriority: "high",
      },
    ],
    meta: [{ property: "og:url", content: "https://nivianalyse.no/" }],
  }),
  component: Index,
});
