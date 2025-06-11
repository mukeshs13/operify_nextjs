// app/dna-sequencing/genome-mapping/page.js
import TitleBar from '../../components/shared/TitleBar';
import GenomeMappingIntroduction from './components/GenomeMappingIntroduction';
import GenomeMappingAdvantages from './components/GenomeMappingAdvantages';
import GenomeMappingSpecifications from './components/GenomeMappingSpecifications';
import PageLayout from '../../components/Layout/PageLayout';

export const metadata = {
  title: 'Genome Mapping - Operify Tech',
  description: 'Unlocking Genomic Secrets, One Map at a Time',
  robots: 'noindex, follow',
};

export default function GenomeMappingPage() {
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
      label: 'Genome Mapping', 
      href: null, 
      current: true 
    }
  ];

  return (
    <PageLayout fixedHeader={true}>
      {/* Title Bar */}
      <TitleBar 
        title="Genome Mapping"
        desc="Unlocking Genomic Secrets, One Map at a Time"
        breadcrumbs={breadcrumbs}
        backgroundImage="/images/bredcrumb.jpg"
      />

      {/* Page Content */}
      <div className="page-content">
        {/* Introduction Section */}
        <GenomeMappingIntroduction />

        {/* Advantages Section */}
        <GenomeMappingAdvantages />

        {/* Specifications Section */}
        <GenomeMappingSpecifications />
      </div>
    </PageLayout>
  );
}