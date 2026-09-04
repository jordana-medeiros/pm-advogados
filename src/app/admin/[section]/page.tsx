import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  AdminDashboard,
} from "@/components/admin/admin-dashboard";
import { adminSectionIds, type SectionId } from "@/lib/admin-sections";
import { getAdminSeed } from "@/lib/admin-seed";

export const metadata: Metadata = {
  title: "Painel administrativo",
  description: "Gestão de conteúdo do site Pereira e Medeiros.",
  robots: { index: false, follow: false },
};

type AdminSectionPageProps = {
  params: Promise<{ section: string }>;
};

export function generateStaticParams() {
  return adminSectionIds
    .filter((section) => section !== "overview")
    .map((section) => ({ section }));
}

export default async function AdminSectionPage({
  params,
}: AdminSectionPageProps) {
  const { section } = await params;

  if (!adminSectionIds.includes(section as SectionId)) {
    notFound();
  }

  return (
    <AdminDashboard
      seed={getAdminSeed()}
      activeSection={section as SectionId}
    />
  );
}
