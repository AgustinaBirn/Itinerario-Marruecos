import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import {
  ArrowDown,
  Plus,
  Minus,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Layers,
  MapPin,
  Compass
} from 'lucide-react';

export interface ExpeditionStop {
  id: string;
  dayNumber: number;
  dayLabel: string;
  name: string;
  lat: number;
  lng: number;
  altitude: string;
  stage: string;
  highlight: string;
  imageUrl: string;
  category: 'trekking' | 'desierto' | 'cultura';
}

export const EXPEDITION_STOPS: ExpeditionStop[] = [
  {
    id: 'marrakech',
    dayNumber: 1,
    dayLabel: 'Día 1',
    name: 'Marrakech (Llegada)',
    lat: 31.6295,
    lng: -7.9811,
    altitude: '466 m',
    stage: 'Base Cultural & Medina',
    highlight: 'Punto de recepción y retorno. Histórica Medina imperial, zocos de artesanos y la emblemática Plaza Jemaa El-Fna.',
    imageUrl: '/images/itinerario/1.webp',
    category: 'cultura'
  },
  {
    id: 'imlil',
    dayNumber: 2,
    dayLabel: 'Día 2',
    name: 'Imlil & Armed',
    lat: 31.1360,
    lng: -7.9190,
    altitude: '1.900 m',
    stage: 'Valle del Alto Atlas',
    highlight: 'Pueblo bereber tradicional rodeado de nogales y bancales de montaña. Encuentro con arrieros y mulas de porteo.',
    imageUrl: '/images/itinerario/2-2.mp4',
    category: 'trekking'
  },
  {
    id: 'chamarouch',
    dayNumber: 3,
    dayLabel: 'Día 3',
    name: 'Sidi Chamarouch',
    lat: 31.0967,
    lng: -7.9224,
    altitude: '2.310 m',
    stage: 'Garganta & Santuario',
    highlight: 'Mítico santuario de la roca blanca en el cañón del Atlas. Punto neurálgico de aclimatación previo a la alta cota.',
    imageUrl: '/images/itinerario/3.webp',
    category: 'trekking'
  },
  {
    id: 'refugio-toubkal',
    dayNumber: 4,
    dayLabel: 'Días 3 y 4',
    name: 'Refugio Toubkal',
    lat: 31.0601,
    lng: -7.9200,
    altitude: '3.207 m',
    stage: 'Campo Base de Altura',
    highlight: 'Refugio alpino al pie del gran circo glaciar. Base para la aclimatación y el asalto nocturno al techo de África.',
    imageUrl: '/images/itinerario/4-.mp4',
    category: 'trekking'
  },
  {
    id: 'cumbre-toubkal',
    dayNumber: 5,
    dayLabel: 'Día 5 · Cumbre Techo del Norte de África',
    name: 'Cumbre Monte Toubkal',
    lat: 31.0594,
    lng: -7.9158,
    altitude: '4.167 m',
    stage: 'Techo del Norte de África',
    highlight: 'El hito supremo de la expedición. Cima de 4.167 m con vistas 360° panorámicas hacia el Anti-Atlas y el preludio del desierto.',
    imageUrl: '/images/itinerario/5.webp',
    category: 'trekking'
  },
  {
    id: 'marrakech-zoco',
    dayNumber: 8,
    dayLabel: 'Día 8 · Marrakech Cultural',
    name: 'Zocos & Plaza Jemaa El-Fna',
    lat: 31.6258,
    lng: -7.9891,
    altitude: '466 m',
    stage: 'Patrimonio UNESCO & Cultura',
    highlight: 'Recorrido cultural con guía por la antigua Medina, Koutoubia, Palacio Bahía, zocos de artesanos y noche mágica en Jemaa El-Fna.',
    imageUrl: '/images/itinerario/8-.webp',
    category: 'cultura'
  },
  {
    id: 'tichka',
    dayNumber: 9,
    dayLabel: 'Día 9',
    name: 'Paso Tizi N’Tichka',
    lat: 31.2869,
    lng: -7.3814,
    altitude: '2.260 m',
    stage: 'Cruce Cordillerano',
    highlight: 'El paso de alta montaña asfaltado más imponente del norte de África, uniendo las cumbres del Atlas con el sur marroquí.',
    imageUrl: '/images/itinerario/9.webp',
    category: 'cultura'
  },
  {
    id: 'ait-ben-haddou',
    dayNumber: 9,
    dayLabel: 'Día 9',
    name: 'Kasbah Aït Ben Haddou',
    lat: 31.0470,
    lng: -7.1294,
    altitude: '1.160 m',
    stage: 'Patrimonio Mundial UNESCO',
    highlight: 'Icono de la arquitectura de barro del sur, centenaria ruta de caravanas comerciales y mítico set cinematográfico.',
    imageUrl: '/images/itinerario/9-1.webp',
    category: 'cultura'
  },
  {
    id: 'todra',
    dayNumber: 10,
    dayLabel: 'Día 10',
    name: 'Gargantas del Todra & Dades',
    lat: 31.5510,
    lng: -5.5960,
    altitude: '1.400 m',
    stage: 'Cañones Rojos & Palmerales',
    highlight: 'Desfiladero natural con paredes verticales de roca rojiza de más de 300 metros de altura talladas por el río.',
    imageUrl: '/images/itinerario/10.webp',
    category: 'desierto'
  },
  {
    id: 'erg-chebbi',
    dayNumber: 11,
    dayLabel: 'Día 11',
    name: 'Dunas de Erg Chebbi (Sahara)',
    lat: 31.1340,
    lng: -3.9920,
    altitude: '700 m',
    stage: 'Gran Desierto del Sahara',
    highlight: 'Inmenso mar de dunas doradas de hasta 150 metros. Travesía en camello al atardecer, campamento en jaimas tradicionales y pistas 4x4.',
    imageUrl: '/images/itinerario/11.webp',
    category: 'desierto'
  },
  {
    id: 'ouarzazate',
    dayNumber: 12,
    dayLabel: 'Día 12',
    name: 'Ouarzazate',
    lat: 30.9189,
    lng: -6.8934,
    altitude: '1.151 m',
    stage: 'Puerta del Desierto',
    highlight: 'Exploración de la Kasbah histórica de Taourirt y escala cultural antes de emprender el cruce final hacia Marrakech.',
    imageUrl: '/images/itinerario/12.webp',
    category: 'cultura'
  }
];

// High Atlas Mountain Trekking Coordinates Track
const TREKKING_ROUTE_COORDS: [number, number][] = [
  [31.6295, -7.9811], // Marrakech
  [31.2460, -7.9850], // Asni
  [31.1360, -7.9190], // Imlil
  [31.1270, -7.9210], // Armed
  [31.0967, -7.9224], // Sidi Chamarouch
  [31.0601, -7.9200], // Refugio Nelter
  [31.0594, -7.9158]  // Cumbre Toubkal (4.167 m)
];

// Desert Overland 4x4 Circuit Track
const DESERT_ROUTE_COORDS: [number, number][] = [
  [31.6295, -7.9811], // Marrakech
  [31.3650, -7.4200], // Taddert
  [31.2869, -7.3814], // Tizi N'Tichka
  [31.1300, -7.1800], // Valle Ounila
  [31.0470, -7.1294], // Aït Ben Haddou
  [30.9189, -6.8934], // Ouarzazate
  [31.0600, -6.5500], // Skoura
  [31.2400, -6.1300], // El Kelaa M'Gouna
  [31.3700, -5.9900], // Valle del Dades
  [31.5510, -5.5960], // Gargantas del Todra (Tinghir)
  [31.5300, -5.0300], // Tinjdad
  [31.4300, -4.2300], // Erfoud
  [31.2800, -4.2700], // Rissani
  [31.1340, -3.9920], // Merzouga / Dunas Erg Chebbi
  [31.0250, -4.0100], // Khamlia
  [31.1200, -5.1700], // Alnif
  [30.8700, -5.8600], // N'Kob
  [30.6900, -6.4400], // Agdz
  [30.9189, -6.8934], // Ouarzazate
  [31.2869, -7.3814], // Tizi N'Tichka
  [31.6295, -7.9811]  // Marrakech
];

// Tile Layer Definitions - Free & Open (No API Key Required)
const MAP_LAYERS = {
  satellite: {
    name: 'Satélite Real',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN'
  },
  topo: {
    name: 'Topográfico',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap'
  }
};

interface ExpeditionMapProps {
  onSelectDay: (dayNumber: number) => void;
}

export const ExpeditionMap: React.FC<ExpeditionMapProps> = ({ onSelectDay }) => {
  const [selectedStop, setSelectedStop] = useState<ExpeditionStop>(EXPEDITION_STOPS[4]); // Default: Cumbre Toubkal (Day 5)
  const [activeFilter, setActiveFilter] = useState<'all' | 'trekking' | 'desierto'>('all');
  const [currentLayer, setCurrentLayer] = useState<'topo' | 'satellite'>('satellite'); // Default: Satélite Real
  const [showLayerMenu, setShowLayerMenu] = useState<boolean>(false);

  // References for Leaflet map and markers
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  // Drag-to-scroll state for pills
  const pillsContainerRef = useRef<HTMLDivElement | null>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // Helper to create HTML icon for Leaflet marker
  const createMarkerIcon = (stop: ExpeditionStop, isSelected: boolean) => {
    const isSummit = stop.id === 'cumbre-toubkal';
    const isDesert = stop.category === 'desierto';

    const baseColor = isSelected
      ? '#ff4a11'
      : isDesert
      ? '#009ea4'
      : isSummit
      ? '#d45e33'
      : '#022c3b';

    const size = isSelected ? 36 : 26;
    const ringPulseHtml = isSelected
      ? `<div class="absolute -inset-2.5 rounded-full border-2 border-white animate-ping opacity-75"></div>
         <div class="absolute -inset-1 rounded-full border-2 border-[#ff7849] opacity-90"></div>`
      : '';

    const labelHtml = `
      <div class="absolute left-1/2 -translate-x-1/2 ${
        stop.lat < 31.06 ? 'bottom-full mb-2' : 'top-full mt-1.5'
      } pointer-events-none whitespace-nowrap">
        <div class="px-2 py-0.5 rounded shadow-lg backdrop-blur-sm ${
          isSelected
            ? 'bg-[#d45e33] text-white border border-white/60 font-black text-xs'
            : 'bg-[#01141c]/90 text-[#f5f0e8] border border-white/20 font-bold text-[11px]'
        }">
          <span>${stop.name}</span>
          <span class="ml-1 opacity-80 font-mono text-[10px]">${stop.altitude}</span>
        </div>
      </div>
    `;

    return L.divIcon({
      className: 'custom-expedition-marker',
      html: `
        <div class="relative flex items-center justify-center cursor-pointer select-none" style="width: ${size}px; height: ${size}px;">
          ${ringPulseHtml}
          <div class="w-full h-full rounded-full flex items-center justify-center text-white shadow-xl transition-transform duration-200 ${
            isSelected ? 'scale-110' : 'hover:scale-105'
          }" style="background-color: ${baseColor}; border: ${
            isSelected ? '3px solid #ffffff' : '2px solid rgba(255,255,255,0.85)'
          };">
            <span style="font-size: ${isSelected ? '13px' : '10px'}; font-weight: 900; font-family: sans-serif;">
              ${stop.dayNumber}
            </span>
          </div>
          ${labelHtml}
        </div>
      `,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2]
    });
  };

  // Initialize Leaflet map on mount
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Destroy existing instance if any
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Default center in Morocco spanning High Atlas and Sahara
    const map = L.map(mapContainerRef.current, {
      center: [31.25, -6.0],
      zoom: 7,
      minZoom: 6,
      maxZoom: 14,
      zoomControl: false,
      scrollWheelZoom: true,
      attributionControl: false
    });

    mapInstanceRef.current = map;

    // Add Base Tile Layer
    const layerConfig = MAP_LAYERS[currentLayer];
    const tileLayer = L.tileLayer(layerConfig.url, {
      attribution: layerConfig.attribution,
      maxZoom: 18
    }).addTo(map);
    tileLayerRef.current = tileLayer;

    // Draw Route 1: High Atlas Trekking Track (Coral glow + dashed line)
    // Underglow
    L.polyline(TREKKING_ROUTE_COORDS, {
      color: '#ff4a11',
      weight: 8,
      opacity: 0.45,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Sharp Trekking Line
    L.polyline(TREKKING_ROUTE_COORDS, {
      color: '#ff7849',
      weight: 3.5,
      dashArray: '8, 6',
      opacity: 0.95,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Draw Route 2: Sahara Overland 4x4 Circuit Track (Teal glow + dashed line)
    // Underglow
    L.polyline(DESERT_ROUTE_COORDS, {
      color: '#009ea4',
      weight: 7,
      opacity: 0.35,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Sharp Overland Line
    L.polyline(DESERT_ROUTE_COORDS, {
      color: '#00e5ee',
      weight: 3,
      dashArray: '9, 5',
      opacity: 0.9,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Create Markers for all Expedition Stops
    const newMarkers: { [key: string]: L.Marker } = {};

    EXPEDITION_STOPS.forEach(stop => {
      const isSelected = stop.id === selectedStop.id;
      const marker = L.marker([stop.lat, stop.lng], {
        icon: createMarkerIcon(stop, isSelected),
        zIndexOffset: isSelected ? 1000 : 100
      }).addTo(map);

      marker.on('click', () => {
        handleSelectStop(stop);
      });

      newMarkers[stop.id] = marker;
    });

    markersRef.current = newMarkers;

    // Fit initial bounds to include all stops comfortably
    const bounds = L.latLngBounds(EXPEDITION_STOPS.map(s => [s.lat, s.lng]));
    map.fitBounds(bounds, { padding: [40, 40] });

    // Cleanup when component unmounts
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update tile layer when currentLayer changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    if (tileLayerRef.current) {
      mapInstanceRef.current.removeLayer(tileLayerRef.current);
    }
    const layerConfig = MAP_LAYERS[currentLayer];
    const newTileLayer = L.tileLayer(layerConfig.url, {
      attribution: layerConfig.attribution,
      maxZoom: 18
    }).addTo(mapInstanceRef.current);
    tileLayerRef.current = newTileLayer;
  }, [currentLayer]);

  // Update marker icons when selectedStop changes (Marks new one, unmarks previous one)
  useEffect(() => {
    EXPEDITION_STOPS.forEach(stop => {
      const marker = markersRef.current[stop.id];
      if (marker) {
        const isSelected = stop.id === selectedStop.id;
        marker.setIcon(createMarkerIcon(stop, isSelected));
        marker.setZIndexOffset(isSelected ? 1000 : 100);
      }
    });
  }, [selectedStop]);

  // Select a stop, pan map to it, and update details
  const handleSelectStop = (stop: ExpeditionStop) => {
    setSelectedStop(stop);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([stop.lat, stop.lng], Math.max(mapInstanceRef.current.getZoom(), 8.5), {
        duration: 1.0,
        easeLinearity: 0.25
      });
    }
  };

  // Zoom handlers
  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleResetView = () => {
    if (mapInstanceRef.current) {
      const bounds = L.latLngBounds(EXPEDITION_STOPS.map(s => [s.lat, s.lng]));
      mapInstanceRef.current.fitBounds(bounds, { padding: [40, 40] });
    }
  };

  // Quick navigation to previous and next stops
  const currentIndex = EXPEDITION_STOPS.findIndex(s => s.id === selectedStop.id);
  const handlePrevStop = () => {
    const nextIdx = (currentIndex - 1 + EXPEDITION_STOPS.length) % EXPEDITION_STOPS.length;
    handleSelectStop(EXPEDITION_STOPS[nextIdx]);
  };
  const handleNextStop = () => {
    const nextIdx = (currentIndex + 1) % EXPEDITION_STOPS.length;
    handleSelectStop(EXPEDITION_STOPS[nextIdx]);
  };

  // Pills Drag-to-Scroll Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!pillsContainerRef.current) return;
    isDownRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - pillsContainerRef.current.offsetLeft;
    scrollLeftRef.current = pillsContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current || !pillsContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - pillsContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true;
    }
    pillsContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDownRef.current = false;
  };

  // Filtered stops for pills
  const displayedStops = EXPEDITION_STOPS.filter(s => {
    if (activeFilter === 'trekking') return s.category === 'trekking' || s.id === 'marrakech';
    if (activeFilter === 'desierto') return s.category === 'desierto' || s.category === 'cultura';
    return true;
  });

  return (
    <section id="mapa-travesia" className="py-16 sm:py-20 lg:py-24 bg-[#01141c] border-t border-b border-white/10 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 border border-[#d45e33]/40 bg-[#d45e33]/10 text-[#d45e33] font-title text-[0.75rem] sm:text-xs font-black tracking-[3px] px-5 py-1.5 rounded-full uppercase mb-4">
            ✦ CARTOGRAFÍA GEOESPACIAL REAL ✦
          </div>

          <h2 className="font-title text-2xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase mb-3 font-black">
            Mapa Real de la Travesía
          </h2>

          {/* Lead Text */}
          <p className="text-base sm:text-lg text-[#95cecf] font-light max-w-2xl mx-auto leading-relaxed">
            <span className="hidden sm:inline">
              Explora de manera interactiva la ruta completa a través del macizo del Alto Atlas,
              <br />
              los cañones presaharianos y el gran desierto de Erg Chebbi.
              <br />
              Toca los puntos para ver información de cada sitio.
            </span>
            <span className="inline sm:hidden">
              Explora de manera interactiva la ruta completa
              <br />
              a través del macizo del Alto Atlas, los cañones
              <br />
              presaharianos y el desierto de Erg Chebbi.
              <br />
              Toca los puntos para ver la información
              <br />
              de cada sitio.
            </span>
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d45e33]" />
            <span className="text-[#d45e33] text-[0.6rem]">◆</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d45e33]" />
          </div>
        </div>

        {/* Stage Filter Buttons + Layer Switcher + Stop selector pills bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'bg-white/5 text-[#95cecf] hover:text-white border border-white/10'
              }`}
            >
              Toda la Travesía
            </button>
            <button
              onClick={() => {
                setActiveFilter('trekking');
                const summitStop = EXPEDITION_STOPS.find(s => s.id === 'cumbre-toubkal') || EXPEDITION_STOPS[0];
                handleSelectStop(summitStop);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'trekking'
                  ? 'bg-[#d45e33] text-white border border-[#d45e33]'
                  : 'bg-white/5 text-[#95cecf] hover:text-white border border-white/10'
              }`}
            >
              🏔️ Alto Atlas
            </button>
            <button
              onClick={() => {
                setActiveFilter('desierto');
                const desertStop = EXPEDITION_STOPS.find(s => s.id === 'erg-chebbi') || EXPEDITION_STOPS[0];
                handleSelectStop(desertStop);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === 'desierto'
                  ? 'bg-[#009ea4] text-white border border-[#009ea4]'
                  : 'bg-white/5 text-[#95cecf] hover:text-white border border-white/10'
              }`}
            >
              🐪 Sahara & Kasbahs
            </button>
          </div>
        </div>

        {/* Quick Filter Stop Pills: Mouse drag-to-scroll + Touch swipe */}
        <div
          ref={pillsContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-5 select-none cursor-grab active:cursor-grabbing scrollbar-thin scrollbar-thumb-[#d45e33]/50 hover:scrollbar-thumb-[#d45e33]"
        >
          {displayedStops.map(stop => {
            const isSelected = selectedStop.id === stop.id;
            return (
              <button
                key={stop.id}
                onClick={() => {
                  if (hasDraggedRef.current) return;
                  handleSelectStop(stop);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer border shrink-0 ${
                  isSelected
                    ? 'bg-[#d45e33] text-white border-[#d45e33] shadow-lg shadow-[#d45e33]/40 scale-105'
                    : 'bg-white/5 text-[#f5f0e8]/85 border-white/10 hover:border-white/25 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-black/30 font-bold">D{stop.dayNumber}</span>
                <span>{stop.name}</span>
                <span className="text-[11px] opacity-75 font-mono text-[#95cecf]">{stop.altitude}</span>
              </button>
            );
          })}
        </div>

        {/* REAL LEAFLET MAP CONTAINER WITH FULL-WIDTH STYLING */}
        <div className="w-full rounded-2xl overflow-hidden border-2 border-white/20 bg-[#01141c] shadow-2xl relative mb-6 isolate z-10">
          
          {/* Top-Right Floating Controls (Zoom & Layer Selector) */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            
            {/* Layer Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLayerMenu(!showLayerMenu)}
                title="Cambiar capa de mapa"
                className="h-9 px-3 rounded-xl bg-[#011e29]/95 backdrop-blur-md border border-white/20 text-[#95cecf] hover:text-white hover:bg-white/10 flex items-center gap-1.5 text-xs font-bold shadow-xl transition-all cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#d45e33]" />
                <span className="hidden sm:inline">{MAP_LAYERS[currentLayer].name}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#95cecf] transition-transform duration-200 ${showLayerMenu ? 'rotate-180 text-white' : ''}`} />
              </button>

              {showLayerMenu && (
                <div className="absolute right-0 top-11 w-44 bg-[#011e29]/98 backdrop-blur-md border border-white/20 rounded-xl p-1.5 shadow-2xl z-30 flex flex-col gap-1">
                  {(Object.keys(MAP_LAYERS) as Array<keyof typeof MAP_LAYERS>).map(key => (
                    <button
                      key={key}
                      onClick={() => {
                        setCurrentLayer(key);
                        setShowLayerMenu(false);
                      }}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${
                        currentLayer === key
                          ? 'bg-[#d45e33] text-white'
                          : 'text-[#95cecf] hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{MAP_LAYERS[key].name}</span>
                      {currentLayer === key && <span>✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-[#011e29]/95 backdrop-blur-md border border-white/20 rounded-xl p-1 shadow-xl">
              <button
                onClick={handleZoomIn}
                title="Acercar (+)"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#95cecf] hover:text-white hover:bg-white/10 transition-all"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                title="Alejar (-)"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#95cecf] hover:text-white hover:bg-white/10 transition-all"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-white/20" />
              <button
                onClick={handleResetView}
                title="Restablecer vista completa"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#95cecf] hover:text-white hover:bg-white/10 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Top-Left Active Indicator Badge */}
          <div className="absolute top-4 left-4 z-20 bg-[#011e29]/95 backdrop-blur-md border border-white/20 rounded-xl px-3.5 py-2 text-xs text-[#f5f0e8] hidden sm:flex items-center gap-2.5 shadow-xl">
            <span className="w-3 h-3 rounded-full bg-[#d45e33] animate-ping" />
            <span className="font-bold text-white">Mapa Interactivo Real:</span>
            <span className="text-[#95cecf]">Haz clic en cualquier punto para seleccionarlo</span>
          </div>

          {/* Map Legend (Bottom-Left) */}
          <div className="absolute bottom-4 left-4 z-20 bg-[#011e29]/90 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 hidden md:flex items-center gap-4 text-xs font-semibold shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-[#ff7849] rounded-full" />
              <span className="text-white">Trekking Toubkal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-[#00e5ee] rounded-full" />
              <span className="text-[#95cecf]">Ruta Sahara + turismo</span>
            </div>
          </div>

          {/* Leaflet Mount Element */}
          <div
            ref={mapContainerRef}
            className="w-full h-[440px] sm:h-[500px] md:h-[560px] z-10"
          />
        </div>

        {/* Selected Stop Details Bar: High-contrast, large fonts, photo, next/prev tour controls */}
        <div className="bg-[#022c3b] border-2 border-white/20 rounded-2xl p-5 sm:p-7 md:p-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 w-full md:w-auto flex-1">
            {/* Image/Video of the site with zoom effect */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-white/20 shadow-xl group">
              {selectedStop.imageUrl.endsWith('.mp4') ? (
                <video
                  src={selectedStop.imageUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <img
                  src={selectedStop.imageUrl}
                  alt={selectedStop.name}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    selectedStop.imageUrl.includes('1.webp') || selectedStop.imageUrl.includes('5.webp')
                      ? 'object-[center_15%]'
                      : selectedStop.imageUrl.includes('8-.webp')
                      ? 'object-[center_22%]'
                      : 'object-center'
                  }`}
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-1.5 left-2 text-[10px] sm:text-xs font-mono font-bold text-white uppercase bg-black/60 px-2 py-0.5 rounded pointer-events-none">
                Día {selectedStop.dayNumber}
              </div>
            </div>

            {/* Information with Large, Highly Readable Typography */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="text-xs sm:text-sm uppercase tracking-widest text-[#ff7849] font-black">
                  {selectedStop.dayLabel} · {selectedStop.stage}
                </span>
                <span className="text-xs sm:text-sm bg-white/10 border border-white/20 text-[#00e5ee] px-2.5 py-0.5 rounded-md font-mono font-bold">
                  {selectedStop.altitude}
                </span>
              </div>

              <div className="font-title text-xl sm:text-2xl md:text-3xl text-white font-black leading-tight mb-2">
                {selectedStop.name}
              </div>

              <p className="text-sm sm:text-base md:text-lg text-[#f5f0e8]/95 max-w-2xl font-normal leading-relaxed">
                {selectedStop.highlight}
              </p>
            </div>
          </div>

          {/* Action Area: Step Navigation & Itinerary Link */}
          <div className="w-full md:w-auto flex flex-row sm:flex-row md:flex-col items-center sm:items-center md:items-end justify-between gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-white/10 shrink-0">
            
            {/* Prev / Next Stop Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevStop}
                title="Punto anterior"
                className="p-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 text-[#95cecf] hover:text-white transition-all cursor-pointer flex items-center gap-1 text-xs font-bold"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Anterior</span>
              </button>
              <button
                onClick={handleNextStop}
                title="Siguiente punto"
                className="p-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 text-[#95cecf] hover:text-white transition-all cursor-pointer flex items-center gap-1 text-xs font-bold"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onSelectDay(selectedStop.dayNumber)}
              className="btn-editorial text-xs sm:text-sm py-3 px-6 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 w-auto"
            >
              <span>Ver en Itinerario</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
