import { FeaturesSection } from '@/components/FeaturesSection';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { StatBar } from '@/components/StatBar';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StatBar />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
