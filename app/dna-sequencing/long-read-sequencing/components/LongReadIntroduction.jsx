// LongReadIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const LongReadIntroduction = () => {
  const contentItems = [
    "Whole Genome Long Read Sequencing captures an organism's entire genome in a single read using extended strands, allowing precise analysis of complex genomic regions and structural variations.",
    "Technologies like Oxford Nanopore and PacBio enable real-time sequencing with high accuracy. The process involves DNA isolation, fragmentation, and advanced bioinformatics analysis for accurate variant detection.",
    "This workflow supports sequencing for humans, animals, plants, bacteria, and disease-related microbes using long continuous reads for better genome assembly."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/long-read-intro.png"
      imageAlt="Long Read Sequencing"
      badgeText="LONG READ SEQUENCING"
      badgeSubtext="Oxford Nanopore & PacBio Platforms"
      backgroundColor="#f8f9fa"
      badgeColor="bg-teal-600"
      useParagraphs={true}
    />
  );
};

export default LongReadIntroduction;