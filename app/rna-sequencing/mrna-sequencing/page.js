// app/rna-sequencing/mrna-sequencing/page.js
import TitleBar from '../../components/shared/TitleBar';
import MRNAIntroduction from './components/MRNAIntroduction';
import MRNAAdvantages from './components/MRNAAdvantages';
import MRNAApplications from './components/MRNAApplications';
import MRNASpecifications from './components/MRNASpecifications';
import PageLayout from '../../components/Layout/PageLayout';

export default function MRNASequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'mRNA Sequencing', href: '#', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar 
        title="mRNA Sequencing"
        breadcrumbs={breadcrumbs}
      />
      <MRNAIntroduction />
      <MRNAAdvantages />
      <MRNAApplications />
      <MRNASpecifications />
    </PageLayout>
  );
}