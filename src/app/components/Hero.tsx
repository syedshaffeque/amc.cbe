import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Brain } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  const heroImages = [
    {
      src: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwer4NNVymm_zJv66oOlsXeKccZAyaVm5RU-FiwLyRLIIEvzP_i2PC8I6HVFdjfHy5f6_1IyQ8FfNCoB_aLajPoeWDled76RL5CYx_VTtXa0l9mMX1dEpxnURCq5RRgdP0e5AwPg=s1360-w1360-h1020-rw',
      alt: 'Professional psychologist therapy session'
    },
    {
      src: 'https://images.unsplash.com/photo-1758273240360-76b908e7582a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBjb3Vuc2VsaW5nJTIwc3VwcG9ydHxlbnwxfHx8fDE3NzIwMzc4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Mental health counseling and support'
    },
    {
      src: 'https://images.jdmagicbox.com/comp/coimbatore/e4/0422px422.x422.180905113012.e8e4/catalogue/syed-ummar-consultant-psychiatrist-aafiya-medical-center-avarampalayam-coimbatore-psychiatrists-gxugrayx5c.jpg',
      alt: 'Psychiatrist patient consultation'
    },
    {
      src: 'https://content.jdmagicbox.com/comp/coimbatore/e4/0422px422.x422.180905113012.e8e4/catalogue/syed-ummar-consultant-psychiatrist-aafiya-medical-center-avarampalayam-coimbatore-psychiatrists-abwbvktfax.jpg?imwidth=419.6666666666667',
      alt: 'Mindfulness and wellness meditation'
    }
  ];

  return (
    <section id="home" className="pt-16 bg-gradient-to-b from-teal-50 to-white relative overflow-hidden">
      {/* Brain Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <Brain className="w-[600px] h-[600px] text-teal-100 opacity-20" strokeWidth={0.5} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 relative">
            {/* Small Brain Icon near heading */}
            <div className="absolute -top-8 -left-4 opacity-10">
              <Brain className="w-32 h-32 text-teal-600" strokeWidth={1} />
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 relative z-10">
              Your Mental Health
              <span className="text-teal-600"> Matters</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Professional psychological support with experienced specialists dedicated to your well-being. 
              At Aafiya Medical Centre, we provide a safe, compassionate space for healing and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white"
                onClick={onContactClick}
              >
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Our Services
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold text-teal-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">2,500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl hero-slider">
              <Slider {...sliderSettings}>
                {heroImages.map((image, index) => (
                  <div key={index}>
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[400px] sm:h-[500px] object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            {/* Decorative Brain Icon on image side */}
            <div className="absolute -bottom-6 -right-6 bg-teal-600 rounded-full p-6 shadow-lg hidden md:block">
              <Brain className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .hero-slider .slick-dots {
          bottom: 20px;
        }
        .hero-slider .slick-dots li button:before {
          color: white;
          font-size: 10px;
        }
        .hero-slider .slick-dots li.slick-active button:before {
          color: #0d9488;
        }
      `}</style>
    </section>
  );
}
