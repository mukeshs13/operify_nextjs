// app/rna-sequencing/lncrna-sequencing/page.js
import TitleBar from '../../components/shared/TitleBar';
import LncRNAIntroduction from './components/LncRNAIntroduction';
import LncRNAAdvantages from './components/LncRNAAdvantages';
import LncRNABioinformatics from './components/LncRNABioinformatics';
import LncRNAApplications from './components/LncRNAApplications';
import LncRNASpecifications from './components/LncRNASpecifications';
import PageLayout from '../../components/Layout/PageLayout';

export default function LncRNASequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'lncRNA Sequencing', href: '#', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar 
        title="LncRNA Sequencing"
        breadcrumbs={breadcrumbs}
      />
      <LncRNAIntroduction />
      <LncRNAAdvantages />
      <LncRNABioinformatics />
      <LncRNAApplications />
      <LncRNASpecifications />
    </PageLayout>
  );
}