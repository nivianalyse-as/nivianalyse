import { createFileRoute } from "@tanstack/react-router";
import AarsPage from "@/pages/AarsPage";
import RapportDetail from "@/pages/RapportDetail";
import { rapporter } from "@/data/reports";
import { seo } from "@/lib/seo";

// Disambiguate /publikasjoner/:param — year (4 digits) vs slug
const PublikasjonerParam = () => {
  const { param } = Route.useParams();
  if (param && /^\d{4}$/.test(param)) {
    return <AarsPage />;
  }
  return <RapportDetail />;
};

export const Route = createFileRoute("/publikasjoner/$param")({
  head: ({ params }) => {
    const path = `/publikasjoner/${params.param}`;
    if (/^\d{4}$/.test(params.param)) {
      return seo({
        path,
        title: `Rapporter fra ${params.param} | NIVI Analyse`,
        description: `Oversikt over rapporter og utredninger publisert av NIVI Analyse i ${params.param}.`,
      });
    }
    const r = rapporter.find((x) => x.slug === params.param);
    return seo({
      path,
      title: r ? r.seoTitle : "Publikasjon | NIVI Analyse",
      description: r ? r.seoDescription : "Publikasjon fra NIVI Analyse.",
      type: "article",
      noindex: !r,
    });
  },
  component: PublikasjonerParam,
});
