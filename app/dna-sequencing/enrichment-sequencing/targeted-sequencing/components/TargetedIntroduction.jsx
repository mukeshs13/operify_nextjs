// TargetedIntroduction.jsx

import IntroductionLayout from '../../../../components/shared/IntroductionLayout';

const TargetedIntroduction = () => {
  const contentItems = [
    "Targeted DNA Sequencing (also know as Gene Panel Sequencing) concentrate on specific genes or genomic regions of interest, allowing for in-depth analysis of mutations that are most relevant to particular diseases or conditions.",
    "The process begins with the selection of specific genes or regions, followed by the amplification of these targets through PCR. Sequencing is then performed on the amplified regions, ensuring high coverage and accuracy.",
    "Advanced bioinformatics tools are employed to analyze the sequencing data, providing detailed insights into genetic variants, their potential impact, and relevance to disease.",
    "Targeted sequencing is widely used in clinical settings for the diagnosis of genetic disorders, personalized medicine, and cancer genomics, providing actionable insights that can directly impact patient care."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/targeted-sequencing-overview.png"
      imageAlt="Targeted Sequencing Overview"
      badgeText="TARGETED SEQUENCING"
      badgeSubtext="Targeted Region of Interest"
      backgroundColor="#f8f9fa"
      badgeColor="bg-teal-600"
      useParagraphs={true}
    />
  );
};

export default TargetedIntroduction;