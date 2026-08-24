import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import heroImage from "@/assets/nivi-team-hero.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://nivianalyse.no/" },
      { rel: "preload", as: "image", href: heroImage, fetchPriority: "high" },
    ],
    meta: [{ property: "og:url", content: "https://nivianalyse.no/" }],
  }),
  component: Index,
});
