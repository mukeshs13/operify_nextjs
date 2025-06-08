import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TitleBar from '../../components/shared/TitleBar';
import DegradomeIntroduction from './components/DegradomeIntroduction';
import DegradomeAdvantages from './components/DegradomeAdvantages';
import DegradomeApplications from './components/DegradomeApplications';
import DegradomeSpecifications from './components/DegradomeSpecifications';

export default function DegradomeSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'Degradome Sequencing', href: '#', current: true }
  ];

  return (
    <div>
      <Header />
      <TitleBar 
        title="Degradome Sequencing"
        breadcrumbs={breadcrumbs}
      />
      <DegradomeIntroduction />
      <DegradomeAdvantages />
      <DegradomeApplications />
      <DegradomeSpecifications />
      <Footer />
    </div>
  );
}