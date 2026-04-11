"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { brand, navLinks, whatsappHref } from "@/lib/landing-content";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(true);
  const hasNavSurface = isScrolled || isMobileMenuOpen;
  const isOverlayNav = !hasNavSurface;
  const showBanner = !isBannerDismissed && !isScrolled && !isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("urgency-banner-dismissed");
    setIsBannerDismissed(!!dismissed);
  }, []);

  const handleDismissBanner = () => {
    setIsBannerDismissed(true);
    sessionStorage.setItem("urgency-banner-dismissed", "1");
  };

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        hasNavSurface ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      {/* Urgency banner — only visible at top, hides on scroll */}
      <div
        className={`urgency-banner overflow-hidden transition-all duration-500 ${
          showBanner ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative flex items-center justify-center gap-3 px-4 py-2 sm:gap-4 sm:py-2.5">
          <div
            aria-hidden="true"
            className="urgency-banner-accent absolute inset-x-0 bottom-0 h-[2px]"
          />

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="urgency-dot inline-block h-1.5 w-1.5 rounded-full bg-red-500 shrink-0 sm:h-2 sm:w-2" />
            <span className="text-[10px] font-medium text-white/90 sm:text-[12px]">
              <span className="font-bold text-red-400">2 vagas</span>
              <span> esta semana</span>
              <span className="hidden lg:inline"> — Entrega garantida em 5 dias</span>
            </span>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-semibold text-white transition-colors hover:bg-white/20 sm:gap-1.5 sm:px-3.5 sm:py-1.5 sm:text-xs"
          >
            Garantir vaga
            <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
          </a>

          <button
            onClick={handleDismissBanner}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white/40 transition-colors hover:text-white/80 sm:right-3"
            aria-label="Fechar banner"
          >
            <X className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </button>
        </div>
      </div>

      <nav
        className={`mx-auto relative overflow-hidden transition-all duration-500 ${
          hasNavSurface ? "max-w-[1200px] rounded-2xl" : "max-w-[1400px]"
        }`}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 rounded-2xl transition-all duration-500 ${
            hasNavSurface
              ? "opacity-100 bg-background/92 border border-foreground/10 shadow-lg"
              : "opacity-0 border border-transparent shadow-none"
          }`}
        />
        <div
          className={`relative flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-12" : "h-16"
          }`}
        >
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/k-logo.svg"
              alt={`${brand.name} logo`}
              className={`rounded-md transition-all duration-500 ${
                isScrolled
                  ? "w-6 h-6"
                  : "w-8 h-8 shadow-[0_0_0_1px_rgba(246,244,241,0.14)]"
              }`}
            />
            <div className="flex items-center leading-none min-w-0">
              <span
                className={`font-sans font-medium whitespace-nowrap tracking-[-0.03em] transition-all duration-500 ${
                  isScrolled
                    ? "text-[0.95rem] lg:text-[1.05rem] text-foreground"
                    : "text-[1rem] lg:text-[1.3rem] text-background"
                }`}
              >
                {brand.name}
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] lg:text-sm transition-colors duration-300 relative group ${
                  isOverlayNav ? "text-background/72 hover:text-background" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isOverlayNav ? "bg-background" : "bg-foreground"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className={`transition-all duration-500 ${
                isOverlayNav ? "text-background/72 hover:text-background" : "text-foreground/70 hover:text-foreground"
              } ${
                isScrolled ? "text-[11px]" : "text-[13px] lg:text-sm"
              }`}
            >
              Ver investimento
            </a>
            <MagneticButton strength={0.28}>
              <Button
                asChild
                size="sm"
                className={`rounded-full transition-all duration-500 ${
                  isOverlayNav
                    ? "bg-background text-foreground hover:bg-background/88"
                    : "bg-foreground hover:bg-foreground/90 text-background"
                } ${isScrolled ? "px-4 h-8 text-xs" : "px-5 h-10 text-sm"}`
                }
              >
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  Falar agora
                </a>
              </Button>
            </MagneticButton>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isOverlayNav ? "text-background" : "text-foreground"
            }`}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className={`flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button asChild variant="outline" className="flex-1 rounded-full h-14 text-base">
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
                Ver investimento
              </a>
            </Button>
            <Button asChild className="flex-1 bg-foreground text-background rounded-full h-14 text-base">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
