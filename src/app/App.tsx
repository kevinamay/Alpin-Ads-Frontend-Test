import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { IntroductionSection } from "./components/IntroductionSection";
import { About } from "./components/about";
import { Rooms } from "./components/rooms";
import { Amenities } from "./components/amenities";
import { VisualMemories } from "./components/visualMemories";
import { Faq } from "./components/faq";
import { Reserve } from "./components/reserve";
import { Footer } from "./components/footer";
import { Toaster } from "./components/ui/sonner";
import type { DateRange } from "react-day-picker";

export default function App() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [guests, setGuests] = useState({ adults: 2, children: 0 });

  return (
    <div className="min-h-screen w-full bg-background">
      <HeroSection
        dateRange={dateRange}
        setDateRange={setDateRange}
        guests={guests}
        setGuests={setGuests}
      />
      <IntroductionSection />
      <Rooms />
      <Amenities />
      <VisualMemories />
      <Faq />
      <Reserve
        dateRange={dateRange}
        setDateRange={setDateRange}
        guests={guests}
        setGuests={setGuests}
      />
      <Footer />
      <Toaster />
    </div>
  );
}

