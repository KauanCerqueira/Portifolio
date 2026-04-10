"use client";

import { ArrowRight, Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingIncludes, whatsappHref } from "@/lib/landing-content";

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Orçamento
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Orçamento simples, direto
            <br />
            <span className="text-stroke">e sem surpresa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Não é um projeto grande, nem um processo de agência. É uma página objetiva
            com um orçamento alinhado ao que faz sentido para o seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-px bg-foreground/10">
          <div className="relative p-8 lg:p-12 bg-background border-r border-foreground/10">
            <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
              Orçamento
            </span>

            <div className="mb-8 rounded-xl border border-green-500/20 bg-green-500/[0.06] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                <p className="text-sm font-medium text-foreground">
                  Agenda restrita: reservo apenas 4 vagas semanais para manter os 5 dias de entrega.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <span className="font-mono text-xs text-muted-foreground">01</span>
              <h3 className="font-display text-3xl lg:text-4xl text-foreground mt-2">
                Página para negócios locais
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Estrutura pensada para deixar tudo claro e facilitar o contato no WhatsApp.
              </p>
            </div>

            <div className="mb-8 pb-8 border-b border-foreground/10">
              <div className="space-y-3">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl lg:text-6xl text-foreground">
                    R$ 650
                  </span>
                  <span className="font-display text-2xl lg:text-3xl text-muted-foreground/50 line-through">
                    R$ 950
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-md">
                  Página completa com estrutura pensada para transformar visita em
                  conversa no WhatsApp. Valor promocional por tempo limitado.
                </p>
              </div>
            </div>

            <Button
              asChild
              className="w-full sm:w-auto bg-foreground text-primary-foreground hover:bg-foreground/90 rounded-full h-12 px-6 group"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Garantir esse valor no WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <div className="mt-5 space-y-2">
              <p className="text-[13px] text-muted-foreground">
                Pagamento à vista via Pix ou em até 12x no cartão.
              </p>
              <p className="text-[13px] text-muted-foreground flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                Garantia de satisfação: ajustes ilimitados até você aprovar.
              </p>
            </div>
          </div>

          <div className="bg-background p-8 lg:p-12">
            <span className="font-mono text-xs text-muted-foreground">Inclui</span>
            <ul className="space-y-4 mt-8">
              {pricingIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-12 text-sm text-muted-foreground">
              Sem burocracia, sem excesso e sem precisar chegar com tudo pronto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
