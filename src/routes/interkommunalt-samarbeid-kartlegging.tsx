import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import InterkommunaltSamarbeidKartlegging from "@/pages/InterkommunaltSamarbeidKartlegging";

export const Route = createFileRoute("/interkommunalt-samarbeid-kartlegging")({
  head: () => seo({ path: "/interkommunalt-samarbeid-kartlegging", title: "Kartlegging av interkommunalt samarbeid — NIVI Analyse", description: "NIVI Analyse gjennomfører fylkesvise kartlegginger av interkommunalt samarbeid for Statsforvaltere og fylkeskommuner. Erfaring fra Agder, Østfold, Møre og Romsdal og flere." }),
  component: InterkommunaltSamarbeidKartlegging,
});
