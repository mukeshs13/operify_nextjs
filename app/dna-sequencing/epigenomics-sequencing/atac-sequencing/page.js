import TitleBar from '../../../components/shared/TitleBar';
import ATACIntroduction from './components/ATACIntroduction';
import ATACAdvantages from './components/ATACAdvantages';
import ATACBioinformatics from './components/ATACBioinformatics';
import ATACApplications from './components/ATACApplications';
import ATACSpecifications from './components/ATACSpecifications';
import PageLayout from '../../../components/Layout/PageLayout';

export default function ATACSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Epigenomics Sequencing', href: '/dna-sequencing/epigenomics-sequencing' },
    { label: 'ATAC (Assay for Transposase-Accessible Chromatin) Sequencing', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar
        title="ATAC (Assay for Transposase-Accessible Chromatin) Sequencing"
        desc="Chromatin for Gene Regulation Insights"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <ATACIntroduction />
        <ATACAdvantages />
        <ATACBioinformatics />
        <ATACApplications />
        <ATACSpecifications />
      </div>
    </PageLayout>
  );
}