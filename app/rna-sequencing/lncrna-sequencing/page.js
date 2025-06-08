// app/rna-sequencing/lncrna-sequencing/page.js

import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TitleBar from '../../components/shared/TitleBar';
import LncRNAIntroduction from './components/LncRNAIntroduction';
import LncRNAAdvantages from './components/LncRNAAdvantages';
import LncRNABioinformatics from './components/LncRNABioinformatics';
import LncRNAApplications from './components/LncRNAApplications';
import LncRNASpecifications from './components/LncRNASpecifications';

export default function LncRNASequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'lncRNA Sequencing', href: '#', current: true }
  ];

  return (
    <div>
      <Header />
      <TitleBar 
        title="lncRNA Sequencing"
        breadcrumbs={breadcrumbs}
      />
      <LncRNAIntroduction />
      <LncRNAAdvantages />
      <LncRNABioinformatics />
      <LncRNAApplications />
      <LncRNASpecifications />
      <Footer />
    </div>
  );
}