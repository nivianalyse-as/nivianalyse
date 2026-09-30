import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import Inspirasjon from "@/pages/Inspirasjon";

export const Route = createFileRoute("/inspirasjon/")({
  head: () => seo({ path: "/inspirasjon", title: "Faglige innsikter – Artikler og analyser | NIVI Analyse", description: "Faglige artikler og analyser fra NIVI Analyse om kommuneøkonomi, omstilling, interkommunalt samarbeid og strukturreformer." }),
  component: Inspirasjon,
});
