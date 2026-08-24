import { createFileRoute } from "@tanstack/react-router";
import InspirasjonDetail from "@/pages/InspirasjonDetail";

export const Route = createFileRoute("/inspirasjon/$slug")({
  head: ({ params }) => ({
    links: [
      { rel: "canonical", href: `https://nivianalyse.no/inspirasjon/${params.slug}` },
    ],
  }),
  component: InspirasjonDetail,
});
