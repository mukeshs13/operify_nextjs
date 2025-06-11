// app/dna-sequencing/metagenomics-sequencing/page.js
import TitleBar from '../../components/shared/TitleBar';
import MetagenomicsIntroduction from './components/MetagenomicsIntroduction';
import MetagenomicsAdvantages from './components/MetagenomicsAdvantages';
import MetagenomicsApplications from './components/MetagenomicsApplications';
import MetagenomicsSpecifications from './components/MetagenomicsSpecifications';
import PageLayout from '../../components/Layout/PageLayout';

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
    <PageLayout fixedHeader={true}>
      {/* Title Bar */}
      <TitleBar 
        title="Metagenomics Sequencing"
        desc="Exploring Earth's Microbial Frontiers from Soil to Ocean"
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
    </PageLayout>
  );
}