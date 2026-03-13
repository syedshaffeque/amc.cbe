import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { SpecialistDetail } from "./components/SpecialistDetail";
import { ContactDialog } from "./components/ContactDialog";
import { Footer } from "./components/Footer";
import { specialists } from "./data/specialists";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'specialist'>('home');
  const [selectedSpecialistId, setSelectedSpecialistId] = useState<string | null>(null);

  const handleNavigate = (page: string, specialistId?: string) => {
    if (page === 'home') {
      setCurrentPage('home');
      setSelectedSpecialistId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'specialist' && specialistId) {
      setCurrentPage('specialist');
      setSelectedSpecialistId(specialistId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedSpecialistId(null);
    setTimeout(() => {
      const element = document.getElementById('specialists');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const selectedSpecialist = specialists.find(s => s.id === selectedSpecialistId);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onContactClick={() => setContactOpen(true)}
        onNavigate={handleNavigate}
      />
      
      <main>
        {currentPage === 'home' && (
          <HomePage
            onContactClick={() => setContactOpen(true)}
            onSpecialistClick={(id) => handleNavigate('specialist', id)}
          />
        )}
        
        {currentPage === 'specialist' && selectedSpecialist && (
          <SpecialistDetail
            specialist={selectedSpecialist}
            onBack={handleBackToHome}
            onContactClick={() => setContactOpen(true)}
          />
        )}
      </main>
      
      <Footer />
      
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
      />
    </div>
  );
}
