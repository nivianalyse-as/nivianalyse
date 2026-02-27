import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  topic: string;
  message: string;
  consent: boolean;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

const topics = [
  { value: "kommuneokonomi", label: "Kommuneøkonomi" },
  { value: "kommunestruktur", label: "Kommunestruktur / interkommunalt samarbeid" },
  { value: "organisering", label: "Organisering og effektivisering" },
  { value: "politisk-radgivning", label: "Politisk rådgivning" },
  { value: "annet", label: "Annet" },
];

const SuccessMessage = ({ onReset }: { onReset: () => void }) => (
  <div className="animate-fade-in bg-card border border-primary/[0.08] rounded-[20px] p-6 md:p-10 shadow-sm max-w-lg">
    <h2
      tabIndex={-1}
      className="text-2xl md:text-3xl font-semibold tracking-tight text-primary mb-6"
    >
      Takk for din henvendelse
    </h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      <p>
        Tusen takk for at du tok kontakt med NIVI Analyse.
        Vi har mottatt meldingen din og vil ta kontakt så snart vi har anledning.
      </p>
      <p>
        Dersom henvendelsen gjelder noe som haster, ber vi deg ta direkte
        kontakt på telefon eller e-post.
      </p>
    </div>
    <div className="mt-8">
      <button
        onClick={onReset}
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        Send en ny melding
      </button>
    </div>
  </div>
);

const ContactForm = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    topic: "",
    message: "",
    consent: false,
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Navn er påkrevd";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-post er påkrevd";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Ugyldig e-postadresse";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Melding er påkrevd";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Meldingen må være minst 20 tegn";
    }

    if (!formData.consent) {
      newErrors.consent = "Du må samtykke for å sende henvendelsen";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "", email: "", phone: "", organization: "", topic: "", message: "", consent: false, honeypot: "",
    });
    setErrors({});
    window.history.replaceState(null, "", window.location.pathname);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any).toString(),
      });

      formRef.current?.scrollIntoView({ behavior: "smooth" });

      // GA4 event (if installed)
      if ((window as any).gtag) {
        (window as any).gtag("event", "form_submit", { form_name: "kontakt" });
      }

      window.history.replaceState(null, "", "#takk");
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Noe gikk galt. Prøv igjen.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-focus heading for accessibility after submit (delayed for fade-in)
  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        formRef.current?.querySelector('h2')?.focus();
      }, 100);
    }
  }, [submitted]);

  if (submitted) {
    return (
      <div ref={formRef}>
        <SuccessMessage onReset={handleReset} />
      </div>
    );
  }

  return (
    <div ref={formRef}>
    <form
      name="kontakt"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-card border border-primary/[0.08] rounded-[20px] p-6 md:p-10 shadow-sm max-w-lg"
      noValidate
    >
      <input type="hidden" name="form-name" value="kontakt" />
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => handleInputChange("honeypot", e.target.value)}
        />
      </div>

      <div className="space-y-4 md:space-y-5">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[14px] font-medium text-primary">
            Navn <span className="text-accent">*</span>
          </Label>
          <Input
            id="name"
            name="navn"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`h-11 rounded-xl border-primary/15 focus:border-primary focus:ring-primary ${
              errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
            }`}
            placeholder="Ditt fulle navn"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="name-error" className="text-[13px] text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[14px] font-medium text-primary">
            E-post <span className="text-accent">*</span>
          </Label>
          <Input
            id="email"
            name="epost"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`h-11 rounded-xl border-primary/15 focus:border-primary focus:ring-primary ${
              errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
            }`}
            placeholder="din@epost.no"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" className="text-[13px] text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[14px] font-medium text-primary">
            Telefon <span className="text-muted-foreground text-[12px]">(valgfritt)</span>
          </Label>
          <Input
            id="phone"
            name="telefon"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="h-11 rounded-xl border-primary/15 focus:border-primary focus:ring-primary"
            placeholder="+47 xxx xx xxx"
          />
        </div>

        {/* Organization */}
        <div className="space-y-2">
          <Label htmlFor="organization" className="text-[14px] font-medium text-primary">
            Kommune/virksomhet <span className="text-muted-foreground text-[12px]">(valgfritt)</span>
          </Label>
          <Input
            id="organization"
            name="organisasjon"
            type="text"
            value={formData.organization}
            onChange={(e) => handleInputChange("organization", e.target.value)}
            className="h-11 rounded-xl border-primary/15 focus:border-primary focus:ring-primary"
            placeholder="F.eks. Sandefjord kommune"
          />
        </div>

        {/* Topic */}
        <div className="space-y-2">
          <Label htmlFor="topic" className="text-[14px] font-medium text-primary">
            Tema <span className="text-muted-foreground text-[12px]">(valgfritt)</span>
          </Label>
          <Select
            value={formData.topic}
            onValueChange={(value) => handleInputChange("topic", value)}
          >
            <SelectTrigger id="topic" className="h-11 rounded-xl border-primary/15 focus:border-primary focus:ring-primary bg-card">
              <SelectValue placeholder="Velg tema" />
            </SelectTrigger>
            <SelectContent className="bg-card border border-primary/15 rounded-xl shadow-lg z-50">
              {topics.map((topic) => (
                <SelectItem key={topic.value} value={topic.value} className="focus:bg-secondary/50">
                  {topic.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {/* Hidden input so the select value is included in FormData */}
          <input type="hidden" name="tema" value={formData.topic} />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-[14px] font-medium text-primary">
            Melding <span className="text-accent">*</span>
          </Label>
          <Textarea
            id="message"
            name="melding"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`min-h-[120px] md:min-h-[140px] rounded-xl border-primary/15 focus:border-primary focus:ring-primary resize-y ${
              errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
            }`}
            placeholder="Beskriv din henvendelse (minimum 20 tegn)"
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p id="message-error" className="text-[13px] text-red-500">{errors.message}</p>
          )}
          <p className="text-[12px] text-muted-foreground">{formData.message.length}/2000 tegn</p>
        </div>

        {/* Consent */}
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange("consent", checked === true)}
              className={`mt-0.5 ${errors.consent ? "border-red-500" : ""}`}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              aria-invalid={!!errors.consent}
            />
            <Label htmlFor="consent" className="text-[14px] leading-relaxed text-muted-foreground cursor-pointer">
              Jeg samtykker til at NIVI Analyse kan kontakte meg om henvendelsen.{" "}
              <Link to="/personvern" className="text-primary underline underline-offset-2 hover:text-accent transition-colors">
                Se personvern
              </Link>
              . <span className="text-accent">*</span>
            </Label>
          </div>
          {errors.consent && (
            <p id="consent-error" className="text-[13px] text-red-500 ml-7">{errors.consent}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl text-[15px] transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-60"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Sender...
            </span>
          ) : (
            "Send henvendelse"
          )}
        </Button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;
