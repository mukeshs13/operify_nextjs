// app/rna-sequencing/degradome-sequencing/components/DegradomeIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const DegradomeIntroduction = () => {
  const contentItems = [
    "Degradome sequencing, also called Parallel Analysis of RNA Ends (PARE), is a high-throughput technique to analyze RNA degradation products, uncovering RNA stability, miRNA targets, and regulatory networks.",
    "Degradome Sequencing Workflow combines next-generation sequencing (NGS) with a modified 5' RACE method, involving RNA extraction, adapter ligation to capture degradation products, cDNA synthesis, and high-throughput sequencing to map RNA cleavage sites.",
    "Bioinformatics analysis for Degradome Sequencing include data preprocessing, aligning reads to reference genomes, identifying miRNA/ta-siRNA cleavage sites, and quantifying cleaved targets, revealing RNA decay dynamics and regulatory mechanisms.",
    "The method facilitates the discovery of novel miRNAs and ta-siRNAs, studies on miRNA-mediated gene regulation, and comparative RNA decay analysis across species, contributing to a comprehensive understanding of RNA life cycles."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      badgeSubtext="Brochure from Degradome sequencing"
      useParagraphs={true}
    />
  );
};

export default DegradomeIntroduction;