import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import Takk from "@/pages/Takk";

export const Route = createFileRoute("/takk")({
  head: () => seo({ path: "/takk", title: "Takk for din henvendelse | Nivi Analyse", description: "Vi har mottatt meldingen din og tar kontakt med deg så snart som mulig.", noindex: true }),
  component: Takk,
});
