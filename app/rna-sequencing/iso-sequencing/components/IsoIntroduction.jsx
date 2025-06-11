// app/rna-sequencing/iso-sequencing/components/IsoIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const IsoIntroduction = () => {
  const contentItems = [
    "Iso-Seq, or Isoform Sequencing, leverages PCR free PacBio's Single Molecule, Real-Time (SMRT) sequencing technology to deliver detailed and accurate insights into RNA transcripts. PCR free SMRT technology produces long reads of upto 25Mbps length with 99.9% base level accuracy through circular consensus sequencing (CCS) mode.",
    "PacBio's SMRT sequencing technology enables the reading of full-length cDNA molecules in a single pass, allowing for the accurate identification of various isoforms, including alternative splicing events and post-transcriptional modifications. This approach minimizes errors and provides a high-resolution map of transcript structures.",
    "The process begins with the isolation of high-quality RNA, which is then converted into cDNA followed by sequencing using PacBio SMRT technology.",
    "The bioinformatics analysis of Iso-Seq data involves assembling full-length transcripts, annotating them, and comparing them to reference genomes or existing databases. This detailed analysis reveals the complexity of gene expression, including novel isoforms and splice variants, and aids in understanding their functional roles in various biological processes.",
    "Iso-Seq using PacBio is particularly valuable for exploring gene expression at a granular level, discovering novel transcripts, and enhancing annotations of complex genomes."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      badgeSubtext="image from Iso Sequencing using PacBio"
      useParagraphs={true}
    />
  );
};

export default IsoIntroduction;