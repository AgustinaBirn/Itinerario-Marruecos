import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { TRIP_DATA } from '../data/tripData';

interface FloatingActionsProps {
  onOpenInquiry?: (subject?: string) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hola Birn Experience! Quiero consultar disponibilidad y ficha técnica para el viaje a Marruecos de 13 días (Toubkal y Sahara, 04 al 16 de Junio de 2027)."
    );
    window.open(`https://wa.me/${TRIP_DATA.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#033a4d] text-white border border-white/15 shadow-xl flex items-center justify-center hover:bg-[#04485f] transition-all cursor-pointer hover:scale-105 active:scale-95"
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating WhatsApp Action */}
      <button
        onClick={handleWhatsApp}
        className="group flex items-center gap-3 px-4 py-3.5 rounded-full bg-[#25D366] text-white font-extrabold text-xs shadow-2xl hover:bg-[#1ebe5d] transition-all cursor-pointer hover:scale-105 active:scale-95 border border-white/20"
        title="Consultar por WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline tracking-wider uppercase font-bold">
          Consultar por WhatsApp
        </span>
      </button>
    </div>
  );
};
