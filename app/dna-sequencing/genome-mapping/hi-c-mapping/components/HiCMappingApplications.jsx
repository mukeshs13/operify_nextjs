// app/dna-sequencing/genome-mapping/hi-c-mapping/components/HiCMappingApplications.jsx
import ApplicationsLayout from '../../../../components/shared/ApplicationsLayout';

const HiCMappingApplications = () => {
  const applicationItems = [
    "Gene Regulation Studies- Helps in identifying interactions between distant regulatory elements, such as enhancers and promoters, providing insights into gene expression and transcriptional regulation mechanisms.",
    "Cancer Research- Widely used to study alterations in chromatin structure associated with cancer, aiding in the discovery of genomic rearrangements, fusion genes, and disrupted regulatory networks that contribute to tumorigenesis.",
    "Developmental Biology- Reveals how genome architecture changes and influences gene expression patterns critical for tissue differentiation and organ development.",
    "Epigenetics and Disease Mechanisms- Helps in understanding how epigenetic changes, such as histone modifications and DNA methylation, affect chromatin conformation and contribute to diseases like neurodevelopmental disorders, metabolic diseases, and genetic syndromes.",
    "Comparative Genomics- Allows researchers to compare 3D genome structures across different species, helping to unravel evolutionary changes in genome organization and how they influence biological diversity."
  ];

  return (
    <ApplicationsLayout
      title="Applications of High-throughput Chromosome Conformation Capture (Hi-C) Mapping"
      applicationItems={applicationItems}
    />
  );
};

export default HiCMappingApplications;