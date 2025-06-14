// app/dna-sequencing/genome-mapping/optical-mapping/page.js
import TitleBar from '../../../components/shared/TitleBar';
import OpticalMappingIntroduction from './components/OpticalMappingIntroduction';
import OpticalMappingAdvantages from './components/OpticalMappingAdvantages';
import OpticalMappingApplications from './components/OpticalMappingApplications';
import OpticalMappingSpecifications from './components/OpticalMappingSpecifications';
import PageLayout from '../../../components/Layout/PageLayout';

export const metadata = {
  title: 'Optical Mapping - Operify Tech',
  description: 'Dissecting Gene Regulation with Advanced Optical Mapping',
  robots: 'noindex, follow',
};

export default function OpticalMappingPage() {
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
      label: 'Optical Mapping', 
      href: null, 
      current: true 
    }
  ];

  return (
    <PageLayout fixedHeader={true}>
      {/* Title Bar */}
      <TitleBar 
        title="Optical Mapping"
        desc="Dissecting Gene Regulation with Advanced Optical Mapping"
        breadcrumbs={breadcrumbs}
        backgroundImage="/images/bredcrumb.jpg"
      />

      {/* Page Content */}
      <div className="page-content">
        {/* Introduction Section */}
        <OpticalMappingIntroduction />

        {/* Advantages Section */}
        <OpticalMappingAdvantages />

        {/* Applications Section */}
        <OpticalMappingApplications />

        {/* Specifications Section */}
        <OpticalMappingSpecifications />
      </div>

    </PageLayout>
  );
}