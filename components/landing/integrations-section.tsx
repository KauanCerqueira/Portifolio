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

function ExamplePlaceholder({
  tone,
  mode,
}: {
  tone: string;
  mode: PreviewMode;
}) {
  const toneStyles = {
    light: {
      shell: "bg-[#f5f0ea]",
      accent: "bg-[#d9c4ad]",
      block: "bg-[#ece1d5]",
      line: "bg-black/12",
      label: "text-black/38",
    },
    dark: {
      shell: "bg-[#111214]",
      accent: "bg-[#2c3136]",
      block: "bg-white/10",
      line: "bg-white/16",
      label: "text-white/42",
    },
    soft: {
      shell: "bg-[#f3f3f0]",
      accent: "bg-[#d7ddd1]",
      block: "bg-[#e8ebe3]",
      line: "bg-black/10",
      label: "text-black/38",
    },
    bold: {
      shell: "bg-[#161515]",
      accent: "bg-[#49413e]",
      block: "bg-white/9",
      line: "bg-white/14",
      label: "text-white/42",
    },
  } as const;

  const palette = toneStyles[tone as keyof typeof toneStyles] ?? toneStyles.light;

  if (mode === "mobile") {
    return (
      <div className="relative mx-auto w-fit rounded-[1.8rem] border border-white/10 bg-[#111] p-2 shadow-[0_18px_52px_rgba(0,0,0,0.18)] sm:rounded-[2rem] sm:shadow-[0_24px_72px_rgba(0,0,0,0.22)]">
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/10" />
        <div
          className={`overflow-hidden rounded-[1.55rem] ${palette.shell}`}
          style={{ width: MOBILE_PREVIEW_FRAME_WIDTH, height: MOBILE_PREVIEW_FRAME_HEIGHT }}
        >
          <div className="h-full px-4 pb-4 pt-5">
            <div className="flex items-center justify-between">
              <div className={`h-2.5 w-14 rounded-full ${palette.line}`} />
              <div className="flex gap-1.5">
                <span className={`h-2 w-2 rounded-full ${palette.line}`} />
                <span className={`h-2 w-2 rounded-full ${palette.line}`} />
              </div>
            </div>

            <div className={`mt-5 h-32 rounded-[1.25rem] ${palette.accent}`} />
            <div className="mt-5 space-y-2.5">
              <div className={`h-3 w-4/5 rounded-full ${palette.line}`} />
              <div className={`h-3 w-full rounded-full ${palette.line}`} />
              <div className={`h-3 w-3/5 rounded-full ${palette.line}`} />
            </div>
            <div className="mt-5 flex gap-2.5">
              <div className={`h-10 flex-1 rounded-full ${palette.block}`} />
              <div className={`h-10 w-20 rounded-full ${palette.block}`} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <div className={`h-24 rounded-[1rem] ${palette.block}`} />
              <div className={`h-24 rounded-[1rem] ${palette.block}`} />
            </div>
            <div className={`mt-5 h-24 rounded-[1rem] ${palette.block}`} />
            <div className={`mt-3 h-16 rounded-[1rem] ${palette.block}`} />
            <div className={`mt-5 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.24em] ${palette.label}`}>
              <Smartphone className="h-3.5 w-3.5" />
              preview mobile entra aqui
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full rounded-[1.5rem] border border-foreground/10 bg-foreground/[0.02] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.08)] lg:p-4">
      <div className={`overflow-hidden rounded-[1.1rem] border border-black/6 ${palette.shell}`}>
        <div className="h-9 border-b border-black/6 bg-white/40" />

        <div className="aspect-[1280/900]">
          <div className="h-full px-5 pb-5 pt-6">
            <div className={`h-44 rounded-[1.4rem] ${palette.accent}`} />
            <div className="mt-6 grid grid-cols-[1.25fr_0.75fr] gap-3">
              <div className="space-y-3">
                <div className={`h-4 w-3/4 rounded-full ${palette.line}`} />
                <div className={`h-4 w-full rounded-full ${palette.line}`} />
                <div className={`h-4 w-4/5 rounded-full ${palette.line}`} />
                <div className={`mt-4 h-12 w-44 rounded-full ${palette.block}`} />
              </div>
              <div className={`h-36 rounded-[1.2rem] ${palette.block}`} />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className={`h-24 rounded-[1rem] ${palette.block}`} />
              <div className={`h-24 rounded-[1rem] ${palette.block}`} />
              <div className={`h-24 rounded-[1rem] ${palette.block}`} />
            </div>

            <div className="mt-6 grid grid-cols-[0.95fr_1.05fr] gap-3">
              <div className={`h-40 rounded-[1.2rem] ${palette.block}`} />
              <div className="space-y-3">
                <div className={`h-[74px] rounded-[1rem] ${palette.block}`} />
                <div className={`h-[74px] rounded-[1rem] ${palette.block}`} />
              </div>
            </div>

            <div className={`mt-6 h-28 rounded-[1.2rem] ${palette.block}`} />
            <div className={`mt-4 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.24em] ${palette.label}`}>
              <Monitor className="h-3.5 w-3.5" />
              preview web entra aqui
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <div className="relative mx-auto w-fit rounded-[1.8rem] border border-white/10 bg-[#111] p-2 shadow-[0_18px_52px_rgba(0,0,0,0.2)] sm:rounded-[2rem] sm:shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/10" />
        <div
          className="relative overflow-hidden rounded-[1.55rem] bg-black"
          style={{ width: MOBILE_PREVIEW_FRAME_WIDTH, height: MOBILE_PREVIEW_FRAME_HEIGHT }}
        >
          <iframe
            title="Preview mobile"
            src={href}
            loading="lazy"
            className="block origin-top-left border-0 bg-white"
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
    <div className="h-full w-full rounded-[1.5rem] border border-foreground/10 bg-foreground/[0.02] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.08)] lg:p-4">
      <div className="overflow-hidden rounded-[1.1rem] border border-black/6 bg-white">
        <div className="flex h-9 items-center justify-between border-b border-black/6 bg-[#fafafa] px-4">
          <span className="text-[10px] uppercase tracking-[0.24em] font-mono text-black/32">
            {label}
          </span>
          <span className="text-[10px] uppercase tracking-[0.24em] font-mono text-black/24">
            web
          </span>
        </div>

        <div className="relative overflow-hidden bg-white p-2 sm:p-3">
          <div className="aspect-[1280/820] overflow-hidden rounded-[0.95rem] border border-black/6 bg-white sm:aspect-[1280/900]">
            <div className="origin-top-left scale-[0.24] sm:scale-[0.34] md:scale-[0.44] xl:scale-[0.58]">
              <iframe
                title="Preview web"
                src={href}
                loading="lazy"
                className="h-[900px] w-[1280px] border-0 bg-white"
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

  const activeExample = exampleCards[activeIndex];

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + exampleCards.length) % exampleCards.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % exampleCards.length);
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`max-w-3xl mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            {exampleSectionContent.kicker}
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            {exampleSectionContent.title}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {exampleSectionContent.description}
          </p>
        </div>

        <div
          className={`border border-foreground/10 bg-background transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col gap-4 border-b border-foreground/10 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-mono leading-tight text-muted-foreground sm:text-[11px] sm:tracking-[0.24em]">
                <span className="w-6 h-px bg-foreground/20" />
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

          <div className="grid gap-5 px-4 py-5 sm:gap-8 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:gap-10 lg:px-8 lg:py-8">
            <div className="min-w-0 lg:order-1">
              {activeExample.liveHref ? (
                <LivePreview href={activeExample.liveHref} label="preview ao vivo" mode={mode} />
              ) : (
                <ExamplePlaceholder tone={activeExample.tone} mode={mode} />
              )}
            </div>

            <div className="flex flex-col lg:order-2">
              <h3 className="text-[2.2rem] leading-[0.98] sm:text-3xl lg:text-5xl font-display tracking-tight">
                {activeExample.name}
              </h3>
              <p className="mt-4 text-[1.02rem] leading-8 text-muted-foreground sm:mt-5 sm:text-base lg:text-lg lg:leading-relaxed">
                {activeExample.objective}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {activeExample.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-foreground/12 bg-foreground/[0.02] px-4 py-2 text-xs font-mono text-foreground/76"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 space-y-4 border-t border-foreground/10 pt-7 sm:mt-8 sm:space-y-5 sm:pt-8">
                {activeExample.notes.map((note, index) => (
                  <div key={note} className="flex gap-4">
                    <span className="mt-[0.55rem] h-px w-5 shrink-0 bg-foreground/18" />
                    <p className="text-sm leading-relaxed text-foreground/82">{note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {activeExample.liveHref ? (
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full bg-foreground px-6 text-background hover:bg-foreground/90"
                  >
                    <a href={activeExample.liveHref} target="_blank" rel="noreferrer">
                      Ver ao vivo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <div className="inline-flex h-12 items-center rounded-full border border-dashed border-foreground/14 px-5 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                    projeto em produção
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-foreground/10 px-4 py-4 lg:px-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {exampleCards.map((example, index) => (
                <button
                  key={example.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`text-left border px-4 py-4 transition-colors ${
                    activeIndex === index
                      ? "border-foreground bg-foreground text-background"
                      : "border-foreground/10 bg-background hover:bg-foreground/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`text-[11px] uppercase tracking-[0.24em] font-mono ${
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
                  <div className="mt-4 text-xl font-display tracking-tight">{example.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
