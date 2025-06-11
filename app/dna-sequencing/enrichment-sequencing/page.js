import PageLayout from '../../components/Layout/PageLayout';
import TitleBar from '../../components/shared/TitleBar';
import EnrichmentIntroduction from './components/EnrichmentIntroduction';
import EnrichmentAdvantages from './components/EnrichmentAdvantages';
import EnrichmentSpecifications from './components/EnrichmentSpecifications';

export default function EnrichmentSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Enrichment Sequencing', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar
        title="Enrichment Sequencing"
        desc="Enriched Genome, Enriched Insights"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <EnrichmentIntroduction />
        <EnrichmentAdvantages />
        <EnrichmentSpecifications />
      </div>
    </PageLayout>
  );
}