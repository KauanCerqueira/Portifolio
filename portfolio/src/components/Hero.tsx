import type React from "react"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import HeroScene from "./HeroScene"
import { SpeedInsights } from "@vercel/speed-insights/next"

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Fundo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-10">

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                Transformo
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Ideias em Soluções
                </span>
                Escaláveis
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Desenvolvedor Fullstack especializado em <strong className="text-white">C# e .NET</strong>, com
                expertise em automação inteligente e IA. Reduzi em <strong className="text-purple-400">80%</strong> o
                tempo de análise jurídica através de soluções inovadoras.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span>Contratar Agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projetos"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 transition-all duration-300"
              >
                <Code2 className="w-5 h-5" />
                <span>Ver Projetos</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-sm text-slate-400">Anos de Experiência</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  80%
                </div>
                <div className="text-sm text-slate-400">Redução de Tempo</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm text-slate-400">Cliente Satisfeito</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Scene */}
          <div className="relative hidden lg:block w-full h-[350px]">
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
