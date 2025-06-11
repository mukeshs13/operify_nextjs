import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import TitleBar from '../../../components/shared/TitleBar';
import DenovoIntroduction from './components/DenovoIntroduction';
import DenovoAdvantages from './components/DenovoAdvantages';
import DenovoApplications from './components/DenovoApplications';
import DenovoSpecifications from './components/DenovoSpecifications';

export default function WholeGenomeDenovoPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Whole Genome Sequencing', href: '/dna-sequencing/whole-genome-sequencing' },
    { label: 'Whole Genome Denovo Sequencing', current: true }
  ];

  return (
    <>
      <Header />
      <TitleBar
        title="Whole Genome Denovo Sequencing"
        desc="Unlocking Genomes, Discovering Diversity"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="page-content">
        <DenovoIntroduction />
        <DenovoAdvantages />
        <DenovoApplications />
        <DenovoSpecifications />
      </div>
      <Footer />
    </>
  );
}