import { createFileRoute } from "@tanstack/react-router";
import IMediaDetail from "@/pages/IMediaDetail";

export const Route = createFileRoute("/i-media/$slug")({
  head: ({ params }) => ({
    links: [
      { rel: "canonical", href: `https://nivianalyse.no/i-media/${params.slug}` },
    ],
  }),
  component: IMediaDetail,
});
