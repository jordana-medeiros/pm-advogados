"use client";

import { useEffect, useRef, useState } from "react";

import { criminalContactHref, externalLinkRel } from "@/lib/site-data";

const criminalPromptMessages = [
  "Plantão criminal 24h — precisa de ajuda?",
  "Fale com o advogado de plantão agora.",
  "Urgência? Clique e fale pelo WhatsApp.",
] as const;

export function FloatingWhatsapp() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [showPrompt, setShowPrompt] = useState(true);
  const [textVisible, setTextVisible] = useState(true);
  const fadeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!showPrompt || criminalPromptMessages.length <= 1) return;

    const interval = window.setInterval(() => {
      setTextVisible(false);
      fadeTimeoutRef.current = window.setTimeout(() => {
        setPromptIndex((current) => (current + 1) % criminalPromptMessages.length);
        setTextVisible(true);
        fadeTimeoutRef.current = null;
      }, 260);
    }, 6000);

    return () => {
      window.clearInterval(interval);
      if (fadeTimeoutRef.current !== null) {
        window.clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, [showPrompt]);

  return (
    <div className="floating-actions">
      <div className="fab-whatsapp-column">
        {showPrompt ? (
          <div className="fab-whatsapp-prompt-wrap">
            <a
              href={criminalContactHref}
              target="_blank"
              rel={externalLinkRel}
              className="fab-whatsapp-prompt fab-whatsapp-prompt--criminal"
              aria-label={`${criminalPromptMessages[promptIndex]} Falar pelo WhatsApp`}
            >
              <span
                className={`fab-whatsapp-prompt-text fab-whatsapp-prompt-text--swap ${
                  textVisible ? "is-visible" : ""
                }`}
              >
                {criminalPromptMessages[promptIndex]}
              </span>
              <span
                className="fab-whatsapp-prompt-tail fab-whatsapp-prompt-tail--criminal"
                aria-hidden="true"
              />
            </a>
            <button
              type="button"
              onClick={() => setShowPrompt(false)}
              className="fab-whatsapp-prompt-close"
              aria-label="Fechar aviso"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 12 12"
                className="h-2.5 w-2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              >
                <path d="M2 2l8 8M10 2 2 10" />
              </svg>
            </button>
          </div>
        ) : null}

        <a
          href={criminalContactHref}
          target="_blank"
          rel={externalLinkRel}
          aria-label="Falar com advogado criminalista no WhatsApp"
          className="fab-whatsapp flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-200"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current"
          >
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.06 2C6.65 2 2.25 6.4 2.25 11.81c0 1.73.45 3.43 1.31 4.93L2 22l5.42-1.5a9.8 9.8 0 0 0 4.64 1.18h.01c5.41 0 9.81-4.4 9.81-9.81a9.74 9.74 0 0 0-2.83-6.96Zm-6.99 15.1h-.01a8.12 8.12 0 0 1-4.14-1.13l-.3-.18-3.22.89.86-3.14-.2-.32a8.11 8.11 0 0 1-1.24-4.32c0-4.48 3.65-8.13 8.14-8.13 2.17 0 4.21.84 5.74 2.38a8.07 8.07 0 0 1 2.38 5.75c0 4.48-3.65 8.2-8.01 8.2Zm4.46-6.08c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.17-.71-.64-1.18-1.42-1.32-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.01.4 1.36.51.57.18 1.08.15 1.49.09.45-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
