import { createFileRoute } from "@tanstack/react-router";
import Personvern from "@/pages/Personvern";

export const Route = createFileRoute("/personvern")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://nivianalyse.no/personvern" }],
  }),
  component: Personvern,
});
