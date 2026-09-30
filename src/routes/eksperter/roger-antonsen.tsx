import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import EkspertRogerAntonsen from "@/pages/EkspertRogerAntonsen";

export const Route = createFileRoute("/eksperter/roger-antonsen")({
  head: () => seo({ path: "/eksperter/roger-antonsen", title: "Roger A. Antonsen – Seniorrådgiver | NIVI Analyse", description: "Roger A. Antonsen er seniorrådgiver i NIVI Analyse med lang ledererfaring fra Forsvaret og kommunesektoren innen økonomistyring, omstilling og interimledelse." }),
  component: EkspertRogerAntonsen,
});
