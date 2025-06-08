import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TitleBar from '../../components/shared/TitleBar';
import MetatranscriptomicsIntroduction from './components/MetatranscriptomicsIntroduction';
import MetatranscriptomicsAdvantages from './components/MetatranscriptomicsAdvantages';
import MetatranscriptomicsApplications from './components/MetatranscriptomicsApplications';
import MetatranscriptomicsSpecifications from './components/MetatranscriptomicsSpecifications';

export default function MetatranscriptomicsSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'Metatranscriptomics Sequencing', href: '#', current: true }
  ];

  return (
    <div>
      <Header />
      <TitleBar 
        title="Metatranscriptomics Sequencing"
        breadcrumbs={breadcrumbs}
      />
      <MetatranscriptomicsIntroduction />
      <MetatranscriptomicsAdvantages />
      <MetatranscriptomicsApplications />
      <MetatranscriptomicsSpecifications />
      <Footer />
    </div>
  );
}