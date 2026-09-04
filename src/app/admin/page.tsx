import type { Metadata } from "next";

import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { getAdminSeed } from "@/lib/admin-seed";

export const metadata: Metadata = {
  title: "Painel administrativo",
  description: "Gestão de conteúdo do site Pereira e Medeiros.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminDashboard seed={getAdminSeed()} activeSection="overview" />;
}
