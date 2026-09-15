import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TripOverview } from './components/TripOverview';
import { ExpeditionMap } from './components/ExpeditionMap';
import { AltitudeProfile } from './components/AltitudeProfile';
import { ItinerarySection } from './components/ItinerarySection';
import { InclusionsSection } from './components/InclusionsSection';
import { PricingSection } from './components/PricingSection';
import { GearAndFaq } from './components/GearAndFaq';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [targetDay, setTargetDay] = useState<number | null>(null);

  const handleScrollToItinerary = () => {
    const el = document.getElementById('itinerario');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDayFromAltitude = (dayNumber: number) => {
    setTargetDay(dayNumber);
    const el = document.getElementById(`day-${dayNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      handleScrollToItinerary();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#022c3b] text-[#f5f0e8] font-sans antialiased overflow-x-hidden selection:bg-[#d45e33] selection:text-white">
      {/* 1. Sticky / Floating Header with subtle blur & logo */}
      <Navbar />

      {/* 2. Main Expedition Content Flow */}
      <main className="flex-1 w-full">
        {/* Full-width Hero with panoramic background image */}
        <Hero
          onScrollToItinerary={handleScrollToItinerary}
        />

        {/* 13 Days Integral Philosophy & Pillars */}
        <TripOverview />

        {/* Real Interactive Geographical Expedition Map */}
        <ExpeditionMap onSelectDay={handleSelectDayFromAltitude} />

        {/* Interactive Topography & Altitude Profile */}
        <AltitudeProfile onSelectDay={handleSelectDayFromAltitude} />

        {/* Master 13-Day Itinerary Day by Day */}
        <ItinerarySection
          selectedDayNumber={targetDay}
        />

        {/* Inclusions & Exclusions */}
        <InclusionsSection />

        {/* Pricing & Booking (USD 2.090) */}
        <PricingSection />

        {/* Gear Checklist & FAQs */}
        <GearAndFaq />
      </main>

      {/* 3. Footer with real contact data */}
      <Footer />

      {/* 4. Floating Quick Actions */}
      <FloatingActions />
    </div>
  );
}
