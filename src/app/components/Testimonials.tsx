import { useRef } from 'react';
import Slider from 'react-slick';
import { Card } from './ui/card';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';

export function Testimonials() {
  const sliderRef = useRef<Slider>(null);

  const testimonials = [
    {
      name: 'Pooja',
      role: 'Anxiety Treatment Patient',
      content: 'Aafiya Medical Centre changed my life. The therapists are incredibly compassionate and professional. After months of treatment, I finally feel like myself again.',
      rating: 5,
      image: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
    },
    {
      name: 'Devaraja',
      role: 'Depression Treatment Patient',
      content: 'The team at Aafiya helped me through my darkest times. Their personalized approach and genuine care made all the difference in my recovery journey.',
      rating: 5,
      image: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
    },
    {
      name: 'Afsu Afasl',
      role: 'Bipolar Disorder Treatment',
      content: 'Finding the right support for bipolar disorder was challenging until I came to Aafiya. The specialists here truly understand and provide excellent care.',
      rating: 5,
      image: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
    },
    {
      name: 'Ponraj',
      role: 'Sleep Disorder Treatment',
      content: 'After years of insomnia, the sleep disorder program at Aafiya finally helped me get the rest I needed. I am sleeping better than I have in years!',
      rating: 5,
      image: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
    },
    {
      name: 'Viyenney',
      role: 'Family Therapy Patient',
      content: 'Our family therapy sessions brought us closer together. The therapist was skilled at helping us communicate better and resolve long-standing issues.',
      rating: 5,
      image: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
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
    <section className="py-16 sm:py-24 bg-gradient-to-b from-teal-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from people whose lives have been transformed through our care.
          </p>
        </div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <Card className="p-6 h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <Quote className="w-10 h-10 text-teal-600 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
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
