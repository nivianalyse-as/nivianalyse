import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import Cookies from "@/pages/Cookies";

export const Route = createFileRoute("/cookies")({
  head: () => seo({ path: "/cookies", title: "Cookie-policy – NIVI Analyse", description: "Les om hvordan NIVI Analyse bruker informasjonskapsler (cookies) og hvordan du kan endre innstillingene." }),
  component: Cookies,
});
