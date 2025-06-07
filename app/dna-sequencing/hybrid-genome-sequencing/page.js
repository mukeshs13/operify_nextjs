// app/dna-sequencing/snp-genotyping/page.js
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TitleBar from '../../components/shared/TitleBar';
import HybridIntroduction from './components/HybridIntroduction';
import HybridAdvantages from './components/HybridAdvantages';
import HybridBioinformatics from './components/HybridBioinformatics';
import HybridApplications from './components/HybridApplications';
import HybridSpecifications from './components/HybridSpecifications';

export const metadata = {
  title: 'Hybrid Genome Sequencing - Operify Tech',
  description: 'Unifying Technologies for Deeper Genomic Clarity - Comprehensive Genomics Through Combined Power',
  robots: 'noindex, follow',
};

export default function HybridGenomeSequencingPage() {
  const breadcrumbs = [
    { 
      label: 'Home', 
      href: '/', 
      current: false 
    },
    { 
      label: 'Research', 
      href: '/dna-sequencing', 
      current: false 
    },
    { 
      label: 'Hybrid Genome Sequencing', 
      href: null, 
      current: true 
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Header */}
      <Header />

      {/* Title Bar */}
      <TitleBar 
        title="Hybrid Genome Sequencing - Unifying Technologies for Deeper Genomic Clarity"
        breadcrumbs={breadcrumbs}
        backgroundImage="/images/bredcrumb.jpg"
      />

      {/* Page Content */}
      <div className="page-content">
        {/* Introduction Section */}
        <HybridIntroduction />

        {/* Advantages Section */}
        <HybridAdvantages />

        {/* Bioinformatics Pipeline Section */}
        <HybridBioinformatics />

        {/* Applications Section */}
        <HybridApplications />

        {/* Specifications Section */}
        <HybridSpecifications />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}