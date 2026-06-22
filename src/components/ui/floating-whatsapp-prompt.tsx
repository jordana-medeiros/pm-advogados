"use client";

import { useEffect, useRef, useState } from "react";

import {
  contactHref,
  externalLinkRel,
  whatsappPromptMessages,
} from "@/lib/site-data";

export function FloatingWhatsAppPrompt() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const fadeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (whatsappPromptMessages.length <= 1) return;

    const interval = window.setInterval(() => {
      setVisible(false);
      fadeTimeoutRef.current = window.setTimeout(() => {
        setIndex((current) => (current + 1) % whatsappPromptMessages.length);
        setVisible(true);
        fadeTimeoutRef.current = null;
      }, 220);
    }, 5000);

    return () => {
      window.clearInterval(interval);
      if (fadeTimeoutRef.current !== null) {
        window.clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <a
      href={contactHref}
      target="_blank"
      rel={externalLinkRel}
      className="fab-whatsapp-prompt group"
      aria-label={`${whatsappPromptMessages[index]} Falar pelo WhatsApp`}
    >
      <span
        className={`fab-whatsapp-prompt-text transition-[opacity,transform] duration-300 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-1 opacity-0"
        }`}
      >
        {whatsappPromptMessages[index]}
      </span>
      <span className="fab-whatsapp-prompt-tail" aria-hidden="true" />
    </a>
  );
}
