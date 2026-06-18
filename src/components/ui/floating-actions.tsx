import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";

export function FloatingActions() {
  return (
    <div className="floating-actions">
      <FloatingWhatsApp />
      <ScrollToTopButton />
    </div>
  );
}
