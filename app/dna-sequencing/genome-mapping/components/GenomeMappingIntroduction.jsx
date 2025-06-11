// app/dna-sequencing/genome-mapping/components/GenomeMappingIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const GenomeMappingIntroduction = () => {
  const contentItems = [
    "Genome Mapping focuses on determining the structure and order of genes within a genome, providing comprehensive insights into genomic organization and structural variations.",
    "The workflow includes isolating DNA, fragmenting it, capturing the regions of interest followed by sequencing to produce millions of short reads.",
    "In the bioinformatics analysis, these reads are aligned to a known reference genome to detect genomic alterations and structural arrangements.",
    "It is a powerful tool for diverse genomic studies, capable of sequencing humans, livestock, plants, bacteria, and disease-related microbes."
  ];

  const serviceTypes = [
    "HiC Mapping",
    "Optical Sequencing"
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/genome-mapping-overview.png"
      imageAlt="Genome Mapping Overview"
      badgeText="GENOME MAPPING"
      serviceTypes={serviceTypes}
      backgroundColor="#f8f9fa"
      badgeColor="bg-teal-600"
      useParagraphs={true}
    />
  );
};

export default GenomeMappingIntroduction;