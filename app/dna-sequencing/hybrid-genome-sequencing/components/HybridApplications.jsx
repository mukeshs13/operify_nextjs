// app/dna-sequencing/hybrid-genome-sequencing/components/HybridApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const HybridApplications = () => {
  const applicationItems = [
    "Comprehensive Genome Mapping- Hybrid genome sequencing is used to create detailed genome maps by combining the strengths of both short-read and long-read technologies, leading to more complete and accurate assemblies of complex genomes.",
    "Structural Variant Detection- This approach is effective in identifying structural variants, such as large deletions, duplications, and insertions, which are often challenging to detect with short-read sequencing alone.",
    "Genetic Diversity and Evolutionary Studies- It facilitates the study of genetic diversity and evolutionary processes by providing high-resolution data on genomic variations across different species and populations."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Hybrid Genome Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default HybridApplications;