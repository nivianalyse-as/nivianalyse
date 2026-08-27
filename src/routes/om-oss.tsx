import { createFileRoute } from "@tanstack/react-router";
import OmOss from "@/pages/OmOss";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    title: "Om NIVI Analyse – Eksperter innen kommuneøkonomi",
    links: [{ rel: "canonical", href: "https://nivianalyse.no/om-oss" }],
    meta: [
      { name: "description", content: "Møt ekspertene i NIVI Analyse. Uavhengig rådgivning, analyse og strategisk kommuneøkonomi for norske kommuner og fylkeskommuner." },
      { property: "og:title", content: "Om NIVI Analyse – Eksperter innen kommuneøkonomi" },
      { property: "og:description", content: "Møt ekspertene i NIVI Analyse. Uavhengig rådgivning, analyse og strategisk kommuneøkonomi for norske kommuner og fylkeskommuner." },
      { property: "og:url", content: "https://nivianalyse.no/om-oss" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OmOss,
});
