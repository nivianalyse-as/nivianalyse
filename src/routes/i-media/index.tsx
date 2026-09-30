import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import IMedia from "@/pages/IMedia";

export const Route = createFileRoute("/i-media/")({
  head: () => seo({ path: "/i-media", title: "NIVI i media – Medieomtaler og debatt | NIVI Analyse", description: "Medieomtaler, intervjuer og debattinnlegg med NIVI Analyse om kommuneøkonomi, kommunestruktur og interkommunalt samarbeid." }),
  component: IMedia,
});
