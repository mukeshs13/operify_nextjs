// app/rna-sequencing/lncrna-sequencing/components/LncRNAIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const LncRNAIntroduction = () => {
  const contentItems = [
    "Long non-coding RNAs (lncRNAs) are a class of RNA molecules longer than 200 nucleotides that do not code for proteins. Based on their position and direction of transcription, lncRNAs are further classified into subtypes such as antisense, intergenic, overlapping, intronic, bidirectional, and processed. These RNAs play essential roles in regulating gene expression at various levels, impacting a wide range of cellular processes.",
    "lncRNA sequencing workflow starts with the removal of ribosomal RNA (rRNA) from the total RNA sample to isolate lncRNAs and mRNAs. The isolated RNA is then subjected to library preparation and high-throughput sequencing. Through specific computational pipelines lncRNAs will be identified during bio-informatic analysis.",
    "The bioinformatics pipeline for lncRNA sequencing involves the alignment of sequencing data to reference genomes, identification of lncRNAs, quantification of their expression level, and other downstream analyses.",
    "lncRNA sequencing uncovers their roles in gene regulation and highlights their various functions, including chromatin remodeling, transcriptional control, nucleosome repositioning, and post-transcriptional processing."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      badgeSubtext="Brochure lncRNA Sequencing"
      useParagraphs={true}
    />
  );
};

export default LncRNAIntroduction;