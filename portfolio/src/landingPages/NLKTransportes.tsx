"use client"

import { useState, useEffect } from "react"
import {
  Truck,
  Shield,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Package,
  Home,
  Building2,
  Wine,
  CheckCircle,
  X,
} from "lucide-react"

const NLKTransportesEnhanced = () => {
  const whatsappNumber = "5511999999999"
  const phoneNumber = "(11) 99999-9999"
  const [showStickyBar, setShowStickyBar] = useState(false)
  const [showFloatingButton, setShowFloatingButton] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento para mudança.`, "_blank")
  }

  return (
    <div className="bg-white">
      <div
        className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-green-600 to-green-700 text-white shadow-2xl z-50 transition-transform duration-300 ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm sm:text-base truncate">🚚 Solicite seu orçamento GRÁTIS agora!</p>
            <p className="text-xs text-green-100 hidden sm:block">Resposta em até 5 minutos • Seguro incluso</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={openWhatsApp}
              className="bg-white text-green-700 hover:bg-green-50 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-xl text-sm sm:text-base flex items-center gap-2 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">SOLICITAR ORÇAMENTO</span>
              <span className="sm:hidden">ORÇAMENTO</span>
            </button>
            <button
              onClick={() => setShowStickyBar(false)}
              className="text-white hover:text-green-100 p-2 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">{phoneNumber}</span>
          </div>
          <span>✓ Mudanças Seguras | ✓ Orçamento Grátis | ✓ Atendimento 24h</span>
        </div>
      </div>

      {/* Hero Section - Estilo Clean e Corporativo */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-6">
                🏆 +10 ANOS NO MERCADO
              </div>
              <h1
                className="text-4xl md:text-6xl font-black leading-tight mb-6"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                Mudanças rápidas,
                <br />
                <span className="text-yellow-400">seguras</span> e sem
                <br />
                dor de cabeça
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Transportamos seus pertences com total segurança e agilidade. Equipe especializada e veículos modernos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openWhatsApp}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center gap-2 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  SOLICITAR ORÇAMENTO
                </button>
                <a
                  href="tel:5511999999999"
                  className="px-4 py-4 rounded-xl border-2 border-white/30 text-white hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  LIGAR AGORA
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-blue-900 text-center mb-6">
                  <Truck className="w-20 h-20 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-2xl font-bold mb-2">Orçamento Instantâneo</h3>
                  <p className="text-gray-600">Resposta em até 5 minutos</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Equipe Treinada e Uniformizada</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Rastreamento em Tempo Real</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Seguro Total Incluso</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">Materiais de Embalagem Grátis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-100 border-y-4 border-yellow-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-blue-900 mb-2">5.000+</div>
              <div className="text-gray-600 font-semibold">Mudanças Realizadas</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-900 mb-2">98%</div>
              <div className="text-gray-600 font-semibold">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-900 mb-2">24h</div>
              <div className="text-gray-600 font-semibold">Atendimento</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-900 mb-2">100%</div>
              <div className="text-gray-600 font-semibold">Seguro Garantido</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Grid Layout */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">NOSSOS SERVIÇOS</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Soluções completas para qualquer tipo de mudança</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-4 border-blue-900 rounded-xl p-8 hover:shadow-xl transition">
              <Home className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-2xl font-black text-blue-900 mb-3">MUDANÇAS RESIDENCIAIS</h3>
              <p className="text-gray-600 mb-4">
                Transforme sua mudança em uma experiência tranquila. Cuidamos de cada móvel, utensílio e objeto pessoal
                como se fosse nosso.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Desmontagem e montagem de móveis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Embalagem profissional inclusa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Içamento de móveis quando necessário</span>
                </li>
              </ul>
            </div>

            <div className="border-4 border-blue-900 rounded-xl p-8 hover:shadow-xl transition">
              <Building2 className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-2xl font-black text-blue-900 mb-3">MUDANÇAS COMERCIAIS</h3>
              <p className="text-gray-600 mb-4">
                Minimize o tempo de parada do seu negócio. Planejamento detalhado e execução rápida para empresas de
                todos os portes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Mudanças em finais de semana e feriados</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Transporte de equipamentos pesados</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Logística empresarial completa</span>
                </li>
              </ul>
            </div>

            <div className="border-4 border-blue-900 rounded-xl p-8 hover:shadow-xl transition">
              <Wine className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-2xl font-black text-blue-900 mb-3">TRANSPORTE DE FRÁGEIS</h3>
              <p className="text-gray-600 mb-4">
                Especialistas em itens delicados e de alto valor. Técnicas especiais de embalagem e transporte seguro.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Obras de arte e antiguidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Pianos e instrumentos musicais</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Eletrônicos e cristais</span>
                </li>
              </ul>
            </div>

            <div className="border-4 border-blue-900 rounded-xl p-8 hover:shadow-xl transition">
              <Package className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-2xl font-black text-blue-900 mb-3">LOGÍSTICA PERSONALIZADA</h3>
              <p className="text-gray-600 mb-4">
                Cada mudança é única. Criamos soluções sob medida para atender suas necessidades específicas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Consultoria gratuita</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Armazenamento temporário</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Transporte interestadual</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">POR QUE ESCOLHER A NLK?</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% SEGURO</h3>
              <p className="text-blue-100">Seguro completo para sua mudança sem custo adicional</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">PONTUALIDADE</h3>
              <p className="text-blue-100">Cumprimos prazos rigorosamente conforme combinado</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">RASTREAMENTO</h3>
              <p className="text-blue-100">Acompanhe sua mudança online em tempo real</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">FROTA MODERNA</h3>
              <p className="text-blue-100">Veículos novos, equipados e sempre higienizados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">DEPOIMENTOS</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Veja o que nossos clientes falam sobre nós</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-400">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Excelente serviço! A equipe foi super cuidadosa com meus móveis e chegaram no horário combinado.
                Recomendo!"
              </p>
              <div className="font-bold text-blue-900">Maria Silva</div>
              <div className="text-sm text-gray-500">Mudança Residencial - São Paulo</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-400">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Contratei para mudança do escritório. Profissionais, rápidos e eficientes. Não tivemos nenhum
                problema."
              </p>
              <div className="font-bold text-blue-900">João Santos</div>
              <div className="text-sm text-gray-500">Mudança Comercial - Campinas</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-400">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Precisei transportar um piano de cauda. Fizeram com maestria! Equipe experiente e equipamento
                adequado."
              </p>
              <div className="font-bold text-blue-900">Ana Paula</div>
              <div className="text-sm text-gray-500">Transporte Especial - Santos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-blue-900 mb-6">SOLICITE SEU ORÇAMENTO AGORA!</h2>
          <p className="text-2xl text-blue-900 mb-8 font-bold">Atendimento rápido via WhatsApp em até 5 minutos</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black py-6 px-12 rounded-xl text-xl flex items-center justify-center gap-3 shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <MessageCircle className="w-7 h-7" />
              FALAR NO WHATSAPP
            </button>
            <a
              href="tel:5511999999999"
              className="px-12 py-6 rounded-xl border-2 border-blue-900 text-blue-900 hover:text-white hover:border-blue-800 hover:bg-blue-900 transition-all duration-300 font-black text-xl flex items-center justify-center gap-3 shadow-xl"
            >
              <Phone className="w-7 h-7" />
              {phoneNumber}
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 inline-block shadow-xl">
            <p className="text-blue-900 font-bold text-lg">
              ⚡ Orçamento GRÁTIS e sem compromisso
              <br />
              🛡️ Seguro total incluso no valor
              <br />📦 Materiais de embalagem por nossa conta
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Truck className="w-10 h-10" />
            <span className="text-2xl font-black">NLK TRANSPORTES</span>
          </div>
          <p className="text-blue-200 mb-2">Mudanças rápidas, seguras e sem dor de cabeça</p>
          <p className="text-blue-300 text-sm">© 2025 NLK Transportes - Todos os direitos reservados</p>
        </div>
      </footer>

      {showFloatingButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative">
            {/* Pulse animation ring */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

            {/* Main button */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="hidden sm:inline whitespace-nowrap">Solicitar Orçamento</span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default NLKTransportesEnhanced
