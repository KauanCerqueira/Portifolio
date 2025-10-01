import React from 'react';
import { 
  Heart, 
  Clock, 
  Stethoscope, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Star,
  Pill,
  Syringe,
  Scissors,
  ShoppingBag,
  Shield,
  Award,
  CheckCircle2,
  Sparkles,
  Calendar,
  Users
} from 'lucide-react';

const PetCare = () => {
  const whatsappNumber = "5511999999999";
  const phoneNumber = "(11) 3456-7890";
  const address = "Av. dos Pets, 123 - Centro, São Paulo - SP";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar uma consulta para meu pet.`, '_blank');
  };

  return (
    <div className="bg-amber-50" style={{ fontFamily: 'Verdana, sans-serif' }}>
      {/* Hero Section - Modern and Clean */}
      <section className="relative bg-gradient-to-br from-purple-600 via-fuchsia-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Heart className="w-5 h-5 text-orange-300" />
                <span className="font-bold text-sm">Clínica Veterinária Premium</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Cuidado e amor em cada consulta
              </h1>

              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Atendimento veterinário de excelência para seu melhor amigo. Equipe especializada, tecnologia de ponta e muito carinho.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={openWhatsApp}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center gap-3 transition-all shadow-xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  Agendar no WhatsApp
                </button>
                <a
                  href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                  className="bg-white text-purple-600 hover:bg-purple-50 font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center gap-3 transition-all"
                >
                  <Phone className="w-6 h-6" />
                  {phoneNumber}
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-300" />
                  <span>Emergência 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-300" />
                  <span>{address}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-9xl mb-4">🐾</div>
                  <h3 className="text-3xl font-bold mb-2">Primeira Consulta</h3>
                  <div className="text-5xl font-black text-orange-300 mb-2">20% OFF</div>
                  <p className="text-purple-100">Para novos clientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-purple-600 mb-1">5.000+</div>
              <div className="text-sm text-gray-600 font-bold uppercase">Pets Atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-black text-fuchsia-600 mb-1">24h</div>
              <div className="text-sm text-gray-600 font-bold uppercase">Atendimento</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-600 mb-1">15+</div>
              <div className="text-sm text-gray-600 font-bold uppercase">Anos Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-600 mb-1">98%</div>
              <div className="text-sm text-gray-600 font-bold uppercase">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Por que a PetCare?
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Emergência 24h</h3>
              <p className="text-gray-600 leading-relaxed">
                Plantão veterinário todos os dias do ano, inclusive feriados. Seu pet sempre protegido.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Exames Modernos</h3>
              <p className="text-gray-600 leading-relaxed">
                Ultrassom, raio-x digital e laboratório próprio com resultados no mesmo dia.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Planos de Saúde</h3>
              <p className="text-gray-600 leading-relaxed">
                Mensalidades acessíveis com descontos especiais em consultas e procedimentos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Pill className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Delivery de Remédios</h3>
              <p className="text-gray-600 leading-relaxed">
                Medicamentos entregues na sua casa com agilidade e segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Cuidado completo para seu pet</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-8 hover:shadow-2xl transition-all cursor-pointer">
              <Stethoscope className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultas</h3>
              <p className="text-gray-600">Atendimento clínico completo com veterinários especializados</p>
            </div>

            <div className="group bg-gradient-to-br from-fuchsia-50 to-orange-50 rounded-2xl p-8 hover:shadow-2xl transition-all cursor-pointer">
              <Scissors className="w-12 h-12 text-fuchsia-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cirurgias</h3>
              <p className="text-gray-600">Centro cirúrgico moderno e equipado para total segurança</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 hover:shadow-2xl transition-all cursor-pointer">
              <Syringe className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Exames</h3>
              <p className="text-gray-600">Laboratório próprio com resultados rápidos e precisos</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-8 hover:shadow-2xl transition-all cursor-pointer">
              <ShoppingBag className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Pet Shop</h3>
              <p className="text-gray-600">Produtos premium e acessórios para o bem-estar do seu pet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              Tutores Satisfeitos
            </h2>
            <div className="w-24 h-2 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-300 fill-orange-300" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                "A melhor clínica que já conheci! Salvaram a vida da Luna em uma emergência. Profissionais incríveis!"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-4xl">🐕</div>
                <div>
                  <div className="font-bold">Mariana Costa</div>
                  <div className="text-sm text-purple-200">Luna - Golden Retriever</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-300 fill-orange-300" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                "Atendimento excepcional! A Mimi sempre teve medo de veterinário, mas aqui ela é tratada com muito carinho."
              </p>
              <div className="flex items-center gap-3">
                <div className="text-4xl">🐱</div>
                <div>
                  <div className="font-bold">Pedro Oliveira</div>
                  <div className="text-sm text-purple-200">Mimi - Persa</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-300 fill-orange-300" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                "Fiz a castração do Thor e foi tudo perfeito. Pós-operatório tranquilo e acompanhamento impecável!"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-4xl">🐕‍🦺</div>
                <div>
                  <div className="font-bold">Ana Beatriz</div>
                  <div className="text-sm text-purple-200">Thor - Labrador</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-6">🐾💖</div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Agende agora mesmo!
          </h2>
          <p className="text-2xl text-gray-600 mb-8">
            Seu pet merece o melhor atendimento veterinário
          </p>

          <button
            onClick={openWhatsApp}
            className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-bold py-6 px-12 rounded-xl text-2xl inline-flex items-center gap-4 transition-all transform hover:scale-105 shadow-2xl mb-8"
          >
            <MessageCircle className="w-8 h-8" />
            Agendar no WhatsApp
          </button>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900 text-sm">Atendimento Rápido</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900 text-sm">Equipe Especializada</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900 text-sm">Tecnologia Moderna</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900 text-sm">Preços Justos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div>
            <MapPin className="w-8 h-8 mx-auto mb-2 text-orange-400" />
            <div className="font-bold mb-1">Endereço</div>
            <div className="text-sm text-gray-400">{address}</div>
          </div>
          <div>
            <Phone className="w-8 h-8 mx-auto mb-2 text-orange-400" />
            <div className="font-bold mb-1">Telefone</div>
            <div className="text-sm text-gray-400">{phoneNumber}</div>
          </div>
          <div>
            <Clock className="w-8 h-8 mx-auto mb-2 text-orange-400" />
            <div className="font-bold mb-1">Horário</div>
            <div className="text-sm text-gray-400">Emergência 24h todos os dias</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-6 h-6 text-orange-500" />
          <span className="text-2xl font-black">PetCare</span>
        </div>
        <p className="text-gray-400 text-sm">© 2024 PetCare - Clínica Veterinária Premium</p>
      </footer>

      {/* Floating WhatsApp */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white p-5 rounded-full shadow-2xl transition-all z-50"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
};

export default PetCare;