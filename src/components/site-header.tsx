"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  contactHref,
  externalLinkRel,
  navItems,
  siteName,
} from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Bloquear scroll quando menu aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="relative border border-white/10 bg-brand-deep/96 text-[#fafafa] shadow-[0_16px_48px_rgba(14,42,36,0.28)] backdrop-blur-md">
      {/* Linha dourada no topo */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#b08a45]/60 to-transparent" />

      <div className="flex h-16 items-center justify-between px-5 sm:px-7">
        {/* Logo */}
        <Link href="/" className="min-w-0 group" onClick={closeMenu}>
          <p className="text-[0.65rem] font-bold tracking-[0.22em] text-brand uppercase transition-colors group-hover:text-[#c9a05a]">
            Pereira e Medeiros
          </p>
          <p className="truncate text-[0.7rem] text-[#9ab0a8] leading-tight hidden sm:block">
            {siteName}
          </p>
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Principal" className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive ? " active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={contactHref}
            target="_blank"
            rel={externalLinkRel}
            className="ml-3 inline-flex items-center rounded-full bg-brand px-4 py-2 text-xs font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c9a05a] hover:shadow-[0_6px_20px_rgba(176,138,69,0.35)]"
          >
            Falar agora
          </a>
        </nav>

        {/* Hamburguer */}
        <button
          id="mobile-menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-1"
        >
          <span
            className={`block h-[1.5px] w-5 bg-[#dfe7e3] origin-center transition-all duration-250 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-[#dfe7e3] transition-all duration-250 ${open ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-[#dfe7e3] origin-center transition-all duration-250 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Nav mobile */}
      {open ? (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-white/8"
        >
          <nav aria-label="Principal" className="flex flex-col px-5 py-4 gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`px-3 py-2.5 text-sm rounded transition-colors ${
                    isActive
                      ? "text-brand font-semibold bg-white/5"
                      : "text-[#dfe7e3] hover:bg-white/6 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={contactHref}
              target="_blank"
              rel={externalLinkRel}
              onClick={closeMenu}
              className="mt-2 btn-primary justify-center text-center text-xs"
            >
              Falar agora pelo WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
