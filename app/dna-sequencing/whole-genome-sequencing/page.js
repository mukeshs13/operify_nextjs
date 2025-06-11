// app/dna-sequencing/whole-genome-sequencing/page.js (Updated)
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TitleBar from '../../components/shared/TitleBar';
import WGSIntroduction from './components/WGSIntroduction';
import WGSAdvantages from './components/WGSAdvantages';
import WGSSpecifications from './components/WGSSpecifications';

export default function WholeGenomeSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Whole Genome Sequencing', current: true }
  ];

  return (
    <>
      <Header />
      <TitleBar
        title="Whole Genome Sequencing"
        desc="Whole Genome, Whole Insights"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <WGSIntroduction />
        <WGSAdvantages />
        <WGSSpecifications />
      </div>
      <Footer />
    </>
  );
}