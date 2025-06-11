// app/rna-sequencing/whole-transcriptome-sequencing/page.js
import TitleBar from '../../components/shared/TitleBar';
import WTSIntroduction from './components/WTSIntroduction';
import WTSAdvantages from './components/WTSAdvantages';
import WTSApplications from './components/WTSApplications';
import WTSSpecifications from './components/WTSSpecifications';
import PageLayout from '../../components/Layout/PageLayout';

export default function WholeTranscriptomeSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'Whole Transcriptome (Total RNA) Sequencing', href: '#', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar 
        title="Whole Transcriptome (Total RNA) Sequencing"
        breadcrumbs={breadcrumbs}
      />
      <WTSIntroduction />
      <WTSAdvantages />
      <WTSApplications />
      <WTSSpecifications />
    </PageLayout>
  );
}