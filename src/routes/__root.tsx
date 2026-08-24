/// <reference types="vite/client" />
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "@/styles.css?url";

const SITE_TITLE = "NIVI Analyse – Uavhengig rådgivning for kommunesektoren";
const SITE_DESCRIPTION =
  "NIVI Analyse tilbyr strategisk analyse, kommuneøkonomi og organisasjonsutvikling. Erfarne seniorkonsulenter med direkte tilgang til spisskompetanse for norske kommuner.";

const organizationJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://nivianalyse.no/#organization",
  name: "NIVI Analyse AS",
  alternateName: "NIVI Analyse",
  url: "https://nivianalyse.no",
  logo: "https://nivianalyse.no/nivi-favicon.png",
  description:
    "Uavhengig analyse- og rådgivningsselskap for kommuner, fylkeskommuner og offentlig sektor i Norge. Spesialisert på kommuneøkonomi, omstilling, interkommunalt samarbeid og strukturreformer.",
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Solløkkaveien 73",
    postalCode: "3233",
    addressLocality: "Sandefjord",
    addressCountry: "NO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+4748148813",
    email: "post@nivianalyse.no",
    contactType: "customer service",
    availableLanguage: ["Norwegian", "English"],
  },
  employee: [
    { "@type": "Person", name: "Håvard Moe", jobTitle: "Daglig leder og partner" },
    { "@type": "Person", name: "Geir Vinsand", jobTitle: "Partner" },
  ],
  areaServed: { "@type": "Country", name: "Norway" },
  serviceType: [
    "Kommuneøkonomi og omstilling",
    "Organisasjonsutvikling",
    "Interkommunalt samarbeid",
    "Strukturreformer",
    "Beredskap og samfunnssikkerhet",
    "Foredrag og debatt",
  ],
  knowsAbout: [
    "Kommuneøkonomi",
    "Omstilling i kommunal sektor",
    "Interkommunalt samarbeid",
    "Kommunesammenslåing",
    "Strukturreformer",
    "KOSTRA-analyse",
    "Kommunekompassevaluering",
    "Kommunal beredskap",
    "Norsk kommunesektor",
  ],
  identifier: {
    "@type": "PropertyValue",
    name: "Organisasjonsnummer",
    value: "937186037",
  },
});

const websiteJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NIVI Analyse",
  url: "https://nivianalyse.no",
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: "NIVI Analyse AS" },
      { name: "application-name", content: "NIVI Analyse" },
      {
        name: "google-site-verification",
        content: "ay1PwAhZ4vLg2Y5LtZ9yTtKMdsWsERJOgcCpkL_yyqg",
      },
      { property: "og:title", content: SITE_TITLE },
      {
        property: "og:description",
        content:
          "Håvard Moe og Geir Vinsand tilbyr spisskompetanse innen kommunal rådgivning direkte til deg.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "NIVI Analyse" },
      { property: "og:image", content: "https://nivianalyse.no/nivi-favicon.png" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@nivianalyse" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:image", content: "https://nivianalyse.no/nivi-favicon.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/nivi-favicon.png?v=1" },
      { rel: "shortcut icon", href: "/nivi-favicon.png?v=1" },
      { rel: "apple-touch-icon", href: "/nivi-favicon.png?v=1" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-RLRQ8X3374",
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-RLRQ8X3374');`,
      },
      {
        src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
        async: true,
        defer: true,
      },
      { type: "application/ld+json", children: organizationJsonLd },
      { type: "application/ld+json", children: websiteJsonLd },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nb" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Netlify form detection for SPA */}
        <form name="kontakt" data-netlify="true" hidden data-netlify-honeypot="bot-field">
          <input type="text" name="navn" />
          <input type="email" name="epost" />
          <input type="tel" name="telefon" />
          <textarea name="melding"></textarea>
          <input name="bot-field" />
        </form>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Outlet />
      </TooltipProvider>
    </ThemeProvider>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-8 text-center">
      <h1 className="text-2xl font-semibold text-primary">Noe gikk galt</h1>
      <p className="max-w-md text-muted-foreground">
        Det oppsto en uventet feil. Prøv å laste siden på nytt.
      </p>
      <button
        className="btn-cta"
        onClick={() => {
          reset();
          router.invalidate();
        }}
      >
        Prøv igjen
      </button>
    </div>
  );
}
