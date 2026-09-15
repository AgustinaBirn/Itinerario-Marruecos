export interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  subtitle: string;
  stage: 'trekking' | 'cultura' | 'desierto' | 'cierre';
  stageLabel: string;
  maxAltitude: string;
  location: string;
  meal: string;
  accommodation: string;
  images: string[];
  activities: string[];
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  iconName: 'calendar' | 'mountain' | 'flag' | 'tent' | 'dollar';
}

export const TRIP_DATA = {
  title: "TREKKING MONTE TOUBKAL Y EL SAHARA",
  subtitle: "Ascenso al techo del Norte de África (4.167 m) y travesía por el desierto de Erg Chebbi",
  dates: "DEL 04 AL 16 DE JUNIO · 13 DÍAS",
  priceAmount: "USD 2.090",
  priceRaw: "2.090",
  currency: "USD",
  priceNote: "Tarifa oficial por persona · Cupos reducidos",
  brand: "BIRN EXPERIENCE",
  tagline: "Expediciones de Montaña, Naturaleza y Cultura",

  tags: [
    "Alta Montaña (4.167 m)",
    "Pensión Completa Trekking",
    "Cultura Bereber",
    "Dunas Erg Chebbi",
    "Ruta de Kasbahs"
  ],

  contact: {
    whatsappNumber: "5493516816262",
    whatsappDisplay: "+54 9 351 6816262",
    email: "ricardobirn@hotmail.com",
    secondaryEmail: "agusbirn@gmail.com",
    website: "https://birnexperience.com/",
    facebook: "https://www.facebook.com/birnexperience/",
    instagram: "https://www.instagram.com/birnexperience",
    youtube: "https://www.youtube.com/@ricardobirn7cumbres",
  },

  stats: [
    { value: "13", label: "Días de Travesía", sublabel: "04 al 16 de Junio", iconName: "calendar" },
    { value: "5", label: "Días de Trekking", sublabel: "Armed y Macizo Toubkal", iconName: "mountain" },
    { value: "4.167", label: "M Cumbre Toubkal", sublabel: "Techo del Norte de África", iconName: "flag" },
    { value: "8", label: "Días Desierto y Turismo", sublabel: "Sahara y Marrakech", iconName: "tent" },
    { value: "2.090", label: "USD por Persona", sublabel: "Pensión completa en montaña", iconName: "dollar" },
  ] as StatItem[],

  altitudeProfile: [
    { day: 1, location: "Marrakech", altitude: 466, note: "Recepción y traslado al hotel", keyPoint: false },
    { day: 2, location: "Armed (Atlas)", altitude: 1980, note: "Llegada al macizo del Toubkal", keyPoint: false },
    { day: 3, location: "Valle de Imlil", altitude: 2100, note: "Trekking de aclimatación y cultura bereber", keyPoint: false },
    { day: 4, location: "Refugio Toubkal", altitude: 3207, note: "Ascenso constante (+1.227 m desnivel)", keyPoint: true },
    { day: 5, location: "Cumbre Monte Toubkal", altitude: 4167, note: "Techo del Norte de África y 2ª noche en refugio", keyPoint: true },
    { day: 6, location: "Armed", altitude: 1980, note: "Descenso de 5 horas y descanso", keyPoint: false },
    { day: 7, location: "Marrakech (Hotel Ali)", altitude: 466, note: "Retorno y tarde libre", keyPoint: false },
    { day: 8, location: "Marrakech Cultural", altitude: 466, note: "Medina, Koutoubia, zocos y Jemaa El-Fna", keyPoint: false },
    { day: 9, location: "Paso Tizi N’Tichka / Dades", altitude: 2260, note: "Cruce del Atlas, Telouet y Ait Ben Haddou", keyPoint: true },
    { day: 10, location: "Dunas Erg Chebbi (Merzouga)", altitude: 750, note: "Gargantas del Todra, camellos y jaima en dunas", keyPoint: true },
    { day: 11, location: "Desierto de Merzouga", altitude: 700, note: "Pistas París-Dakar, nómadas y Khamlia", keyPoint: false },
    { day: 12, location: "Ouarzazate → Marrakech", altitude: 1160, note: "Amanecer en dunas, 4x4 Tafilalet y retorno", keyPoint: false },
    { day: 13, location: "Marrakech Aeropuerto", altitude: 466, note: "Traslado al aeropuerto y fin de servicios", keyPoint: false },
  ],

  itinerary: [
    {
      day: 1,
      date: "04 DE JUNIO",
      title: "Llegada a Marrakech",
      subtitle: "Recepción y primera noche en la Ciudad Roja",
      stage: "cultura",
      stageLabel: "Llegada",
      maxAltitude: "466 m",
      location: "Marrakech",
      accommodation: "Hotel en Marrakech",
      images: [
        "/images/itinerario/1.webp",
        "/images/itinerario/1-2.webp"
      ],
      activities: [
        "Recepción personalizada en el aeropuerto de Marrakech",
        "Traslado en minibús privado hacia el hotel seleccionado",
        "Instalación y descanso de bienvenida",
      ]
    },
    {
      day: 2,
      date: "05 DE JUNIO",
      title: "Marrakech → Armed",
      subtitle: "Aacceso al Macizo del Toubkal",
      stage: "trekking",
      stageLabel: "Hacia el Atlas",
      maxAltitude: "1.980 m",
      location: "Armed (Alto Atlas)",
      meal: "Desayuno, Almuerzo y Cena",
      accommodation: "Cabaña tradicional en Armed",
      images: [
        "/images/itinerario/2-2.mp4"
      ],
      activities: [
        "Traslado panorámico en minibús cruzando Tahanaoute y Asni",
        "Llegada matutina al pintoresco pueblo bereber de Armed (1.980m)",
        "Instalación en la cabaña típica de montaña y almuerzo tradicional",
        "Caminata por el pueblo y aclimatación inicial con cena caliente"
      ]
    },
    {
      day: 3,
      date: "06 DE JUNIO",
      title: "Trekking de aclimatación",
      subtitle: "Valle de Imlil y cultura bereber",
      stage: "trekking",
      stageLabel: "Aclimatación",
      maxAltitude: "2.100 m",
      location: "Valle de Imlil",
      meal: "Pensión completa (picnic al mediodía)",
      accommodation: "Cabaña tradicional en Armed",
      images: [
        "/images/itinerario/3.webp"
      ],
      activities: [
        "Marcha de aclimatación suave por los senderos del valle",
        "Picnic reparador bajo los nogales junto al arroyo de montaña",
        "Visita a familia bereber: horneado de pan en barro y vestimentas tradicionales",
        "Regreso pasando por el pueblo de Imlil hacia el refugio en Armed"
      ]
    },
    {
      day: 4,
      date: "07 DE JUNIO",
      title: "Armed → Refugio Toubkal",
      subtitle: "Ascenso continuo hasta los 3.207m",
      stage: "trekking",
      stageLabel: "Ascenso Refugio",
      maxAltitude: "3.207 m",
      location: "Refugio Toubkal",
      meal: "Pensión completa en refugio",
      accommodation: "Refugio Toubkal (3.207 m)",
      images: [
        "/images/itinerario/4-.mp4"
      ],
      activities: [
        "Inicio del trekking de alta montaña con porteo de equipo en mulas",
        "Ascenso sostenido de 4 a 5 horas remontando el valle",
        "Llegada al Refugio Toubkal a 3.207 metros de altitud",
        "Almuerzo caliente, hidratación, cena y descanso previo a la cumbre"
      ]
    },
    {
      day: 5,
      date: "08 DE JUNIO",
      title: "Día de Cumbre: Monte Toubkal (4.167 m)",
      subtitle: "El techo del Norte de África",
      stage: "trekking",
      stageLabel: "Cumbre Toubkal 🎯",
      maxAltitude: "4.167 m",
      location: "Cumbre Toubkal (4.167 m)",
      meal: "Pensión completa",
      accommodation: "Refugio Toubkal (2ª noche)",
      images: [
        "/images/itinerario/5.webp"
      ],
      activities: [
        "Salida de madrugada hacia la cumbre del Monte Toubkal (4.167 m)",
        "Conquista del punto más alto de todo el Norte de África",
        "Travesía hacia Toubkal West y retorno a pasar la 2ª noche en el refugio"
      ]
    },
    {
      day: 6,
      date: "09 DE JUNIO",
      title: "Descenso a Armed",
      subtitle: "5 horas de marcha en descenso y descanso",
      stage: "trekking",
      stageLabel: "Descenso",
      maxAltitude: "1.980 m",
      location: "Armed",
      meal: "Pensión completa",
      accommodation: "Alojamiento típico en Armed",
      images: [
        "/images/itinerario/6.webp"
      ],
      activities: [
        "Jornada de 5 horas de caminata en descenso continuo por el cañón",
        "Llegada a Armed para un reparador almuerzo bereber",
        "Tarde de descanso reconfortante tras el esfuerzo de cumbre",
        "Cena caliente y noche en el pueblo de montaña"
      ]
    },
    {
      day: 7,
      date: "10 DE JUNIO",
      title: "Armed → Retorno a Marrakech",
      subtitle: "Traslado en minibús y tarde libre en Hotel Ali",
      stage: "cultura",
      stageLabel: "Regreso a Ciudad",
      maxAltitude: "466 m",
      location: "Marrakech",
      meal: "Desayuno incluido",
      accommodation: "Hotel Ali (junto a la Medina)",
      images: [
        "/images/itinerario/7.webp"
      ],
      activities: [
        "Traslado en vehículo minibús desde el Atlas de regreso a Marrakech",
        "Instalación en el emblemático Hotel Ali junto al casco histórico",
        "Tarde libre para pasear a ritmo personal y descansar del trekking",
        "Pernocte en la ciudad"
      ]
    },
    {
      day: 8,
      date: "11 DE JUNIO",
      title: "Marrakech Cultural y Jemaa El-Fna",
      subtitle: "Visita guiada por la Medina, Zocos y Palacios",
      stage: "cultura",
      stageLabel: "Patrimonio UNESCO",
      maxAltitude: "466 m",
      location: "Marrakech",
      meal: "Desayuno incluido",
      accommodation: "Hotel en Marrakech",
      images: [
        "/images/itinerario/8-.webp",
        "/images/itinerario/8-2.webp"
      ],
      activities: [
        "Recorrido con guía local por la antigua Medina y Mezquita Koutoubia",
        "Visita al histórico Palacio Bahía y mercado de las especias",
        "Caminata por el mítico zoco artesanal y sus callejuelas laberínticas",
        "Noche mágica en la Plaza Jemaa El-Fna: música, aromas y folklore popular"
      ]
    },
    {
      day: 9,
      date: "12 DE JUNIO",
      title: "Tizi N’Tichka · Telouet · Ait Ben Haddou",
      subtitle: "Cruce del Alto Atlas hacia la gran ruta de las Kasbahs",
      stage: "desierto",
      stageLabel: "Ruta de Kasbahs",
      maxAltitude: "2.260 m (Puerto)",
      location: "Valle de Dades",
      meal: "Desayuno y Cena",
      accommodation: "Hotel / Kasbah en Valle de Dades",
      images: [
        "/images/itinerario/9.webp",
        "/images/itinerario/9-1.webp"
      ],
      activities: [
        "Paso por el imponente puerto de montaña Tizi N’Tichka (2.260 m)",
        "Desvío escénico para visitar la histórica Kasbah del Pacha Glaoui en Telouet",
        "Exploración de la mítica ciudad fortificada de Ait Ben Haddou (Patrimonio UNESCO)",
        "Paso por Ouarzazate (estudios de cine) y noche con cena en Valle de Dades"
      ]
    },
    {
      day: 10,
      date: "13 DE JUNIO",
      title: "Todra · Dunas de Erg Chebbi (Sahara)",
      subtitle: "Caravana en camello y noche en Jaimas",
      stage: "desierto",
      stageLabel: "Noche en Jaimas ⛺",
      maxAltitude: "750 m",
      location: "Dunas de Erg Chebbi (Merzouga)",
      meal: "Desayuno y Cena sahariana",
      accommodation: "Campamento bereber en jaimas en las dunas",
      images: [
        "/images/itinerario/10.webp"
      ],
      activities: [
        "Ruta por el Valle de las Rosas y las imponentes Gargantas del Todra",
        "Llegada al atardecer a las majestuosas dunas doradas de Erg Chebbi",
        "Paseo en camello (un camello por persona) rumbo al campamento en dunas",
        "Noche en jaimas tradicionales"
      ]
    },
    {
      day: 11,
      date: "14 DE JUNIO",
      title: "Pistas París-Dakar · Nómadas · Khamlia",
      subtitle: "Recorrido por el desierto",
      stage: "desierto",
      stageLabel: "Aventura 4x4",
      maxAltitude: "700 m",
      location: "Merzouga",
      meal: "Desayuno y Cena",
      accommodation: "Hotel en Merzouga",
      images: [
        "/images/itinerario/11.webp"
      ],
      activities: [
        "Excursión por los trazados del histórico Rally París-Dakar",
        "Encuentro y té tradicional con una familia nómada del desierto",
        "Visita al poblado de Khamlia, donde asentaron los esclavos que traían del Sudán",
        "Tarde libre en hotel de Merzouga para descanso y cena"
      ]
    },
    {
      day: 12,
      date: "15 DE JUNIO",
      title: "Amanecer en Dunas → Marrakech",
      subtitle: "Travesía 4x4, visita cine local y cultura bereber",
      stage: "desierto",
      stageLabel: "Retorno Atlas",
      maxAltitude: "2.260 m",
      location: "Marrakech",
      meal: "Desayuno incluido",
      accommodation: "Hotel en Marrakech",
      images: [
        "/images/itinerario/12.webp"
      ],
      activities: [
        "Amanecer dorado sobre el horizonte de las dunas de Merzouga",
        "Recorrido en 4x4 por el desierto hasta Rissani",
        "Visita a pueblos bereberes",
        "Visita de otro estudio de cine local en Ouarzazate",
        "Llegada a Marrakech, traslado e instalación en el hotel"
      ]
    },
    {
      day: 13,
      date: "16 DE JUNIO",
      title: "Marrakech · Traslado al Aeropuerto",
      subtitle: "Despedida de la expedición",
      stage: "cierre",
      stageLabel: "Fin de Servicios",
      maxAltitude: "466 m",
      location: "Aeropuerto Menara",
      meal: "Desayuno incluido",
      accommodation: "Fin del programa oficial",
      images: [
        "/images/itinerario/13.webp"
      ],
      activities: [
        "Desayuno en el hotel en Marrakech",
        "Coordinación y traslado privado hacia el Aeropuerto de Marrakech-Menara",
        "Asistencia y despedida por el equipo de Birn Experience",
        "Fin de una expedición inolvidable entre la cumbre del Atlas y el Sahara"
      ]
    }
  ] as ItineraryDay[],

  inclusions: [
    "Ascenso guiado al Monte Toubkal (4.167 m) con guías locales",
    "Pensión completa durante los días de trekking (alojamiento, desayuno, almuerzo y cena)",
    "Porteo de equipaje personal con animales (mulas) y arrieros locales durante el trekking",
    "Conductor / guía acompañante de habla hispana durante todo el circuito",
    "Todos los traslados en cómodo minibús privado para todo el programa",
    "Excursión en vehículo 4x4 por las pistas del desierto y dunas de Merzouga",
    "Alojamiento en hotel o riad todas las noches con desayuno (y cenas en etapa turística)",
    "Noche en campamento bereber en jaimas en Erg Chebbi con cena y velada folclórica",
    "Paseo en camello individual al atardecer sobre las dunas de Erg Chebbi",
    "Visita guiada oficial con guía local en Marrakech (Medina, zocos y monumentos)",
    "Asesoramiento integral previo de Ricardo Birn (equipo, entrenamiento y logística)"
  ],

  exclusions: [
    "Vuelos internacionales hacia y desde Marrakech",
    "Comidas en Marrakech (almuerzos y cenas libres para degustar la gastronomía local)",
    "Almuerzos al mediodía durante la ruta turística hacia el desierto",
    "Bebidas en las comidas, propinas a guías locales, conductores y arrieros",
    "Seguro médico de montaña obligatorio y gastos de evacuación o rescate",
    "Gastos personales y compras en los zocos o mercados"
  ],

  recommendations: [
    {
      title: "Equipo de Trekking y Cumbre Toubkal",
      items: [
        "Botas de trekking caña media/alta con buena suela, domadas previamente",
        "Sistema de vestimenta en capas: primera capa térmica, polar/softshell y chaqueta impermeable",
        "Chaqueta de abrigo (pluma o sintética) para la madrugada hacia la cumbre y el refugio",
        "Saco de dormir para refugio (rango confort 0°C a -5°C)",
        "Linterna frontal con pilas de repuesto (indispensable para la salida a cumbre)",
        "Bastones de trekking telescópicos y gafas de sol alta montaña (Cat. 3 o 4)"
      ]
    },
    {
      title: "Desierto de Erg Chebbi y Ciudades",
      items: [
        "Ropa liviana, fresca y transpirable de algodón o lino para el desierto y Marrakech",
        "Calzado liviano cómodo para caminatas urbanas y sandalias para descanso",
        "Pañuelo sahariano (tagelmust/cheche) para protegerse de la arena y el sol",
        "Protector solar FPS 50+ y bálsamo labial",
        "Mochila de día (25-30 L) para llevar agua y objetos personales durante las excursiones"
      ]
    },
    {
      title: "Documentación y Salud",
      items: [
        "Pasaporte con vigencia mínima de 6 meses al momento del ingreso a Marruecos",
        "Seguro médico de viaje con cobertura específica de trekking en alta montaña",
        "Botiquín personal básico con medicación habitual, apósitos y sales de rehidratación",
        "Efectivo en euros o dólares para cambio a Dirhams (MAD) para compras y propinas"
      ]
    }
  ],

  faqs: [
    {
      q: "¿Por qué el foco principal es el Monte Toubkal dentro de los 13 días?",
      a: "Nos especializamos en trekking de alta montaña, por eso el ascenso al Monte Toubkal (4.167m) es el objetivo físico central. Los primeros 6 días están diagramados para una aclimatación progresiva atravesando arroyos de montaña y familias bereberes hasta el refugio a 3.207 m, luego el ataque a cumbre más una segunda noche en refugio para un descenso seguro."
    },
    {
      q: "¿Qué condición física se necesita para subir a los 4.167 m?",
      a: "En junio no se requiere escalada técnica ni crampones, pero sí resistencia aeróbica para una jornada de 6 a 8 horas con terreno pedregoso. Recomendamos haber realizado caminatas de montaña previas."
    },
    {
      q: "¿Quién transporta el equipaje pesado en la montaña?",
      a: "Mulas con arrieros bereberes transportan tu bolso o petate pesado (ropa, saco de dormir). Tú solo caminas con tu mochila ligera de día (25 L) con agua, abrigo y snacks."
    },
    {
      q: "¿Cómo es la noche en el campamento del Sahara?",
      a: "Accedemos en camellos individuales al atardecer sobre las grandes dunas de Erg Chebbi. Dormimos en jaimas tradicionales bereberes y compartimos una cena sahariana caliente con tambores y cantos bajo las estrellas."
    },
    {
      q: "¿Cómo aseguro mi lugar en el grupo?",
      a: "La tarifa oficial es de USD 2.090 por persona con cupos reducidos. Puedes contactarnos por WhatsApp (+54 9 351 6816262) para reservar tu cupo y recibir la ficha técnica formal."
    }
  ]
};
