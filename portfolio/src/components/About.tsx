"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Award, Briefcase, Trophy, Clock, Code2, Zap, Sparkles, ArrowRight } from "lucide-react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      value: "3+",
      label: "Anos de Experiência",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      value: "20+",
      label: "Projetos Concluídos",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      value: "80%",
      label: "Redução de Tempo",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Award className="w-5 h-5" />,
      value: "100%",
      label: "Clientes Satisfeitos",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-16 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
    >
      {/* Background Effects - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float animation-delay-3000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full px-4 py-2 text-sm font-semibold mb-4 animate-shimmer bg-[length:200%_100%]">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Sobre Mim</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 animate-gradient bg-[length:200%_auto]">
            Desenvolvedor Fullstack
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Transformo ideias em soluções digitais que geram resultados reais
          </p>
        </div>

        {/* Stats Cards - Enhanced with stagger animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-5 text-center hover:shadow-2xl transition-all duration-500 group border border-slate-200 hover:border-transparent hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` : "none",
              }}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} text-white mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
              >
                {stat.icon}
              </div>
              <div
                className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 font-medium">{stat.label}</div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full animate-shine"></div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left - About Text */}
          <div
            className={`space-y-5 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
                <div className="space-y-4 text-slate-600 leading-relaxed">
        <p className="hover:text-slate-700 transition-colors duration-300">
          Sou{" "}
          <strong className="text-slate-900 relative inline-block group">
            Desenvolvedor Fullstack
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </strong>{" "}
          com foco em criar soluções digitais que realmente fazem a diferença.
          Especializado em{" "}
          <strong className="text-slate-900">C#, .NET, React e Inteligência Artificial</strong>.
        </p>
        <p className="hover:text-slate-700 transition-colors duration-300">
          Atuo como <strong className="text-slate-900">freelancer</strong>, desenvolvendo
          automações, sistemas web e aplicações inteligentes que otimizam processos e aumentam a produtividade.
        </p>
        <p className="hover:text-slate-700 transition-colors duration-300">
          Minhas soluções já proporcionaram{" "}
          <strong className="text-slate-900">redução significativa de tempo</strong> e
          resultados práticos em diferentes projetos e negócios.
        </p>
      </div>


            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer">
                <Code2 className="w-5 h-5 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-semibold text-slate-700">Clean Architecture</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer">
                <Zap className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-semibold text-slate-700">IA & Automação</span>
              </div>
            </div>
          </div>

          {/* Right - Skills */}
          <div
            className={`space-y-5 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Stack Principal</h3>

            <div className="grid grid-cols-2 gap-3">
              {[
                "C# & .NET",
                "React & TypeScript",
                "Azure & DevOps",
                "Python & IA",
                "Docker & Kubernetes",
                "PostgreSQL & Redis",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="relative p-3 bg-white rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden hover:-translate-y-1"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="text-sm font-semibold text-slate-700 relative z-10">{skill}</span>

                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="pt-3">
              <h4 className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">Outras Tecnologias</h4>
              <div className="flex flex-wrap gap-2">
                {["Selenium", "Machine Learning", "RabbitMQ", "Grafana", "Terraform", "GitHub Actions"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 hover:border-purple-300 hover:text-purple-600 hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA - Enhanced */}
        <div
          className={`mt-12 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-6 text-white text-center relative overflow-hidden group transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Vamos criar algo incrível juntos?</h3>
            <p className="mb-5 opacity-90">Disponível para projetos freelancer e novos desafios</p>
            <a
              href="#contato"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 hover:bg-slate-100 font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group/btn"
            >
              <span>Fale Comigo</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Floating elements in CTA */}
          <div className="absolute top-2 right-4 w-16 h-16 border-2 border-white/20 rounded-full animate-ping-slow"></div>
          <div className="absolute bottom-2 left-4 w-12 h-12 border-2 border-white/20 rounded-full animate-ping-slow animation-delay-1000"></div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        
        @keyframes shine {
          to { transform: translateX(100%); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        .animate-blob {
          animation: blob 15s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default About
