import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/rapport/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/publikasjoner/$param",
      params: { param: params.slug },
      replace: true,
    });
  },
});
