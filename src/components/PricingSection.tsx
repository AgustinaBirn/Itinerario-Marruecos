import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { TRIP_DATA } from '../data/tripData';

interface PricingSectionProps {
  onOpenInquiry?: (subject?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hola Birn Experience, deseo reservar mi lugar para el viaje a Marruecos de 13 días (Toubkal 4.167 m y Sahara, 04 al 16 de Junio de 2027 - Precio: 2.090 USD)."
    );
    window.open(`https://wa.me/${TRIP_DATA.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="precio" className="py-14 sm:py-16 px-4 bg-[#022c3b] relative border-t border-[#d45e33]/20 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Top Badge */}
        <div className="font-title text-xs sm:text-sm text-[#d45e33] tracking-[3px] mb-3 uppercase">
          ✦ MONTE TOUBKAL & EL SAHARA · 13 DÍAS ✦
        </div>

        {/* Section Heading */}
        <h2 className="font-title text-2xl md:text-4xl text-white tracking-[3px] uppercase mb-2 font-black">
          INVERSIÓN DE EXPEDICIÓN
        </h2>

        {/* Diamond Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d45e33]" />
          <span className="text-[#d45e33] text-[0.6rem]">◆</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d45e33]" />
        </div>

        {/* Giant Number Hero (Machu Picchu & Nepal style) */}
        <div className="mb-2">
          <div className="font-title text-6xl sm:text-8xl md:text-9xl font-black text-[#d45e33] leading-none drop-shadow-[0_0_40px_rgba(212,94,51,0.35)]">
            USD 2.090
          </div>
          <p className="text-sm sm:text-base text-[#95cecf] font-medium tracking-wider mt-3 uppercase text-balance">
            <span className="hidden sm:inline">Tarifa oficial por persona · Cupos reducidos · 04 al 16 de Junio de 2027</span>
            <span className="inline sm:hidden">
              Tarifa oficial por persona ·
              <br />
              Cupos reducidos · 04 al 16 de Junio de 2027
            </span>
          </p>
        </div>

        {/* Action Button: single high-impact CTA going directly to WhatsApp (no redundant adjacent CTA) */}
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={handleWhatsApp}
            className="btn-editorial w-full sm:w-auto shadow-md shadow-[#d45e33]/20 cursor-pointer text-xs sm:text-sm py-3.5 px-8 flex items-center justify-center gap-2 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>RESERVA TU LUGAR</span>
          </button>
        </div>

        {/* Direct Contact text */}
        <div className="mt-8 text-xs sm:text-sm md:text-base text-[#95cecf]">
          Atención personalizada por WhatsApp: <strong className="text-white font-bold">+54 9 351 6816262</strong> · Correo: <strong className="text-white font-bold">ricardobirn@hotmail.com</strong>
        </div>

      </div>
    </section>
  );
};
