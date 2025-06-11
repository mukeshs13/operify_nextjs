import TitleBar from '../../components/shared/TitleBar';
import DegradomeIntroduction from './components/DegradomeIntroduction';
import DegradomeAdvantages from './components/DegradomeAdvantages';
import DegradomeApplications from './components/DegradomeApplications';
import DegradomeSpecifications from './components/DegradomeSpecifications';
import PageLayout from '../../components/Layout/PageLayout';

export default function DegradomeSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'Degradome Sequencing', href: '#', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar 
        title="Degradome Sequencing"
        breadcrumbs={breadcrumbs}
      />
      <DegradomeIntroduction />
      <DegradomeAdvantages />
      <DegradomeApplications />
      <DegradomeSpecifications />
    </PageLayout>
  );
}