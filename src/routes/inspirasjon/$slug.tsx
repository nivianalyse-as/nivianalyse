import { createFileRoute } from "@tanstack/react-router";
import InspirasjonDetail from "@/pages/InspirasjonDetail";
import { articles } from "@/data/insights";
import { getMediaBySlug } from "@/data/media";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/inspirasjon/$slug")({
  head: ({ params }) => {
    const a = articles.find((x) => x.slug === params.slug);
    const m = a ? undefined : getMediaBySlug(params.slug);
    return seo({
      path: m ? `/i-media/${params.slug}` : `/inspirasjon/${params.slug}`,
      title: a ? `${a.title} | NIVI Analyse` : m ? `${m.title} | NIVI Analyse` : "Faglig innsikt | NIVI Analyse",
      description: a ? a.ingress || a.excerpt : m ? m.excerpt : "Faglig innsikt fra NIVI Analyse.",
      type: "article",
      noindex: !a && !m,
    });
  },
  component: InspirasjonDetail,
});
