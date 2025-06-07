import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import TitleBar from '../../../components/shared/TitleBar';
import WGBSIntroduction from './components/WGBSIntroduction';
import WGBSAdvantages from './components/WGBSAdvantages';
import WGBSBioinformatics from './components/WGBSBioinformatics';
import WGBSApplications from './components/WGBSApplications';
import WGBSSpecifications from './components/WGBSSpecifications';

export default function WGBSPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Epigenomics Sequencing', href: '/dna-sequencing/epigenomics-sequencing' },
    { label: 'Whole Genome Bisulphite Sequencing', current: true }
  ];

  return (
    <>
      <Header />
      <TitleBar
        title="Whole Genome Bisulphite Sequencing (WGBS) - Comprehensive DNA Methylation Profiling"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <WGBSIntroduction />
        <WGBSAdvantages />
        <WGBSBioinformatics />
        <WGBSApplications />
        <WGBSSpecifications />
      </div>
      <Footer />
    </>
  );
}