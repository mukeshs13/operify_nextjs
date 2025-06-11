// AmpliconApplications.jsx

import ApplicationsLayout from '../../../../components/shared/ApplicationsLayout';

const AmpliconApplications = () => {
  const applicationItems = [
    "Microbial Diversity and Ecology- Offers comprehensive profiles of microbial communities by focusing on specific genes, such as the 16S rRNA gene in bacteria, to analyze microbial diversity, community structure, and interactions within various environments.",
    "Pathogen Detection and Identification- Provides rapid and precise identification of pathogens, including bacteria, viruses, and fungi, through the amplification and sequencing of targeted genomic regions linked to disease-causing organisms.",
    "Genetic Variation and Mutation Analysis- Targets specific genomic regions to detect genetic variations, mutations, or polymorphisms associated with diseases or traits, enabling focused genetic research and advancements in personalized medicine.",
    "Cancer Research and Diagnostics- Helps identify cancer-related mutations and genetic alterations by sequencing targeted genes or exons within tumor samples, enhancing our understanding of cancer biology and supporting the development of targeted treatments.",
    "Environmental Monitoring- Applies amplicon sequencing to evaluate the effects of environmental changes on microbial communities, track specific species, and assess ecosystem health and biodiversity.",
    "Plant Genomics- Explores genetic markers associated with important agronomic traits, aiding in crop improvement and breeding programs.",
    "Genome-Wide Association Studies (GWAS)- Links genetic variations to specific traits, advancing selective breeding and improving understanding of genetic disorders in livestock."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Amplicon Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default AmpliconApplications;