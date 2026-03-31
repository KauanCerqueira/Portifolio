"use client";

import { ArrowRight, Check } from "lucide-react";
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
            Simples, direto
            <br />
            <span className="text-stroke">e sem surpresa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Nao e um projeto grande, nem um processo de agencia. E uma pagina objetiva
            para gerar contato.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-px bg-foreground/10">
          <div className="relative p-8 lg:p-12 bg-background border-r border-foreground/10">
            <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
              Oferta base
            </span>

            <div className="mb-8">
              <span className="font-mono text-xs text-muted-foreground">01</span>
              <h3 className="font-display text-3xl lg:text-4xl text-foreground mt-2">
                Landing page para negocios locais
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Estrutura focada em clareza, autoridade e contato no WhatsApp.
              </p>
            </div>

            <div className="mb-8 pb-8 border-b border-foreground/10">
              <div className="flex items-end gap-3">
                <span className="font-display text-6xl lg:text-7xl text-foreground">R$650</span>
                <span className="text-muted-foreground mb-2">a partir de</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4 max-w-md">
                Se preferir parcelar, eu te explico no WhatsApp como isso funciona no seu caso.
              </p>
            </div>

            <Button
              asChild
              className="w-full sm:w-auto bg-foreground text-primary-foreground hover:bg-foreground/90 rounded-full h-12 px-6 group"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                Me explicar no WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
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
