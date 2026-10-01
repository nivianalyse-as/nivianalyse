import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import Inspirasjon from "@/pages/Inspirasjon";

export const Route = createFileRoute("/inspirasjon/")({
  head: () => seo({ path: "/inspirasjon", title: "Faglige innsikter | Nivi Analyse – Analyser og fagartikler", description: "Faglige artikler, innsikter og vurderinger innen offentlig organisering, kommunal økonomi og regional utvikling fra Nivi Analyse." }),
  component: Inspirasjon,
});
