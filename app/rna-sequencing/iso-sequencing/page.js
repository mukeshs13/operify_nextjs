import TitleBar from '../../components/shared/TitleBar';
import IsoIntroduction from './components/IsoIntroduction';
import IsoAdvantages from './components/IsoAdvantages';
import IsoApplications from './components/IsoApplications';
import IsoSpecifications from './components/IsoSpecifications';
import PageLayout from '../../components/Layout/PageLayout';

export default function IsoSequencingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/', current: false },
    { label: 'RNA Sequencing', href: '/rna-sequencing', current: false },
    { label: 'Iso Sequencing using PacBio', href: '#', current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <TitleBar 
        title="Iso Sequencing using PacBio"
        breadcrumbs={breadcrumbs}
      />
      <IsoIntroduction />
      <IsoAdvantages />
      <IsoApplications />
      <IsoSpecifications />
    </PageLayout>
  );
}