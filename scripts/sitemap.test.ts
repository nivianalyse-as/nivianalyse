// @vitest-environment node
import { readFileSync, mkdtempSync, writeFileSync, rmSync, mkdirSync, cpSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import type { ResolvedConfig, ViteBuilder } from "vite";
import { automaticSitemap, collectSitemapPaths, readRouteSources, siteContent, sitemapXml, verifySitemapOutput } from "./sitemap";

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
  it("supports Nitro-managed copying with copyPublicDir false and verifies its final output", async () => {
    const dir = mkdtempSync(join(tmpdir(), "nivi-sitemap-nitro-"));
    try {
      mkdirSync(join(dir, "src"));
      cpSync(resolve("src/routes"), join(dir, "src/routes"), { recursive: true });
      const config = {
        root: dir, publicDir: join(dir, "public"),
        build: { copyPublicDir: false, outDir: "dist/server" },
        environments: { client: { build: { copyPublicDir: false, outDir: "intermediate" } } },
      } as unknown as ResolvedConfig;
      const plugin = automaticSitemap();
      expect(plugin.enforce).toBe("post");
      if (typeof plugin.configResolved !== "function") throw new Error("Missing configResolved hook");
      await plugin.configResolved.call({} as never, config);
      const generated = readFileSync(join(dir, "public/sitemap.xml"), "utf8");
      expect((generated.match(/<url>/g) ?? []).length).toBe(198);
      expect(config.build.copyPublicDir).toBe(false);
      expect(config.environments?.["client"]?.build.copyPublicDir).toBe(false);
      const hook = plugin.buildApp;
      if (!hook || typeof hook === "function") throw new Error("Missing ordered buildApp hook");
      expect(hook.order).toBe("post");
      const builder = { environments: { client: { config: { build: { outDir: "dist/client" } } } } } as unknown as ViteBuilder;
      await expect(hook.handler.call({} as never, builder)).rejects.toThrow();
      // Simulate the adapter's existing copying step, not a new plugin copy.
      cpSync(join(dir, "public"), join(dir, "dist/client"), { recursive: true });
      await expect(hook.handler.call({} as never, builder)).resolves.toBeUndefined();
      writeFileSync(join(dir, "dist/client/sitemap.xml"), "old sitemap");
      await expect(hook.handler.call({} as never, builder)).rejects.toThrow("differs");
    } finally { rmSync(dir, { recursive: true, force: true }); }
  });
});