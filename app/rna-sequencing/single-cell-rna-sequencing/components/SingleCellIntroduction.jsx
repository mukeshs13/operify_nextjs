// app/rna-sequencing/single-cell-rna-sequencing/components/SingleCellIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const SingleCellIntroduction = () => {
  const contentItems = [
    "Single Cell RNA Sequencing (scRNA-seq) analyzes gene expression at the resolution of individual cells, allowing for the exploration of cellular transcriptomic heterogeneity and the discovery of rare cell types within complex tissues.",
    "The workflow involves isolating individual cells from a sample, often using techniques like fluorescence-activated cell sorting (FACS), followed by RNA extraction, library preparation and (or) all the mRNA molecules in each cell are specifically barcoded either by capturing individual cells in a gel-emulsions (Gem; 10X) or Split-pool approach.",
    "The bioinformatics pipeline includes data preprocessing, which involves quality control and normalization of the sequencing reads. The reads are then aligned to a reference genome or transcriptome to identify gene expression levels in each cell. Subsequent analysis involves clustering of cells based on expression profiles, differential gene expression analysis, and the identification of cell types and states.",
    "Single-cell high-resolution transcriptome profiling offers valuable insights into gene regulatory networks and unveils diverse gene expression patterns within individual cells across cell cultures, tissues, and organs."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      badgeSubtext="Workflow from Single Cell RNA Sequencing"
      useParagraphs={true}
    />
  );
};

export default SingleCellIntroduction;
