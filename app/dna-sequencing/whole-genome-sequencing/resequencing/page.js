import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import TitleBar from '../../../components/shared/TitleBar';
import ResequencingIntroduction from './components/ResequencingIntroduction';
import ResequencingAdvantages from './components/ResequencingAdvantages';
import ResequencingApplications from './components/ResequencingApplications';
import ResequencingSpecifications from './components/ResequencingSpecifications';

export default function WholeGenomeResequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Whole Genome Sequencing', href: '/dna-sequencing/whole-genome-sequencing' },
    { label: 'Whole Genome ReSequencing', current: true }
  ];

  return (
    <>
      <Header />
      <TitleBar
        title="Whole Genome ReSequencing - Unraveling Genomic Complexity with Re-Sequencing"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <ResequencingIntroduction />
        <ResequencingAdvantages />
        <ResequencingApplications />
        <ResequencingSpecifications />
      </div>
      <Footer />
    </>
  );
}