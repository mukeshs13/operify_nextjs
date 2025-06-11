// app/dna-sequencing/whole-genome-sequencing/page.js (Updated)
import TitleBar from '../../components/shared/TitleBar';
import WGSIntroduction from './components/WGSIntroduction';
import WGSAdvantages from './components/WGSAdvantages';
import WGSSpecifications from './components/WGSSpecifications';
import PageLayout from '@/app/components/Layout/PageLayout';

export default function WholeGenomeSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Whole Genome Sequencing', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar
        title="Whole Genome Sequencing"
        desc="Whole Genome, Whole Insights"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <WGSIntroduction />
        <WGSAdvantages />
        <WGSSpecifications />
      </div>
    </PageLayout>
  );
}