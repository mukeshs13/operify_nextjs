// app/dna-sequencing/enrichment-sequencing/whole-exome/page.js
import TitleBar from '../../../components/shared/TitleBar';
import ExomeIntroduction from './components/ExomeIntroduction';
import ExomeAdvantages from './components/ExomeAdvantages';
import ExomeApplications from './components/ExomeApplications';
import ExomeSpecifications from './components/ExomeSpecifications';
import PageLayout from '../../../components/Layout/PageLayout';

export default function WholeExomeSequencingPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Research", href: "/dna-sequencing" },
    { label: "Enrichment Sequencing", href: "/dna-sequencing/enrichment-sequencing" },
    { label: "Whole Exome Sequencing", current: true }
  ];

  return (
    <PageLayout fixedHeader={true}>
      <div className="page-wrapper">
        <TitleBar 
          title="Whole Exome Sequencing"
          desc="Focused Insights, Comprehensive Impact"
          breadcrumbs={breadcrumbs}
          backgroundImage="/images/bredcrumb.jpg"
        />
        
        <div className="page-content">
          <ExomeIntroduction />
          <ExomeAdvantages />
          <ExomeApplications />
          <ExomeSpecifications />
        </div>
      </div>
    </PageLayout>
  );
}