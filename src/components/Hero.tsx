import React from 'react';
import { Calendar, MessageCircle, ArrowDown, Compass, Mountain, CheckCircle } from 'lucide-react';
import { TRIP_DATA } from '../data/tripData';

interface HeroProps {
  onOpenInquiry?: (subject?: string) => void;
  onScrollToItinerary: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToItinerary }) => {
  const handleReserveWhatsApp = () => {
    const text = encodeURIComponent(
      "Hola Birn Experience, deseo reservar mi lugar para la expedición a Marruecos de 13 días (Toubkal y Sahara, 04 al 16 de Junio)."
    );
    window.open(`https://wa.me/${TRIP_DATA.contact.whatsappNumber}?text=${text}`, '_blank');
  };
  return (
    <section className="w-full relative min-h-[auto] md:min-h-0 lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#01141c] pt-24 sm:pt-28 md:pt-28 lg:pt-36 pb-10 sm:pb-12 md:pb-14 lg:pb-24 px-4 sm:px-6 lg:px-8">
      
      {/* Full-width panoramic background image with subtle calibrated visibility */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat opacity-78 scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('/images/hero/hero.webp')`,
          backgroundPosition: 'center 20%'
        }}
      />

      {/* Atmospheric depth masks calibrated for superior text contrast while preserving landscape visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01141c]/62 via-[#01141c]/35 to-[#01141c]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#01141c]/52 via-transparent to-[#01141c]/52" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,20,28,0.2)_0%,rgba(1,20,28,0.68)_100%)]" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Eyebrow: ALTA MONTAÑA Y DESIERTO with underline of 2 lines and center diamond like Perfil de Altitud */}
        <div className="flex flex-col items-center justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2.5 text-[#e4a381] font-title text-xs sm:text-sm font-bold tracking-[3px] uppercase">
            <Compass className="w-4 h-4 text-[#d45e33]" />
            <span>ALTA MONTAÑA Y DESIERTO:</span>
          </div>
          <div className="flex items-center justify-center gap-3 mt-2.5">
            <div className="h-px w-20 sm:w-28 bg-gradient-to-r from-transparent to-[#d45e33]" />
            <span className="text-[#d45e33] text-[0.6rem]">◆</span>
            <div className="h-px w-20 sm:w-28 bg-gradient-to-l from-transparent to-[#d45e33]" />
          </div>
        </div>

        {/* Big Editorial Title with fluid responsive scaling */}
        <h1 className="font-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-5 tracking-tight">
          MONTE TOUBKAL
          <br />
          <span className="text-[#d45e33] drop-shadow-[0_0_35px_rgba(212,94,51,0.4)]">+ EL SAHARA</span>
        </h1>

        {/* Responsive Subtitle: 2 lines in desktop, 3 lines in tablet, 4 lines in mobile with enhanced readability */}
        <p className="font-body text-base sm:text-lg md:text-xl text-[#95cecf] font-light tracking-wide mb-6 sm:mb-8 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed">
          {/* Desktop: 2 lines */}
          <span className="hidden lg:inline">
            Ascenso al techo del Norte de África (4.167m) y travesía por el desierto de Erg Chebbi
            <br />
            en un viaje de 13 días que combina alta montaña, cultura bereber y aventura.
          </span>
          {/* Tablet: 3 lines */}
          <span className="hidden md:inline lg:hidden">
            Ascenso al techo del Norte de África (4.167m) y travesía
            <br />
            por el desierto de Erg Chebbi en un viaje de 13 días
            <br />
            que combina alta montaña, cultura bereber y aventura.
          </span>
          {/* Mobile: 4 lines */}
          <span className="inline md:hidden">
            Ascenso al techo del Norte de África (4.167m)
            <br />
            y travesía por el desierto de Erg Chebbi
            <br />
            en un viaje de 13 días que combina
            <br />
            alta montaña, cultura bereber y aventura.
          </span>
        </p>

        {/* Action Buttons: exactly 2 CTA buttons side by side */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full">
          <button
            onClick={handleReserveWhatsApp}
            className="btn-editorial text-xs sm:text-sm py-3.5 px-7 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Calendar className="w-4 h-4" />
            <span>RESERVAR LUGAR</span>
          </button>

          <button
            onClick={onScrollToItinerary}
            className="text-xs sm:text-sm uppercase tracking-widest text-[#95cecf] hover:text-white px-5 py-3.5 flex items-center justify-center gap-2 transition-all cursor-pointer rounded-lg hover:bg-white/5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#95cecf]"
          >
            <span>Ver Itinerario</span>
            <ArrowDown className="w-4 h-4 text-[#d45e33] animate-bounce" />
          </button>
        </div>

        {/* Date and Price Banner */}
        <div className="w-full border-t border-[#d45e33]/30 pt-5 sm:pt-6 mt-1 sm:mt-2">
          <div className="font-title text-sm sm:text-base md:text-lg text-[#e4a381] tracking-[2px] uppercase flex items-center justify-center gap-2 sm:gap-4 font-bold text-center">
            <span>✦ DEL 04 AL 16 DE JUNIO</span>
            <span className="text-[#009ea4]">·</span>
            <span className="text-[#d45e33] font-black">USD 2.090 POR PERSONA ✦</span>
          </div>
        </div>

      </div>
    </section>
  );
};
