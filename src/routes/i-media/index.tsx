import { createFileRoute } from "@tanstack/react-router";
import IMedia from "@/pages/IMedia";

export const Route = createFileRoute("/i-media/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://nivianalyse.no/i-media" }],
  }),
  component: IMedia,
});
