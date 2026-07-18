import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import Ticker from './components/Ticker';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

const PLACES = [
  'Canada',
  'Japan',
  'Hong Kong',
  'Macau',
  'USA',
  'Netherlands',
  'Germany',
  'Belgium',
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <Ticker />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Ticker items={PLACES} reverse />
      <ContactSection />
    </main>
  );
}
