// app/rna-sequencing/small-rna-sequencing/components/SRNAIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const SRNAIntroduction = () => {
  const contentItems = [
    "Small RNA sequencing (sRNA-seq) is designed to identify and analyze small non-coding RNAs (ncRNAs) that are under 200 nucleotides in length. These small RNAs, including microRNAs (miRNAs), small interfering RNAs (siRNAs), small nucleolar RNAs (snoRNAs), PIWI-interacting RNAs (piRNAs), and trans-acting siRNAs (tasiRNAs), play crucial roles in gene silencing and post-transcriptional regulation.",
    "The sRNA-seq workflow involves isolating miRNAs from samples, followed by preparing libraries with specific adapters and sequencing them using high-throughput platforms.",
    "The bioinformatics pipeline for sRNA-seq encompasses data preprocessing, alignment with reference genomes, and identification of small RNA species. This analysis includes differential expression studies, characterization of novel small RNAs, and pathway analysis to gain functional insights into sRNA-target interactions.",
    "Facilitates the discovery of novel small RNAs and offers detailed insights into their expression and functions. It links post-transcriptional regulation to phenotypic outcomes, aiding in the understanding of disease mechanisms and the identification of new biomarkers."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      badgeSubtext="from brochure Small RNA sequencing"
      useParagraphs={true}
    />
  );
};

export default SRNAIntroduction;