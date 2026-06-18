"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { SiteLogo } from "@/components/layout/site-logo";
import { navItems } from "@/lib/site-data";

function SiteHeaderInner() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-brand-deep-darker/60 backdrop-blur-[2px] md:hidden"
          aria-label="Fechar menu"
          onClick={closeMenu}
        />
      ) : null}

      <header className="relative z-40 overflow-hidden rounded-sm border border-white/10 bg-brand-deep/96 px-5 text-on-dark shadow-[0_16px_48px_rgba(14,42,36,0.28)] backdrop-blur-md sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b08a45]/60 to-transparent" />

        <div className="flex h-16 items-center justify-between gap-4">
          <SiteLogo variant="white" onNavigate={closeMenu} priority />

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
            <Link
              href="/contato"
              className="ml-3 inline-flex items-center rounded-full bg-brand px-4 py-2 text-xs font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[0_6px_20px_rgba(176,138,69,0.35)]"
            >
              Contato
            </Link>
          </nav>

          <button
            id="mobile-menu-toggle"
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="relative z-50 md:hidden flex flex-col gap-[5px] p-2 -mr-1"
          >
            <span
              className={`block h-[1.5px] w-5 bg-[var(--text-on-dark-hover)] origin-center transition-all duration-250 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-[var(--text-on-dark-hover)] transition-all duration-250 ${open ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-[var(--text-on-dark-hover)] origin-center transition-all duration-250 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        {open ? (
          <div id="mobile-menu" className="relative z-50 md:hidden border-t border-white/10">
            <nav aria-label="Principal" className="flex flex-col py-4 gap-1">
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
                    className={`rounded px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-white/8 font-semibold text-brand"
                        : "text-on-dark-soft hover:bg-white/6 hover:text-on-dark"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contato"
                onClick={closeMenu}
                className="mt-2 btn-primary justify-center text-center text-xs"
              >
                Contato
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return <SiteHeaderInner key={pathname} />;
}
