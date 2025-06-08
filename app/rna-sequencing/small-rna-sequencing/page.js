// app/rna-sequencing/small-rna-sequencing/page.js

import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TitleBar from '../../components/shared/TitleBar';
import SRNAIntroduction from './components/SRNAIntroduction';
import SRNAAdvantages from './components/SRNAAdvantages';
import SRNABioinformatics from './components/SRNABioinformatics';
import SRNAApplications from './components/SRNAApplications';
import SRNASpecifications from './components/SRNASpecifications';

export default function SmallRNASequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'Small RNA (sRNA) sequencing', href: '#', current: true }
  ];

  return (
    <div>
      <Header />
      <TitleBar 
        title="Small RNA (sRNA) sequencing"
        breadcrumbs={breadcrumbs}
      />
      <SRNAIntroduction />
      <SRNAAdvantages />
      <SRNABioinformatics />
      <SRNAApplications />
      <SRNASpecifications />
      <Footer />
    </div>
  );
}