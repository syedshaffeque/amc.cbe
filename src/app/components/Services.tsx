import { Card } from './ui/card';
import { Brain, HeartPulse, Activity, Moon, Users2, Baby, Briefcase, Sparkles } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Brain,
      title: 'Anxiety Disorder Treatment',
      description: 'Comprehensive treatment for various anxiety disorders including GAD, panic disorder, and social anxiety using evidence-based therapeutic approaches.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: HeartPulse,
      title: 'Depression Treatment',
      description: 'Professional care for depression through cognitive behavioral therapy, medication management, and holistic wellness strategies.',
      color: 'bg-rose-100 text-rose-600'
    },
    {
      icon: Activity,
      title: 'Bipolar Disorder Treatment',
      description: 'Specialized treatment plans for bipolar disorder focusing on mood stabilization, psychoeducation, and long-term management.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Moon,
      title: 'Sleep Disorders Treatment',
      description: 'Expert diagnosis and treatment for insomnia, sleep apnea, and other sleep-related disorders to improve your quality of rest.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Users2,
      title: 'Family Therapy',
      description: 'Navigate family dynamics, parenting challenges, and intergenerational issues in a supportive environment.',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: Baby,
      title: 'Child & Adolescent',
      description: 'Specialized support for children and teens dealing with behavioral issues, school stress, and developmental challenges.',
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: Briefcase,
      title: 'Career Counseling',
      description: 'Guidance for career transitions, workplace stress, burnout prevention, and professional development.',
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: Sparkles,
      title: 'Mindfulness & Wellness',
      description: 'Learn stress management techniques, mindfulness practices, and strategies for overall mental wellness.',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive psychological services to support your mental health journey, 
            using evidence-based approaches tailored to your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow bg-white">
              <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
