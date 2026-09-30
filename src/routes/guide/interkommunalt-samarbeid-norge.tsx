import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import GuideInterkommunaltSamarbeid from "@/pages/GuideInterkommunaltSamarbeid";

export const Route = createFileRoute("/guide/interkommunalt-samarbeid-norge")({
  head: () => seo({ path: "/guide/interkommunalt-samarbeid-norge", title: "Interkommunalt samarbeid i Norge — hva det er og hvordan det fungerer", description: "Guide til interkommunalt samarbeid: IKS, vertskommunemodellen, samarbeidsavtaler og regionråd. Fra NIVI Analyse — ett av Norges ledende fagmiljøer på kommunesamarbeid." }),
  component: GuideInterkommunaltSamarbeid,
});
