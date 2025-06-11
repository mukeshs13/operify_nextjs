// app/dna-sequencing/whole-genome-sequencing/components/WGSIntroduction.jsx

import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const WGSIntroduction = () => {
  const contentItems = [
    "Whole Genome Sequencing (WGS) is a comprehensive approach to analyze entire genomes base-by-base, providing a complete genomic view.",
    "The workflow includes isolating DNA, fragmenting it, and sequencing to produce millions of short reads.",
    "In the bioinformatics analysis, these reads are then assembled to construct the genome or aligned to a known reference genome.",
    "It is a powerful tool for diverse genomic studies, capable of sequencing humans, livestock, plants, bacteria, and disease-related microbes."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/sample-process-steps.png"
      imageAlt="Sample Process Steps"
      useParagraphs={true}
    />
  );
};

export default WGSIntroduction;