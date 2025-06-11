// app/dna-sequencing/snp-genotyping/components/SNPIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const SNPIntroduction = () => {
  const contentItems = [
    "SNP-based genotyping identifies single nucleotide polymorphisms (SNPs) across the genome, offering insights into genetic diversity, disease associations, and trait inheritance. It is widely applied in population genetics, evolutionary biology, and plant and animal breeding."
  ];

  const serviceTypes = [
    "DNA Sequencing",
    "RNA Sequencing", 
    "Genomics Services"
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/snp-genotyping-overview.png"
      imageAlt="SNP Genotyping Overview"
      badgeText="ISO CERTIFIED"
      serviceTypes={serviceTypes}
      backgroundColor="#f8f9fa"
      badgeColor="bg-teal-600"
      useParagraphs={true}
    />
  );
};

export default SNPIntroduction;