import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Target, 
  BarChart2, 
  Phone, 
  Zap,
  Check,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Star,
  ChevronRight,
  Play,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Shield,
  Clock,
  LucideIcon
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface Plan {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  popular?: boolean;
  color: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  result: string;
}

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const DigitalBoostRevamp: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const whatsappNumber: string = "5511999999999";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services: Service[] = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tráfego Pago",
      description: "Campanhas inteligentes no Google e Meta Ads com foco em conversão",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestão de Redes",
      description: "Presença digital consistente e engajamento real com seu público",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Analytics Avançado",
      description: "Dados em tempo real para decisões estratégicas precisas",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Growth Marketing",
      description: "Estratégias de crescimento acelerado e escalável",
      color: "from-orange-500 to-amber-500"
    }
  ];

  const plans: Plan[] = [
    {
      name: "Essencial",
      price: "1.497",
      subtitle: "Perfeito para começar",
      features: [
        "2 redes sociais gerenciadas",
        "15 posts criativos/mês",
        "Campanhas Meta Ads básicas",
        "Relatório mensal simplificado",
        "Suporte via chat"
      ],
      color: "border-gray-200 hover:border-violet-300"
    },
    {
      name: "Crescimento",
      price: "2.997",
      subtitle: "O mais escolhido",
      features: [
        "4 redes sociais completas",
        "30 posts + 20 stories/mês",
        "Google Ads + Meta Ads avançado",
        "Relatórios semanais detalhados",
        "Consultoria estratégica",
        "Copy e design profissional",
        "Suporte prioritário"
      ],
      popular: true,
      color: "border-violet-500 shadow-2xl shadow-violet-500/20"
    },
    {
      name: "Enterprise",
      price: "5.997",
      subtitle: "Performance máxima",
      features: [
        "Gestão ilimitada de plataformas",
        "Conteúdo premium diário",
        "Tráfego pago multi-canal",
        "Dashboard personalizado 24/7",
        "Reuniões estratégicas quinzenais",
        "Análise competitiva profunda",
        "Gerente de conta dedicado",
        "Atendimento VIP exclusivo"
      ],
      color: "border-gray-200 hover:border-pink-300"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Maria Silva",
      role: "CEO, Fashion Store",
      content: "Em 6 meses dobramos nosso faturamento. A equipe é extremamente profissional e os resultados falam por si.",
      rating: 5,
      result: "+215% vendas"
    },
    {
      name: "João Santos",
      role: "Diretor, Clínica Dental",
      content: "Passamos de 15 para 120 agendamentos mensais. Investimento que realmente vale a pena!",
      rating: 5,
      result: "+700% leads"
    },
    {
      name: "Ana Costa",
      role: "Fundadora, E-commerce",
      content: "ROI impressionante! Cada real investido retorna multiplicado. Equipe sempre disponível e atenciosa.",
      rating: 5,
      result: "8.5x ROI"
    }
  ];

  const stats: Stat[] = [
    { value: "R$ 3.2M+", label: "Gerados para clientes", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "200+", label: "Projetos de sucesso", icon: <Award className="w-5 h-5" /> },
    { value: "98%", label: "Taxa de satisfação", icon: <Star className="w-5 h-5" /> },
    { value: "4.9", label: "Avaliação média", icon: <Star className="w-5 h-5" /> }
  ];

  const openWhatsApp = (planName: string = ""): void => {
    const message: string = planName 
      ? `Olá! Gostaria de saber mais sobre o plano ${planName}. Podemos conversar?`
      : "Olá! Quero impulsionar meu negócio com marketing digital!";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',_'Inter',_system-ui,_sans-serif]">
      
      {/* Hero Section - Minimalista e Moderno */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-violet-50 via-white to-white">
        
        {/* Elementos decorativos flutuantes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <Zap className="w-4 h-4" />
              <span>Agência de Marketing Digital Orientada a Resultados</span>
            </div>

            {/* Headline */}
            <h1 className={`text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Transforme
              </span>
              <br />
              <span className="text-gray-900">
                cliques em clientes
              </span>
            </h1>

            <p className={`text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              Estratégias de marketing digital que geram resultados reais. Mais vendas, mais leads, mais crescimento.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <button
                onClick={() => openWhatsApp()}
                className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl text-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Agendar Consultoria
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded-2xl text-lg flex items-center justify-center gap-3 transition-all border-2 border-gray-200 hover:border-violet-300">
                <Play className="w-5 h-5" />
                Ver Cases
              </button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-violet-600">{stat.icon}</div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* Services Section - Cards Flutuantes */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas para acelerar o crescimento do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center text-violet-600 font-semibold group-hover:gap-2 transition-all">
                  <span>Saiba mais</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Carrossel Minimalista */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos clientes têm a dizer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl font-bold text-sm">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Layout Moderno */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Planos Transparentes
            </h2>
            <p className="text-xl text-gray-600">
              Sem surpresas. Sem taxas ocultas. Apenas resultados.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 border-2 ${plan.color} transition-all hover:scale-105 ${plan.popular ? 'lg:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Mais Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.subtitle}</p>
                  
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-gray-900">R$ {plan.price}</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openWhatsApp(plan.name)}
                  className={`w-full py-4 px-6 rounded-2xl font-bold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Começar Agora
                </button>
              </div>
            ))}
          </div>

          {/* Garantias */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100">
              <Shield className="w-6 h-6 text-violet-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700">Garantia de satisfação</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100">
              <Clock className="w-6 h-6 text-violet-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700">Sem período de fidelidade</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100">
              <Zap className="w-6 h-6 text-violet-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700">Resultados em 30 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Minimalista */}
      <section className="py-24 px-4 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Pronto para crescer?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-violet-100">
            Agende uma consultoria gratuita e descubra como podemos ajudar
          </p>
          
          <button
            onClick={() => openWhatsApp()}
            className="group bg-white hover:bg-gray-50 text-violet-600 font-bold py-5 px-10 rounded-2xl text-xl inline-flex items-center gap-4 transition-all shadow-2xl hover:scale-105"
          >
            Falar com Especialista
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer - Clean */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-8 h-8 text-violet-500" />
                <span className="text-2xl font-bold">DigitalBoost</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transformando negócios através do marketing digital estratégico e orientado a resultados.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition">Tráfego Pago</li>
                <li className="hover:text-white cursor-pointer transition">Gestão de Redes</li>
                <li className="hover:text-white cursor-pointer transition">Analytics</li>
                <li className="hover:text-white cursor-pointer transition">Consultoria</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition">Sobre Nós</li>
                <li className="hover:text-white cursor-pointer transition">Cases</li>
                <li className="hover:text-white cursor-pointer transition">Blog</li>
                <li className="hover:text-white cursor-pointer transition">Contato</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gray-800 hover:bg-violet-600 rounded-xl flex items-center justify-center cursor-pointer transition">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-violet-600 rounded-xl flex items-center justify-center cursor-pointer transition">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-violet-600 rounded-xl flex items-center justify-center cursor-pointer transition">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-violet-600 rounded-xl flex items-center justify-center cursor-pointer transition">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 DigitalBoost. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer transition">Privacidade</span>
              <span className="hover:text-white cursor-pointer transition">Termos</span>
              <span className="hover:text-white cursor-pointer transition">Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50 animate-bounce"
      >
        <Phone className="w-7 h-7" />
      </button>
    </div>
  );
};

export default DigitalBoostRevamp;