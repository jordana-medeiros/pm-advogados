import { contactHref, externalLinkRel } from "@/lib/site-data";

export function FloatingWhatsApp() {
  return (
    <a
      href={contactHref}
      target="_blank"
      rel={externalLinkRel}
      id="floating-whatsapp"
      aria-label="Falar com a equipe pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 group inline-flex items-center gap-3 rounded-full bg-[#25d366] px-5 py-3 text-sm font-semibold text-[#062b17] shadow-[0_16px_40px_rgba(37,211,102,0.32)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(37,211,102,0.45)]"
    >
      {/* Anel de pulse sutil */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25d366] opacity-0 group-hover:opacity-30 pulse-ring-animation"
      />

      <span className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-[#25d366]"
        >
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.06 2C6.65 2 2.25 6.4 2.25 11.81c0 1.73.45 3.43 1.31 4.93L2 22l5.42-1.5a9.8 9.8 0 0 0 4.64 1.18h.01c5.41 0 9.81-4.4 9.81-9.81a9.74 9.74 0 0 0-2.83-6.96Zm-6.99 15.1h-.01a8.12 8.12 0 0 1-4.14-1.13l-.3-.18-3.22.89.86-3.14-.2-.32a8.11 8.11 0 0 1-1.24-4.32c0-4.48 3.65-8.13 8.14-8.13 2.17 0 4.21.84 5.74 2.38a8.07 8.07 0 0 1 2.38 5.75c0 4.48-3.65 8.2-8.01 8.2Zm4.46-6.08c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.17-.71-.64-1.18-1.42-1.32-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.01.4 1.36.51.57.18 1.08.15 1.49.09.45-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </span>
      <span className="hidden sm:inline relative">Falar agora</span>
    </a>
  );
}
