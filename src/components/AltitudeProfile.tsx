import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { TRIP_DATA } from '../data/tripData';

interface AltitudeProfileProps {
  onSelectDay?: (dayNumber: number) => void;
}

export const AltitudeProfile: React.FC<AltitudeProfileProps> = () => {
  const [activePoint, setActivePoint] = useState<number | null>(5); // Default to summit day 5 (Toubkal 4.167 m)
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const points = TRIP_DATA.altitudeProfile;
  const maxAlt = 4200;
  const minAlt = 0;

  // SVG dimensions
  const width = 900;
  const height = 240;
  const paddingX = 45;
  const paddingY = 35;

  const getX = (index: number) => {
    return paddingX + (index / (points.length - 1)) * (width - paddingX * 2);
  };

  const getY = (altitude: number) => {
    return height - paddingY - ((altitude - minAlt) / (maxAlt - minAlt)) * (height - paddingY * 2);
  };

  // Build SVG path
  const pathD = points.reduce((acc, curr, idx) => {
    const x = getX(idx);
    const y = getY(curr.altitude);
    return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, '');

  const areaD = `${pathD} L ${getX(points.length - 1)} ${height - paddingY} L ${getX(0)} ${height - paddingY} Z`;

  const displayedPointDay = hoveredPoint ?? activePoint ?? 5;
  const displayedPointIndex = points.findIndex(p => p.day === displayedPointDay);
  const displayedData = displayedPointIndex >= 0 ? points[displayedPointIndex] : null;

  return (
    <section id="perfil-altura" className="py-16 sm:py-20 bg-[#022c3b]/80 px-4 border-t border-[#d45e33]/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <h2 className="font-title text-2xl md:text-4xl text-[#d45e33] text-center tracking-[3px] uppercase mb-2 font-black">
          Perfil de Altitud
        </h2>

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d45e33]" />
          <span className="text-[#d45e33] text-[0.6rem]">◆</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d45e33]" />
        </div>

        {/* Chart Card */}
        <div className="bg-[#022c3b] p-5 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
          
          {/* Top Label */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
            <div className="text-xs uppercase tracking-widest text-[#95cecf] font-bold">
              Escala de Aclimatación: De Marrakech (466 m) al Toubkal (4.167 m)
            </div>
            <div className="text-xs sm:text-sm text-[#f5f0e8]/85 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#009ea4]" />
              <span>Toca o pasa el cursor sobre un nodo para ver información</span>
            </div>
          </div>

          {/* SVG Chart */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[680px]">
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible select-none">
                <defs>
                  <linearGradient id="altGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d45e33" stopOpacity="0.45" />
                    <stop offset="60%" stopColor="#009ea4" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#022c3b" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Grid guidelines */}
                {[1000, 2000, 3000, 4000].map(level => {
                  const y = getY(level);
                  return (
                    <g key={level}>
                      <line
                        x1={paddingX}
                        y1={y}
                        x2={width - paddingX}
                        y2={y}
                        stroke="#ffffff"
                        strokeOpacity="0.08"
                        strokeDasharray="4 4"
                      />
                      <text
                        x={paddingX - 10}
                        y={y + 3}
                        fill="#95cecf"
                        fontSize="9"
                        textAnchor="end"
                        fontFamily="sans-serif"
                      >
                        {level}m
                      </text>
                    </g>
                  );
                })}

                {/* Area and Line */}
                <path d={areaD} fill="url(#altGradient)" />
                <path d={pathD} fill="none" stroke="#d45e33" strokeWidth="2.5" />

                {/* In-chart subtle floating tooltip at the active/hovered node */}
                {displayedData && displayedPointIndex >= 0 && (() => {
                  const cx = getX(displayedPointIndex);
                  const cy = getY(displayedData.altitude);
                  const tipW = 184;
                  const tipH = 48;
                  const tipX = Math.max(paddingX, Math.min(width - paddingX - tipW, cx - tipW / 2));
                  const isNearTop = cy < 56;
                  const tipY = isNearTop ? cy + 14 : cy - tipH - 12;

                  return (
                    <g className="pointer-events-none transition-opacity duration-200">
                      {/* Vertical dotted guide to point */}
                      <line
                        x1={cx}
                        y1={isNearTop ? cy + 6 : cy - 6}
                        x2={cx}
                        y2={isNearTop ? tipY : tipY + tipH}
                        stroke="#d45e33"
                        strokeWidth="1.2"
                        strokeDasharray="2 2"
                        opacity="0.8"
                      />
                      {/* Tooltip background pill */}
                      <rect
                        x={tipX}
                        y={tipY}
                        width={tipW}
                        height={tipH}
                        rx="8"
                        fill="#01141c"
                        fillOpacity="0.96"
                        stroke="#d45e33"
                        strokeWidth="1.5"
                        strokeOpacity="0.9"
                      />
                      {/* Location & Day header */}
                      <text
                        x={tipX + tipW / 2}
                        y={tipY + 18}
                        fill="#95cecf"
                        fontSize="11"
                        fontWeight="700"
                        textAnchor="middle"
                        fontFamily="sans-serif"
                      >
                        DÍA {displayedData.day} · {displayedData.location}
                      </text>
                      {/* Altitude value */}
                      <text
                        x={tipX + tipW / 2}
                        y={tipY + 36}
                        fill="#ffffff"
                        fontSize="13"
                        fontWeight="900"
                        textAnchor="middle"
                        fontFamily="sans-serif"
                      >
                        {displayedData.altitude.toLocaleString()} m.s.n.m.
                      </text>
                    </g>
                  );
                })()}

                {/* Interactive Nodes */}
                {points.map((p, idx) => {
                  const cx = getX(idx);
                  const cy = getY(p.altitude);
                  const isCurrent = displayedPointDay === p.day;

                  return (
                    <g
                      key={p.day}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint(p.day)}
                      onMouseLeave={() => setHoveredPoint(null)}
                      onClick={() => setActivePoint(p.day)}
                    >
                      {/* Wide invisible hit area to eliminate any hover cursor loss */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={16}
                        fill="transparent"
                      />
                      
                      {/* Subtle outer halo on active or key point */}
                      {isCurrent && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={9}
                          fill="none"
                          stroke="#d45e33"
                          strokeWidth={1.5}
                          opacity={0.85}
                        />
                      )}

                      {/* Visible node circle */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isCurrent ? 5.5 : p.keyPoint ? 4.5 : 3.5}
                        fill={isCurrent ? '#d45e33' : p.keyPoint ? '#009ea4' : '#f5f0e8'}
                        stroke="#01141c"
                        strokeWidth={1.5}
                      />

                      {/* Day Label at baseline */}
                      <text
                        x={cx}
                        y={height - 8}
                        fill={isCurrent ? '#d45e33' : '#95cecf'}
                        fontSize="9"
                        fontWeight={isCurrent ? 'bold' : 'normal'}
                        textAnchor="middle"
                        fontFamily="sans-serif"
                      >
                        D{p.day}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
