import React, { useState, useEffect } from 'react';
import { TRIP_DATA } from '../data/tripData';
import { ChevronDown } from 'lucide-react';
import { SpecialDayCard } from './SpecialDayCard';

interface ItinerarySectionProps {
  onOpenInquiry?: (subject?: string) => void;
  selectedDayNumber: number | null;
}

const FALLBACK_IMAGE = "/images/itinerario/1.webp";

const ItineraryMediaItem: React.FC<{
  url: string;
  title: string;
  index: number;
  isOpen: boolean;
}> = ({ url, title, index, isOpen }) => {
  const isVideo = url.endsWith('.mp4') || url.endsWith('.webm');
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (isOpen && isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay safe fallback
      });
    }
  }, [isOpen, isVideo]);

  if (isVideo) {
    return (
      <div className="relative overflow-hidden rounded-xl h-full w-full group bg-[#01141c] flex items-center justify-center">
        {isOpen && (
          <video
            ref={videoRef}
            src={url}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          />
        )}
      </div>
    );
  }

  const isTopFocused = url.includes('/1.webp') || url.includes('/5.webp');
  const objectPositionClass = isTopFocused ? 'object-[center_12%]' : 'object-center';

  return (
    <div className="relative overflow-hidden rounded-xl h-full w-full group bg-[#01141c]">
      {isOpen && (
        <img
          src={url}
          alt={`${title} - Foto ${index + 1}`}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
          }}
          className={`w-full h-full object-cover ${objectPositionClass} transition-transform duration-700 group-hover:scale-105`}
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({ selectedDayNumber }) => {
  const [filter, setFilter] = useState<'all' | 'trekking' | 'desierto' | 'cultura'>('all');
  
  // Single open card at a time. Day 1 open initially.
  const [openDay, setOpenDay] = useState<number | null>(1);

  // When selected from external component (like AltitudeProfile or Navbar)
  useEffect(() => {
    if (selectedDayNumber) {
      setFilter('all');
      if (selectedDayNumber !== 5 && selectedDayNumber !== 10) {
        setOpenDay(selectedDayNumber);
      }
      setTimeout(() => {
        const elem = document.getElementById(`day-${selectedDayNumber}`);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [selectedDayNumber]);

  const toggleDay = (dayNum: number) => {
    const isOpening = openDay !== dayNum;
    setOpenDay(isOpening ? dayNum : null);

    if (isOpening) {
      // Smoothly keep the card's header visible at top so content expands downwards
      setTimeout(() => {
        const elem = document.getElementById(`day-${dayNum}`);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    }
  };

  const handleConsultExpertWhatsApp = () => {
    const text = encodeURIComponent(
      "Hola Birn Experience, deseo consultar con un experto sobre el itinerario detallado de la expedición a Marruecos de 13 días."
    );
    window.open(`https://wa.me/${TRIP_DATA.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  const filteredDays = TRIP_DATA.itinerary.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'trekking') return item.stage === 'trekking';
    if (filter === 'desierto') return item.stage === 'desierto';
    if (filter === 'cultura') return item.stage === 'cultura' || item.stage === 'cierre';
    return true;
  });

  return (
    <section id="itinerario" className="py-20 sm:py-28 bg-[#022c3b] relative scroll-mt-20 w-full overflow-hidden">
      {/* Header, divider and filters container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 border border-[#d45e33]/40 bg-[#d45e33]/10 text-[#d45e33] font-title text-[0.7rem] sm:text-xs font-black tracking-[3px] px-5 py-1.5 rounded-full uppercase mb-4">
            ✦ CRONOGRAMA OFICIAL DETALLADO ✦
          </div>

          <h2 className="font-title text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase mb-3">
            <span className="hidden sm:inline">Itinerario Día por Día</span>
            <span className="inline sm:hidden">
              Itinerario
              <br />
              Día por Día
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#95cecf] font-light max-w-xl mx-auto text-balance">
            13 jornadas cronometradas desde Marrakech hasta el macizo del Atlas y las dunas doradas de Erg Chebbi. Haz clic en cada día para desplegar los detalles completos.
          </p>
        </div>

        {/* Diamond Divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d45e33]" />
          <span className="text-[#d45e33] text-[0.6rem]">◆</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d45e33]" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12" role="tablist" aria-label="Filtros del itinerario">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d45e33] ${
              filter === 'all'
                ? 'bg-[#d45e33] text-white shadow-lg shadow-[#d45e33]/30 scale-105'
                : 'bg-white/5 border border-white/10 text-[#95cecf] hover:border-[#d45e33]/50 hover:text-white'
            }`}
          >
            Todos (13 Días)
          </button>
          <button
            onClick={() => setFilter('trekking')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d45e33] ${
              filter === 'trekking'
                ? 'bg-[#d45e33] text-white shadow-lg shadow-[#d45e33]/30 scale-105'
                : 'bg-white/5 border border-white/10 text-[#95cecf] hover:border-[#d45e33]/50 hover:text-white'
            }`}
          >
            Trekking & Cumbre (D2–D6)
          </button>
          <button
            onClick={() => setFilter('desierto')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d45e33] ${
              filter === 'desierto'
                ? 'bg-[#d45e33] text-white shadow-lg shadow-[#d45e33]/30 scale-105'
                : 'bg-white/5 border border-white/10 text-[#95cecf] hover:border-[#d45e33]/50 hover:text-white'
            }`}
          >
            Kasbahs & Sahara (D9–D12)
          </button>
          <button
            onClick={() => setFilter('cultura')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d45e33] ${
              filter === 'cultura'
                ? 'bg-[#d45e33] text-white shadow-lg shadow-[#d45e33]/30 scale-105'
                : 'bg-white/5 border border-white/10 text-[#95cecf] hover:border-[#d45e33]/50 hover:text-white'
            }`}
          >
            Marrakech & Medina
          </button>
        </div>
      </div>

      {/* Itinerary Cards List: SpecialDayCard is full width; normal cards are in a max-w-6xl container */}
      <div className="space-y-4 sm:space-y-6">
        {filteredDays.map((item) => {
          // Day 5 and Day 10 are full-width screen panoramic cards, always open
          if (item.day === 5 || item.day === 10) {
            return (
              <SpecialDayCard
                key={item.day}
                dayNumber={item.day as 5 | 10}
              />
            );
          }

          const isOpen = openDay === item.day;
          const images = item.images;

          return (
            <div key={item.day} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <article
                id={`day-${item.day}`}
                className={`scroll-mt-28 rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#022c3b] border-[#d45e33]/60 shadow-[0_12px_36px_rgba(0,0,0,0.55)] ring-1 ring-[#d45e33]/40'
                    : 'bg-[#011c27]/70 border-white/10 hover:border-white/20 hover:bg-[#022c3b]/80 shadow-md'
                }`}
              >
                {/* Card Header (Always Visible & Interactive Click Target) */}
                <button
                  onClick={() => toggleDay(item.day)}
                  aria-expanded={isOpen}
                  aria-controls={`content-day-${item.day}`}
                  className="w-full text-left p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d45e33]"
                >
                  {/* Left: Day Badge & Date */}
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-5 flex-1 min-w-0">
                    {/* Day Pill */}
                    <div
                      className={`px-3 py-1.5 rounded-xl font-title text-xs font-black uppercase tracking-wider shrink-0 transition-colors shadow-sm ${
                        isOpen
                          ? 'bg-[#d45e33] text-white'
                          : 'bg-white/10 text-[#e4a381] group-hover:bg-[#d45e33]/20'
                      }`}
                    >
                      DÍA {item.day}
                    </div>

                    <div className="min-w-0 flex-1">
                      {/* Date ONLY in the header badge (no location or altitude text) */}
                      <div className="mb-1">
                        <span className="text-xs sm:text-sm font-bold text-[#95cecf] uppercase tracking-wider">
                          {item.date}
                        </span>
                      </div>

                      {/* Title & Description: always preserved in header to prevent height-jump */}
                      <div>
                        <h3 className="font-title text-base sm:text-xl md:text-2xl font-black uppercase tracking-wide text-[#f5f0e8] line-clamp-1 sm:line-clamp-none">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#d45e33] font-bold line-clamp-1 sm:line-clamp-none mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Stage Badge & Animated Chevron */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                    <span
                      className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md ${
                        item.stage === 'trekking'
                          ? 'bg-[#009ea4]/20 text-[#009ea4] border border-[#009ea4]/30'
                          : item.stage === 'desierto'
                          ? 'bg-[#d45e33]/20 text-[#e4a381] border border-[#d45e33]/30'
                          : 'bg-white/10 text-[#95cecf]'
                      }`}
                    >
                      {item.stage}
                    </span>

                    <div
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                        isOpen
                          ? 'bg-[#d45e33]/20 text-[#e4a381] border border-[#d45e33]/40'
                          : 'bg-white/5 text-[#95cecf] hover:text-white'
                      }`}
                    >
                      <span className="text-xs hidden md:inline">
                        {isOpen ? 'Cerrar' : 'Ver detalle'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#d45e33]' : 'text-[#95cecf]'
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Collapsible Content Area (Active when Open) */}
                {isOpen && (
                  <div
                    id={`content-day-${item.day}`}
                    className="border-t border-white/10 p-4 sm:p-6 md:p-8 animate-in fade-in slide-in-from-top-2 duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                      {/* Photo Gallery Half */}
                      <div className="lg:w-1/2 flex flex-col justify-center">
                        <div
                          className={`w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[440px] rounded-xl overflow-hidden grid ${
                            images.length > 1 ? 'grid-cols-2 gap-2.5 sm:gap-3' : 'grid-cols-1'
                          }`}
                        >
                          {images.map((imgUrl, imgIdx) => (
                            <ItineraryMediaItem
                              key={imgIdx}
                              url={imgUrl}
                              title={item.title}
                              index={imgIdx}
                              isOpen={isOpen}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Narrative & Details Half */}
                      <div className="lg:w-1/2 flex flex-col justify-between min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[440px]">
                        <div>
                          {/* Title and Description now reside here when open (no duplicate in header) */}
                          <div className="text-xs sm:text-sm uppercase tracking-widest text-[#d45e33] font-bold mb-1">
                            {item.subtitle}
                          </div>
                          <h4 className="font-title text-xl sm:text-2xl font-black text-white mb-4">
                            {item.title}
                          </h4>

                          {/* Activities Bullet Points */}
                          <ul className="space-y-3 mb-6">
                            {item.activities.map((act, actIdx) => (
                              <li
                                key={actIdx}
                                className="flex items-start gap-3 text-[#f5f0e8]/95 text-sm sm:text-base font-normal leading-relaxed"
                              >
                                <span className="text-[#009ea4] mt-1 shrink-0 text-sm font-bold">◆</span>
                                <span>{act}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Metadata Badges (No "Consultar por este día" button) */}
                        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#95cecf] font-medium">
                          {item.meal && (
                            <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                              <span>🍽️</span>
                              <span>{item.meal}</span>
                            </span>
                          )}
                          {item.accommodation && (
                            <span className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                              <span>📍</span>
                              <span>{item.accommodation}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </div>
          );
        })}
      </div>

      {/* Bottom Itinerary Callout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#011f2a] border border-[#d45e33]/30 text-center shadow-2xl">
          <p className="font-title text-xl sm:text-2xl text-white mb-2 uppercase tracking-wider font-bold">
            ¿Deseas consultar detalles específicos de alguna jornada?
          </p>
          <p className="text-base sm:text-lg text-[#95cecf] mb-6 max-w-2xl mx-auto font-normal leading-relaxed">
            Ricardo Birn y el equipo de Birn Experience coordinan personalmente la preparación, el equipamiento y cada tramo del ascenso.
          </p>
          <button
            onClick={handleConsultExpertWhatsApp}
            className="btn-editorial cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            CONSULTAR CON UN EXPERTO
          </button>
        </div>
      </div>
    </section>
  );
};
