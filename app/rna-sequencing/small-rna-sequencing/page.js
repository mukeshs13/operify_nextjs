// app/rna-sequencing/small-rna-sequencing/page.js
import TitleBar from '../../components/shared/TitleBar';
import SRNAIntroduction from './components/SRNAIntroduction';
import SRNAAdvantages from './components/SRNAAdvantages';
import SRNABioinformatics from './components/SRNABioinformatics';
import SRNAApplications from './components/SRNAApplications';
import SRNASpecifications from './components/SRNASpecifications';
import PageLayout from '../../components/Layout/PageLayout';

export default function SmallRNASequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'Small RNA (sRNA) sequencing', href: '#', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar 
        title="Small RNA (sRNA) sequencing"
        breadcrumbs={breadcrumbs}
      />
      <SRNAIntroduction />
      <SRNAAdvantages />
      <SRNABioinformatics />
      <SRNAApplications />
      <SRNASpecifications />
    </PageLayout>
  );
}