import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import OmOss from "@/pages/OmOss";

export const Route = createFileRoute("/om-oss")({
  head: () => seo({ path: "/om-oss", title: "Om NIVI Analyse – Eksperter innen kommuneøkonomi", description: "Møt ekspertene i NIVI Analyse. Uavhengig rådgivning, analyse og strategisk kommuneøkonomi for norske kommuner og fylkeskommuner." }),
  component: OmOss,
});
