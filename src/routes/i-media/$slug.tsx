import { createFileRoute } from "@tanstack/react-router";
import IMediaDetail from "@/pages/IMediaDetail";
import { getMediaBySlug } from "@/data/media";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/i-media/$slug")({
  head: ({ params }) => {
    const e = getMediaBySlug(params.slug);
    return seo({
      path: `/i-media/${params.slug}`,
      title: e ? `${e.title} – ${e.source} | NIVI Analyse` : "Medieomtale | NIVI Analyse",
      description: e ? e.introduction || e.excerpt : "Medieomtale med NIVI Analyse.",
      type: "article",
      noindex: !e,
    });
  },
  component: IMediaDetail,
});
