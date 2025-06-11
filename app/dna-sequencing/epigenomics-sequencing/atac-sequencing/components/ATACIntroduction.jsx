// ATACIntroduction.jsx

import IntroductionLayout from '../../../../components/shared/IntroductionLayout';

const ATACIntroduction = () => {
  const contentItems = [
    "ATAC-seq identifies open chromatin regions, marking transcriptionally active areas in the genome, and provides insights into chromatin accessibility and gene expression regulation.",
    "The workflow uses Tn5 transposase to tag and amplify open chromatin (transposase-accessible) regions, followed by DNA fragmentation, purification, library construction, and sequencing.",
    "The sequenced fragments are analysed using advanced bioinformatics tools to characterize the regulatory landscape, including chromatin accessibility, nucleosome mapping, and transcription factor binding.",
    "Assist in numerous applications like biomarker discovery, identification of novel enhancer, analysis of cell-type specific regulation, evolutionary studies and comparative epigenomic studies."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/atac-workflow.png"
      imageAlt="ATAC Workflow"
      badgeText="ATAC WORKFLOW"
      badgeSubtext="Workflow from Assay for Transposase-Accessible Chromatin (ATAC) Sequencing"
      backgroundColor="#f8f9fa"
      badgeColor="bg-teal-600"
      useParagraphs={true}
    />
  );
};

export default ATACIntroduction;