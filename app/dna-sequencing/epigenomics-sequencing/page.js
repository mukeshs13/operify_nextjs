import TitleBar from '../../components/shared/TitleBar';
import EpigenomicsIntroduction from './components/EpigenomicsIntroduction';
import EpigenomicsAdvantages from './components/EpigenomicsAdvantages';
import EpigenomicsSpecifications from './components/EpigenomicsSpecifications';
import PageLayout from '../../components/Layout/PageLayout';

export default function EpigenomicsSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Epigenomics Sequencing', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar
        title="Epigenomics Sequencing"
        desc="Explore Cellular Memory"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <EpigenomicsIntroduction />
        <EpigenomicsAdvantages />
        <EpigenomicsSpecifications />
      </div>
    </PageLayout>
  );
}