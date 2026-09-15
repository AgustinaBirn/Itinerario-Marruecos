import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Mail, Send, CheckCircle2, Compass } from 'lucide-react';
import { TRIP_DATA } from '../data/tripData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialSubject,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(initialSubject || 'Consulta sobre Marruecos 13 días');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hola Birn Experience, soy ${name || 'un viajero'}. Asunto: ${subject}. ${message ? `Mensaje: ${message}` : 'Quisiera recibir disponibilidad y ficha técnica para la expedición de 13 días a Marruecos.'}`
    );
    window.open(`https://wa.me/${TRIP_DATA.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl bg-[#011f2a] text-[#f5f0e8] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#009ea4]/20 border border-[#009ea4]/40 text-[#009ea4] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl text-white font-extrabold uppercase">
              ¡Consulta Recibida!
            </h3>
            <p className="text-xs sm:text-sm text-[#a0b3ba] max-w-sm mx-auto leading-relaxed">
              Muchas gracias {name}. Un miembro del equipo de Birn Experience se comunicará contigo para brindarte todos los detalles del viaje.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppDirect}
                className="btn-editorial py-3 text-xs justify-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Continuar conversación por WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-[#a0b3ba] hover:text-white pt-2 cursor-pointer"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#d45e33] text-white flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <span className="micro-label text-[10px]">
                EXPEDICIÓN MARRUECOS 13 DÍAS
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl text-white font-black uppercase tracking-tight mb-1">
              Consultar Disponibilidad
            </h3>
            <p className="text-xs text-[#95cecf] mb-6">
              Déjanos tus datos o escríbenos directamente para asesorarte de inmediato.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a0b3ba] mb-1.5">
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-hidden focus:border-[#d45e33]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a0b3ba] mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-hidden focus:border-[#d45e33]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a0b3ba] mb-1.5">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+54 9 ..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-hidden focus:border-[#d45e33]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a0b3ba] mb-1.5">
                  Motivo de la consulta
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-hidden focus:border-[#d45e33]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a0b3ba] mb-1.5">
                  Preguntas o Comentarios
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="¿Tienes alguna duda sobre entrenamiento, equipo o vuelos?"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-hidden focus:border-[#d45e33]"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="btn-editorial w-full py-3.5 text-xs justify-center cursor-pointer shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Escribir directamente por WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
