// @vitest-environment node
import { readFileSync, mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { collectSitemapPaths, readRouteSources, siteContent, sitemapXml, verifySitemapOutput } from "./sitemap";

const routes = readRouteSources(resolve("src/routes"));
const baseline = readFileSync(resolve("public/sitemap.xml"), "utf8");
const baselinePaths = [...baseline.matchAll(/<loc>https:\/\/nivianalyse\.no([^<]+)<\/loc>/g)].flatMap((match) => typeof match[1] === "string" ? [match[1]] : []);

describe("Automatic sitemap generation", () => {
  it("preserves all 198 existing canonical URLs", () => {
    const paths = collectSitemapPaths(routes);
    expect(paths.length).toBe(198);
    expect(paths).toEqual([...baselinePaths].sort());
  });
  it("automatically includes a new media story without editing routes or XML", () => {
    const paths = collectSitemapPaths(routes, { ...siteContent, media: [...siteContent.media, { slug: "ny-publisert-medieomtale" }] });
    expect(paths).toContain("/i-media/ny-publisert-medieomtale");
    expect(paths).not.toContain("/inspirasjon/ny-publisert-medieomtale");
    expect(paths.length).toBe(199);
  });
  it("automatically includes new articles and reports with their year archive", () => {
    const paths = collectSitemapPaths(routes, {
      ...siteContent,
      articles: [...siteContent.articles, { slug: "ny-fagartikkel" }],
      reports: [...siteContent.reports, { slug: "ny-rapport", year: 2031 }],
    });
    expect(paths).toContain("/inspirasjon/ny-fagartikkel");
    expect(paths).toContain("/publikasjoner/ny-rapport");
    expect(paths).toContain("/publikasjoner/2031");
  });
  it("excludes unpublished, draft and noindex records", () => {
    const paths = collectSitemapPaths(routes, { ...siteContent, media: [
      ...siteContent.media,
      { slug: "upublisert", published: false }, { slug: "utkast", draft: true },
      { slug: "skjult", noindex: true }, { slug: "venter", status: "draft" },
    ] });
    expect(paths.length).toBe(198);
    expect(paths).not.toContain("/takk");
    expect(paths.some((path) => /^\/(rapport|rapportarkiv)\//.test(path))).toBe(false);
  });
  it("discovers a new static canonical route from its existing head definition", () => {
    const paths = collectSitemapPaths([...routes, { file: "ny-side.tsx", source: 'export const Route = createFileRoute("/ny-side")({ head: () => seo({ path: "/ny-side" }), component: Page });' }]);
    expect(paths).toContain("/ny-side");
  });
  it("deduplicates records and rejects invalid slugs", () => {
    expect(collectSitemapPaths(routes, { ...siteContent, media: [...siteContent.media, ...siteContent.media] }).length).toBe(198);
    expect(() => collectSitemapPaths(routes, { ...siteContent, media: [{ slug: "../../410.html" }] })).toThrow("Invalid sitemap slug");
  });
  it("fails rather than silently omitting an unsupported dynamic route", () => {
    expect(() => collectSitemapPaths([...routes, { file: "unknown.tsx", source: 'export const Route = createFileRoute("/ny/$slug")({ head: () => seo({ path: `/ny/${params.slug}` }) });' }])).toThrow("content resolver");
  });
  it("rejects stale or missing client output", () => {
    const dir = mkdtempSync(join(tmpdir(), "nivi-sitemap-test-"));
    try {
      const file = join(dir, "sitemap.xml");
      const expected = sitemapXml(collectSitemapPaths(routes));
      expect(() => verifySitemapOutput(file, expected)).toThrow();
      writeFileSync(file, "old sitemap");
      expect(() => verifySitemapOutput(file, expected)).toThrow("differs");
      writeFileSync(file, expected);
      expect(() => verifySitemapOutput(file, expected)).not.toThrow();
    } finally { rmSync(dir, { recursive: true, force: true }); }
  });
});