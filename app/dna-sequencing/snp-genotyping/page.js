// app/dna-sequencing/snp-genotyping/page.js
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import TitleBar from '../../components/shared/TitleBar';
import SNPIntroduction from './components/SNPIntroduction';
import SNPAdvantages from './components/SNPAdvantages';
import SNPApplications from './components/SNPApplications';
import SNPSpecifications from './components/SNPSpecifications';

export default function SNPGenotypingPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Research", href: "/dna-sequencing" },
    { label: "SNP-based Genotyping", current: true }
  ];

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <TitleBar 
          title="SNP-based Genotyping"
          desc="From Genomes to Traits: Precision through SNPs"
          breadcrumbs={breadcrumbs}
          backgroundImage="/images/bredcrumb.jpg"
        />
        
        <div className="page-content">
          <SNPIntroduction />
          <SNPAdvantages />
          <SNPApplications />
          <SNPSpecifications />
        </div>
      </div>
      <Footer />
    </>
  );
}