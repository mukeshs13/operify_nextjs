import TitleBar from '../../components/shared/TitleBar';
import MetatranscriptomicsIntroduction from './components/MetatranscriptomicsIntroduction';
import MetatranscriptomicsAdvantages from './components/MetatranscriptomicsAdvantages';
import MetatranscriptomicsApplications from './components/MetatranscriptomicsApplications';
import MetatranscriptomicsSpecifications from './components/MetatranscriptomicsSpecifications';
import PageLayout from '../../components/Layout/PageLayout';

export default function MetatranscriptomicsSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'Metatranscriptomics Sequencing', href: '#', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar 
        title="Metatranscriptomics Sequencing"
        breadcrumbs={breadcrumbs}
      />
      <MetatranscriptomicsIntroduction />
      <MetatranscriptomicsAdvantages />
      <MetatranscriptomicsApplications />
      <MetatranscriptomicsSpecifications />
    </PageLayout>
  );
}