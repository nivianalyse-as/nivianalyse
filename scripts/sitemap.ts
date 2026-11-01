// Build-only tooling. Never imported by application routes or server handlers.
import { readdirSync, readFileSync, renameSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import ts from "typescript";
import type { Plugin, ResolvedConfig } from "vite";
import { mediaEntries } from "../src/data/media";
import { articles } from "../src/data/insights";
import { rapporter } from "../src/data/reports";
import { fagomrader } from "../src/data/fagomrader";
import { ALL_THEMES, themeToSlug } from "../src/types/rapport";
import { SITE_URL } from "../src/lib/seo";

export interface RouteSource { file: string; source: string }
export interface SitemapContent {
  media: readonly ({ slug: string } & Visibility)[];
  articles: readonly ({ slug: string } & Visibility)[];
  reports: readonly ({ slug: string; year: number } & Visibility)[];
  areas: readonly ({ slug: string } & Visibility)[];
  themes: readonly string[];
}
interface Visibility { published?: boolean; draft?: boolean; noindex?: boolean; status?: string }
export const siteContent: SitemapContent = {
  media: mediaEntries, articles, reports: rapporter, areas: fagomrader, themes: ALL_THEMES,
};

export function readRouteSources(directory: string): RouteSource[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) return readRouteSources(file);
    return /\.[jt]sx?$/.test(entry.name) ? [{ file, source: readFileSync(file, "utf8") }] : [];
  });
}

function property(object: ts.ObjectLiteralExpression, name: string) {
  return object.properties.find((node): node is ts.PropertyAssignment =>
    ts.isPropertyAssignment(node) && (ts.isIdentifier(node.name) || ts.isStringLiteral(node.name)) && node.name.text === name,
  )?.initializer;
}
function walk(node: ts.Node, visit: (node: ts.Node) => void) {
  visit(node);
  node.forEachChild((child) => walk(child, visit));
}
function included(record: Visibility): boolean {
  return record.published !== false && record.draft !== true && record.noindex !== true &&
    (record.status === undefined || record.status === "published");
}
function slug(value: string): string {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) || value.endsWith("-pdf")) {
    throw new Error(`Invalid sitemap slug: ${value}`);
  }
  return value;
}

export function collectSitemapPaths(routes: RouteSource[], content: SitemapContent = siteContent): string[] {
  const paths = new Set<string>();
  const routePaths = new Set<string>();
  for (const route of routes) {
    const source = ts.createSourceFile(route.file, route.source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    let declaration: ts.CallExpression | undefined;
    walk(source, (node) => {
      if (ts.isCallExpression(node) && ts.isCallExpression(node.expression) &&
          ts.isIdentifier(node.expression.expression) && node.expression.expression.text === "createFileRoute") {
        declaration = node;
      }
    });
    if (!declaration) {
      if (route.file.endsWith("__root.tsx")) continue;
      throw new Error(`Sitemap cannot identify route: ${route.file}`);
    }
    const factory = declaration.expression;
    const options = declaration.arguments[0];
    if (!ts.isCallExpression(factory) || !factory.arguments[0] || !ts.isStringLiteral(factory.arguments[0]) ||
        !options || !ts.isObjectLiteralExpression(options)) throw new Error(`Invalid route definition: ${route.file}`);
    const path = factory.arguments[0].text.replace(/\/$/, "") || "/";
    if (routePaths.has(path)) throw new Error(`Duplicate sitemap route: ${path}`);
    routePaths.add(path);
    let redirects = false;
    walk(options, (node) => {
      if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === "redirect") redirects = true;
    });
    if (redirects || property(options, "server") || /^\/(?:api|admin|internal|auth|login|logout|signup)(?:\/|$)/.test(path)) continue;
    const head = property(options, "head");
    if (!head) throw new Error(`Sitemap needs an indexability decision for ${path}`);
    let noindex = false;
    let canonical: string | undefined;
    walk(head, (node) => {
      if (ts.isPropertyAssignment(node) && ts.isIdentifier(node.name)) {
        if (node.name.text === "noindex" && node.initializer.kind === ts.SyntaxKind.TrueKeyword) noindex = true;
        if (node.name.text === "path" && ts.isStringLiteral(node.initializer)) canonical = node.initializer.text;
      }
    });
    if (noindex) continue;
    if (!path.includes("$")) {
      if (!canonical || canonical !== path) throw new Error(`Sitemap cannot verify canonical for ${path}`);
      paths.add(canonical);
      continue;
    }
    const addSlugs = (records: readonly ({ slug: string } & Visibility)[], parameter: string) => {
      for (const record of records.filter(included)) paths.add(path.replace(parameter, slug(record.slug)));
    };
    // Only canonical destinations: media aliases under /inspirasjon and legacy redirects are excluded.
    switch (path) {
      case "/i-media/$slug": addSlugs(content.media, "$slug"); break;
      case "/inspirasjon/$slug": addSlugs(content.articles, "$slug"); break;
      case "/fagomrader/$slug": addSlugs(content.areas, "$slug"); break;
      case "/publikasjoner/$param": {
        const reports = content.reports.filter(included);
        addSlugs(reports, "$param");
        for (const year of new Set(reports.map((report) => report.year))) {
          if (!Number.isInteger(year) || year < 1000 || year > 9999) throw new Error(`Invalid archive year: ${year}`);
          paths.add(path.replace("$param", String(year)));
        }
        break;
      }
      case "/tema/$slug":
        for (const theme of content.themes) paths.add(path.replace("$slug", slug(themeToSlug(theme))));
        break;
      default: throw new Error(`Sitemap needs a content resolver for ${path}`);
    }
  }
  const result = [...paths].sort();
  if (!result.length) throw new Error("Sitemap has no public pages");
  for (const path of result) {
    if (!/^\/(?:[a-z0-9-]+\/)*[a-z0-9-]*$/.test(path)) throw new Error(`Invalid sitemap path: ${path}`);
  }
  return result;
}

export function sitemapXml(paths: readonly string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join("\n")}\n</urlset>\n`;
}

export function generateSitemap(root: string): string {
  const xml = sitemapXml(collectSitemapPaths(readRouteSources(join(root, "src/routes"))));
  const destination = join(root, "public/sitemap.xml");
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(`${destination}.tmp`, xml);
  renameSync(`${destination}.tmp`, destination);
  return xml;
}

export function verifySitemapOutput(file: string, expected: string): void {
  if (readFileSync(file, "utf8") !== expected) throw new Error(`Built sitemap differs from generated source: ${file}`);
}

export function automaticSitemap(): Plugin {
  let config: ResolvedConfig;
  let expected = "";
  return {
    name: "nivi-automatic-sitemap",
    apply: "build",
    enforce: "pre",
    configResolved(resolved) {
      config = resolved;
      if (!config.publicDir || config.build.copyPublicDir === false || config.environments?.client?.build.copyPublicDir === false) {
        throw new Error("Sitemap requires the existing public asset copying step");
      }
      // Runs before Vite copies public assets, including when CI invokes vite build directly.
      expected = generateSitemap(config.root);
      console.info(`[sitemap] Generated ${expected.match(/<url>/g)?.length ?? 0} canonical URLs for ${SITE_URL}`);
    },
    buildApp: {
      order: "post",
      handler() {
        const output = resolve(config.root, config.environments?.client?.build.outDir ?? config.build.outDir);
        verifySitemapOutput(join(output, "sitemap.xml"), expected);
        console.info(`[sitemap] Verified published client asset: ${join(output, "sitemap.xml")}`);
      },
    },
  };
}