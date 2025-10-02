"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  Smartphone,
  Eye,
  Palette,
  Sparkles,
  MessageCircle,
  ExternalLink,
  Play,
  Pause,
} from "lucide-react"
import { SpeedInsights } from "@vercel/speed-insights/react"

interface LandingPage {
  title: string
  category: string
  description: string
  preview: string
  colors: string[]
  features: string[]
  gradient: string
  bgGradient: string
  slug: string
}

interface LandingPagesShowcaseProps {
  phoneNumber?: string
  autoPlayInterval?: number
}

const LandingPagesShowcase: React.FC<LandingPagesShowcaseProps> = ({
  phoneNumber = "5511999999999",
  autoPlayInterval = 20000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop")
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [iframeError, setIframeError] = useState(false)

  const landingPages: LandingPage[] = [
    {
      title: "NLK Transportes",
      category: "Transportadora & Logística",
      description:
        "Landing page profissional para mudanças residenciais e comerciais. Foco em segurança, agilidade e orçamento rápido via WhatsApp.",
      preview: "🚚",
      colors: ["#1e3a8a", "#f97316", "#facc15"],
      features: ["Rastreamento Online", "Equipe Especializada", "Transporte Seguro", "Orçamento Instantâneo"],
      gradient: "from-blue-800 to-orange-500",
      bgGradient: "from-blue-900 via-indigo-800 to-orange-700",
      slug: "nlk-transportes",
    },
    {
      title: "FitLife Academy",
      category: "Saúde & Bem-estar",
      description:
        "Landing page energética para academia e treinos online. Inclui planos personalizados, aulas ao vivo e consultoria de nutrição.",
      preview: "💪",
      colors: ["#10b981", "#06b6d4", "#0ea5e9"],
      features: ["Treinos Personalizados", "Aulas Online", "Nutricionista Parceiro", "Resultados Rápidos"],
      gradient: "from-emerald-500 to-cyan-500",
      bgGradient: "from-emerald-600 via-teal-600 to-cyan-600",
      slug: "fitlife",
    },
    {
      title: "PetCare",
      category: "Clínica Veterinária",
      description:
        "Landing page acolhedora para clínica pet premium. Atendimento 24h, exames modernos e delivery de medicamentos.",
      preview: "🐾",
      colors: ["#9333ea", "#f97316", "#f59e0b"],
      features: ["Emergência 24h", "Exames Modernos", "Planos para Pets", "Delivery de Remédios"],
      gradient: "from-purple-500 to-orange-400",
      bgGradient: "from-purple-600 via-fuchsia-600 to-orange-500",
      slug: "petcare",
    },
    {
      title: "DigitalBoost",
      category: "Agência de Marketing",
      description:
        "Landing page criativa para agência de marketing digital. Foco em tráfego pago, redes sociais e consultoria estratégica.",
      preview: "📈",
      colors: ["#3b82f6", "#ec4899", "#a855f7"],
      features: ["Gestão de Anúncios", "Conteúdo Criativo", "Consultoria Estratégica", "Relatórios Detalhados"],
      gradient: "from-blue-500 to-pink-500",
      bgGradient: "from-blue-600 via-fuchsia-600 to-pink-600",
      slug: "digitalboost",
    },
    {
      title: "SweetHome",
      category: "Construção & Reformas",
      description:
        "Landing page moderna para construtora. Arquitetura personalizada, reformas rápidas e parcelamento facilitado.",
      preview: "🏠",
      colors: ["#b45309", "#fbbf24", "#22c55e"],
      features: ["Projetos Exclusivos", "Reformas Rápidas", "Materiais Sustentáveis", "Parcelamento"],
      gradient: "from-amber-600 to-green-500",
      bgGradient: "from-yellow-700 via-orange-700 to-green-600",
      slug: "sweethome",
    },
  ]

  const nextPage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % landingPages.length)
    setIframeError(false)
  }, [landingPages.length])

  const prevPage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + landingPages.length) % landingPages.length)
    setIframeError(false)
  }, [landingPages.length])

  const goToPage = useCallback((index: number) => {
    setCurrentIndex(index)
    setIframeError(false)
  }, [])

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev)
  }, [])

  const currentPage = landingPages[currentIndex]

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextPage()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlaying, autoPlayInterval, nextPage])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevPage()
      } else if (e.key === "ArrowRight") {
        nextPage()
      } else if (e.key === " ") {
        e.preventDefault()
        toggleAutoPlay()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [nextPage, prevPage, toggleAutoPlay])

  const whatsappMessage = `Olá! Vi a landing page "${currentPage.title}" no seu portfólio e gostaria de conversar sobre criar uma para meu negócio!`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-10 px-4 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-1.5 text-xs font-semibold mb-3">
            <Sparkles className="w-3 h-3 text-purple-300" />
            <span className="text-purple-200">Portfólio de Landing Pages</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
            Designs que{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Convertem
            </span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto px-4">
            Explore minha coleção de landing pages criativas e otimizadas para alta performance
          </p>
        </header>

        {/* Main Showcase Card */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Preview Section */}
            <section className="relative bg-slate-900/50 p-4" aria-label="Preview da landing page">
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-900 text-xs font-bold shadow-lg">
                  <Palette className="w-3 h-3" />
                  <span className="hidden sm:inline">{currentPage.category}</span>
                  <span className="sm:hidden">{currentPage.category.split(" ")[0]}</span>
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button
                  onClick={() => setViewMode("desktop")}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === "desktop"
                      ? "bg-white text-slate-900 shadow-lg"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                  title="Visualização Desktop"
                  aria-label="Visualização Desktop"
                  aria-pressed={viewMode === "desktop"}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("mobile")}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === "mobile"
                      ? "bg-white text-slate-900 shadow-lg"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                  title="Visualização Mobile"
                  aria-label="Visualização Mobile"
                  aria-pressed={viewMode === "mobile"}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>

              {/* Browser Preview */}
              <div className="flex items-center justify-center h-[280px] sm:h-[320px] lg:h-[380px] mt-12">
                <div
                  className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ${
                    viewMode === "desktop" ? "w-full h-full" : "w-[280px] sm:w-[320px] h-[480px] sm:h-[568px]"
                  }`}
                >
                  {/* Browser Chrome */}
                  <div className="bg-slate-200 px-3 py-2 flex items-center gap-2 border-b border-slate-300">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg px-2 py-0.5 text-[10px] text-slate-600 truncate">
                      localhost:3000/landing/{currentPage.slug}
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-500 flex-shrink-0" />
                  </div>

                  {/* Iframe Content */}
                  {!iframeError ? (
                    <iframe
                      src={`/landing/${currentPage.slug}`}
                      className="w-full border-0"
                      style={{ height: "calc(100% - 32px)" }}
                      title={`Preview ${currentPage.title}`}
                      sandbox="allow-same-origin allow-scripts"
                      loading="lazy"
                      onError={() => setIframeError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 p-8">
                      <div className="text-center">
                        <div
                          className={`text-6xl mb-4 bg-gradient-to-r ${currentPage.gradient} bg-clip-text text-transparent`}
                        >
                          {currentPage.preview}
                        </div>
                        <p className="text-slate-600 text-sm">Preview não disponível</p>
                        <p className="text-slate-500 text-xs mt-2">Clique em "Ver Página Completa" abaixo</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Details Section */}
            <section className="p-6 flex flex-col justify-between bg-gradient-to-br from-slate-800/80 to-slate-900/80">
              <div className="space-y-4">
                {/* Title and Description */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-3xl" role="img" aria-label={currentPage.category}>
                      {currentPage.preview}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 truncate">{currentPage.title}</h2>
                      <div
                        className={`text-xs font-semibold bg-gradient-to-r ${currentPage.gradient} bg-clip-text text-transparent`}
                      >
                        {currentPage.category}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm">{currentPage.description}</p>
                </div>

                {/* Features */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className="w-4 h-4 text-purple-400" />
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Principais Features
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentPage.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group border border-slate-600/50"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentPage.gradient} flex-shrink-0`}
                          aria-hidden="true"
                        ></div>
                        <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Palette */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Palette className="w-4 h-4 text-pink-400" />
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Paleta de Cores</h3>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {currentPage.colors.map((color, index) => (
                      <div key={index} className="flex flex-col items-center gap-1">
                        <div
                          className="w-10 h-10 rounded-lg shadow-lg border-2 border-slate-600 hover:scale-110 transition-transform cursor-pointer"
                          style={{ backgroundColor: color }}
                          role="img"
                          aria-label={`Cor ${color}`}
                          title={color}
                        ></div>
                        <span className="text-[9px] text-slate-400 font-mono">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2 mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-full text-sm"
                  aria-label={`Solicitar landing page como ${currentPage.title} via WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden sm:inline">Quero uma Landing Page Assim</span>
                  <span className="sm:hidden">Solicitar via WhatsApp</span>
                </a>

                <a
                  href={`/landing/${currentPage.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 hover:bg-slate-700/50 transition-all duration-300 w-full font-semibold text-sm"
                  aria-label={`Ver página completa de ${currentPage.title}`}
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Ver Página Completa
                </a>
              </div>
            </section>
          </div>

          {/* Navigation Controls */}
          <nav
            className="px-4 sm:px-8 py-4 border-t border-slate-700/50 bg-slate-900/50"
            aria-label="Navegação de landing pages"
          >
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={prevPage}
                className="flex items-center justify-center w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Landing page anterior"
                disabled={landingPages.length <= 1}
              >
                <ChevronLeft className="w-5 h-5 text-slate-300 group-hover:-translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                {/* Auto-play Toggle */}
                <button
                  onClick={toggleAutoPlay}
                  className="flex items-center justify-center w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all duration-300"
                  aria-label={isAutoPlaying ? "Pausar rotação automática" : "Iniciar rotação automática"}
                  title={isAutoPlaying ? "Pausar (Espaço)" : "Reproduzir (Espaço)"}
                >
                  {isAutoPlaying ? (
                    <Pause className="w-5 h-5 text-slate-300" />
                  ) : (
                    <Play className="w-5 h-5 text-slate-300" />
                  )}
                </button>

                {/* Page Indicators */}
                <div className="flex gap-2" role="tablist" aria-label="Selecionar landing page">
                  {landingPages.map((page, index) => (
                    <button
                      key={index}
                      onClick={() => goToPage(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentIndex
                          ? `w-6 h-2 bg-gradient-to-r ${currentPage.gradient}`
                          : "w-2 h-2 bg-slate-600 hover:bg-slate-500"
                      }`}
                      aria-label={`Ir para ${page.title}`}
                      aria-current={index === currentIndex ? "true" : "false"}
                      role="tab"
                      aria-selected={index === currentIndex}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={nextPage}
                className="flex items-center justify-center w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Próxima landing page"
                disabled={landingPages.length <= 1}
              >
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="text-center">
              <span className="text-xs text-slate-400 font-medium" role="status" aria-live="polite">
                Landing Page {currentIndex + 1} de {landingPages.length}
              </span>
            </div>
          </nav>
        </div>

        {/* Keyboard Shortcuts Help */}
        
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default LandingPagesShowcase
