import { createFileRoute } from "@tanstack/react-router";
import TemaPage, { themeDescriptions } from "@/pages/TemaPage";
import { slugToTheme } from "@/types/rapport";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/tema/$slug")({
  head: ({ params }) => {
    const theme = slugToTheme(params.slug);
    return seo({
      path: `/tema/${params.slug}`,
      title: theme ? `${theme} – Rapportoversikt | NIVI Analyse` : "Tema | NIVI Analyse",
      description:
        (theme && themeDescriptions[theme]) ||
        `Oversikt over rapporter fra NIVI Analyse innen temaet ${theme ?? params.slug}.`,
      noindex: !theme,
    });
  },
  component: TemaPage,
});
