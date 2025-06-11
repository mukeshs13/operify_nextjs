import TitleBar from '../../../components/shared/TitleBar';
import ResequencingIntroduction from './components/ResequencingIntroduction';
import ResequencingAdvantages from './components/ResequencingAdvantages';
import ResequencingApplications from './components/ResequencingApplications';
import ResequencingSpecifications from './components/ResequencingSpecifications';
import PageLayout from '../../../components/Layout/PageLayout';

export default function WholeGenomeResequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Whole Genome Sequencing', href: '/dna-sequencing/whole-genome-sequencing' },
    { label: 'Whole Genome ReSequencing', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar
        title="Whole Genome ReSequencing"
        desc="Unraveling Genomic Complexity with Re-Sequencing"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <ResequencingIntroduction />
        <ResequencingAdvantages />
        <ResequencingApplications />
        <ResequencingSpecifications />
      </div>
    </PageLayout>
  );
}