"use client";

import { useEffect, useState } from "react";
import { contactHref } from "@/lib/site-data";

export function FloatingWhatsapp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {showTooltip && (
        <div className="pointer-events-auto bg-[#0a241f] border border-[#b08a45]/40 text-[#eef4f1] p-4 rounded-sm shadow-lg max-w-xs animate-fade-in relative transition-all duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-white/50 hover:text-white text-xs cursor-pointer focus:outline-none"
            aria-label="Fechar aviso"
          >
            ✕
          </button>
          <div className="pr-4">
            <p className="text-xs font-semibold text-[#b08a45] uppercase tracking-wider mb-1">
              🚨 Plantão Urgente
            </p>
            <p className="text-xs leading-relaxed text-[#eef4f1]/90">
              <strong className="text-white">Não perca tempo!</strong> Fale com o advogado de plantão agora mesmo pelo WhatsApp.
            </p>
            <a
              href={contactHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-2.5 text-[0.68rem] font-bold text-[#b08a45] hover:text-[#c9a05a] uppercase tracking-wider transition-colors"
            >
              Iniciar Conversa →
            </a>
          </div>
          {/* Popover Arrow */}
          <div className="absolute -bottom-2 right-5 w-4 h-4 bg-[#0a241f] border-r border-b border-[#b08a45]/40 transform rotate-45"></div>
        </div>
      )}

      <a
        href={contactHref}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20ba5a] shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 relative group"
        aria-label="Falar com advogado no WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25d366]/30 animate-ping opacity-75"></span>
        <span className="absolute inset-0 rounded-full border-2 border-[#b08a45] scale-100 group-hover:scale-110 transition-all duration-300"></span>

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-8 h-8 fill-white relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.864-9.852.002-2.632-1.02-5.105-2.877-6.967C16.383 1.968 13.916.945 11.294.945c-5.436 0-9.86 4.418-9.863 9.854-.002 1.958.502 3.868 1.462 5.51L1.87 22.083l6.02-1.579.034-.015.723.465z" />
          <path d="M17.303 14.18c-.287-.144-1.702-.84-1.965-.935-.263-.097-.456-.145-.648.144-.192.29-.744.936-.912 1.127-.168.19-.336.215-.624.072-.288-.145-1.218-.45-2.32-1.433-.858-.766-1.438-1.712-1.606-2-.168-.288-.018-.444.126-.587.13-.13.288-.337.432-.505.144-.168.192-.288.288-.48.096-.193.048-.36-.024-.505-.072-.144-.648-1.56-.888-2.136-.233-.56-.47-.482-.648-.49-.168-.008-.36-.01-.552-.01-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4 0 1.417 1.032 2.785 1.176 2.977.144.192 2.03 3.1 4.92 4.35.688.297 1.224.474 1.644.608.69.22 1.32.19 1.82.115.556-.083 1.702-.695 1.942-1.367.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.552-.336" />
        </svg>
      </a>
    </div>
  );
}
