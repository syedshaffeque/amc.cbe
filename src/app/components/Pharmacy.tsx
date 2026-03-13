import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Pill, Clock, ShieldCheck, Truck, CreditCard, Stethoscope } from 'lucide-react';
import { Button } from './ui/button';

interface PharmacyProps {
  onContactClick: () => void;
}

export function Pharmacy({ onContactClick }: PharmacyProps) {
  const categories = [
    {
      title: 'Prescription Medications',
      items: ['Antidepressants', 'Anti-anxiety medications', 'Mood stabilizers', 'Sleep aids']
    },
    {
      title: 'Over-the-Counter',
      items: ['Pain relievers', 'Vitamins & supplements', 'First aid supplies', 'Wellness products']
    },
    {
      title: 'Mental Health Support',
      items: ['Stress relief products', 'Sleep support supplements', 'Cognitive health vitamins', 'Natural remedies']
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Fast prescription filling'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assured',
      description: 'Certified medications'
    },
    {
      icon: Truck,
      title: 'Home Delivery',
      description: 'Free delivery available'
    },
    {
      icon: CreditCard,
      title: 'Insurance Accepted',
      description: 'All major plans'
    },
    {
      icon: Stethoscope,
      title: 'Expert Consultation',
      description: 'Pharmacist available'
    },
    {
      icon: Pill,
      title: 'Wide Selection',
      description: '5000+ products'
    }
  ];

  return (
    <section id="pharmacy" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pharmacy Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our in-house pharmacy provides convenient access to all your medication needs with professional guidance and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://content.jdmagicbox.com/v2/comp/salem/b5/0427px427.x427.231230171558.s9b5/catalogue/nalamudan-pharmacy-anna-nagar-salem-chemists-n9bm15zalc.jpg"
              alt="Pharmacy medicine shelves"
              className="w-full h-[100%] object-cover"
            />
          </div>

          <div className="space-y-6">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-teal-50 to-white border-teal-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Pill className="w-5 h-5 text-teal-600" />
                  {category.title}
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
            <Button 
              className="w-full bg-teal-600 hover:bg-teal-700"
              size="lg"
              onClick={onContactClick}
            >
              Request Prescription Refill
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <feature.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
