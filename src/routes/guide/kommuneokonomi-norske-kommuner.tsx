import { createFileRoute } from "@tanstack/react-router";
import GuideKommuneokonomi from "@/pages/GuideKommuneokonomi";

export const Route = createFileRoute("/guide/kommuneokonomi-norske-kommuner")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://nivianalyse.no/guide/kommuneokonomi-norske-kommuner",
      },
    ],
  }),
  component: GuideKommuneokonomi,
});
