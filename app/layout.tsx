import React from "react";
import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CustomCursor } from "@/components/landing/custom-cursor";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const siteUrl = "https://kauancerqueira.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kauan Cerqueira | Criação de Landing Pages que Geram Contato no WhatsApp",
  description:
    "Criação de landing pages profissionais para negócios locais. Páginas diretas, com visual limpo e estrutura pensada para transformar visitantes em conversas no WhatsApp. Orçamento sob medida.",
  generator: "Next.js",
  keywords: [
    "landing page",
    "criação de landing page",
    "página de vendas",
    "landing page WhatsApp",
    "criação de sites para negócios locais",
    "web designer freelancer",
    "página profissional",
    "Kauan Cerqueira",
  ],
  authors: [{ name: "Kauan Cerqueira", url: siteUrl }],
  creator: "Kauan Cerqueira",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/k-logo.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Kauan Cerqueira",
    title: "Kauan Cerqueira | Landing Pages que Geram Contato no WhatsApp",
    description:
      "Páginas profissionais para negócios locais. Estrutura clara, visual limpo e caminho direto para o WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kauan Cerqueira | Landing Pages que Geram Contato",
    description:
      "Páginas profissionais para negócios locais. Estrutura clara e caminho direto para o WhatsApp.",
    creator: "@kauancerqueira",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <JsonLd />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
