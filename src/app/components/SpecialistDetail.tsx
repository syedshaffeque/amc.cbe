import { ArrowLeft, GraduationCap, Award, Clock, Languages, CheckCircle, Briefcase, BookOpen, BadgeCheck, Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Specialist, CareerTimelineItem } from '../data/specialists';

interface SpecialistDetailProps {
  specialist: Specialist;
  onBack: () => void;
  onContactClick: () => void;
}

const getTimelineIcon = (type: CareerTimelineItem['type']) => {
  switch (type) {
    case 'work':
      return Briefcase;
    case 'education':
      return BookOpen;
    case 'certification':
      return BadgeCheck;
    case 'achievement':
      return Trophy;
    default:
      return Briefcase;
  }
};

const getTimelineColor = (type: CareerTimelineItem['type']) => {
  switch (type) {
    case 'work':
      return 'bg-teal-600';
    case 'education':
      return 'bg-blue-600';
    case 'certification':
      return 'bg-purple-600';
    case 'achievement':
      return 'bg-amber-600';
    default:
      return 'bg-teal-600';
  }
};

export function SpecialistDetail({ specialist, onBack, onContactClick }: SpecialistDetailProps) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to All Specialists</span>
        </button>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar - Specialist Info */}
          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <div className="p-6 space-y-6">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <ImageWithFallback
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {specialist.name}
                  </h1>
                  <p className="text-lg text-teal-600 font-medium mb-2">
                    {specialist.title}
                  </p>
                  <p className="text-gray-600">
                    {specialist.specialization}
                  </p>
                </div>

                <div className="space-y-3 border-t pt-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Education</p>
                      <p className="text-sm text-gray-600">{specialist.education}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Experience</p>
                      <p className="text-sm text-gray-600">{specialist.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Languages className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Languages</p>
                      <p className="text-sm text-gray-600">{specialist.languages.join(', ')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Availability</p>
                      <p className="text-sm text-gray-600">{specialist.availability}</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={onContactClick}
                  className="w-full bg-teal-600 hover:bg-teal-700"
                  size="lg"
                >
                  Book Appointment
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">
                {specialist.bio}
              </p>
            </section>

            {/* Qualifications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Qualifications & Certifications</h2>
              <Card className="p-6">
                <ul className="space-y-3">
                  {specialist.qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            {/* Areas of Expertise */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {specialist.areasOfExpertise.map((area, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Therapeutic Approach */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Therapeutic Approach</h2>
              <Card className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {specialist.approach}
                </p>
              </Card>
            </section>

            {/* Career Timeline */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Journey</h2>
              <Card className="p-6 sm:p-8">
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-4 sm:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-teal-200 via-teal-300 to-teal-200"></div>
                  
                  <div className="space-y-8">
                    {specialist.careerTimeline.map((item, index) => {
                      const Icon = getTimelineIcon(item.type);
                      const colorClass = getTimelineColor(item.type);
                      
                      return (
                        <div key={index} className="relative pl-12 sm:pl-20">
                          {/* Timeline dot with icon */}
                          <div className={`absolute left-0 sm:left-4 w-8 h-8 ${colorClass} rounded-full flex items-center justify-center shadow-lg`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          
                          {/* Content */}
                          <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                              <div className="flex-1">
                                <h3 className="font-bold text-gray-900 text-lg mb-1">
                                  {item.title}
                                </h3>
                                <p className="text-teal-600 font-medium text-sm">
                                  {item.organization}
                                </p>
                              </div>
                              <div className="text-right">
                                <span className={`inline-block px-3 py-1 ${colorClass} text-white text-xs font-semibold rounded-full`}>
                                  {item.year}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                              <span className="inline-block w-1 h-1 bg-gray-400 rounded-full"></span>
                              {item.location}
                            </p>
                            
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {item.description}
                            </p>
                            
                            {/* Type badge */}
                            <div className="mt-3">
                              <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded capitalize">
                                {item.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </section>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-teal-50 to-teal-100 border-teal-200">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-600 mb-6">
                  Take the first step towards better mental health. Book an appointment with {specialist.name} today.
                </p>
                <Button
                  onClick={onContactClick}
                  className="bg-teal-600 hover:bg-teal-700"
                  size="lg"
                >
                  Schedule Consultation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
