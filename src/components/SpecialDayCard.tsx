import React from 'react';
import { TRIP_DATA } from '../data/tripData';

interface SpecialDayCardProps {
  dayNumber: 5 | 10;
}

export const SpecialDayCard: React.FC<SpecialDayCardProps> = ({ dayNumber }) => {
  const item = TRIP_DATA.itinerary.find((d) => d.day === dayNumber);
  if (!item) return null;

  const isDay5 = dayNumber === 5;

  // Background image per special day
  const bgImage = isDay5
    ? "/images/itinerario/5.webp"
    : "/images/itinerario/10.webp";

  return (
    <article
      id={`day-${item.day}`}
      className="scroll-mt-24 relative w-full overflow-hidden border-y border-white/15 shadow-2xl my-8 group bg-[#01141c]"
    >
      {/* Background panoramic image with high visibility and adjusted top positioning */}
      <div
        className="absolute inset-0 bg-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundPosition: isDay5 ? 'center 12%' : 'center 38%'
        }}
      />
      {/* Dynamic directional atmospheric gradient allowing photos to shine through with high visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#01141c]/85 via-[#01141c]/55 to-[#01141c]/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#01141c]/45 via-transparent to-[#01141c]/65" />

      {/* Content Container - Info on Left, Centered Highlight on Right for BOTH Day 5 and Day 10 */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-10 sm:py-12 md:py-14">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-14">
          
          {/* Left Column: Info, date, subtitle, title, activities & badges */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            <div>
              {/* Top metadata row: Day pill and Date ONLY */}
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1.5 rounded-xl bg-[#d45e33] text-white font-title text-xs font-black uppercase tracking-wider shadow-md">
                  DÍA {item.day}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#95cecf] uppercase tracking-wider">
                  {item.date}
                </span>
              </div>

              {/* Subtitle in orange and uppercase */}
              <div className="text-xs sm:text-sm uppercase tracking-widest text-[#d45e33] font-bold mb-1.5">
                {item.subtitle}
              </div>

              {/* Title */}
              <h3 className="font-title text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                {item.title}
              </h3>

              {/* Activities bullets */}
              <ul className="space-y-2 mb-5 max-w-xl">
                {item.activities.map((act, actIdx) => (
                  <li
                    key={actIdx}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-[#f5f0e8]/95 font-normal leading-relaxed"
                  >
                    <span className="text-[#009ea4] mt-1 shrink-0 text-xs font-bold">◆</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom badges (No "Consultar por este día" button) */}
            <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#95cecf] font-medium">
              {item.meal && (
                <span className="bg-black/30 backdrop-blur-sm border border-white/15 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                  <span>🍽️</span>
                  <span>{item.meal}</span>
                </span>
              )}
              {item.accommodation && (
                <span className="bg-black/30 backdrop-blur-sm border border-white/15 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                  <span>📍</span>
                  <span>{item.accommodation}</span>
                </span>
              )}
            </div>
          </div>

          {/* Vertical divider on desktop */}
          <div className="hidden lg:block w-px bg-white/15 self-stretch" />

          {/* Right Column: Highlight text with Centered Alignment & No Box */}
          <div className="lg:w-[46%] xl:w-[44%] flex flex-col justify-center items-center text-center">
            {isDay5 ? (
              <div className="space-y-3 flex flex-col items-center text-center max-w-xl">
                <div className="text-[#e4a381] text-xs sm:text-sm font-title font-black uppercase tracking-[3px] text-center">
                  ✦ EL OBJETIVO DEL VIAJE ✦
                </div>
                <p className="font-accent italic text-lg sm:text-xl md:text-2xl text-[#f5f0e8] leading-relaxed drop-shadow-md text-center">
                  <span className="hidden md:inline">
                    "La cumbre más alta del mundo árabe.
                    <br />
                    Desde su cumbre se divisa el horizonte infinito
                    <br />
                    donde la roca del Atlas se funde
                    <br />
                    con las arenas doradas del Sahara."
                  </span>
                  <span className="inline md:hidden">
                    "La cumbre más alta del mundo árabe. Desde su cumbre se divisa el horizonte infinito donde la roca del Atlas se funde con las arenas doradas del Sahara."
                  </span>
                </p>
              </div>
            ) : (
              <div className="space-y-3 flex flex-col items-center text-center max-w-xl">
                <div className="text-[#95cecf] text-xs sm:text-sm font-title font-black uppercase tracking-[3px] text-center">
                  ✦ NOCHE BAJO LAS ESTRELLAS DEL SAHARA ✦
                </div>
                <p className="font-accent italic text-lg sm:text-xl md:text-2xl text-[#f5f0e8] leading-relaxed drop-shadow-md text-center">
                  <span className="hidden md:inline">
                    La cultura bereber nos recibe con una cena típica,
                    <br />
                    un fogón y su música en vivo con tambores ancestrales
                    <br />
                    en un campamento de jaimas en el corazón del desierto.
                  </span>
                  <span className="inline md:hidden">
                    La cultura bereber nos recibe con una cena típica, un fogón y su música en vivo con tambores ancestrales en un campamento de jaimas en el corazón del desierto.
                  </span>
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </article>
  );
};
