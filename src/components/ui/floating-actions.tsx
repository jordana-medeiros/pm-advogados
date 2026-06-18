import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { FloatingWhatsAppPrompt } from "@/components/ui/floating-whatsapp-prompt";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";

export function FloatingActions() {
  return (
    <div className="floating-actions">
      <ScrollToTopButton />
      <div className="fab-whatsapp-column">
        <FloatingWhatsAppPrompt />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
