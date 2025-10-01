import React, { useState } from 'react';
import { 
  Dumbbell, 
  Zap, 
  Users, 
  Video, 
  Apple, 
  TrendingUp, 
  MessageCircle, 
  Star,
  Check,
  Clock,
  Target,
  Award,
  Play,
  ChevronRight,
  Heart,
  Activity
} from 'lucide-react';

const FitLife = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const whatsappNumber = "5511999999999";

  const plans = [
    {
      name: "BÁSICO",
      price: "97",
      period: "mês",
      features: [
        "Acesso à academia 3x/semana",
        "Avaliação física inicial",
        "Treino personalizado",
        "App de acompanhamento"
      ],
      highlight: false
    },
    {
      name: "PREMIUM",
      price: "147",
      period: "mês",
      features: [
        "Acesso ilimitado à academia",
        "Treino 100% personalizado",
        "Aulas ao vivo online",
        "Consultoria nutricional",
        "App premium + suporte 24h"
      ],
      highlight: true
    },
    {
      name: "VIP",
      price: "247",
      period: "mês",
      features: [
        "Tudo do Premium +",
        "Personal trainer dedicado",
        "Plano alimentar completo",
        "Acompanhamento diário",
        "Acesso a todas as aulas especiais"
      ],
      highlight: false
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      age: "32 anos",
      result: "Perdeu 18kg em 4 meses",
      image: "👨",
      text: "A FitLife mudou completamente minha vida! Consegui emagrecer e ganhar massa muscular ao mesmo tempo.",
      rating: 5
    },
    {
      name: "Julia Santos",
      age: "28 anos",
      result: "Ganhou 8kg de massa magra",
      image: "👩",
      text: "Treinos personalizados e acompanhamento nutricional fizeram toda diferença. Equipe incrível!",
      rating: 5
    },
    {
      name: "Roberto Silva",
      age: "45 anos",
      result: "Melhorou saúde e disposição",
      image: "👨‍🦱",
      text: "Depois dos 40 achei que era tarde, mas a FitLife me provou o contrário. Estou em melhor forma que aos 30!",
      rating: 5
    }
  ];

  const openWhatsApp = (planName = "") => {
    const message = planName 
      ? `Olá! Tenho interesse no plano ${planName} da FitLife Academy. Gostaria de mais informações!`
      : "Olá! Gostaria de conhecer a FitLife Academy e começar minha transformação!";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Hero Section - Bold and Energetic */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #00ff00 0, #00ff00 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-lime-500 text-black px-6 py-2 rounded-full font-black text-sm mb-8 animate-pulse">
                <Zap className="w-4 h-4" />
                PRIMEIRA SEMANA GRÁTIS
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6 uppercase">
                Transforme<br/>
                seu <span className="text-lime-500">corpo</span>,<br/>
                transforme<br/>
                sua <span className="text-lime-500">vida</span>
              </h1>

              <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                Treinos personalizados, aulas online ao vivo e acompanhamento nutricional. Resultados reais em 30 dias!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => openWhatsApp()}
                  className="bg-lime-500 hover:bg-lime-400 text-black font-black py-5 px-10 rounded-none text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-lime-500/50"
                >
                  <MessageCircle className="w-6 h-6" />
                  COMEÇAR AGORA NO WHATSAPP
                </button>
                <button className="border-4 border-white hover:bg-white hover:text-black font-black py-5 px-10 rounded-none text-lg transition-all">
                  VER PLANOS
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-black text-lime-500">500+</div>
                  <div className="text-sm text-gray-400 uppercase font-bold">Alunos Ativos</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-lime-500">95%</div>
                  <div className="text-sm text-gray-400 uppercase font-bold">Satisfação</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-lime-500">30</div>
                  <div className="text-sm text-gray-400 uppercase font-bold">Dias p/ Resultado</div>
                </div>
              </div>
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-lime-500 to-green-700 rounded-3xl overflow-hidden shadow-2xl shadow-lime-500/30 border-8 border-lime-500">
                <div className="aspect-[3/4] flex items-center justify-center text-9xl">
                  💪
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-lime-500 hover:bg-lime-400 w-20 h-20 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-2xl">
                    <Play className="w-10 h-10 text-black fill-black ml-1" />
                  </button>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-black border-4 border-lime-500 px-8 py-4 rounded-2xl">
                <div className="text-3xl font-black text-lime-500">-18KG</div>
                <div className="text-sm text-gray-400 font-bold">EM 4 MESES</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-lime-500 rotate-90" />
        </div>
      </section>

      {/* Benefits Section - Grid Layout */}
      <section className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black mb-6 uppercase">
              O que você <span className="text-lime-500">ganha</span>
            </h2>
            <div className="w-32 h-2 bg-lime-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900 border-l-8 border-lime-500 p-8 hover:bg-zinc-800 transition-all group">
              <Target className="w-16 h-16 text-lime-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-4 uppercase">Treinos Personalizados</h3>
              <p className="text-gray-400 leading-relaxed">
                Plano de treino exclusivo baseado no seu objetivo, biotipo e nível de condicionamento.
              </p>
            </div>

            <div className="bg-zinc-900 border-l-8 border-lime-500 p-8 hover:bg-zinc-800 transition-all group">
              <Video className="w-16 h-16 text-lime-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-4 uppercase">Aulas Online ao Vivo</h3>
              <p className="text-gray-400 leading-relaxed">
                Treine de onde estiver com aulas ao vivo e gravadas disponíveis 24h no app.
              </p>
            </div>

            <div className="bg-zinc-900 border-l-8 border-lime-500 p-8 hover:bg-zinc-800 transition-all group">
              <Apple className="w-16 h-16 text-lime-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-4 uppercase">Nutricionista Parceiro</h3>
              <p className="text-gray-400 leading-relaxed">
                Consultoria nutricional completa para potencializar seus resultados.
              </p>
            </div>

            <div className="bg-zinc-900 border-l-8 border-lime-500 p-8 hover:bg-zinc-800 transition-all group">
              <TrendingUp className="w-16 h-16 text-lime-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-4 uppercase">Resultados Rápidos</h3>
              <p className="text-gray-400 leading-relaxed">
                Metodologia comprovada com resultados visíveis em apenas 30 dias.
              </p>
            </div>
          </div>

          {/* Extra Features */}
          <div className="mt-12 bg-lime-500 text-black p-8 rounded-3xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <Check className="w-10 h-10 mx-auto mb-2" />
                <div className="font-black uppercase text-sm">App Exclusivo</div>
              </div>
              <div>
                <Check className="w-10 h-10 mx-auto mb-2" />
                <div className="font-black uppercase text-sm">Suporte 24h</div>
              </div>
              <div>
                <Check className="w-10 h-10 mx-auto mb-2" />
                <div className="font-black uppercase text-sm">Flexibilidade Total</div>
              </div>
              <div>
                <Check className="w-10 h-10 mx-auto mb-2" />
                <div className="font-black uppercase text-sm">Sem Fidelidade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section - Modern Pricing */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black mb-6 uppercase">
              Escolha seu <span className="text-lime-500">plano</span>
            </h2>
            <div className="w-32 h-2 bg-lime-500 mx-auto mb-4"></div>
            <p className="text-2xl text-gray-400">Invista em você. Sem taxas escondidas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-lime-500 to-green-600 scale-105 shadow-2xl shadow-lime-500/50'
                    : 'bg-zinc-900'
                } p-8 rounded-none border-4 ${
                  plan.highlight ? 'border-lime-500' : 'border-zinc-800'
                } transition-all hover:scale-105`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-lime-500 px-6 py-2 font-black text-sm border-2 border-lime-500">
                    MAIS POPULAR
                  </div>
                )}
                
                <div className={`${plan.highlight ? 'text-black' : 'text-white'}`}>
                  <h3 className="text-3xl font-black mb-4 uppercase">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-6xl font-black">R$ {plan.price}</span>
                    <span className="text-xl">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-6 h-6 flex-shrink-0 ${plan.highlight ? 'text-black' : 'text-lime-500'}`} />
                        <span className="font-bold">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openWhatsApp(plan.name)}
                    className={`w-full ${
                      plan.highlight
                        ? 'bg-black text-lime-500 hover:bg-zinc-900'
                        : 'bg-lime-500 text-black hover:bg-lime-400'
                    } font-black py-4 px-6 rounded-none transition-all uppercase flex items-center justify-center gap-2`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Começar Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black mb-6 uppercase">
              Resultados <span className="text-lime-500">reais</span>
            </h2>
            <div className="w-32 h-2 bg-lime-500 mx-auto mb-4"></div>
            <p className="text-2xl text-gray-400">Veja quem já transformou a vida na FitLife</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black border-4 border-lime-500 p-8 hover:bg-zinc-900 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">{testimonial.image}</div>
                  <div>
                    <div className="font-black text-xl">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.age}</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-lime-500 fill-lime-500" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-lime-500 text-black font-black text-sm px-4 py-2 mb-4 inline-block uppercase">
                  {testimonial.result}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-lime-500 to-green-600 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 uppercase leading-tight">
            Sua transformação<br/>começa agora!
          </h2>
          
          <p className="text-2xl font-bold mb-12">
            ⚡ Primeira semana GRÁTIS + Avaliação física completa
          </p>

          <button
            onClick={() => openWhatsApp()}
            className="bg-black hover:bg-zinc-900 text-lime-500 font-black py-6 px-12 rounded-none text-2xl inline-flex items-center gap-4 transition-all transform hover:scale-105 shadow-2xl mb-8"
          >
            <MessageCircle className="w-8 h-8" />
            QUERO COMEÇAR PELO WHATSAPP
          </button>

          <div className="bg-black text-white p-8 rounded-3xl inline-block">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <Heart className="w-8 h-8 mx-auto mb-2 text-lime-500" />
                <div className="font-black text-sm">SEM FIDELIDADE</div>
              </div>
              <div>
                <Award className="w-8 h-8 mx-auto mb-2 text-lime-500" />
                <div className="font-black text-sm">7 DIAS GRÁTIS</div>
              </div>
              <div>
                <Activity className="w-8 h-8 mx-auto mb-2 text-lime-500" />
                <div className="font-black text-sm">RESULTADOS EM 30 DIAS</div>
              </div>
              <div>
                <Users className="w-8 h-8 mx-auto mb-2 text-lime-500" />
                <div className="font-black text-sm">SUPORTE 24H</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-lime-500 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Dumbbell className="w-12 h-12 text-lime-500" />
            <span className="text-3xl font-black uppercase">FitLife Academy</span>
          </div>
          <p className="text-gray-400 font-bold uppercase text-sm mb-2">
            Transforme seu corpo, transforme sua vida
          </p>
          <p className="text-gray-600 text-xs">© 2024 FitLife Academy - Todos os direitos reservados</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 bg-lime-500 hover:bg-lime-400 text-black p-5 rounded-full shadow-2xl transition-all z-50 animate-pulse border-4 border-black"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
};

export default FitLife;