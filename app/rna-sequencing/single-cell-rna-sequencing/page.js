import TitleBar from '../../components/shared/TitleBar';
import SingleCellIntroduction from './components/SingleCellIntroduction';
import SingleCellAdvantages from './components/SingleCellAdvantages';
import SingleCellApplications from './components/SingleCellApplications';
import SingleCellSpecifications from './components/SingleCellSpecifications';
import PageLayout from '../../components/Layout/PageLayout';

export default function SingleCellRNASequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'Single Cell RNA Sequencing', href: '#', current: true }
  ];

  return (
    <PageLayout>
      <TitleBar 
        title="Single Cell RNA Sequencing"
        breadcrumbs={breadcrumbs}
      />
      <SingleCellIntroduction />
      <SingleCellAdvantages />
      <SingleCellApplications />
      <SingleCellSpecifications />
    </PageLayout>
  );
}