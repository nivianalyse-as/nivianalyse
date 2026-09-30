import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import KommuneokonomiRadgivning from "@/pages/KommuneokonomiRadgivning";

export const Route = createFileRoute("/kommuneokonomi-radgivning")({
  head: () => seo({ path: "/kommuneokonomi-radgivning", title: "Kommuneøkonomi-rådgivning for norske kommuner — NIVI Analyse", description: "NIVI Analyse tilbyr KOSTRA-analyse, kommunekompassevaluering og omstillingsstøtte. 300+ bistådde kommuner. Ta kontakt for en uforpliktende samtale." }),
  component: KommuneokonomiRadgivning,
});
