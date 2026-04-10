"use client";

import { ArrowUpRight } from "lucide-react";
import { brand, footerLinks, whatsappHref, whatsappNumberDisplay } from "@/lib/landing-content";
import { AnimatedWave } from "./animated-wave";

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-12 lg:gap-8">
            <div>
              <a href="#" className="inline-flex items-center gap-3 mb-6">
                <img src="/k-logo.svg" alt="Kauan Cerqueira — Web designer especializado em landing pages" className="w-12 h-12 rounded-md" />
                <div>
                  <span className="block text-2xl font-display">{brand.name}</span>
                  <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground font-mono">
                    {brand.role}
                  </span>
                </div>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
                {brand.description}
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-foreground hover:text-muted-foreground transition-colors group"
              >
                Falar no WhatsApp
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={`tel:${whatsappNumberDisplay.replace(/[^+\d]/g, "")}`}
                className="mt-3 block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {whatsappNumberDisplay}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-6">Navegação</h3>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-6">O que você recebe</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>Página pensada para gerar contato</li>
                <li>Foco em WhatsApp</li>
                <li>Estrutura clara e profissional</li>
                <li>Entrega direta, sem processo longo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Página pronta para receber material real
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
