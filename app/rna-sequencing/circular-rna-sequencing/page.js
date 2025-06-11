import TitleBar from '../../components/shared/TitleBar';
import PageLayout from '../../components/Layout/PageLayout'
import CircularIntroduction from './components/CircularIntroduction';
import CircularAdvantages from './components/CircularAdvantages';
import CircularApplications from './components/CircularApplications';
import CircularSpecifications from './components/CircularSpecifications';

export default function CircularRNASequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'Circular RNA Sequencing', href: '#', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar 
        title="Circular RNA Sequencing"
        breadcrumbs={breadcrumbs}
      />
      <CircularIntroduction />
      <CircularAdvantages />
      <CircularApplications />
      <CircularSpecifications />
    </PageLayout>
  );
}