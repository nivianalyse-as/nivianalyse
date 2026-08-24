import { createFileRoute } from "@tanstack/react-router";
import Inspirasjon from "@/pages/Inspirasjon";

export const Route = createFileRoute("/inspirasjon/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://nivianalyse.no/inspirasjon" }],
  }),
  component: Inspirasjon,
});
