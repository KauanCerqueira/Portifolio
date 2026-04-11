"use client";

import { ArrowRight } from "lucide-react";
import { whatsappHref } from "@/lib/landing-content";

interface InlineCtaProps {
  text: string;
  buttonText: string;
  variant?: "light" | "dark";
}

export function InlineCta({ text, buttonText, variant = "light" }: InlineCtaProps) {
  return (
    <div
      className={`${
        variant === "dark" ? "inline-cta-bar-dark" : "inline-cta-bar"
      } border-y ${
        variant === "dark" ? "border-white/8" : "border-foreground/8"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row sm:py-5 lg:px-12">
        <p
          className={`text-[0.95rem] font-medium ${
            variant === "dark" ? "text-white/72" : "text-foreground/72"
          }`}
        >
          {text}
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className={`group inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
            variant === "dark"
              ? "bg-white/10 text-white hover:bg-white/18"
              : "bg-foreground/8 text-foreground hover:bg-foreground/14"
          }`}
        >
          {buttonText}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
