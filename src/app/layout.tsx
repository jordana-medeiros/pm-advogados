import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { ogImageHeight, ogImagePath, ogImageWidth, siteDescription, siteName } from "@/lib/site-data";
import { getSiteUrl } from "@/lib/site-url";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = getSiteUrl();

const googleTagManagerId = "GTM-MMVH2656";

const googleTagManagerScript = `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${googleTagManagerId}');
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
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
    description: siteDescription,
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    images: [
      {
        url: ogImagePath,
        width: ogImageWidth,
        height: ogImageHeight,
        alt: `Equipe ${siteName}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: ogImagePath,
        width: ogImageWidth,
        height: ogImageHeight,
        alt: `Equipe ${siteName}`,
      },
    ],
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
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{ __html: googleTagManagerScript }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}

