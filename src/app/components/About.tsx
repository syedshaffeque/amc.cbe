import { Heart, Shield, Users, Clock } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const features = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We provide empathetic, personalized support tailored to your unique needs and circumstances.'
    },
    {
      icon: Shield,
      title: 'Confidential & Safe',
      description: 'Your privacy is our priority. All sessions are conducted in a secure, judgment-free environment.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our specialists are licensed professionals with extensive experience in various therapeutic approaches.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Evening and weekend appointments available to accommodate your busy lifestyle.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose MindCare Clinic?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in the power of professional psychological support to transform lives. 
            Our clinic offers evidence-based therapies in a warm, welcoming environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
