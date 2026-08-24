import { createFileRoute } from "@tanstack/react-router";
import KommuneokonomiRadgivning from "@/pages/KommuneokonomiRadgivning";

export const Route = createFileRoute("/kommuneokonomi-radgivning")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://nivianalyse.no/kommuneokonomi-radgivning" },
    ],
  }),
  component: KommuneokonomiRadgivning,
});
