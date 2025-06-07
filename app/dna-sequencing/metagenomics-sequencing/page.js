// app/dna-sequencing/metagenomics-sequencing/page.js
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TitleBar from '../../components/shared/TitleBar';
import MetagenomicsIntroduction from './components/MetagenomicsIntroduction';
import MetagenomicsAdvantages from './components/MetagenomicsAdvantages';
import MetagenomicsApplications from './components/MetagenomicsApplications';
import MetagenomicsSpecifications from './components/MetagenomicsSpecifications';

export const metadata = {
  title: 'Metagenomics Sequencing - Operify Tech',
  description: 'Exploring Earth\'s Microbial Frontiers from Soil to Ocean',
  robots: 'noindex, follow',
};

export default function MetagenomicsSequencingPage() {
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
      label: 'Metagenomics Sequencing', 
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
        title="Metagenomics Sequencing - Exploring Earth's Microbial Frontiers from Soil to Ocean"
        breadcrumbs={breadcrumbs}
        backgroundImage="/images/bredcrumb.jpg"
      />

      {/* Page Content */}
      <div className="page-content">
        {/* Introduction Section */}
        <MetagenomicsIntroduction />

        {/* Advantages Section */}
        <MetagenomicsAdvantages />

        {/* Applications Section */}
        <MetagenomicsApplications />

        {/* Specifications Section */}
        <MetagenomicsSpecifications />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}