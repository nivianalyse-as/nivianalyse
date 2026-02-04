import { useState } from "react";
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
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  topic: string;
  message: string;
  consent: boolean;
  honeypot: string; // Spam protection
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

const topics = [
  { value: "strategisk-analyse", label: "Strategisk analyse" },
  { value: "kommuneokonomi", label: "Kommuneøkonomi" },
  { value: "organisasjonsutvikling", label: "Organisasjonsutvikling" },
  { value: "politisk-radgivning", label: "Politisk rådgivning" },
  { value: "annet", label: "Annet" },
];

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Navn er påkrevd";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Navn må være under 100 tegn";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-post er påkrevd";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Ugyldig e-postadresse";
    } else if (formData.email.length > 255) {
      newErrors.email = "E-post må være under 255 tegn";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Melding er påkrevd";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Meldingen må være minst 20 tegn";
    } else if (formData.message.length > 2000) {
      newErrors.message = "Meldingen må være under 2000 tegn";
    }

    if (!formData.consent) {
      newErrors.consent = "Du må samtykke for å sende henvendelsen";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      console.log("Bot detected");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - in production, this would send to an edge function
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For now, we'll just show success
      // In production: send to edge function that emails post@nivianalyse.no
      
      setIsSubmitted(true);
      toast({
        title: "Henvendelse mottatt",
        description: "Takk! Vi svarer normalt innen 1–2 virkedager.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        topic: "",
        message: "",
        consent: false,
        honeypot: "",
      });
    } catch (error) {
      toast({
        title: "Noe gikk galt",
        description: "Kunne ikke sende henvendelsen. Prøv igjen senere.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-primary/[0.08] rounded-[20px] p-8 md:p-10 shadow-sm">
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-3">
            Takk for din henvendelse!
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Vi har mottatt meldingen din og svarer normalt innen 1–2 virkedager.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => setIsSubmitted(false)}
          >
            Send ny henvendelse
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-primary/[0.08] rounded-[20px] p-6 md:p-8 shadow-sm"
      noValidate
    >
      {/* Honeypot field - hidden from users, bots will fill it */}
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

      <div className="space-y-5">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[14px] font-medium text-primary">
            Navn <span className="text-accent">*</span>
          </Label>
          <Input
            id="name"
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
            <p id="name-error" className="text-[13px] text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[14px] font-medium text-primary">
            E-post <span className="text-accent">*</span>
          </Label>
          <Input
            id="email"
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
            <p id="email-error" className="text-[13px] text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone (optional) */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[14px] font-medium text-primary">
            Telefon <span className="text-muted-foreground text-[12px]">(valgfritt)</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="h-11 rounded-xl border-primary/15 focus:border-primary focus:ring-primary"
            placeholder="+47 xxx xx xxx"
          />
        </div>

        {/* Organization (optional) */}
        <div className="space-y-2">
          <Label htmlFor="organization" className="text-[14px] font-medium text-primary">
            Kommune/virksomhet <span className="text-muted-foreground text-[12px]">(valgfritt)</span>
          </Label>
          <Input
            id="organization"
            type="text"
            value={formData.organization}
            onChange={(e) => handleInputChange("organization", e.target.value)}
            className="h-11 rounded-xl border-primary/15 focus:border-primary focus:ring-primary"
            placeholder="F.eks. Sandefjord kommune"
          />
        </div>

        {/* Topic dropdown */}
        <div className="space-y-2">
          <Label htmlFor="topic" className="text-[14px] font-medium text-primary">
            Tema <span className="text-muted-foreground text-[12px]">(valgfritt)</span>
          </Label>
          <Select
            value={formData.topic}
            onValueChange={(value) => handleInputChange("topic", value)}
          >
            <SelectTrigger 
              id="topic"
              className="h-11 rounded-xl border-primary/15 focus:border-primary focus:ring-primary bg-card"
            >
              <SelectValue placeholder="Velg tema" />
            </SelectTrigger>
            <SelectContent className="bg-card border border-primary/15 rounded-xl shadow-lg z-50">
              {topics.map((topic) => (
                <SelectItem 
                  key={topic.value} 
                  value={topic.value}
                  className="focus:bg-secondary/50"
                >
                  {topic.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-[14px] font-medium text-primary">
            Melding <span className="text-accent">*</span>
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`min-h-[140px] rounded-xl border-primary/15 focus:border-primary focus:ring-primary resize-y ${
              errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
            }`}
            placeholder="Beskriv din henvendelse (minimum 20 tegn)"
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p id="message-error" className="text-[13px] text-red-500">
              {errors.message}
            </p>
          )}
          <p className="text-[12px] text-muted-foreground">
            {formData.message.length}/2000 tegn
          </p>
        </div>

        {/* Consent checkbox */}
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) =>
                handleInputChange("consent", checked === true)
              }
              className={`mt-0.5 ${errors.consent ? "border-red-500" : ""}`}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              aria-invalid={!!errors.consent}
            />
            <Label
              htmlFor="consent"
              className="text-[14px] leading-relaxed text-muted-foreground cursor-pointer"
            >
              Jeg samtykker til at NIVI Analyse kan kontakte meg om henvendelsen.{" "}
              <Link
                to="/personvern"
                className="text-primary underline underline-offset-2 hover:text-accent transition-colors"
              >
                Se personvern
              </Link>
              . <span className="text-accent">*</span>
            </Label>
          </div>
          {errors.consent && (
            <p id="consent-error" className="text-[13px] text-red-500 ml-7">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl text-[15px] transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sender...
            </>
          ) : (
            "Send henvendelse"
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
