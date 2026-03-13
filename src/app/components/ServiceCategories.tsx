import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Baby, Briefcase, ArrowRight, Check } from 'lucide-react';

interface ServiceCategoriesProps {
  onContactClick: () => void;
}

export function ServiceCategories({ onContactClick }: ServiceCategoriesProps) {
  const categories = [
    {
      id: 'adults',
      title: 'Adult Therapy',
      icon: Users,
      tagline: 'Finding Balance in Life\'s Challenges',
      description: 'Comprehensive mental health support for adults dealing with anxiety, depression, stress, career challenges, and life transitions.',
      image: 'https://static.vecteezy.com/system/resources/previews/013/397/628/original/mental-health-counseling-concept-free-vector.jpg',
      imageAlt: 'https://stellarpsychiatry.com/wp-content/uploads/2023/01/psychiatric-evaluations-1.jpg',
      features: [
        'Individual Therapy Sessions',
        'Stress & Anxiety Management',
        'Depression Treatment',
        'Work-Life Balance Counseling',
        'Trauma & PTSD Support',
        'Personal Development'
      ],
      gradient: 'from-blue-50 to-cyan-50',
      color: 'teal'
    },
    {
      id: 'children',
      title: 'Children & Adolescents',
      icon: Baby,
      tagline: 'Nurturing Young Minds',
      description: 'Specialized care for children and teenagers facing behavioral issues, academic stress, social challenges, and developmental concerns.',
      image: 'https://www.hopscotchtherapy.in/admin/post_img/1680452022_group-primary-schoolers-lying-ground-smiling-min.jpg',
      imageAlt: 'https://images.unsplash.com/photo-1758273240403-052b3c99f636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMGFkb2xlc2NlbnQlMjBtZW50YWwlMjBoZWFsdGglMjBzdXBwb3J0fGVufDF8fHx8MTc3MjA0NTYwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Play Therapy',
        'Behavioral Interventions',
        'ADHD & Autism Support',
        'School-Related Challenges',
        'Teen Counseling',
        'Parent Coaching'
      ],
      gradient: 'from-amber-50 to-orange-50',
      color: 'orange'
    },
    {
      id: 'couples',
      title: 'Officials & Business People',
      icon: Briefcase,
      tagline: 'Leadership Excellence & Peak Performance',
      description: 'Specialized mental health support for executives, officials, and professionals dealing with high-pressure roles, leadership challenges, and work-life balance.',
      image: 'https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZXMlMjBwcm9mZXNzaW9uYWxzJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NzIyMTYzNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      imageAlt: 'https://img.freepik.com/premium-photo/young-man-with-mental-health-problems-with-friends-psychiatrist-him-counseling-encouragement_35150-2986.jpg',
      features: [
        'Executive Coaching',
        'Stress & Burnout Management',
        'Leadership Development',
        'Career Transition Support',
        'Performance Optimization',
        'Confidential Counseling'
      ],
      gradient: 'from-indigo-50 to-purple-50',
      color: 'indigo'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Specialized Care for Every Stage of Life
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive mental health services are tailored to meet the unique needs of individuals, 
            professionals, and leaders at every stage of their journey.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={category.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image Section */}
                <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={category.image}
                        alt={category.title}
                        className="w-full h-[400px] sm:h-[500px] object-cover"
                      />
                    </div>
                    {/* Floating secondary image */}
                    <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                      <ImageWithFallback
                        src={category.imageAlt}
                        alt={`${category.title} support`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className={`p-8 lg:p-10 bg-gradient-to-br ${category.gradient} border-none shadow-lg`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-white rounded-xl shadow-md">
                        <Icon className="w-8 h-8 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          {category.title}
                        </h3>
                        <p className="text-sm text-teal-600 font-medium mt-1">
                          {category.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">What We Offer:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {category.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={onContactClick}
                      className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto"
                      size="lg"
                    >
                      Schedule Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <div className="p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Not Sure Which Service Is Right for You?
              </h3>
              <p className="text-teal-50 mb-6 max-w-2xl mx-auto">
                Our team is here to help you find the perfect match. Contact us today for a free consultation 
                and let us guide you to the right specialist for your needs.
              </p>
              <Button
                onClick={onContactClick}
                variant="secondary"
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100"
              >
                Get a Free Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}