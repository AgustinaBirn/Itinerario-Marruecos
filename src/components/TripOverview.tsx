import React from 'react';
import { Calendar, Mountain, TrendingUp, Tent, DollarSign, ShieldCheck, Users, UtensilsCrossed } from 'lucide-react';

export const TripOverview: React.FC = () => {
  const stats = [
    {
      num: "13",
      unit: "DÍAS",
      label: "Expedición completa",
      sub: "04 al 16 de Junio 2027",
      accent: "#d45e33"
    },
    {
      num: "5",
      unit: "DÍAS",
      label: "Trekking continuo",
      sub: "Macizo del Alto Atlas",
      accent: "#009ea4"
    },
    {
      num: "4.167",
      unit: "M",
      label: "Cumbre Mt. Toubkal",
      sub: "Techo del Norte de África",
      accent: "#d45e33"
    },
    {
      num: "8",
      unit: "DÍAS",
      label: "Desierto + Turismo",
      sub: "Sahara, Kasbahs y Marrakech",
      accent: "#009ea4"
    },
    {
      num: "2.090",
      unit: "USD",
      label: "TARIFA",
      sub: "Por persona",
      accent: "#d45e33"
    },
  ];

  return (
    <section id="cifras" className="bg-[#01141c] py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#d45e33] font-title font-bold mb-2">
            DIMENSIONES DE LA EXPEDICIÓN
          </div>
          <h2 className="font-title text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight">
            <span className="block sm:inline">La Aventura</span>{' '}
            <span className="block sm:inline">en Cifras</span>
          </h2>
        </div>

        {/* Continuous Architectural Metric Ribbon (NO CARDS) with responsive mobile dividers and tablet stabilization */}
        <div className="border-t border-b border-white/15 py-6 sm:py-8 md:py-8 my-4 md:my-6">
          <div className="grid grid-cols-2 md:grid-cols-5">
            {stats.map((stat, idx) => {
              const isLeftColMobile = idx === 0 || idx === 2;
              const isPrice = idx === 4;
              const hasBottomBorderMobile = !isPrice;

              return (
                <div
                  key={idx}
                  className={`py-6 md:py-4 lg:py-5 px-2 sm:px-3 md:px-1.5 lg:px-4 text-center flex flex-col justify-start transition-colors duration-300 hover:bg-white/[0.02] border-white/10 ${
                    isPrice ? 'col-span-2 md:col-span-1 md:border-r-0' : 'md:border-r'
                  } ${
                    isLeftColMobile ? 'border-r' : 'border-r-0 md:border-r'
                  } ${
                    hasBottomBorderMobile ? 'border-b md:border-b-0' : 'border-b-0'
                  }`}
                >
                  {/* Number and Unit: strictly aligned to same height with fixed container height */}
                  <div className="flex items-baseline justify-center gap-1 sm:gap-1.5 h-10 sm:h-12 md:h-11 lg:h-14 mb-2">
                    <span className="font-title text-3xl sm:text-4xl md:text-[2rem] lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-none">
                      {stat.num}
                    </span>
                    <span className="text-[10px] sm:text-xs font-title font-bold tracking-widest text-[#d45e33]">
                      {stat.unit}
                    </span>
                  </div>
                  
                  {/* Uppercase teal label: items-start guarantees first line is at exact same height across all items */}
                  <div className="min-h-[2.2rem] md:min-h-[2.6rem] lg:min-h-[2.8rem] flex items-start justify-center mb-2">
                    <span className="text-sm sm:text-base md:text-sm lg:text-base font-bold text-[#95cecf] uppercase tracking-wider text-center leading-snug">
                      {stat.label}
                    </span>
                  </div>
                  
                  {/* Subtitle text: high-contrast, larger font size for high readability */}
                  <div className="min-h-[2.4rem] md:min-h-[2.8rem] flex items-start justify-center">
                    <span className="text-sm sm:text-base md:text-sm lg:text-[0.95rem] text-[#f5f0e8]/95 font-medium leading-snug text-center">
                      {stat.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Operational Guarantees as a sleek editorial baseline with larger readable typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-center md:text-left">
          <div className="flex items-center gap-4 px-3 py-2 text-sm sm:text-base md:text-lg text-[#f5f0e8]/95">
            <div className="w-10 h-10 rounded-xl bg-[#009ea4]/20 border border-[#009ea4]/40 flex items-center justify-center text-[#009ea4] shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <span><strong className="text-white font-bold">Pensión completa</strong> durante todo el trekking de montaña</span>
          </div>

          <div className="flex items-center gap-4 px-3 py-2 text-sm sm:text-base md:text-lg text-[#f5f0e8]/95">
            <div className="w-10 h-10 rounded-xl bg-[#d45e33]/20 border border-[#d45e33]/40 flex items-center justify-center text-[#d45e33] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <span><strong className="text-white font-bold">Mulas</strong> para porteo integral del equipaje pesado</span>
          </div>

          <div className="flex items-center gap-4 px-3 py-2 text-sm sm:text-base md:text-lg text-[#f5f0e8]/95">
            <div className="w-10 h-10 rounded-xl bg-[#009ea4]/20 border border-[#009ea4]/40 flex items-center justify-center text-[#009ea4] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span><strong className="text-white font-bold">Guías de alta montaña</strong> oficiales</span>
          </div>
        </div>

      </div>
    </section>
  );
};
