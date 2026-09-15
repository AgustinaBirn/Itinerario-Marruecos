import React from 'react';
import { Check, X } from 'lucide-react';
import { TRIP_DATA } from '../data/tripData';

interface InclusionsSectionProps {
  onOpenInquiry?: (subject?: string) => void;
}

export const InclusionsSection: React.FC<InclusionsSectionProps> = () => {
  return (
    <section id="inclusiones" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#01141c] relative scroll-mt-24">
      <div id="servicios" className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 border border-[#009ea4]/40 bg-[#009ea4]/10 text-[#009ea4] font-title text-[0.7rem] sm:text-xs font-black tracking-[3px] px-5 py-1.5 rounded-full uppercase mb-4">
            ✦ TRANSPARENCIA TOTAL ✦
          </div>

          <h2 className="font-title text-3xl sm:text-5xl text-white tracking-tight uppercase">
            <span className="hidden sm:inline">¿Qué Incluye tu Viaje?</span>
            <span className="inline sm:hidden">
              ¿Qué Incluye
              <br />
              tu Viaje?
            </span>
          </h2>
        </div>

        {/* Diamond Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d45e33]" />
          <span className="text-[#d45e33] text-[0.6rem]">◆</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d45e33]" />
        </div>

        {/* Continuous Split Ledger / Dossier (NO FLOATING CARDS) */}
        <div className="rounded-3xl border border-white/15 bg-[#02222d]/60 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Left Column: Servicios Incluidos */}
            <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#009ea4]/20 text-[#009ea4] flex items-center justify-center font-black border border-[#009ea4]/40">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-title text-xl sm:text-2xl text-white font-black uppercase tracking-wider">
                      Servicios Incluidos
                    </h3>
                  </div>
                </div>

                <ul className="space-y-4">
                  {TRIP_DATA.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-[#f5f0e8]/95 font-normal leading-relaxed">
                      <div className="w-6 h-6 rounded-full bg-[#009ea4]/20 text-[#009ea4] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: No Incluye */}
            <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-between bg-black/10">
              <div>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#d45e33]/20 text-[#d45e33] flex items-center justify-center font-black border border-[#d45e33]/40">
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-title text-xl sm:text-2xl text-white font-black uppercase tracking-wider">
                      No Incluye
                    </h3>
                  </div>
                </div>

                <ul className="space-y-4">
                  {TRIP_DATA.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-[#f5f0e8]/95 font-normal leading-relaxed">
                      <div className="w-6 h-6 rounded-full bg-[#d45e33]/20 text-[#d45e33] flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Integrated Bottom Advisory note */}
              <div className="mt-8 pt-6 border-t border-white/10 text-sm sm:text-base text-[#95cecf] leading-relaxed">
                <strong className="text-white font-bold">Cobertura médica:</strong> Es requisito indispensable contar con seguro de viaje con cobertura expresa de senderismo y trekking de alta montaña (hasta 4.200 m). Birn Experience te indicará las opciones recomendadas.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
