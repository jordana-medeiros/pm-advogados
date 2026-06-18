import {
  addresses,
  faqItems,
  ogImagePath,
  phoneDisplay,
  practiceAreas,
  siteName,
  telPrimaryHref,
} from "@/lib/site-data";
import { getSiteUrl } from "@/lib/site-url";

type JsonLdProps = {
  includeFaq?: boolean;
};

export function JsonLd({ includeFaq = false }: JsonLdProps) {
  const siteUrl = getSiteUrl();

  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}${ogImagePath}`,
    telephone: telPrimaryHref.replace("tel:", ""),
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    address: addresses.map((item) => ({
      "@type": "PostalAddress",
      streetAddress: item.line,
      addressLocality: item.city,
      addressCountry: "BR",
    })),
    knowsAbout: practiceAreas.map((area) => area.name),
  };

  const schemas: object[] = [legalService];

  if (includeFaq) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}

export function OrganizationJsonLd() {
  const siteUrl = getSiteUrl();

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}${ogImagePath}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phoneDisplay,
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}
