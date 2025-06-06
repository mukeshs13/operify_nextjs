
import Header from "./components/Layout/Header";
import NGSSection from "./components/About/NGSSection";
import AdvantagesSection from "./components/Advantages/AdvantagesSection";
import ResearchSection from "./components/Research/ResearchSection.jsx";
import CertificationsSection from "./components/Certifications/CertificationsSection.jsx";
import HeroSection from "./Hero/HeroSection.jsx";
import Footer from "./components/Layout/Footer.jsx";
import CTASection from './components/CTA/CTASection';
import ClientsSection from './components/Clients/ClientsSection';

export default function Home() {
  return (
    // <div>
    //   <Header />
    //   <HeroSection />
    //   <NGSSection />
    //   <AdvantagesSection />
    //   <ResearchSection />
    //   <CertificationsSection />
    // </div>

    <div className="min-h-screen bg-white">
    <Header />
    <main>
      <HeroSection />
      <NGSSection />
      <AdvantagesSection />
      <ResearchSection />
      <CertificationsSection />
      <CTASection />
      <ClientsSection />
    </main>
    <Footer />
  </div>

  );
}
