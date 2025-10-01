"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Code2, Mail, Github, Linkedin, Instagram } from "lucide-react"

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) setIsMobileMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobileMenuOpen])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Projetos", href: "#projetos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/KauanCerqueira", label: "GitHub" },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/kauan-cerqueira-981a432b6/",
      label: "LinkedIn",
    },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/seuperfil", label: "Instagram" },
  ]

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (!element) return
    const offset = 80
    const bodyTop = document.body.getBoundingClientRect().top
    const elTop = element.getBoundingClientRect().top
    const target = elTop - bodyTop - offset
    window.scrollTo({ top: target, behavior: "smooth" })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-slate-900/80 backdrop-blur-2xl shadow-lg shadow-slate-900/50" : "bg-transparent"
        }`}
      >
        <div
          className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent animate-pulse" />
        </div>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "py-3" : "py-5"}`}
          >
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#inicio")
              }}
              className="flex items-center space-x-3 group relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-2.5 rounded-xl shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow duration-300">
                  <Code2 className={`text-white transition-all duration-500 ${isScrolled ? "w-5 h-5" : "w-6 h-6"}`} />
                </div>
              </div>
              <span
                className={`font-bold text-white transition-all duration-500 ${isScrolled ? "text-xl" : "text-2xl"}`}
              >
                Kauan
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Cerqueira
                </span>
              </span>
            </a>

            {/* Links Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className={`text-slate-300 hover:text-white px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 relative group ${
                    isScrolled ? "text-sm" : "text-base"
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>

            {/* Social + CTA Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white p-2.5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="w-px h-8 bg-slate-700/50" />

              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("#contato")
                }}
                className={`relative inline-flex items-center justify-center space-x-2 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group whitespace-nowrap ${
                  isScrolled ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-sm"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail className="relative z-10 text-white w-4 h-4" />
                <span className="relative z-10 text-white">Contato</span>
              </a>
            </div>

            {/* Botão Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2.5 rounded-xl hover:bg-white/10 transition-all duration-300 relative z-10"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay Mobile */}
      <div
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Menu Mobile */}
      <div
        className={`fixed top-[80px] left-0 right-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-4 bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-slate-900/50 border border-slate-800/50 overflow-hidden">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent">
            <div className="h-full bg-gradient-to-r from-transparent via-pink-500/50 to-transparent animate-pulse" />
          </div>

          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="block text-slate-300 hover:text-white px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-white/10 hover:translate-x-2 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center justify-between">
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </span>
              </a>
            ))}

            <div className="py-2">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
            </div>

            <div className="flex items-center justify-center space-x-4 py-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#contato")
              }}
              className="relative flex items-center justify-center space-x-2 text-white font-bold px-6 py-3.5 rounded-xl text-base transition-all duration-300 overflow-hidden group mt-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Entre em Contato</span>
            </a>
          </div>

          <div className="h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent">
            <div className="h-full bg-gradient-to-r from-transparent via-pink-500/50 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
