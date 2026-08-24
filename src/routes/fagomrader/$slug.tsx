import { createFileRoute } from "@tanstack/react-router";
import FagomradePage from "@/pages/FagomradePage";

export const Route = createFileRoute("/fagomrader/$slug")({
  head: ({ params }) => ({
    links: [
      { rel: "canonical", href: `https://nivianalyse.no/fagomrader/${params.slug}` },
    ],
  }),
  component: FagomradePage,
});
