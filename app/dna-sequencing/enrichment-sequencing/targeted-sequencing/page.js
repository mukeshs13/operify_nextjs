import TitleBar from '../../../components/shared/TitleBar';
import TargetedIntroduction from './components/TargetedIntroduction';
import TargetedAdvantages from './components/TargetedAdvantages';
import TargetedApplications from './components/TargetedApplications';
import TargetedSpecifications from './components/TargetedSpecifications';
import PageLayout from '../../../components/Layout/PageLayout';

export default function TargetedSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Enrichment Sequencing', href: '/dna-sequencing/enrichment-sequencing' },
    { label: 'Targeted DNA Sequencing', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar
        title="Targeted DNA Sequencing"
        desc="Pinpoint Precision for Your Genetic Insights"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <TargetedIntroduction />
        <TargetedAdvantages />
        <TargetedApplications />
        <TargetedSpecifications />
      </div>
    </PageLayout>
  );
}