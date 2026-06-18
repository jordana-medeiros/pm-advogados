import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

import { OrganizationJsonLd } from "@/components/json-ld";
import { ogImagePath, siteName } from "@/lib/site-data";
import { getSiteUrl } from "@/lib/site-url";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();
const defaultDescription =
  "Escritório de advocacia com forte atuação em Direito Criminal, atendimento direto e orientação jurídica estratégica em áreas complementares.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "advocacia",
    "escritório de advocacia",
    "direito criminal",
    "advogado criminalista",
    "consultoria jurídica",
    "direito empresarial",
    "direito civil",
    siteName,
  ],
  openGraph: {
    title: siteName,
    description: "Defesa criminal estratégica com atuação jurídica ampla e integrada.",
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    images: [
      {
        url: ogImagePath,
        alt: `Equipe ${siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Defesa criminal estratégica com atuação jurídica ampla e integrada.",
    images: [ogImagePath],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
