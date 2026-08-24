import { createFileRoute } from "@tanstack/react-router";
import Takk from "@/pages/Takk";

export const Route = createFileRoute("/takk")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://nivianalyse.no/takk" }],
  }),
  component: Takk,
});
