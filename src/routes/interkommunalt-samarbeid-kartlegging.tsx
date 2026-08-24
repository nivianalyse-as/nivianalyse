import { createFileRoute } from "@tanstack/react-router";
import InterkommunaltSamarbeidKartlegging from "@/pages/InterkommunaltSamarbeidKartlegging";

export const Route = createFileRoute("/interkommunalt-samarbeid-kartlegging")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://nivianalyse.no/interkommunalt-samarbeid-kartlegging",
      },
    ],
  }),
  component: InterkommunaltSamarbeidKartlegging,
});
