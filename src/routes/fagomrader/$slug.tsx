import { createFileRoute } from "@tanstack/react-router";
import FagomradePage from "@/pages/FagomradePage";
import { getFagomradeBySlug } from "@/data/fagomrader";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/fagomrader/$slug")({
  head: ({ params }) => {
    const fag = getFagomradeBySlug(params.slug);
    return seo({
      path: `/fagomrader/${params.slug}`,
      title: fag ? `${fag.title} | NIVI Analyse` : "Fagområde | NIVI Analyse",
      description: fag ? fag.kortSvar.text : "Fagområde hos NIVI Analyse.",
      noindex: !fag,
    });
  },
  component: FagomradePage,
});
