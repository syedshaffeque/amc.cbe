import { useRef } from 'react';
import Slider from 'react-slick';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GraduationCap, Award, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { specialists } from '../data/specialists';

interface SpecialistsCarouselProps {
  onSpecialistClick?: (specialistId: string) => void;
}

export function SpecialistsCarousel({ onSpecialistClick }: SpecialistsCarouselProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="specialists" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Specialists
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of dedicated professionals brings diverse expertise and a shared commitment 
            to helping you achieve mental wellness and personal growth.
          </p>
        </div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {specialists.map((specialist) => (
              <div key={specialist.id} className="px-3">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {specialist.name}
                    </h3>
                    <p className="text-teal-600 font-medium">
                      {specialist.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {specialist.specialization}
                    </p>
                    <div className="pt-3 space-y-2 border-t">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <GraduationCap className="w-4 h-4" />
                        <span>{specialist.education}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4" />
                        <span>{specialist.experience} experience</span>
                      </div>
                    </div>
                    {onSpecialistClick && (
                      <Button
                        variant="outline"
                        className="w-full mt-4 border-teal-600 text-teal-600 hover:bg-teal-50"
                        onClick={() => onSpecialistClick(specialist.id)}
                      >
                        View Profile
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </Slider>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-teal-600 text-teal-600 hover:bg-teal-50"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-teal-600 text-teal-600 hover:bg-teal-50"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
