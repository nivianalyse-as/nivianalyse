import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import GuideKommuneokonomi from "@/pages/GuideKommuneokonomi";

export const Route = createFileRoute("/guide/kommuneokonomi-norske-kommuner")({
  head: () => seo({ path: "/guide/kommuneokonomi-norske-kommuner", title: "Kommuneøkonomi i norske kommuner — faglig guide fra NIVI Analyse", description: "Hva er kommuneøkonomi? Lær om KOSTRA, netto driftsresultat, ROBEK og omstilling. Faglig guide fra NIVI Analyse med 200+ analyser fra norsk kommunesektor." }),
  component: GuideKommuneokonomi,
});
