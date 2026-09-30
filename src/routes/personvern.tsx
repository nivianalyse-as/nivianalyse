import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import Personvern from "@/pages/Personvern";

export const Route = createFileRoute("/personvern")({
  head: () => seo({ path: "/personvern", title: "Personvernerklæring – NIVI Analyse", description: "Les om hvordan NIVI Analyse behandler personopplysninger og dine rettigheter." }),
  component: Personvern,
});
