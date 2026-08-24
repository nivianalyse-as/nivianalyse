import { createFileRoute } from "@tanstack/react-router";
import AarsPage from "@/pages/AarsPage";
import RapportDetail from "@/pages/RapportDetail";

// Disambiguate /publikasjoner/:param — year (4 digits) vs slug
const PublikasjonerParam = () => {
  const { param } = Route.useParams();
  if (param && /^\d{4}$/.test(param)) {
    return <AarsPage />;
  }
  return <RapportDetail />;
};

export const Route = createFileRoute("/publikasjoner/$param")({
  head: ({ params }) => ({
    links: [
      { rel: "canonical", href: `https://nivianalyse.no/publikasjoner/${params.param}` },
    ],
  }),
  component: PublikasjonerParam,
});
