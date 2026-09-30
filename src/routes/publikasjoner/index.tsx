import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import Publikasjoner from "@/pages/Rapportarkiv";

export const Route = createFileRoute("/publikasjoner/")({
  head: () => seo({ path: "/publikasjoner", title: "Publikasjoner | NIVI Analyse", description: "Utredninger og analyser om interkommunalt samarbeid, kommunereform og regional utvikling fra NIVI Analyse. Arkiv med rapporter, notater og samarbeidsrapporter fra 2006 til i dag." }),
  component: Publikasjoner,
});
