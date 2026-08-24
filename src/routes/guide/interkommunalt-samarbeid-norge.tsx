import { createFileRoute } from "@tanstack/react-router";
import GuideInterkommunaltSamarbeid from "@/pages/GuideInterkommunaltSamarbeid";

export const Route = createFileRoute("/guide/interkommunalt-samarbeid-norge")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://nivianalyse.no/guide/interkommunalt-samarbeid-norge",
      },
    ],
  }),
  component: GuideInterkommunaltSamarbeid,
});
