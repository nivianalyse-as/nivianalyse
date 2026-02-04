import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { X, Settings, Shield, BarChart3, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CONSENT_KEY = "nivi_consent_v1";

interface ConsentPreferences {
  necessary: boolean;
  statistics: boolean;
  marketing: boolean;
  timestamp: number;
}

const defaultConsent: ConsentPreferences = {
  necessary: true,
  statistics: false,
  marketing: false,
  timestamp: 0,
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(defaultConsent);

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_KEY);
    if (storedConsent) {
      try {
        const parsed = JSON.parse(storedConsent) as ConsentPreferences;
        setPreferences(parsed);
        // Apply consent settings for analytics
        applyConsentSettings(parsed);
      } catch {
        setIsVisible(true);
      }
    } else {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const applyConsentSettings = (consent: ConsentPreferences) => {
    // Gate analytics/marketing scripts based on consent
    if (consent.statistics) {
      // Enable analytics (GA, Hotjar, etc.)
      console.log("Statistics cookies enabled");
    }
    if (consent.marketing) {
      // Enable marketing scripts
      console.log("Marketing cookies enabled");
    }
  };

  const saveConsent = useCallback((consent: ConsentPreferences) => {
    const consentWithTimestamp = { ...consent, timestamp: Date.now() };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentWithTimestamp));
    setPreferences(consentWithTimestamp);
    applyConsentSettings(consentWithTimestamp);
    setIsVisible(false);
    setShowSettings(false);
  }, []);

  const acceptAll = () => {
    saveConsent({ necessary: true, statistics: true, marketing: true, timestamp: 0 });
  };

  const acceptNecessaryOnly = () => {
    saveConsent({ necessary: true, statistics: false, marketing: false, timestamp: 0 });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const acceptAllFromModal = () => {
    setPreferences({ necessary: true, statistics: true, marketing: true, timestamp: 0 });
    saveConsent({ necessary: true, statistics: true, marketing: true, timestamp: 0 });
  };

  // Expose function to open settings from footer
  useEffect(() => {
    (window as any).openCookieSettings = () => {
      setShowSettings(true);
    };
    return () => {
      delete (window as any).openCookieSettings;
    };
  }, []);

  if (!isVisible && !showSettings) return null;

  return (
    <>
      {/* Cookie Banner */}
      {isVisible && !showSettings && (
        <div 
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in"
          role="dialog"
          aria-label="Cookie-samtykke"
          aria-modal="false"
        >
          <div className="max-w-4xl mx-auto bg-primary rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-white/80" />
                    <h3 className="text-white font-semibold text-[15px]">
                      Vi bruker informasjonskapsler
                    </h3>
                  </div>
                  <p className="text-white/80 text-[14px] leading-relaxed">
                    Vi bruker cookies for å forbedre din opplevelse på nettstedet. 
                    Du kan velge hvilke kategorier du godtar.{" "}
                    <Link 
                      to="/cookies" 
                      className="underline underline-offset-2 hover:text-white transition-colors"
                    >
                      Les mer om cookies
                    </Link>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={openSettings}
                    className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50 rounded-xl px-4 h-10 text-[14px] font-medium order-3 sm:order-1"
                  >
                    <Settings className="w-4 h-4 mr-1.5" />
                    Innstillinger
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={acceptNecessaryOnly}
                    className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50 rounded-xl px-4 h-10 text-[14px] font-medium order-2"
                  >
                    Kun nødvendige
                  </Button>
                  <Button
                    size="sm"
                    onClick={acceptAll}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl px-5 h-10 text-[14px] font-semibold order-1 sm:order-3"
                  >
                    Godta alle
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-[500px] bg-card border-primary/10 rounded-2xl p-0 gap-0">
          <DialogHeader className="p-6 pb-4 border-b border-primary/10">
            <DialogTitle className="text-xl font-semibold text-primary flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Cookie-innstillinger
            </DialogTitle>
          </DialogHeader>

          <div className="p-6 space-y-5">
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Velg hvilke kategorier av informasjonskapsler du godtar. 
              Nødvendige cookies er påkrevd for at nettstedet skal fungere.
            </p>

            {/* Necessary cookies */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-secondary/20">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <Label className="text-[14px] font-medium text-primary">
                    Nødvendige
                  </Label>
                  <p className="text-[13px] text-muted-foreground mt-0.5">
                    Kreves for grunnleggende funksjonalitet som navigasjon og sikkerhet.
                  </p>
                </div>
              </div>
              <Switch
                checked={true}
                disabled
                className="opacity-60"
              />
            </div>

            {/* Statistics cookies */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-secondary/20">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <Label htmlFor="statistics" className="text-[14px] font-medium text-primary cursor-pointer">
                    Statistikk
                  </Label>
                  <p className="text-[13px] text-muted-foreground mt-0.5">
                    Hjelper oss å forstå hvordan besøkende bruker nettstedet.
                  </p>
                </div>
              </div>
              <Switch
                id="statistics"
                checked={preferences.statistics}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, statistics: checked }))
                }
              />
            </div>

            {/* Marketing cookies */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-secondary/20">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                  <Megaphone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <Label htmlFor="marketing" className="text-[14px] font-medium text-primary cursor-pointer">
                    Markedsføring
                  </Label>
                  <p className="text-[13px] text-muted-foreground mt-0.5">
                    Brukes for å vise relevante annonser og innhold.
                  </p>
                </div>
              </div>
              <Switch
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, marketing: checked }))
                }
              />
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
              <Button
                onClick={savePreferences}
                variant="outline"
                className="flex-1 h-11 rounded-xl border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Lagre valg
              </Button>
              <Button
                onClick={acceptAllFromModal}
                className="flex-1 h-11 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Godta alle
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 pt-2 text-[13px]">
              <Link 
                to="/personvern" 
                className="text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors"
              >
                Personvern
              </Link>
              <span className="text-primary/20">·</span>
              <Link 
                to="/cookies" 
                className="text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors"
              >
                Cookie-policy
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
