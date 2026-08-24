import { createFileRoute } from "@tanstack/react-router";
import Publikasjoner from "@/pages/Rapportarkiv";

export const Route = createFileRoute("/publikasjoner/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://nivianalyse.no/publikasjoner" }],
  }),
  component: Publikasjoner,
});
