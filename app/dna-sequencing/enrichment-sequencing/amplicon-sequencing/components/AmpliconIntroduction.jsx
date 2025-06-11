// AmpliconIntroduction.jsx

import IntroductionLayout from '../../../../components/shared/IntroductionLayout';

const AmpliconIntroduction = () => {
  const contentItems = [
    "Amplicon sequencing focuses on the targeted amplification and sequencing of specific DNA regions enabling researchers to analyze genetic variation in specific genomic regions.",
    "The workflow begins with DNA isolation, followed by PCR amplification of target regions. Barcoded strand-specific libraries are then prepared using adapters, allowing different samples to be pooled together.",
    "This multiplexing enables the simultaneous targeting of hundreds of genes from various libraries in a single run.",
    "This method is particularly useful for studying genetic variation, microbial communities, and evolutionary relationships. By selectively amplifying regions of interest, such as 16S rRNA for bacteria or ITS regions for fungi."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/amplicon-workflow.png"
      imageAlt="Amplicon Workflow"
      badgeText="AMPLICON SEQUENCING"
      badgeSubtext="Brochure to be modified from Amplicon Sequencing"
      backgroundColor="#f8f9fa"
      badgeColor="bg-teal-600"
      useParagraphs={true}
    />
  );
};

export default AmpliconIntroduction;