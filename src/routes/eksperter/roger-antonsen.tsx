import { createFileRoute } from "@tanstack/react-router";
import EkspertRogerAntonsen from "@/pages/EkspertRogerAntonsen";

export const Route = createFileRoute("/eksperter/roger-antonsen")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://nivianalyse.no/eksperter/roger-antonsen" },
    ],
  }),
  component: EkspertRogerAntonsen,
});
