import {
  addresses,
  brandLogos,
  faqItems,
  ogImagePath,
  practiceAreas,
  siteName,
  telPrimaryHref,
  telSecondaryHref,
} from "@/lib/site-data";
import type { Article } from "@/lib/articles";
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
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": schemas,
        }),
      }}
    />
  );
}

export function ArticleJsonLd({ article }: { article: Article }) {
  const siteUrl = getSiteUrl();

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    image: `${siteUrl}${article.coverImage}`,
    url: `${siteUrl}/blog/${article.slug}`,
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${brandLogos.gold}`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
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
    logo: `${siteUrl}${brandLogos.gold}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: [telPrimaryHref.replace("tel:", ""), telSecondaryHref.replace("tel:", "")],
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
