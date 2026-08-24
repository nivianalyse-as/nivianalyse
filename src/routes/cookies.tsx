import { createFileRoute } from "@tanstack/react-router";
import Cookies from "@/pages/Cookies";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://nivianalyse.no/cookies" }],
  }),
  component: Cookies,
});
