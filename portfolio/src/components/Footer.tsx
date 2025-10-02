import React from 'react';
import { Code2, Mail, Phone, MapPin, Github, Linkedin, ArrowUp, Youtube, Instagram } from 'lucide-react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Sobre', href: '#sobre' }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/KauanCerqueira',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/kauan-cerqueira-981a432b6/',
      label: 'LinkedIn'
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: 'https://youtube.com/@seucanal',
      label: 'YouTube'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com/seuperfil',
      label: 'Instagram'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'kauan.cerqueira0198@gmail.com',
      href: 'mailto:kauan.cerqueira0198@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Telefone',
      value: '(19) 99381-7292',
      href: 'tel:+5519993817292'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Localização',
      value: 'Hortolândia, SP',
      href: null
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold">
                Kauan
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Cerqueira
                </span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Desenvolvedor Fullstack especializado em criar soluções digitais inovadoras.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 bg-slate-800/50 backdrop-blur-sm rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-purple-500/50"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact) => (
                <li key={contact.label}>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="flex items-center space-x-3 text-slate-400 hover:text-white transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 text-purple-400 group-hover:text-pink-400 transition-colors">
                        {contact.icon}
                      </div>
                      <span className="text-sm break-all">{contact.value}</span>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3 text-slate-400">
                      <div className="flex-shrink-0 text-purple-400">
                        {contact.icon}
                      </div>
                      <span className="text-sm">{contact.value}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-slate-500 text-sm text-center md:text-left">
            <p>© {currentYear} Kauan Cerqueira. Todos os direitos reservados.</p>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Feito com</span>
            <span className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 font-medium">React</span>
            <span className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 font-medium">TypeScript</span>
            <span className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-400 font-medium">Tailwind</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 z-40 group"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 20s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;