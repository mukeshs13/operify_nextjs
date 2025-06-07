import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TitleBar from '../../components/shared/TitleBar';
import EpigenomicsIntroduction from './components/EpigenomicsIntroduction';
import EpigenomicsAdvantages from './components/EpigenomicsAdvantages';
import EpigenomicsSpecifications from './components/EpigenomicsSpecifications';

export default function EpigenomicsSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Epigenomics Sequencing', current: true }
  ];

  return (
    <>
      <Header />
      <TitleBar
        title="Epigenomics Sequencing - Explore Cellular Memory"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <EpigenomicsIntroduction />
        <EpigenomicsAdvantages />
        <EpigenomicsSpecifications />
      </div>
      <Footer />
    </>
  );
}