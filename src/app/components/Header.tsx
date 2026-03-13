import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { specialists } from '../data/specialists';

interface HeaderProps {
  onContactClick: () => void;
  onNavigate?: (page: string, specialistId?: string) => void;
}

export function Header({ onContactClick, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialistsDropdownOpen, setSpecialistsDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
    setSpecialistsDropdownOpen(false);
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    onContactClick();
  };

  const handleSpecialistClick = (specialistId: string) => {
    if (onNavigate) {
      onNavigate('specialist', specialistId);
    }
    setMobileMenuOpen(false);
    setSpecialistsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            {/* Logo - Hidden on mobile */}
            <button
              onClick={() => onNavigate ? onNavigate('home') : scrollToSection('home')}
              className="hidden sm:block hover:opacity-80 transition-opacity"
            >
              <Logo />
            </button>
            
            <button
              onClick={() => onNavigate ? onNavigate('home') : scrollToSection('home')}
              className="text-xl sm:text-2xl font-semibold text-teal-700 hover:text-teal-800 transition-colors"
            >
              Aafiya Medical Centre
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pharmacy')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Pharmacy
            </button>
            
            {/* Specialists Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSpecialistsDropdownOpen(!specialistsDropdownOpen)}
                onMouseEnter={() => setSpecialistsDropdownOpen(true)}
                className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-1"
              >
                Specialists
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {specialistsDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                  onMouseLeave={() => setSpecialistsDropdownOpen(false)}
                >
                  <button
                    onClick={() => scrollToSection('specialists')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors font-medium"
                  >
                    All Specialists
                  </button>
                  <div className="border-t border-gray-100 my-2"></div>
                  {specialists.map((specialist) => (
                    <button
                      key={specialist.id}
                      onClick={() => handleSpecialistClick(specialist.id)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors text-sm"
                    >
                      {specialist.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              onClick={handleContactClick}
              className="bg-teal-600 hover:bg-teal-700"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pharmacy')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Pharmacy
            </button>
            
            {/* Mobile Specialists Dropdown */}
            <div>
              <button
                onClick={() => setSpecialistsDropdownOpen(!specialistsDropdownOpen)}
                className="flex items-center justify-between w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <span>Specialists</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${specialistsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {specialistsDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <button
                    onClick={() => scrollToSection('specialists')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm font-medium"
                  >
                    All Specialists
                  </button>
                  {specialists.map((specialist) => (
                    <button
                      key={specialist.id}
                      onClick={() => handleSpecialistClick(specialist.id)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm"
                    >
                      {specialist.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleContactClick}
              className="block w-full text-left px-4 py-2 bg-teal-600 text-white hover:bg-teal-700 rounded"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
