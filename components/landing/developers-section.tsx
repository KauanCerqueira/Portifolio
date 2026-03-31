"use client";

import { useEffect, useRef, useState } from "react";
import { intakeTabs } from "@/lib/landing-content";

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="content" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              O que eu preciso
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Voce nao precisa
              <br />
              chegar com tudo pronto.
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              O processo fica leve quando a coleta do material e simples. Eu
              preciso do basico para montar uma pagina que faca sentido para o seu negocio.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-1">Sem burocracia</h3>
                <p className="text-sm text-muted-foreground">
                  Nada de briefing enorme ou dezenas de reunioes.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Sem excesso</h3>
                <p className="text-sm text-muted-foreground">
                  So entra o que ajuda a pessoa a entender e agir.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Sem travar por detalhes</h3>
                <p className="text-sm text-muted-foreground">
                  Se ainda faltar prova real, a estrutura ja pode ficar pronta.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Sem depender de site antigo</h3>
                <p className="text-sm text-muted-foreground">
                  A pagina nasce focada no contato, nao em parecer um portal.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              <div className="flex items-center border-b border-foreground/10">
                {intakeTabs.map((tab, index) => (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-4 text-sm font-mono transition-colors relative ${
                      activeTab === index
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                    {activeTab === index && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-8 font-mono text-sm bg-foreground/[0.01] min-h-[220px]">
                <div className="space-y-4 text-foreground/80">
                  <div className="text-foreground/40">briefing-base.txt</div>
                  {intakeTabs[activeTab].lines.map((line, index) => (
                    <div key={line} className="leading-loose">
                      <span className="text-foreground/20 select-none w-8 inline-block">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span>Voce manda o basico</span>
              <span className="text-foreground/20">|</span>
              <span>Eu transformo em pagina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
