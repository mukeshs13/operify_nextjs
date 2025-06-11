import PageLayout from "./components/Layout/PageLayout";
import NGSSection from "./components/About/NGSSection";
import ResearchSection from "./components/Research/ResearchSection.jsx";
import CertificationsSection from "./components/Certifications/CertificationsSection.jsx";
import HeroSection from "./Hero/HeroSection.jsx";
import CTASection from './components/CTA/CTASection';
import ClientsSection from './components/Clients/ClientsSection';

export default function Home() {
  return (
    <PageLayout fixedHeader={true}>
      <HeroSection />
      <NGSSection />
      <ResearchSection />
      <CertificationsSection />
      <CTASection />
      <ClientsSection />
    </PageLayout>
  );
}