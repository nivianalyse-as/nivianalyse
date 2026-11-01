// @vitest-environment node
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { mediaEntries } from "../data/media";
import { articles } from "../data/insights";
import { rapporter } from "../data/reports";
import { fagomrader } from "../data/fagomrader";
import { ALL_THEMES, themeToSlug } from "../types/rapport";

const xml = readFileSync(new URL("../../public/sitemap.xml", import.meta.url), "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const origin = "https://nivianalyse.no";

describe("Production sitemap", () => {
  it("includes every canonical media story", () => {
    for (const entry of mediaEntries) expect(urls).toContain(`${origin}/i-media/${entry.slug}`);
  });
  it("includes every professional article", () => {
    for (const article of articles) expect(urls).toContain(`${origin}/inspirasjon/${article.slug}`);
  });
  it("includes every professional area", () => {
    for (const area of fagomrader) expect(urls).toContain(`${origin}/fagomrader/${area.slug}`);
  });
  it("includes reports, year archives and theme archives", () => {
    expect(urls).toContain(`${origin}/publikasjoner`);
    for (const report of rapporter) {
      expect(urls).toContain(`${origin}/publikasjoner/${report.slug}`);
      expect(urls).toContain(`${origin}/publikasjoner/${report.year}`);
    }
    for (const theme of ALL_THEMES) expect(urls).toContain(`${origin}/tema/${themeToSlug(theme)}`);
  });
  it("uses unique production URLs without query strings or fragments", () => {
    expect(new Set(urls).size).toBe(urls.length);
    for (const value of urls) {
      const url = new URL(value);
      expect(url.origin).toBe(origin);
      expect(url.search).toBe("");
      expect(url.hash).toBe("");
    }
  });
  it("excludes noindex, retired, PDF and alternate redirect routes", () => {
    expect(urls).not.toContain(`${origin}/takk`);
    expect(urls.some((url) => /\/(?:rapport|rapportarkiv|wp-admin|wp-content|category)(?:\/|$)|\.pdf$|\/410\.html$|\/__forms\.html$/.test(url))).toBe(false);
    for (const entry of mediaEntries) expect(urls).not.toContain(`${origin}/inspirasjon/${entry.slug}`);
  });
  it("keeps robots.txt pointing at the intentional production sitemap", () => {
    const robots = readFileSync(new URL("../../public/robots.txt", import.meta.url), "utf8");
    expect(robots).toMatch(/^Sitemap: https:\/\/nivianalyse\.no\/sitemap\.xml$/m);
  });
});