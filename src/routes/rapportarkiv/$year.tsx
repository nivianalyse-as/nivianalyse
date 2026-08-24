import { createFileRoute, redirect } from "@tanstack/react-router";

// 301-style redirect from old /rapportarkiv/:year path
export const Route = createFileRoute("/rapportarkiv/$year")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/publikasjoner/$param",
      params: { param: params.year },
      replace: true,
    });
  },
});
