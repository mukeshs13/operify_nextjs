// WGBSIntroduction.jsx

import IntroductionLayout from '../../../../components/shared/IntroductionLayout';

const WGBSIntroduction = () => {
  const contentItems = [
    "Whole Genome Bisulphite Sequencing (WGBS) maps DNA methylation patterns across an entire genome at single-base resolution, offering insights into transcriptional activity and gene regulation.",
    "The workflow includes DNA isolation, followed by treatment with sodium bisulfite (Gold standard method). This treatment converts unmethylated cytosines into uracils, which are subsequently amplified by PCR and sequenced.",
    "In bioinformatics analysis, sequencing data is aligned to a reference genome using advanced bioinformatics tools to determine the methylation status at CpG, CHG, and CHH sites.",
    "Valuable in epigenetic research for its ability to provide high-resolution insights into the regulatory mechanisms of the genome, offering a deeper understanding of cellular functions and molecular pathways."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/wgbs-workflow.png"
      imageAlt="WGBS Workflow"
      badgeText="WGBS WORKFLOW"
      badgeSubtext="Workflow from Whole Genome Bisulfite Sequencing (WGBS)"
      backgroundColor="#f8f9fa"
      badgeColor="bg-teal-600"
      useParagraphs={true}
    />
  );
};

export default WGBSIntroduction;