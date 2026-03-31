"use client";

function EmptyShowcaseCard({ index }: { index: number }) {
  return (
    <div className="border border-foreground/10 bg-background p-5">
      <div className="flex items-center justify-between pb-4 border-b border-foreground/10">
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-foreground/20" />
          <span className="w-2 h-2 rounded-full bg-foreground/20" />
          <span className="w-2 h-2 rounded-full bg-foreground/20" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
          Exemplo {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="space-y-4 pt-5">
        <div className="h-40 border border-dashed border-foreground/15 bg-foreground/[0.015]" />
        <div className="space-y-2">
          <div className="h-3 bg-foreground/10 w-2/3" />
          <div className="h-3 bg-foreground/8 w-full" />
          <div className="h-3 bg-foreground/8 w-5/6" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="h-24 border border-dashed border-foreground/12" />
          <div className="h-24 border border-dashed border-foreground/12" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const cards = Array.from({ length: 3 }, (_, index) => index);

  return (
    <section className="relative py-32 lg:py-40 border-t border-foreground/10 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Espaco para prova real
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-mono text-xs text-muted-foreground">vazio por enquanto</span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground mb-6">
              Aqui entram os exemplos
              <br />
              quando houver material real.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Em vez de preencher a pagina com empresa inventada, depoimento fake ou
              numero aleatorio, eu deixei a estrutura pronta para voce encaixar prova
              real depois.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {cards.map((index) => (
              <EmptyShowcaseCard key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
