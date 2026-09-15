import React, { useState, useEffect, useRef } from 'react';
import { Mountain, Menu, X, MessageCircle, ChevronRight } from 'lucide-react';
import { TRIP_DATA } from '../data/tripData';

interface NavbarProps {
  onOpenInquiry?: (subject?: string) => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close hamburger menu when user taps/clicks outside on tablet and mobile
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleOutsideInteraction = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        mobileToggleRef.current &&
        !mobileToggleRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideInteraction);
    document.addEventListener('touchstart', handleOutsideInteraction);
    return () => {
      document.removeEventListener('mousedown', handleOutsideInteraction);
      document.removeEventListener('touchstart', handleOutsideInteraction);
    };
  }, [mobileMenuOpen]);

  const buildWhatsAppLink = (message: string) => {
    return `https://wa.me/${TRIP_DATA.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const navLinks = [
    { label: 'Cumbre Toubkal', href: '#day-5' },
    { label: 'Itinerario', href: '#itinerario' },
    { label: 'Qué Incluye', href: '#inclusiones' },
    { label: 'Tarifa', href: '#precio' },
    { label: 'Preguntas Frecuentes', href: '#preguntas' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId) || document.querySelector(href);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
      if (window.history?.pushState) {
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#01141c]/75 backdrop-blur-xl border-b border-[#d45e33]/20 py-3 shadow-lg shadow-black/30'
            : 'bg-gradient-to-b from-[#01141c]/70 via-[#022c3b]/30 to-transparent backdrop-blur-[2px] py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            
            {/* Brand Logo */}
            <a
              id="nav-brand-logo"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (window.history?.pushState) {
                  window.history.pushState(null, '', ' ');
                }
              }}
              className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d45e33] rounded-lg p-1"
            >
              <img
                src="/images/logo/logo-s-fondo-2a.webp"
                alt="Birn Experience Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold font-title tracking-[0.16em] text-[#f5f0e8] leading-none uppercase">
                  BIRN
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.3em] text-[#d45e33] uppercase leading-tight mt-1">
                  EXPERIENCE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`nav-link-${link.href.replace('#', '')}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group relative text-xs xl:text-sm font-medium text-[#95cecf] hover:text-white px-3.5 py-2 rounded-xl border border-transparent hover:border-white/15 hover:bg-white/[0.08] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d45e33]"
                >
                  <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-[1.04]">
                    {link.label}
                  </span>
                </a>
              ))}
            </nav>

            {/* Desktop Right Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                id="nav-cta-whatsapp"
                href={buildWhatsAppLink("Quiero consultar disponibilidad y detalles de la expedición a Marruecos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-[#d45e33] hover:bg-[#b34d2a] active:bg-[#913d1e] text-white shadow-sm shadow-[#d45e33]/20 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
                <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-[1.03]">
                  Consultar Viaje
                </span>
              </a>
            </div>

            {/* Mobile & Tablet Right Controls: On Tablet CTA is positioned directly next to Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2.5 sm:gap-3">
              <a
                id="nav-cta-tablet"
                href={buildWhatsAppLink("Quiero consultar disponibilidad y detalles de la expedición a Marruecos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex md:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold bg-[#d45e33] hover:bg-[#b34d2a] active:bg-[#913d1e] text-white shadow-sm shadow-[#d45e33]/20 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
                <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-[1.03]">
                  Consultar Viaje
                </span>
              </a>

              <button
                ref={mobileToggleRef}
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menú de navegación"
                className="p-2 rounded-lg bg-white/[0.05] text-[#f5f0e8] hover:text-white hover:bg-white/[0.1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d45e33]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#d45e33]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile & Tablet Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu-dropdown"
            className="lg:hidden border-b border-white/10 px-4 pt-4 pb-6 mt-2 space-y-3 bg-[#01141c]/90 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 relative z-50 shadow-xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`mobile-nav-link-${link.href.replace('#', '')}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group flex items-center justify-between px-3.5 py-3 rounded-xl border border-transparent hover:border-white/15 text-sm font-medium text-[#95cecf] hover:text-white hover:bg-white/[0.08] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-[1.03]">
                    {link.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#d45e33] transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                id="mobile-nav-cta-whatsapp"
                href={buildWhatsAppLink("Hola, estoy viendo la web del viaje a Marruecos desde el móvil.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-[#d45e33] active:bg-[#913d1e] text-white shadow-md shadow-[#d45e33]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
              </a>
              <div className="text-center text-[11px] text-[#95cecf]/80">
                Asesoría personalizada con Birn Experience (+54 9 351 6816262)
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay to close hamburger menu when clicking outside on mobile or tablet */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-backdrop"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
