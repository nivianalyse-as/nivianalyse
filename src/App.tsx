import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Inspirasjon from "./pages/Inspirasjon";
import InspirasjonDetail from "./pages/InspirasjonDetail";
import IMedia from "./pages/IMedia";
import IMediaDetail from "./pages/IMediaDetail";
import Personvern from "./pages/Personvern";
import Cookies from "./pages/Cookies";
import Publikasjoner from "./pages/Publikasjoner";
import OmOss from "./pages/OmOss";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

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
            <Route path="/om-oss" element={<OmOss />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
