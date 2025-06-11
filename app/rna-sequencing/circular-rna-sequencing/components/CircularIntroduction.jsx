// app/rna-sequencing/circular-rna-sequencing/components/CircularIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const CircularIntroduction = () => {
  const contentItems = [
    "Circular RNA sequencing (circRNA-seq) focuses on identifying and characterizing non-coding circular RNAs formed through back-splicing events. These circRNAs regulate gene expression by acting as miRNA sponges, influence alternative splicing, modulate transcription, interact with proteins, and serve as potential biomarkers and therapeutic targets.",
    "As compared to Linear RNAs, circRNAs are covalently closed loops with no free ends, which provides them with enhanced stability and distinct regulatory functions in gene expression and cellular processes.",
    "The workflow starts with isolating total RNA from the sample, which includes both linear and circular RNAs. Linear RNAs are then removed through ribosomal RNA (rRNA) depletion or exonuclease treatment to enrich the circular RNA fraction. Next, the RNA is circularized, and sequencing adapters are added during library preparation. The final step involves sequencing the prepared libraries.",
    "Bioinformatics analysis for circRNA sequencing involves preprocessing data and mapping reads to a reference genome to identify back-splicing junctions. Computational tools are then used to quantify circRNA expression, discover novel circRNAs, and perform downstream analysis."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      badgeSubtext="image from Circular RNA Sequencing"
      useParagraphs={true}
    />
  );
};

export default CircularIntroduction;