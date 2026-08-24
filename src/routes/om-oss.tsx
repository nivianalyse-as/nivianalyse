import { createFileRoute } from "@tanstack/react-router";
import OmOss from "@/pages/OmOss";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://nivianalyse.no/om-oss" }],
  }),
  component: OmOss,
});
