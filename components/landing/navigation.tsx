"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, navLinks, whatsappHref } from "@/lib/landing-content";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hasNavSurface = isScrolled || isMobileMenuOpen;
  const isOverlayNav = !hasNavSurface;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        hasNavSurface ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto relative overflow-hidden transition-all duration-500 ${
          hasNavSurface ? "max-w-[1200px] rounded-2xl" : "max-w-[1400px]"
        }`}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 rounded-2xl transition-all duration-500 ${
            hasNavSurface
              ? "opacity-100 bg-background/85 backdrop-blur-xl border border-foreground/10 shadow-lg"
              : "opacity-0 border border-transparent shadow-none"
          }`}
        />
        <div
          className={`relative flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/k-logo.svg"
              alt={`${brand.name} logo`}
              className={`rounded-md transition-all duration-500 ${
                isScrolled
                  ? "w-8 h-8"
                  : "w-10 h-10 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
              }`}
            />
            <div className="flex items-center leading-none min-w-0">
              <span
                className={`font-sans font-medium whitespace-nowrap tracking-[-0.03em] transition-all duration-500 ${
                  isScrolled
                    ? "text-[1.15rem] lg:text-xl text-foreground"
                    : "text-[1.35rem] lg:text-2xl text-white"
                }`}
              >
                {brand.name}
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors duration-300 relative group ${
                  isOverlayNav ? "text-white/72 hover:text-white" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isOverlayNav ? "bg-white" : "bg-foreground"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#pricing"
              className={`transition-all duration-500 ${
                isOverlayNav ? "text-white/72 hover:text-white" : "text-foreground/70 hover:text-foreground"
              } ${
                isScrolled ? "text-xs" : "text-sm"
              }`}
            >
              Ver investimento
            </a>
            <Button
              asChild
              size="sm"
              className={`rounded-full transition-all duration-500 ${
                isOverlayNav
                  ? "bg-white text-black hover:bg-white/88"
                  : "bg-foreground hover:bg-foreground/90 text-background"
              } ${isScrolled ? "px-4 h-8 text-xs" : "px-6"}`
              }
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Chamar no WhatsApp
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isOverlayNav ? "text-white" : "text-foreground"
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
