import { Hero } from './Hero';
import { About } from './About';
import { ServiceCategories } from './ServiceCategories';
import { Services } from './Services';
import { Pharmacy } from './Pharmacy';
import { SpecialistsCarousel } from './SpecialistsCarousel';
import { Testimonials } from './Testimonials';

interface HomePageProps {
  onContactClick: () => void;
  onSpecialistClick: (specialistId: string) => void;
}

export function HomePage({ onContactClick, onSpecialistClick }: HomePageProps) {
  return (
    <>
      <Hero onContactClick={onContactClick} />
      <About />
      <ServiceCategories onContactClick={onContactClick} />
      <Services />
      <Pharmacy onContactClick={onContactClick} />
      <SpecialistsCarousel onSpecialistClick={onSpecialistClick} />
      <Testimonials />
    </>
  );
}
