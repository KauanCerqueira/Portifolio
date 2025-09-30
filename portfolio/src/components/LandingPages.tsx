import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Monitor, Smartphone, Eye, Palette, Sparkles } from 'lucide-react';

interface LandingPage {
  title: string;
  category: string;
  description: string;
  preview: string;
  colors: string[];
  features: string[];
  gradient: string;
  bgGradient: string;
}

const LandingPagesShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const landingPages: LandingPage[] = [
    {
      title: 'Tech Startup',
      category: 'SaaS & Technology',
      description: 'Landing page moderna para startups de tecnologia com design minimalista, animações suaves e foco em conversão. Interface otimizada para destacar features e CTAs estratégicos.',
      preview: '💻',
      colors: ['#6366f1', '#8b5cf6', '#ec4899'],
      features: ['Design Responsivo', 'Animações CSS', 'SEO Otimizado', 'Fast Loading'],
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-600 via-purple-600 to-pink-600',
    },
    {
      title: 'E-commerce Fashion',
      category: 'Moda & Varejo',
      description: 'Landing page elegante para e-commerce de moda com galeria de produtos, filtros inteligentes e checkout simplificado. Design sofisticado que converte visitantes em clientes.',
      preview: '👗',
      colors: ['#f59e0b', '#ef4444', '#dc2626'],
      features: ['Grid Responsivo', 'Filtros Dinâmicos', 'Cart Integration', 'Mobile First'],
      gradient: 'from-amber-500 to-red-500',
      bgGradient: 'from-amber-600 via-orange-600 to-red-600',
    },
    {
      title: 'Fitness & Wellness',
      category: 'Saúde & Bem-estar',
      description: 'Landing page energética para academia e wellness com agendamento online, planos de treino e depoimentos. Visual impactante que motiva ação imediata.',
      preview: '💪',
      colors: ['#10b981', '#06b6d4', '#0ea5e9'],
      features: ['Booking System', 'Video Background', 'Testimonials', 'Social Proof'],
      gradient: 'from-emerald-500 to-cyan-500',
      bgGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    },
    {
      title: 'Restaurant Deluxe',
      category: 'Gastronomia',
      description: 'Landing page sofisticada para restaurantes premium com menu interativo, reservas online e galeria de pratos. Experiência visual que desperta o apetite.',
      preview: '🍽️',
      colors: ['#dc2626', '#f59e0b', '#eab308'],
      features: ['Menu Digital', 'Reservas Online', 'Galeria HD', 'Google Maps'],
      gradient: 'from-red-500 to-amber-500',
      bgGradient: 'from-red-600 via-orange-600 to-amber-600',
    },
    {
      title: 'Real Estate Pro',
      category: 'Imóveis',
      description: 'Landing page profissional para imobiliárias com tours virtuais 360°, busca avançada e calculadora de financiamento. Design que transmite confiança e credibilidade.',
      preview: '🏠',
      colors: ['#0ea5e9', '#6366f1', '#8b5cf6'],
      features: ['Virtual Tours', 'Search Filters', 'Calculator', 'Lead Forms'],
      gradient: 'from-sky-500 to-indigo-500',
      bgGradient: 'from-sky-600 via-blue-600 to-indigo-600',
    },
    {
      title: 'Digital Agency',
      category: 'Agência & Serviços',
      description: 'Landing page criativa para agências digitais com portfólio interativo, case studies e formulário de orçamento. Visual ousado que demonstra expertise criativa.',
      preview: '🎨',
      colors: ['#ec4899', '#a855f7', '#6366f1'],
      features: ['Portfolio Grid', 'Case Studies', 'Budget Form', 'Animations'],
      gradient: 'from-pink-500 to-violet-500',
      bgGradient: 'from-pink-600 via-fuchsia-600 to-violet-600',
    },
  ];

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % landingPages.length);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + landingPages.length) % landingPages.length);
  };

  const goToPage = (index: number) => {
    setCurrentIndex(index);
  };

  const currentPage = landingPages[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % landingPages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [landingPages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200">Portfólio de Landing Pages</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Designs que{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Convertem
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore minha coleção de landing pages criativas e otimizadas para alta performance
          </p>
        </div>

        {/* Main Showcase Card */}
        <div className="relative mb-12">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50">
            <div className="grid lg:grid-cols-5">
              {/* Left Side - Visual Preview */}
              <div className="lg:col-span-2 relative">
                <div
                  className={`relative bg-gradient-to-br ${currentPage.bgGradient} p-12 flex items-center justify-center min-h-[400px]`}
                >
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '30px 30px',
                      }}
                    ></div>
                  </div>

                  {/* Mock Browser */}
                  <div className="relative z-10 w-full max-w-xs">
                    <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                      {/* Browser Header */}
                      <div className="bg-slate-200 px-4 py-3 flex items-center space-x-2">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-slate-500">
                          www.example.com
                        </div>
                      </div>
                      
                      {/* Preview Content */}
                      <div className={`bg-gradient-to-br ${currentPage.gradient} p-8 flex items-center justify-center h-48`}>
                        <div className="text-8xl">{currentPage.preview}</div>
                      </div>
                      
                      {/* Color Palette */}
                      <div className="bg-white p-4">
                        <div className="flex space-x-2 justify-center">
                          {currentPage.colors.map((color, index) => (
                            <div
                              key={index}
                              className="w-8 h-8 rounded-lg shadow-md transform hover:scale-110 transition-transform"
                              style={{ backgroundColor: color }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-900 text-sm font-bold shadow-lg">
                      <Palette className="w-4 h-4" />
                      <span>{currentPage.category}</span>
                    </div>
                  </div>

                  {/* Device Icons */}
                  <div className="absolute bottom-6 right-6 flex space-x-2">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <Monitor className="w-5 h-5 text-white" />
                    </div>
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Details */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-4">{currentPage.title}</h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      {currentPage.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Eye className="w-5 h-5 text-purple-400" />
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                        Principais Features
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {currentPage.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 p-3 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all duration-300 group"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentPage.gradient}`}></div>
                          <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Color Palette Info */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Palette className="w-5 h-5 text-pink-400" />
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                        Paleta de Cores
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                      {currentPage.colors.map((color, index) => (
                        <div key={index} className="flex flex-col items-center space-y-1">
                          <div
                            className="w-12 h-12 rounded-lg shadow-lg border-2 border-slate-600"
                            style={{ backgroundColor: color }}
                          ></div>
                          <span className="text-xs text-slate-400 font-mono">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700">
                  <button
                    onClick={prevPage}
                    className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all duration-300 group"
                    aria-label="Landing page anterior"
                  >
                    <ChevronLeft className="w-6 h-6 text-slate-300 group-hover:-translate-x-1 transition-transform" />
                  </button>

                  <div className="flex space-x-2">
                    {landingPages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToPage(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentIndex
                            ? `w-8 h-2 bg-gradient-to-r ${currentPage.gradient}`
                            : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
                        }`}
                        aria-label={`Ir para landing page ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextPage}
                    className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all duration-300 group"
                    aria-label="Próxima landing page"
                  >
                    <ChevronRight className="w-6 h-6 text-slate-300 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <span className="text-sm text-slate-400 font-medium">
              Landing Page {currentIndex + 1} de {landingPages.length}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="text-lg">Vamos Criar a Sua?</span>
            <Sparkles className="w-6 h-6" />
          </button>
        </div>
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
  );
};

export default LandingPagesShowcase;