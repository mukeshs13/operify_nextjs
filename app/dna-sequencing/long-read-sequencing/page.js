import TitleBar from '../../components/shared/TitleBar';
import LongReadIntroduction from './components/LongReadIntroduction';
import LongReadComparison from './components/LongReadComparison';
import LongReadNanopore from './components/LongReadNanopore';
import LongReadAdvantages from './components/LongReadAdvantages';
import LongReadApplications from './components/LongReadApplications';
import LongReadSpecifications from './components/LongReadSpecifications';
import PageLayout from '../../components/Layout/PageLayout';

export default function LongReadSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'DNA Sequencing', href: '/dna-sequencing' },
    { label: 'Whole Genome Long Read Sequencing', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar
        title="Whole Genome Long Read Sequencing"
        desc="Sequencing the Complete Genome, Long and Clear"
        breadcrumbs={breadcrumbs}
      />

      <div className="page-content">
        <LongReadIntroduction /> {/* 7a */}
        <LongReadComparison />   
        <LongReadNanopore />     
        <LongReadAdvantages />   
        <LongReadApplications /> 
        <LongReadSpecifications /> 
      </div>
    </PageLayout>
  );
}
