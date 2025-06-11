// app/dna-sequencing/genome-mapping/hi-c-mapping/page.js
import TitleBar from '../../../components/shared/TitleBar';
import HiCMappingIntroduction from './components/HiCMappingIntroduction';
import HiCMappingAdvantages from './components/HiCMappingAdvantages';
import HiCMappingApplications from './components/HiCMappingApplications';
import HiCMappingSpecifications from './components/HiCMappingSpecifications';
import PageLayout from '../../../components/Layout/PageLayout';

export const metadata = {
  title: 'High-throughput Chromosome Conformation Capture (Hi-C) Mapping - Operify Tech',
  description: 'Unravel the 3D Genome: Discover Connections, Define Structures',
  robots: 'noindex, follow',
};

export default function HiCMappingPage() {
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
      href: '/dna-sequencing/genome-mapping', 
      current: false 
    },
    { 
      label: 'Hi-C Mapping', 
      href: null, 
      current: true 
    }
  ];

  return (
    <PageLayout fixedHeader={true}>
      {/* Title Bar */}
      <TitleBar 
        title="High-throughput Chromosome Conformation Capture (Hi-C) Mapping"
        desc="Unravel the 3D Genome"
        breadcrumbs={breadcrumbs}
        backgroundImage="/images/bredcrumb.jpg"
      />

      {/* Page Content */}
      <div className="page-content">
        {/* Introduction Section */}
        <HiCMappingIntroduction />

        {/* Advantages Section */}
        <HiCMappingAdvantages />

        {/* Applications Section */}
        <HiCMappingApplications />

        {/* Specifications Section */}
        <HiCMappingSpecifications />
      </div>
    </PageLayout>
  );
}