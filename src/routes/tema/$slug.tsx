import { createFileRoute } from "@tanstack/react-router";
import TemaPage from "@/pages/TemaPage";

export const Route = createFileRoute("/tema/$slug")({
  head: ({ params }) => ({
    links: [
      { rel: "canonical", href: `https://nivianalyse.no/tema/${params.slug}` },
    ],
  }),
  component: TemaPage,
});
