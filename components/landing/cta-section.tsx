"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { whatsappHref } from "@/lib/landing-content";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-foreground py-24 text-background lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative overflow-hidden rounded-[2rem] border border-background/12 bg-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="absolute inset-0 opacity-100 pointer-events-none transition-opacity duration-300"
            style={{
              background: "radial-gradient(600px circle at 65% 35%, rgba(246,244,241,0.12), transparent 40%)",
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]">
                  O cliente já está clicando.
                  <br />
                  Falta ele chamar.
                </h2>

                <p className="mb-12 max-w-xl text-xl leading-relaxed text-background/72">
                  Se hoje você ainda explica tudo por mensagem, áudio e texto solto,
                  provavelmente tem cliente desistindo no meio. Me chama no WhatsApp,
                  me conta o que você vende e eu te mostro como essa estrutura faria
                  sentido no seu negócio.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <MagneticButton strength={0.25}>
                    <Button
                      asChild
                      size="lg"
                      className="h-14 rounded-full bg-background px-8 text-base text-foreground group hover:bg-background/90"
                    >
                      <a href={whatsappHref} target="_blank" rel="noreferrer">
                        Quero ver no meu negócio
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </MagneticButton>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 rounded-full border-background/18 bg-background/[0.03] px-8 text-base text-background hover:bg-background/[0.08]"
                  >
                    <a href="#pricing">Ver investimento</a>
                  </Button>
                </div>

                <p className="mt-8 text-sm font-mono text-background/56">
                  Resposta rápida. 4 vagas por semana.
                </p>
              </div>

              {isVisible ? (
                <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                  <AnimatedTetrahedron tone="light" />
                </div>
              ) : null}
            </div>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-background/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-background/10" />
        </div>
      </div>
    </section>
  );
}
