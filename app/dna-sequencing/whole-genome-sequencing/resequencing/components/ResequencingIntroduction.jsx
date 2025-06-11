// ResequencingIntroduction.jsx

import IntroductionLayout from '../../../../components/shared/IntroductionLayout';

const ResequencingIntroduction = () => {
  const contentItems = [
    "Whole Genome Resequencing involves sequencing an organism's entire genome where reference genome is already available. Unlike de novo sequencing, which builds a genome from scratch, resequencing focuses on identifying variations and differences compared to a previously known reference genome.",
    "The workflow involves DNA isolation, fragmentation, and sequencing to generate millions of short reads.",
    "These reads undergo alignment to a reference genome, followed by the analysis of genetic variations using advanced bioinformatics tools.",
    "It enables detailed analysis of genetic variations across diverse species like humans, plants, and bacteria."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/resequencing-workflow.png"
      imageAlt="Resequencing Workflow"
      badgeText="RESEQUENCING"
      badgeSubtext="Change only sequencing and analysis by adding it from whole exome"
      backgroundColor="#f8f9fa"
      badgeColor="bg-teal-600"
      useParagraphs={true}
    />
  );
};

export default ResequencingIntroduction;