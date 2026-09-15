/**
 * Catálogo Central de Imágenes del Proyecto
 * 
 * Puedes colocar tus fotos en la carpeta `public/images/` y actualizar
 * las rutas aquí, o indicármelas en el chat para asignarlas automáticamente.
 */

export const EXPEDITION_IMAGES = {
  // Imagen principal de la portada (Hero)
  hero: {
    background: '/images/hero/hero.webp',
    fallback: '/images/hero/hero.webp'
  },

  // Fotos destacadas de Días Clave
  featuredDays: {
    day5Summit: {
      custom: '/images/itinerario/5.webp',
      fallback: '/images/itinerario/5.webp'
    },
    day10Desert: {
      custom: '/images/itinerario/10.webp',
      fallback: '/images/itinerario/10.webp'
    }
  },

  // Rutas para cada día del itinerario (Día 1 al 13)
  itinerary: {
    day1: ['/images/itinerario/1.webp', '/images/itinerario/1-2.webp'],
    day2: ['/images/itinerario/2-2.mp4'],
    day3: ['/images/itinerario/3.webp'],
    day4: ['/images/itinerario/4-.mp4'],
    day5: ['/images/itinerario/5.webp'],
    day6: ['/images/itinerario/6.webp'],
    day7: ['/images/itinerario/7.webp'],
    day8: ['/images/itinerario/8-.webp', '/images/itinerario/8-2.webp'],
    day9: ['/images/itinerario/9.webp', '/images/itinerario/9-1.webp'],
    day10: ['/images/itinerario/10.webp'],
    day11: ['/images/itinerario/11.webp'],
    day12: ['/images/itinerario/12.webp'],
    day13: ['/images/itinerario/13.webp']
  },

  // Fotos para el mapa interactivo y kasbahs
  mapStops: {
    marrakech: '/images/mapa/marrakech.jpg',
    armed: '/images/mapa/armed.jpg',
    refugio: '/images/mapa/refugio-toubkal.jpg',
    cumbreToubkal: '/images/mapa/cumbre-toubkal.jpg',
    tichka: '/images/mapa/tizi-ntichka.jpg',
    aitBenHaddou: '/images/mapa/ait-ben-haddou.jpg',
    ouarzazate: '/images/mapa/ouarzazate.jpg',
    todra: '/images/mapa/gargantas-todra.jpg',
    ergChebbi: '/images/mapa/dunas-erg-chebbi.jpg',
    khamlia: '/images/mapa/khamlia.jpg'
  }
};
