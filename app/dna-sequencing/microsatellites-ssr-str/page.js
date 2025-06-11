// app/dna-sequencing/microsatellites-ssr-str/page.js
import TitleBar from '../../components/shared/TitleBar';
import MicrosatellitesIntroduction from './components/MicrosatellitesIntroduction';
import MicrosatellitesAdvantages from './components/MicrosatellitesAdvantages';
import MicrosatellitesApplications from './components/MicrosatellitesApplications';
import MicrosatellitesSpecifications from './components/MicrosatellitesSpecifications';
import PageLayout from '../../components/Layout/PageLayout';

export const metadata = {
  title: 'Microsatellites (SSR/STR) Based Genotyping - Operify Tech',
  description: 'Empowering Research with Microsatellite Markers',
  robots: 'noindex, follow',
};

export default function MicrosatellitesSSRSTRPage() {
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
      label: 'Microsatellites (SSR/STR)', 
      href: null, 
      current: true 
    }
  ];

  return (
    <PageLayout fixedHeader={true}>
      {/* Title Bar */}
      <TitleBar 
        title="Microsatellites (SSR/STR)"
        desc="Empowering Research with Microsatellite Markers"
        breadcrumbs={breadcrumbs}
        backgroundImage="/images/bredcrumb.jpg"
      />

      {/* Page Content */}
      <div className="page-content">
        {/* Introduction Section */}
        <MicrosatellitesIntroduction />

        {/* Advantages Section */}
        <MicrosatellitesAdvantages />

        {/* Applications Section */}
        <MicrosatellitesApplications />

        {/* Specifications Section */}
        <MicrosatellitesSpecifications />
      </div>
    </PageLayout>
  );
}