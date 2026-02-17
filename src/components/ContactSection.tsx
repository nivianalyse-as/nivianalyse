import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-16 pb-20 md:py-24 bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left column - Info */}
          <div>
            <div className="mb-8">
              <SectionHeader
                title="Kontakt oss"
                subtitle="Ta kontakt for en uforpliktende prat om hvordan vi kan bistå din kommune eller organisasjon."
              />
            </div>

            <div className="space-y-5">
              <a
                href="mailto:post@nivianalyse.no"
                className="group flex items-start gap-4 p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[13px] text-muted-foreground mb-0.5">E-post</p>
                  <p className="text-[15px] font-medium text-primary group-hover:text-accent transition-colors">
                    post@nivianalyse.no
                  </p>
                </div>
              </a>

              <a
                href="tel:+4722123456"
                className="group flex items-start gap-4 p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[13px] text-muted-foreground mb-0.5">Telefon</p>
                  <p className="text-[15px] font-medium text-primary group-hover:text-accent transition-colors">
                    +47 22 12 34 56
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/20">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[13px] text-muted-foreground mb-0.5">Adresse</p>
                  <p className="text-[15px] font-medium text-primary">
                    Solløkkaveien 73<br />
                    3233 Sandefjord
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/20">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[13px] text-muted-foreground mb-0.5">Svartid</p>
                  <p className="text-[15px] font-medium text-primary">
                    Normalt 1–2 virkedager
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="mt-10 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
