import { HeroSection } from "./components/HeroSection";
import { IntroductionSection } from "./components/IntroductionSection";
import { About } from "./components/about";
import { Rooms } from "./components/rooms";
import { Amenities } from "./components/amenities";
import { VisualMemories } from "./components/visualMemories";
import { Reserve } from "./components/reserve";
import { Footer } from "./components/footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-background">
      <HeroSection />
      <IntroductionSection />
      <Rooms />
      <Amenities />
      <VisualMemories />
      <Reserve />
      <Footer />
      <Toaster />
    </div>
  );
}
