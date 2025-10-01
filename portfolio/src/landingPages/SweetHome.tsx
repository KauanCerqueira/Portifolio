import React, { useState, useEffect } from 'react';
import { 
  Home, 
  MessageCircle, 
  Sparkles,
  Leaf,
  Clock,
  Award,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Quote,
  Hammer,
  Paintbrush,
  Ruler,
  Package,
  Shield,
  Users,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Camera
} from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  before?: string;
  after?: string;
}

interface Testimonial {
  name: string;
  location: string;
  content: string;
  rating: number;
  project: string;
  image: string;
}

interface Service {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const SweetHome: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const whatsappNumber: string = "5511999999999";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits: Benefit[] = [
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Arquitetura Personalizada",
      description: "Projetos únicos que refletem sua personalidade e necessidades",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Reformas Rápidas",
      description: "Cumprimos prazos sem comprometer a qualidade do acabamento",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Materiais Sustentáveis",
      description: "Construção consciente com produtos eco-friendly certificados",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Parcelamento Facilitado",
      description: "Condições especiais para você realizar seu sonho agora",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Casa Moderna Alphaville",
      category: "Construção Nova",
      image: "🏠",
      before: "🏗️",
      after: "🏡"
    },
    {
      id: 2,
      title: "Reforma Apartamento Jardins",
      category: "Reforma Completa",
      image: "🏢",
      before: "🔨",
      after: "✨"
    },
    {
      id: 3,
      title: "Casa de Campo Itapecerica",
      category: "Construção Nova",
      image: "🏘️",
      before: "🌳",
      after: "🏡"
    },
    {
      id: 4,
      title: "Cozinha Gourmet Moema",
      category: "Reforma Parcial",
      image: "👨‍🍳",
      before: "🔧",
      after: "🍽️"
    },
    {
      id: 5,
      title: "Sobrado Contemporâneo",
      category: "Construção Nova",
      image: "🏠",
      before: "📐",
      after: "🌟"
    },
    {
      id: 6,
      title: "Área de Lazer",
      category: "Reforma Parcial",
      image: "🏊",
      before: "🧱",
      after: "🌴"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Carlos e Marina Oliveira",
      location: "Alphaville, SP",
      content: "A SweetHome transformou nosso terreno em um lar dos sonhos! A atenção aos detalhes e o cumprimento de prazos nos surpreenderam. Superou todas as expectativas!",
      rating: 5,
      project: "Casa Moderna 320m²",
      image: "👨‍👩‍👧‍👦"
    },
    {
      name: "Juliana Santos",
      location: "Jardins, SP",
      content: "Reforma impecável! Em 60 dias meu apartamento estava completamente transformado. Equipe profissional, materiais de primeira qualidade. Recomendo de olhos fechados!",
      rating: 5,
      project: "Reforma Apartamento 150m²",
      image: "👩"
    },
    {
      name: "Roberto e Ana Costa",
      location: "Moema, SP",
      content: "Parcelamento facilitado e projeto personalizado tornaram possível nossa cozinha gourmet. A SweetHome entendeu exatamente o que queríamos. Gratidão total!",
      rating: 5,
      project: "Cozinha Gourmet",
      image: "👨‍👩‍👧"
    }
  ];

  const services: Service[] = [
    {
      icon: <Home className="w-6 h-6" />,
      name: "Construção Residencial",
      description: "Casas e sobrados do zero"
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      name: "Reformas Completas",
      description: "Transformação total do imóvel"
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      name: "Reformas Parciais",
      description: "Cozinhas, banheiros, áreas específicas"
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: "Projetos Arquitetônicos",
      description: "Design personalizado e aprovação"
    }
  ];

  const openWhatsApp = (message: string = ""): void => {
    const defaultMessage: string = "Olá! Gostaria de solicitar um orçamento para meu projeto. Vamos conversar?";
    const finalMessage: string = message || defaultMessage;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`, '_blank');
  };

  const nextProject = (): void => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = (): void => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-stone-50 font-['Poppins',_system-ui,_sans-serif]">
      
      {/* Hero Section - Organic & Warm */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100">
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm border border-amber-200">
                <Home className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-900">Construção & Reformas</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Seu lar,</span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                  do jeitinho
                </span>
                <br />
                <span className="text-gray-900">que você sonhou</span>
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Transformamos sonhos em realidade com projetos personalizados, materiais de qualidade e equipe especializada. Sua casa perfeita está a um clique de distância.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => openWhatsApp()}
                  className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-5 px-8 rounded-2xl text-lg flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  Solicitar Orçamento Grátis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      M
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      J
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      R
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      +
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">+200 Famílias</div>
                    <div className="text-xs text-gray-600">realizaram o sonho</div>
                  </div>
                </div>

                <div className="h-12 w-px bg-gray-300"></div>

                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="text-xs text-gray-600">4.9/5 avaliação média</div>
                </div>
              </div>
            </div>

            {/* Right Content - Modern House Illustration */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-amber-100">
                  <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 rounded-[2rem] flex items-center justify-center text-9xl mb-6 relative overflow-hidden">
                    🏡
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 text-center">
                      <Home className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">200+</div>
                      <div className="text-xs text-gray-600 font-medium">Projetos</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 text-center">
                      <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">15+</div>
                      <div className="text-xs text-gray-600 font-medium">Anos</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 text-center">
                      <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">99%</div>
                      <div className="text-xs text-gray-600 font-medium">Satisfação</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl rotate-3 border-4 border-white">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <div>
                      <div className="text-xs font-semibold">Garantia</div>
                      <div className="text-lg font-bold leading-none">5 Anos</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-2xl shadow-xl -rotate-3 border-4 border-white">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    <div>
                      <div className="text-xs font-semibold">Parcelamento</div>
                      <div className="text-lg font-bold leading-none">em até 12x</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section - Organic Cards */}
      <section className="py-24 px-4 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-50 via-transparent to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              Por que escolher a SweetHome?
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Diferenciais que fazem
              <br />
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                toda a diferença
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-stone-100 hover:border-amber-200 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="mt-20 bg-gradient-to-br from-stone-900 to-stone-800 rounded-[3rem] p-12">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Nossos Serviços
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-amber-400 mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{service.name}</h4>
                  <p className="text-stone-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Carousel Style */}
      <section className="py-24 px-4 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              <Camera className="w-4 h-4" />
              Portfólio de Obras
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Projetos que <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">inspiram</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada obra é única e especial. Veja alguns dos nossos trabalhos realizados.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-[3rem]">
              <div className="flex transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${currentProject * 100}%)` }}>
                {projects.map((project, index) => (
                  <div key={project.id} className="min-w-full px-4">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border-4 border-amber-100">
                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-3xl aspect-square flex items-center justify-center text-8xl">
                          {project.before}
                        </div>
                        <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl aspect-square flex items-center justify-center text-8xl relative overflow-hidden">
                          {project.image}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-xs font-bold text-amber-600">{project.category}</span>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl aspect-square flex items-center justify-center text-8xl">
                          {project.after}
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-stone-50 p-4 rounded-full shadow-xl transition-all hover:scale-110 border-2 border-stone-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-stone-50 p-4 rounded-full shadow-xl transition-all hover:scale-110 border-2 border-stone-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentProject ? 'w-8 bg-amber-600' : 'w-2 bg-stone-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Card Style */}
      <section className="py-24 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-50">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 font-semibold text-sm shadow-sm border border-amber-200">
              <Heart className="w-4 h-4 text-amber-600" />
              <span className="text-amber-900">Depoimentos</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Famílias <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">felizes</span>
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out"
                   style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="bg-white rounded-[3rem] p-12 shadow-2xl border-4 border-amber-100 relative">
                      
                      <div className="absolute -top-6 left-12 bg-gradient-to-r from-amber-500 to-orange-600 p-4 rounded-2xl shadow-xl">
                        <Quote className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex items-center gap-6 mb-8 mt-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-4xl border-4 border-white shadow-lg">
                          {testimonial.image}
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600 flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {testimonial.location}
                          </p>
                          <div className="flex gap-1 mt-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                      </div>

                      <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                        "{testimonial.content}"
                      </p>

                      <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-4 inline-block">
                        <span className="text-sm font-semibold text-amber-900">Projeto: {testimonial.project}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-stone-50 p-4 rounded-full shadow-xl transition-all hover:scale-110 border-2 border-stone-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-stone-50 p-4 rounded-full shadow-xl transition-all hover:scale-110 border-2 border-stone-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'w-8 bg-amber-600' : 'w-2 bg-stone-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Bold & Warm */}
      <section className="py-24 px-4 bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"
          style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
               }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative">
          
          <div className="mb-8">
            <Home className="w-20 h-20 text-amber-400 mx-auto mb-6" />
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Pronto para começar
            <br />
            <span className="text-amber-400">seu projeto?</span>
          </h2>

          <p className="text-2xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Fale conosco agora e receba um orçamento personalizado gratuito. 
            Vamos transformar sua casa juntos!
          </p>

          <button
            onClick={() => openWhatsApp("Olá! Quero solicitar um orçamento personalizado para meu projeto dos sonhos!")}
            className="group bg-white hover:bg-amber-50 text-stone-900 font-bold py-6 px-12 rounded-[2rem] text-2xl inline-flex items-center gap-4 transition-all shadow-2xl hover:scale-105 border-4 border-amber-400"
          >
            <MessageCircle className="w-8 h-8 text-amber-600" />
            Solicitar Orçamento Grátis
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform text-amber-600" />
          </button>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-amber-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              <span className="font-semibold">Visita técnica gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              <span className="font-semibold">Orçamento sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              <span className="font-semibold">Resposta em 24h</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Shield className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">5 anos</div>
              <div className="text-sm text-amber-200">Garantia</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">200+</div>
              <div className="text-sm text-amber-200">Clientes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Award className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-amber-200">Anos mercado</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Star className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-sm text-amber-200">Avaliação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Warm & Professional */}
      <footer className="bg-stone-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">SweetHome</div>
                  <div className="text-sm text-amber-400 font-medium">Construção & Reformas</div>
                </div>
              </div>
              <p className="text-stone-400 leading-relaxed mb-6 max-w-md">
                Transformando sonhos em realidade há mais de 15 anos. Seu lar, do jeitinho que você sonhou.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-stone-300">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3 text-stone-300">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <span>contato@sweethome.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-stone-300">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-amber-400">Serviços</h4>
              <ul className="space-y-3 text-stone-400">
                <li className="hover:text-white cursor-pointer transition flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Construção Residencial
                </li>
                <li className="hover:text-white cursor-pointer transition flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Reformas Completas
                </li>
                <li className="hover:text-white cursor-pointer transition flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Reformas Parciais
                </li>
                <li className="hover:text-white cursor-pointer transition flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Projetos Arquitetônicos
                </li>
                <li className="hover:text-white cursor-pointer transition flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Consultoria
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-amber-400">Empresa</h4>
              <ul className="space-y-3 text-stone-400">
                <li className="hover:text-white cursor-pointer transition flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Sobre Nós
                </li>
                <li className="hover:text-white cursor-pointer transition flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Portfólio
                </li>
                <li className="hover:text-white cursor-pointer transition flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Depoimentos
                </li>
                <li className="hover:text-white cursor-pointer transition flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Blog
                </li>
                <li className="hover:text-white cursor-pointer transition flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Contato
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-stone-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-stone-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-stone-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-stone-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <Youtube className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => openWhatsApp()}
                  className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>

              <div className="text-stone-500 text-sm text-center md:text-right">
                <p>© 2024 SweetHome Construção & Reformas</p>
                <p className="mt-1">Todos os direitos reservados • CNPJ: XX.XXX.XXX/XXXX-XX</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8 pt-8 border-t border-stone-800">
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <div className="flex items-center gap-2 text-stone-500 text-sm">
                <Shield className="w-4 h-4 text-amber-500" />
                <span>CREA Registrado</span>
              </div>
              <div className="h-4 w-px bg-stone-700"></div>
              <div className="flex items-center gap-2 text-stone-500 text-sm">
                <Award className="w-4 h-4 text-amber-500" />
                <span>ISO 9001 Certificado</span>
              </div>
              <div className="h-4 w-px bg-stone-700"></div>
              <div className="flex items-center gap-2 text-stone-500 text-sm">
                <Leaf className="w-4 h-4 text-amber-500" />
                <span>Selo Verde</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button - Extra Prominent */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          onClick={() => openWhatsApp()}
          className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-full shadow-2xl transition-all hover:scale-110 animate-bounce"
        >
          <MessageCircle className="w-8 h-8" />
          
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-stone-900 text-white px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap shadow-xl">
            Solicite seu orçamento! 💬
            <div className="absolute top-full right-6 -mt-1">
              <div className="border-8 border-transparent border-t-stone-900"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Floating CTA Badge */}
      <div className="fixed bottom-24 right-6 z-40">
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-2xl shadow-xl text-sm font-bold animate-pulse">
          🎉 Orçamento Grátis
        </div>
      </div>
    </div>
  );
};

export default SweetHome;