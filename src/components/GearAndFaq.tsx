import React, { useState } from 'react';
import { Backpack, HelpCircle, ChevronDown, Check, ShieldAlert, Sparkles, Plus, Minus } from 'lucide-react';
import { TRIP_DATA } from '../data/tripData';

interface GearAndFaqProps {
  onOpenInquiry?: (subject?: string) => void;
}

export const GearAndFaq: React.FC<GearAndFaqProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleWhatsAppConsultation = () => {
    const text = encodeURIComponent(
      "Hola Birn Experience, tengo una consulta específica sobre la expedición a Marruecos de 13 días (Toubkal y Sahara)."
    );
    window.open(`https://wa.me/${TRIP_DATA.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="preparacion" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#022c3b] border-t border-white/10 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 border border-[#009ea4]/40 bg-[#009ea4]/10 text-[#009ea4] font-title text-[0.7rem] sm:text-xs font-black tracking-[3px] px-5 py-1.5 rounded-full uppercase mb-4">
            ✦ GUÍA TÉCNICA & PREPARACIÓN ✦
          </div>

          <h2 className="font-title text-3xl sm:text-5xl text-white tracking-tight uppercase mb-3">
            <span className="sm:hidden">
              Preparación<br />& Preguntas<br />Frecuentes
            </span>
            <span className="hidden sm:inline">
              Preparación<br />& Preguntas Frecuentes
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#95cecf] font-light max-w-xl mx-auto text-balance">
            Todo lo necesario para llegar en óptimas condiciones físicas, con el equipamiento homologado y con absoluta tranquilidad.
          </p>
        </div>

        {/* Diamond Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d45e33]" />
          <span className="text-[#d45e33] text-[0.6rem]">◆</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d45e33]" />
        </div>

        {/* 3-Phase Continuous Editorial Preparation Guide (NO CARDS) */}
        <div className="mb-24">
          <div className="text-xs uppercase tracking-[0.25em] text-[#d45e33] font-title font-bold text-center mb-8">
            RECOMENDACIONES ESENCIALES PARA TU EXPEDICIÓN
          </div>

          <div className="border-t border-b border-white/15 py-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {TRIP_DATA.recommendations.map((group, idx) => (
              <div
                key={idx}
                className="py-8 md:py-2 px-4 sm:px-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors"
              >
                <div>
                  <div className="font-title text-3xl sm:text-4xl font-black text-[#d45e33] mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-title text-base sm:text-lg text-white font-black uppercase tracking-wider mb-4">
                    {group.title}
                  </h3>
                  <ul className="space-y-3.5">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#f5f0e8]/90 font-normal leading-relaxed">
                        <span className="text-[#009ea4] mt-1 shrink-0 text-xs font-bold">◆</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Streamlined Minimalist FAQs (Continuous Bordered Accordion, NO CARDS) */}
        <div id="preguntas" className="max-w-3xl mx-auto scroll-mt-28 pt-4">
          <div id="faq" className="scroll-mt-28">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 border border-[#d45e33]/40 bg-[#d45e33]/10 text-[#e4a381] font-title text-[0.7rem] sm:text-xs font-bold tracking-[2.5px] px-4 py-1 rounded-full uppercase mb-3">
                ✦ PREGUNTAS FRECUENTES ✦
              </div>
              <h3 className="font-title text-2xl sm:text-3xl text-white font-black uppercase tracking-wider mb-2">
                Dudas Resueltas
              </h3>
              <p className="text-sm sm:text-base text-[#95cecf] font-normal">
                Respuestas directas del equipo de expedición de Birn Experience
              </p>
            </div>
          </div>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {TRIP_DATA.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4 sm:py-5 transition-colors group">
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d45e33] rounded-lg py-1"
                  >
                    <span className={`font-title text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? 'text-[#e4a381]' : 'text-[#f5f0e8] group-hover:text-white'
                    }`}>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isOpen
                        ? 'border-[#d45e33] bg-[#d45e33] text-white rotate-180'
                        : 'border-white/20 bg-white/5 text-[#95cecf] group-hover:border-white/40'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-sm sm:text-base text-[#95cecf] font-normal leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help Note */}
          <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#01141c]/60 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="text-center sm:text-left w-full sm:w-auto">
              <div className="text-base sm:text-lg font-bold text-white mb-1.5 text-center sm:text-left">
                <span className="hidden sm:inline">¿Tienes una consulta específica sobre tu caso?</span>
                <span className="inline sm:hidden">
                  ¿Tienes una consulta específica
                  <br />
                  sobre tu caso?
                </span>
              </div>
              <div className="text-sm sm:text-base text-[#95cecf] font-normal leading-relaxed text-center sm:text-left">
                Contanos cuáles son, para resolverlas de manera personalizada.
              </div>
            </div>
            <button
              onClick={handleWhatsAppConsultation}
              className="btn-editorial text-xs sm:text-sm py-3 px-6 shrink-0 cursor-pointer active:scale-95"
            >
              HACER UNA PREGUNTA
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
