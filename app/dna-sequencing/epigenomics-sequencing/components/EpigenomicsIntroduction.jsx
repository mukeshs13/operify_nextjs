// EpigenomicsIntroduction.jsx

import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const EpigenomicsIntroduction = () => {
  const contentItems = [
    "Epigenomics Sequencing is a comprehensive approach to analyze epigenetic modifications across genomes, providing enriched genomic view of cellular memory and gene regulation.",
    "The workflow includes isolating DNA, fragmenting it, capturing the regions of interest followed by sequencing to produce millions of short reads.",
    "In the bioinformatics analysis, these reads are aligned to a known reference genome to detect genomic alterations and epigenetic modifications.",
    "It is a powerful tool for diverse genomic studies, capable of sequencing humans, livestock, plants, bacteria, and disease-related microbes."
  ];

  const serviceTypes = [
    "Whole Genome Bisulphite Sequencing (WGBS)",
    "Chip Sequencing",
    "ATAC Sequencing"
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/epigenomics-overview.png"
      imageAlt="Epigenomics Overview"
      badgeText="EPIGENOMICS"
      serviceTypes={serviceTypes}
      backgroundColor="#f8f9fa"
      badgeColor="bg-teal-600"
      useParagraphs={true}
    />
  );
};

export default EpigenomicsIntroduction;