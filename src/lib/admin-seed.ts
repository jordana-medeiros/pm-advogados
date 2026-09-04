import { articles, getArticleCategories, sortArticlesByDate } from "@/lib/articles";
import {
  addresses,
  brandLogos,
  contactHref,
  criminalHighlightIntro,
  differentiators,
  faqItems,
  homeAreasHref,
  images,
  instagramHandle,
  instagramUrl,
  lawyers,
  navItems,
  ogImageHeight,
  ogImagePath,
  ogImageWidth,
  practiceAreas,
  practiceAreasIntro,
  siteDescription,
  siteName,
  teamIntro,
  whatsappPrimary,
  whatsappPromptMessages,
  whatsappSecondary,
  whenSeekIntro,
  whenSeekItems,
} from "@/lib/site-data";
import {
  criminalAttendanceSteps,
  criminalDifferentiators,
  criminalEmergencyServices,
  criminalFaqs,
  criminalHeroTrustItems,
  criminalLandingDescription,
  criminalLandingTitle,
  criminalOgImage,
} from "@/lib/criminal-landing-data";
import { getSiteUrl } from "@/lib/site-url";

export function getAdminSeed() {
  const sortedArticles = sortArticlesByDate(articles);

  return {
    generatedAt: new Date().toISOString(),
    site: {
      name: siteName,
      description: siteDescription,
      siteUrl: getSiteUrl(),
      contactHref,
      whatsappPrimary,
      whatsappSecondary,
      instagramHandle,
      instagramUrl,
      addresses,
      whatsappPromptMessages: [...whatsappPromptMessages],
      logos: brandLogos,
      ogImage: {
        path: ogImagePath,
        width: ogImageWidth,
        height: ogImageHeight,
      },
    },
    navigation: navItems,
    home: {
      heroTitle:
        "Defesa jurídica estratégica, atendimento humanizado e resultados concretos.",
      heroBullets: [
        "Atendimento presencial e on-line",
        "Defesa criminal 24 horas",
        "Equipe especializada",
        "Atuação em Minas Gerais, Goiás e em todo o território nacional",
      ],
      primaryCta: "Falar com um advogado",
      secondaryCta: "Conhecer áreas de atuação",
      areasHref: homeAreasHref,
      practiceAreasIntro,
      teamIntro,
      whenSeekIntro,
      whenSeekItems,
      differentiators,
      faqItems,
      criminalHighlightIntro,
    },
    criminal: {
      title: criminalLandingTitle,
      description: criminalLandingDescription,
      ogImage: criminalOgImage,
      heroTrustItems: [...criminalHeroTrustItems],
      emergencyServices: [...criminalEmergencyServices],
      attendanceSteps: [...criminalAttendanceSteps],
      differentiators: [...criminalDifferentiators],
      faqs: [...criminalFaqs],
    },
    practiceAreas,
    lawyers,
    blog: {
      introTitle: "Informação jurídica sem complicação.",
      categories: getArticleCategories(),
      articles: sortedArticles.map((article) => ({
        ...article,
        status: "published" as const,
        seoTitle: article.title,
        seoDescription: article.excerpt,
      })),
    },
    media: {
      hero: images.hero,
      team: images.team,
      criminal: images.criminal,
      blogCovers: sortedArticles.map((article) => ({
        label: article.title,
        path: article.coverImage,
      })),
      lawyers: lawyers.map((lawyer) => ({
        label: lawyer.name,
        path: lawyer.photo,
      })),
    },
  };
}
