"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { exampleCards, exampleSectionContent } from "@/lib/landing-content";

type PreviewMode = "web" | "mobile";

const MOBILE_PREVIEW_WIDTH = 390;
const MOBILE_PREVIEW_HEIGHT = 844;
const MOBILE_PREVIEW_SCALE = 0.48;
const MOBILE_PREVIEW_FRAME_WIDTH = MOBILE_PREVIEW_WIDTH * MOBILE_PREVIEW_SCALE;
const MOBILE_PREVIEW_FRAME_HEIGHT = MOBILE_PREVIEW_HEIGHT * MOBILE_PREVIEW_SCALE;

function LivePreview({
  href,
  label,
  mode,
}: {
  href: string;
  label: string;
  mode: PreviewMode;
}) {
  if (mode === "mobile") {
    return (
      <div className="relative mx-auto w-fit rounded-[1.8rem] border border-[#f6f4f1]/10 bg-[#292b2d] p-2 shadow-[0_18px_52px_rgba(0,0,0,0.2)] sm:rounded-[2rem] sm:shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[#f6f4f1]/10" />
        <div
          className="relative overflow-hidden rounded-[1.55rem] bg-foreground"
          style={{ width: MOBILE_PREVIEW_FRAME_WIDTH, height: MOBILE_PREVIEW_FRAME_HEIGHT }}
        >
          <iframe
            title="Preview mobile"
            src={href}
            loading="lazy"
            className="block origin-top-left border-0 bg-background"
            style={{
              width: MOBILE_PREVIEW_WIDTH,
              height: MOBILE_PREVIEW_HEIGHT,
              transform: `scale(${MOBILE_PREVIEW_SCALE})`,
              transformOrigin: "top left",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-[1.5rem] border border-foreground/10 bg-foreground/[0.02] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.08)] lg:p-4">
      <div className="overflow-hidden rounded-[1.1rem] border border-foreground/8 bg-background">
        <div className="flex h-9 items-center justify-between border-b border-foreground/8 bg-background px-4">
          <span className="text-[10px] uppercase tracking-[0.24em] font-mono text-foreground/32">
            {label}
          </span>
          <span className="text-[10px] uppercase tracking-[0.24em] font-mono text-foreground/24">
            web
          </span>
        </div>

        <div className="relative overflow-hidden bg-background p-2 sm:p-3">
          <div className="aspect-[1280/820] overflow-hidden rounded-[0.95rem] border border-foreground/8 bg-background sm:aspect-[1280/900]">
            <div className="origin-top-left scale-[0.24] sm:scale-[0.34] md:scale-[0.44] xl:scale-[0.58]">
              <iframe
                title="Preview web"
                src={href}
                loading="lazy"
                className="h-[900px] w-[1280px] border-0 bg-background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mode, setMode] = useState<PreviewMode>("web");
  const sectionRef = useRef<HTMLElement>(null);
  const liveExamples = exampleCards.filter(
    (example): example is typeof exampleCards[number] & { liveHref: string } =>
      typeof example.liveHref === "string"
  );

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const syncMode = (matches: boolean) => {
      setMode(matches ? "mobile" : "web");
    };

    syncMode(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      syncMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (activeIndex >= liveExamples.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, liveExamples.length]);

  const activeExample = liveExamples[activeIndex] ?? liveExamples[0];

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + liveExamples.length) % liveExamples.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % liveExamples.length);
  };

  return (
    <section id="examples" ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div
          className={`mb-16 max-w-3xl transition-all duration-700 lg:mb-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="mb-6 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            {exampleSectionContent.kicker}
          </span>
          <h2 className="mb-6 text-4xl font-display tracking-tight lg:text-6xl">
            {exampleSectionContent.title}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            {exampleSectionContent.description}
          </p>
        </div>

        <div
          className={`border border-foreground/10 bg-background transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 border-b border-foreground/10 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <span className="inline-flex items-center gap-3 text-[10px] font-mono uppercase leading-tight tracking-[0.2em] text-muted-foreground sm:text-[11px] sm:tracking-[0.24em]">
                <span className="h-px w-6 bg-foreground/20" />
                {activeExample.name}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground/72 sm:text-xs sm:tracking-normal">
                {activeExample.status}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 sm:flex-wrap sm:justify-start">
              <div className="inline-flex rounded-full border border-foreground/12 bg-foreground/[0.02] p-1">
                <button
                  type="button"
                  onClick={() => setMode("web")}
                  className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm transition-colors ${
                    mode === "web"
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Monitor className="h-4 w-4" />
                  Web
                </button>
                <button
                  type="button"
                  onClick={() => setMode("mobile")}
                  className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm transition-colors ${
                    mode === "mobile"
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Smartphone className="h-4 w-4" />
                  Mobile
                </button>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/12 text-foreground transition-colors hover:bg-foreground/5"
                  aria-label="Projeto anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/12 text-foreground transition-colors hover:bg-foreground/5"
                  aria-label="Próximo projeto"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-5 px-4 py-5 sm:gap-8 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:items-start lg:gap-10 lg:px-8 lg:py-8">
            <div className="min-w-0 lg:order-1 lg:self-start">
              {isVisible ? (
                <LivePreview href={activeExample.liveHref} label="estrutura em tela" mode={mode} />
              ) : (
                <div className="flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-foreground/10 bg-foreground/[0.02] p-6 text-center text-sm text-muted-foreground shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
                  A visualização ao vivo carrega quando esta seção entra na tela.
                </div>
              )}
            </div>

            <div className="flex flex-col lg:order-2">
              <h3 className="min-h-[2.1em] text-[2.2rem] font-display leading-[0.98] tracking-tight sm:text-3xl lg:text-5xl">
                {activeExample.name}
              </h3>
              <p className="mt-4 min-h-[7.5rem] text-[1.02rem] leading-8 text-muted-foreground sm:mt-5 sm:text-base lg:text-lg lg:leading-relaxed">
                {activeExample.objective}
              </p>

              <div className="mt-6 flex min-h-[5rem] flex-wrap content-start gap-3">
                {activeExample.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-foreground/12 bg-foreground/[0.02] px-4 py-2 text-xs font-mono text-foreground/76"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 min-h-[16rem] space-y-4 border-t border-foreground/10 pt-7 sm:mt-8 sm:space-y-5 sm:pt-8">
                {activeExample.notes.map((note) => (
                  <div key={note} className="flex gap-4">
                    <span className="mt-[0.55rem] h-px w-5 shrink-0 bg-foreground/18" />
                    <p className="text-sm leading-relaxed text-foreground/82">{note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-foreground px-6 text-background hover:bg-foreground/90"
                >
                  <a href={activeExample.liveHref} target="_blank" rel="noreferrer">
                    Abrir demonstração
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-foreground/10 px-4 py-4 lg:px-6">
            <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {liveExamples.map((example, index) => (
                <button
                  key={example.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex h-full min-h-[108px] flex-col justify-between border px-4 py-4 text-left transition-colors sm:min-h-[112px] ${
                    activeIndex === index
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/10 bg-background hover:bg-foreground/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`text-[11px] font-mono uppercase tracking-[0.24em] ${
                        activeIndex === index ? "text-background/70" : "text-muted-foreground"
                      }`}
                    >
                      {example.status}
                    </span>
                    <span
                      className={`text-xs font-mono ${
                        activeIndex === index ? "text-background/60" : "text-muted-foreground/70"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-4 min-h-[2.6rem] text-xl font-display leading-tight tracking-tight">
                    {example.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
