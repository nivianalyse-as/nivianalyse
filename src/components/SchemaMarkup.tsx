import { useEffect } from "react";

interface OrganizationSchema {
  type: "Organization";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
}

interface PersonSchema {
  type: "Person";
  name: string;
  jobTitle: string;
  worksFor: string;
  description?: string;
  image?: string;
}

interface ArticleSchema {
  type: "Article" | "NewsArticle";
  headline: string;
  description: string;
  datePublished: string;
  author: string[];
  publisher: string;
  image?: string;
}

type SchemaType = OrganizationSchema | PersonSchema | ArticleSchema;

interface SchemaMarkupProps {
  schema: SchemaType;
}

const SchemaMarkup = ({ schema }: SchemaMarkupProps) => {
  useEffect(() => {
    const scriptId = `schema-${schema.type}-${Date.now()}`;
    
    let jsonLd: object;
    
    if (schema.type === "Organization") {
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: schema.name,
        url: schema.url,
        logo: schema.logo,
        description: schema.description,
        address: schema.address ? {
          "@type": "PostalAddress",
          streetAddress: schema.address.streetAddress,
          addressLocality: schema.address.addressLocality,
          postalCode: schema.address.postalCode,
          addressCountry: schema.address.addressCountry,
        } : undefined,
        telephone: schema.telephone,
        email: schema.email,
        ...((schema as any).creator ? {
          creator: {
            "@type": "Organization",
            name: (schema as any).creator.name,
            url: (schema as any).creator.url,
          },
        } : {}),
      };
    } else if (schema.type === "Person") {
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: schema.name,
        jobTitle: schema.jobTitle,
        worksFor: {
          "@type": "Organization",
          name: schema.worksFor,
        },
        description: schema.description,
        image: schema.image,
      };
    } else {
      jsonLd = {
        "@context": "https://schema.org",
        "@type": schema.type,
        headline: schema.headline,
        description: schema.description,
        datePublished: schema.datePublished,
        author: schema.author.map(name => ({
          "@type": "Person",
          name,
        })),
        publisher: {
          "@type": "Organization",
          name: schema.publisher,
        },
        image: schema.image,
      };
    }

    // Clean undefined values
    const cleanJson = JSON.parse(JSON.stringify(jsonLd));
    
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(cleanJson);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [schema]);

  return null;
};

export default SchemaMarkup;

// Pre-configured schemas for NIVI Analyse
export const niviOrganizationSchema: OrganizationSchema & { creator?: { name: string; url: string } } = {
  type: "Organization",
  name: "NIVI Analyse AS",
  url: "https://nivianalyse.lovable.app",
  description: "Uavhengig analyse og rådgivning for kommuner, fylkeskommuner og offentlig sektor.",
  address: {
    streetAddress: "Solløkkaveien 73",
    addressLocality: "Sandefjord",
    postalCode: "3233",
    addressCountry: "NO",
  },
  telephone: "+47 22 12 34 56",
  email: "post@nivianalyse.no",
  creator: {
    name: "Digital Thinking",
    url: "https://www.digitalthinking.no/",
  },
};

// ProfessionalService schema for SEO
export const niviProfessionalServiceSchema = {
  type: "ProfessionalService" as const,
  name: "NIVI Analyse AS",
  url: "https://nivianalyse.lovable.app",
  description: "Uavhengig analyse og rådgivning innen kommuneøkonomi, interkommunalt samarbeid, strukturreformer og beredskap.",
  address: {
    streetAddress: "Solløkkaveien 73",
    addressLocality: "Sandefjord",
    postalCode: "3233",
    addressCountry: "NO",
  },
  telephone: "+47 22 12 34 56",
  email: "post@nivianalyse.no",
};

export const geirVinsandSchema: PersonSchema = {
  type: "Person",
  name: "Geir Vinsand",
   jobTitle: "Partner",
  worksFor: "NIVI Analyse AS",
  description: "Over 30 års erfaring med kommunal forvaltning. En av landets fremste eksperter på interkommunalt samarbeid.",
};

export const havardMoeSchema: PersonSchema = {
  type: "Person",
  name: "Håvard Moe",
  jobTitle: "Partner",
  worksFor: "NIVI Analyse AS",
  description: "Erfaren analytiker med bred kompetanse. Har bistått over 100 kommuner med økonomiske analyser.",
};
