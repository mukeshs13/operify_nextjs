// app/dna-sequencing/hybrid-genome-sequencing/components/HybridIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const HybridIntroduction = () => {
  const contentItems = [
    "Hybrid sequencing integrates the accuracy of short-read sequencing (Illumina) with the comprehensive coverage of long-read sequencing (PacBio or Nanopore), ensuring detailed and complete genome assemblies.",
    "This approach involves sequencing the same sample with both technologies, which means different libraries are prepared for both the technology followed by sequencing.",
    "Following sequencing, advanced bioinformatics tools are used to align and integrate the long and short reads, enhancing variant detection and improving the resolution of complex genomic regions.",
    "Hybrid sequencing is applicable to a wide range of research areas, from complex genome assemblies to resolving repetitive regions and improving the quality of reference genomes."
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

export default HybridIntroduction;