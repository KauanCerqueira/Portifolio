"use client";

import { ArrowRight, Check, Flame, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingIncludes, whatsappHref } from "@/lib/landing-content";

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Investimento
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Investimento direto para
            <br />
            <span className="text-stroke">colocar sua estrutura no ar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Não é pacote inchado nem processo de agência. É uma página
            objetiva para parar de perder contato por falta de estrutura.
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
                  Agenda desta semana: 4 vagas para manter a entrega em até 5 dias úteis.
                </p>
              </div>
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-1.5">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-[11px] font-semibold text-orange-400 uppercase tracking-[0.1em]">
                Preço de abril — válido enquanto durar
              </span>
            </div>

            <div className="mb-8">
              <span className="font-mono text-xs text-muted-foreground">01</span>
              <h3 className="font-display text-3xl lg:text-4xl text-foreground mt-2">
                Página para negócios locais
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Estrutura pensada para explicar sua oferta, aumentar percepção de valor e facilitar o contato no WhatsApp.
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
                  Valor para uma página completa, com mensagem principal, botão direto
                  para WhatsApp e ajustes até aprovação.
                </p>
              </div>
            </div>

            <Button
              asChild
              className="w-full sm:w-auto bg-foreground text-primary-foreground hover:bg-foreground/90 rounded-full h-12 px-6 group"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Pegar essa vaga antes que feche
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <div className="mt-5 space-y-2">
              <p className="text-[13px] text-muted-foreground">
                Pagamento à vista via Pix ou em até 12x no cartão.
              </p>
              <p className="text-[13px] text-muted-foreground flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                Ajustes até você aprovar.
              </p>
              <p className="text-[13px] text-green-600 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                7 pessoas fecharam na última semana
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
              Sem burocracia, sem excesso e sem você precisar chegar com tudo pronto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
