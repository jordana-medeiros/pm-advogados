"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { SiteLogo } from "@/components/layout/site-logo";
import { navItems } from "@/lib/site-data";

function isNavItemActive(href: string, pathname: string, hash: string) {
  if (href === "/") {
    return pathname === "/" && hash === "";
  }

  if (href.startsWith("/#")) {
    return pathname === "/" && hash === href.slice(1);
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function SiteHeaderInner() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");
  const open = menuPath === pathname;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 52);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  const closeMenu = () => setMenuPath(null);
  const toggleMenu = () => setMenuPath(open ? null : pathname);

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

      <header
        className={`relative z-40 overflow-hidden rounded-sm border text-on-dark backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-white/8 bg-brand-deep/[0.98] shadow-[0_20px_56px_rgba(14,42,36,0.36)] px-5 sm:px-6 lg:px-8"
            : "border-white/10 bg-brand-deep/96 shadow-[0_16px_48px_rgba(14,42,36,0.28)] px-5 sm:px-6 lg:px-8"
        }`}
      >
        {/* Linha dourada no topo — aparece mais ao rolar */}
        <div
          className={`absolute inset-x-0 top-0 h-px transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-60"
          } bg-gradient-to-r from-transparent via-[#b08a45]/70 to-transparent`}
        />

        <div
          className={`flex items-center justify-between gap-4 transition-all duration-300 ${
            scrolled ? "h-16" : "h-[4.5rem]"
          }`}
        >
          <SiteLogo
            variant="white"
            onNavigate={closeMenu}
            priority
            className={`w-auto transition-all duration-300 ${scrolled ? "h-8 sm:h-9" : "h-9 sm:h-10"}`}
          />

          <nav aria-label="Principal" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.cta) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="ml-3 inline-flex items-center rounded-full bg-brand px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[0_8px_22px_rgba(176,138,69,0.38)]"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isActive = isNavItemActive(item.href, pathname, hash);
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
          </nav>

          <button
            id="mobile-menu-toggle"
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            className="relative z-50 md:hidden flex flex-col gap-[5px] p-2 -mr-1"
          >
            <span className={`block h-[1.5px] w-5 bg-[var(--text-on-dark-hover)] origin-center transition-all duration-[250ms] ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-[var(--text-on-dark-hover)] transition-all duration-[250ms] ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-[var(--text-on-dark-hover)] origin-center transition-all duration-[250ms] ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>

        {open ? (
          <div id="mobile-menu" className="relative z-50 md:hidden border-t border-white/10">
            <nav aria-label="Principal — mobile" className="flex flex-col py-4 gap-1">
              {navItems.map((item) => {
                if (item.cta) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="mt-2 btn-primary justify-center text-center"
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isActive = isNavItemActive(item.href, pathname, hash);
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
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}

export function SiteHeader() {
  return <SiteHeaderInner />;
}
