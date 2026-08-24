import { createFileRoute, redirect } from "@tanstack/react-router";

// 301-style redirect from old /rapportarkiv path
export const Route = createFileRoute("/rapportarkiv/")({
  beforeLoad: () => {
    throw redirect({ to: "/publikasjoner", replace: true });
  },
});
