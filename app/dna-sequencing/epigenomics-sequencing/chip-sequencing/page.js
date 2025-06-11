import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import TitleBar from '../../../components/shared/TitleBar';
import ChIPIntroduction from './components/ChIPIntroduction';
import ChIPAdvantages from './components/ChIPAdvantages';
import ChIPBioinformatics from './components/ChIPBioinformatics';
import ChIPApplications from './components/ChIPApplications';
import ChIPSpecifications from './components/ChIPSpecifications';

export default function ChIPSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Epigenomics Sequencing', href: '/dna-sequencing/epigenomics-sequencing' },
    { label: 'ChIP (Chromatin immunoprecipitation) Sequencing', current: true }
  ];

  return (
    <>
      <Header />
      <TitleBar
        title="ChIP (Chromatin immunoprecipitation) Sequencing"
        desc="Dissecting Gene Regulation with ChIP-Seq"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <ChIPIntroduction />
        <ChIPAdvantages />
        <ChIPBioinformatics />
        <ChIPApplications />
        <ChIPSpecifications />
      </div>
      <Footer />
    </>
  );
}