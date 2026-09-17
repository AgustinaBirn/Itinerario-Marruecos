import React from 'react';
import { Compass, MessageCircle, Mail, Globe, Instagram, ArrowUp, ShieldCheck, Phone } from 'lucide-react';
import { TRIP_DATA } from '../data/tripData';

interface FooterProps {
  onOpenInquiry?: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hola Birn Experience! Deseo consultar información sobre el viaje a Marruecos de 13 días (Toubkal y Sahara, 04 al 16 de Junio de 2027)."
    );
    window.open(`https://wa.me/${TRIP_DATA.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <footer id="contacto" className="bg-[#01161e] text-[#a0b3ba] border-t border-white/10 relative">
      
      {/* Call to action pre-footer banner */}
      <div className="border-b border-white/10 py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#022c3b]/60 to-transparent">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="micro-label mb-2 block">
            04 AL 16 DE JUNIO 2027 · GRUPOS REDUCIDOS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-black uppercase tracking-tight mb-4">
            <span className="hidden sm:inline">¿Listo para ascender el Toubkal y cruzar el Sahara?</span>
            <span className="inline sm:hidden">
              ¿Listo para
              <br />
              ascender el Toubkal
              <br />
              y cruzar el Sahara?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#c8d6dc] max-w-2xl mx-auto mb-8 leading-relaxed">
            <span className="hidden sm:inline">Escríbenos para recibir asesoramiento del equipo y condiciones de reserva.</span>
            <span className="inline sm:hidden">
              Escríbenos para recibir asesoramiento del equipo
              <br />
              y condiciones de reserva.
            </span>
          </p>

          {/* Single active, non-redundant high-impact CTA directly to WhatsApp */}
          <div className="flex items-center justify-center w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="btn-editorial w-full sm:w-auto px-8 py-4 text-xs tracking-wider cursor-pointer shadow-md shadow-[#d45e33]/15 flex items-center justify-center gap-2.5 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Solicitar Información y Disponibilidad</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/logo-s-fondo-2a.webp"
                alt="Birn Experience"
                className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 object-contain drop-shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-display text-base sm:text-lg tracking-wider text-white font-extrabold uppercase block leading-tight">
                  BIRN EXPERIENCE
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#95cecf]">
                  Expediciones de Montaña & Aventura
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#9fb1b8] leading-relaxed max-w-sm">
              Especialistas en expediciones y viajes que integran montañismo de altura, naturaleza, rigor logístico y patrimonio cultural. Experiencias diseñadas con los más altos estándares de seguridad.
            </p>

            {/* Social & Web links from birnexperience.com */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#95cecf]">
              <a
                href={TRIP_DATA.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-[#009ea4]" />
                <span>birnexperience.com</span>
              </a>
              <a
                href={TRIP_DATA.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#d45e33]" />
                <span>@birnexperience</span>
              </a>
              <a
                href={TRIP_DATA.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <span className="w-4 h-4 flex items-center justify-center font-bold text-[#95cecf] text-xs">f</span>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
              Navegación del Programa
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#9fb1b8]">
              <li>
                <a href="#el-viaje" className="hover:text-white transition-colors">
                  Visión Integral: 13 Días en Marruecos
                </a>
              </li>
              <li>
                <a href="#itinerario" className="hover:text-white transition-colors">
                  Itinerario Diario (04/06 – 16/06)
                </a>
              </li>
              <li>
                <a href="#perfil-altura" className="hover:text-white transition-colors">
                  Perfil de Altitud (4.167 m)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Qué Incluye y Qué No Incluye
                </a>
              </li>
              <li>
                <a href="#precio" className="hover:text-white transition-colors text-[#d45e33] font-semibold">
                  Tarifa Oficial: 2.090 USD
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Checklist de Equipo y Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
              Canales de Contacto Directo
            </h4>
            <p className="text-xs sm:text-sm text-[#9fb1b8] leading-relaxed">
              Asesoramiento personalizado en español para resolver cualquier duda sobre el viaje.
            </p>

            <div className="space-y-3 pt-1 text-xs sm:text-sm">
              <a
                href={`https://wa.me/${TRIP_DATA.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#25D366] hover:underline font-medium"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {TRIP_DATA.contact.whatsappDisplay}</span>
              </a>

              <a
                href={`mailto:${TRIP_DATA.contact.email}`}
                className="flex items-center gap-2.5 text-[#c8d6dc] hover:text-white transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-[#d45e33] shrink-0" />
                <span>{TRIP_DATA.contact.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#8299a3]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#d45e33]" />
            <span>© 2027 Birn Experience · Expedición Marruecos Toubkal & Sahara.</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#a0b3ba] hover:text-white transition-colors cursor-pointer"
          >
            <span>Subir al inicio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
