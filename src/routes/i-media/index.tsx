import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import IMedia from "@/pages/IMedia";

export const Route = createFileRoute("/i-media/")({
  head: () => seo({ path: "/i-media", title: "I media | Nivi Analyse – Omtaler, kronikker og samfunnsdebatt", description: "Se medieomtaler, artikler og ekspertkommentarer fra Nivi Analyse om kommunestruktur, offentlig forvaltning og samfunnsøkonomi." }),
  component: IMedia,
});
