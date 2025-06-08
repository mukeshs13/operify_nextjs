// app/rna-sequencing/mrna-sequencing/page.js
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import TitleBar from '../../components/shared/TitleBar';
import MRNAIntroduction from './components/MRNAIntroduction';
import MRNAAdvantages from './components/MRNAAdvantages';
import MRNAApplications from './components/MRNAApplications';
import MRNASpecifications from './components/MRNASpecifications';

export default function MRNASequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'mRNA Sequencing', href: '#', current: true }
  ];

  return (
    <div>
      <Header />
      <TitleBar 
        title="mRNA Sequencing"
        breadcrumbs={breadcrumbs}
      />
      <MRNAIntroduction />
      <MRNAAdvantages />
      <MRNAApplications />
      <MRNASpecifications />
      <Footer />
    </div>
  );
}