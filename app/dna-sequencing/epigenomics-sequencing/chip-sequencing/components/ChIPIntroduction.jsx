// ChIPIntroduction.jsx

import IntroductionLayout from '../../../../components/shared/IntroductionLayout';

const ChIPIntroduction = () => {
  const contentItems = [
    "ChIP-Seq provides a comprehensive genome-wide map of protein-nucleic acid interactions, offering detailed insights into protein-DNA binding events and chromatin organization.",
    "The workflow begins with chromatin preparation, which includes cross-linking proteins to DNA and fragmenting the chromatin. Protein-DNA complexes are then isolated using specific antibodies and purified.",
    "Following this, NGS libraries are created by adding adapters and amplifying the DNA, which is subsequently sequenced on an Illumina platform.",
    "It provides valuable insights into gene regulation, revealing dysregulated pathways in cancers, developmental processes, and other biological phenomena."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/chip-workflow.png"
      imageAlt="ChIP Workflow"
      badgeText="ChIP WORKFLOW"
      badgeSubtext="Workflow from Chromatin Immunoprecipitation (ChIP) Sequencing"
      backgroundColor="#f8f9fa"
      badgeColor="bg-teal-600"
      useParagraphs={true}
    />
  );
};

export default ChIPIntroduction;