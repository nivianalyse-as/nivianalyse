import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import Takk from "@/pages/Takk";

export const Route = createFileRoute("/takk")({
  head: () => seo({ path: "/takk", title: "Takk for din henvendelse – NIVI Analyse", description: "Vi har mottatt henvendelsen din og tar kontakt så snart som mulig.", noindex: true }),
  component: Takk,
});
