import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import TitleBar from '../../../components/shared/TitleBar';
import AmpliconIntroduction from './components/AmpliconIntroduction';
import AmpliconAdvantages from './components/AmpliconAdvantages';
import AmpliconApplications from './components/AmpliconApplications';
import AmpliconSpecifications from './components/AmpliconSpecifications';

export default function AmpliconSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Enrichment Sequencing', href: '/dna-sequencing/enrichment-sequencing' },
    { label: 'Amplicon Sequencing (16S/18S/ITS)', current: true }
  ];

  return (
    <>
      <Header />
      <TitleBar
        title="Amplicon Sequencing (16S/18S/ITS)"
        desc="Explore Genetic Diversity at the Molecular Level"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <AmpliconIntroduction />
        <AmpliconAdvantages />
        <AmpliconApplications />
        <AmpliconSpecifications />
      </div>
      <Footer />
    </>
  );
}