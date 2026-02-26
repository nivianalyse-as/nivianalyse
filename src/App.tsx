import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Inspirasjon from "./pages/Inspirasjon";
import InspirasjonDetail from "./pages/InspirasjonDetail";
import IMedia from "./pages/IMedia";
import IMediaDetail from "./pages/IMediaDetail";
import Personvern from "./pages/Personvern";
import Cookies from "./pages/Cookies";
import Publikasjoner from "./pages/Rapportarkiv";
import RapportDetail from "./pages/RapportDetail";
import TemaPage from "./pages/TemaPage";
import AarsPage from "./pages/AarsPage";
import OmOss from "./pages/OmOss";
import Takk from "./pages/Takk";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const RedirectRapportarkivYear = () => {
  const year = window.location.pathname.split("/").pop();
  return <Navigate to={`/publikasjoner/${year}`} replace />;
};

const RedirectRapportSlug = () => {
  const slug = window.location.pathname.split("/").pop();
  return <Navigate to={`/publikasjoner/${slug}`} replace />;
};

// Disambiguate /publikasjoner/:param — year (4 digits) vs slug
const PublikasjonerParam = () => {
  const { param } = useParams<{ param: string }>();
  if (param && /^\d{4}$/.test(param)) {
    return <AarsPage />;
  }
  return <RapportDetail />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/inspirasjon" element={<Inspirasjon />} />
            <Route path="/inspirasjon/:slug" element={<InspirasjonDetail />} />
            <Route path="/i-media" element={<IMedia />} />
            <Route path="/i-media/:slug" element={<IMediaDetail />} />
            <Route path="/personvern" element={<Personvern />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/publikasjoner" element={<Publikasjoner />} />
            <Route path="/publikasjoner/:param" element={<PublikasjonerParam />} />
            <Route path="/rapport/:slug" element={<RedirectRapportSlug />} />
            <Route path="/tema/:slug" element={<TemaPage />} />
            {/* 301-style redirects from old /rapportarkiv paths */}
            <Route path="/rapportarkiv" element={<Navigate to="/publikasjoner" replace />} />
            <Route path="/rapportarkiv/:year" element={<RedirectRapportarkivYear />} />
            <Route path="/om-oss" element={<OmOss />} />
            <Route path="/takk" element={<Takk />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
