// app/dna-sequencing/enrichment-sequencing/whole-exome/components/ExomeIntroduction.jsx

import IntroductionLayout from '../../../../components/shared/IntroductionLayout';

const ExomeIntroduction = () => {
  const contentItems = [
    "Whole Exome Sequencing (WES) is sequencing of only protein-coding regions (<2% of the genome, also known as exome), which accounts for 80-85% of disease-related variants.",
    "The workflow involves DNA isolation, fragmentation, capturing exonic regions, and sequencing to generate millions of short reads. In the bioinformatics analysis, these reads undergo alignment to a reference genome, followed by the variant calling (SNVs, Indels) and data analysis.",
    "Pinpoints potential disease-causing mutations, providing valuable insights for population genetics, genetic disease research, and cancer studies.",
    "Extensively utilized in diagnostic setting to detect clinically relevant genomic alterations associated with phenotype of the patient."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/dna.jpg"
      imageAlt="DNA Structure"
      useParagraphs={true}
    />
  );
};

export default ExomeIntroduction;