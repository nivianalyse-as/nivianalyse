# Project architecture

- Sitemap automation is build-only tooling in `scripts/sitemap.ts`: derive static pages from route metadata and dynamic pages from authoritative content datasets, generate the single public XML before asset copying, and fail the build if its client output differs; this preserves SSR and deploy routing while preventing stale sitemap artifacts.