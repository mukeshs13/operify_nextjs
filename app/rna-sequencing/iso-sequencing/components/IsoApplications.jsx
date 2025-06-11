// IsoApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const IsoApplications = () => {
  const applicationItems = [
    "Isoform sequencing is widely utilized across plants, animals, microbes, and humans.",
    "Gene Annotation- Enhances the annotation of complex genomes by providing precise information on transcript structures, helping to accurately define gene boundaries and functions.",
    "Alternative Splicing Analysis- Investigates alternative splicing events and isoform diversity, contributing to a deeper understanding of gene regulation and functional diversity.",
    "Functional Genomics- Supports functional studies by linking isoform-specific expression profiles to phenotypic traits, disease mechanisms, and developmental processes.",
    "Disease Research- Identifies aberrant isoforms associated with diseases, aiding in the discovery of biomarkers and therapeutic targets for conditions such as cancer and genetic disorders.",
    "Plant and Crop Improvement- It allows the haplotype resolution of complex polyploids like those in plants. Explores transcript diversity in plants and crops, contributing to better understanding of stress responses, developmental processes, and traits relevant for agriculture.",
    "Microbial Genomics- Studies microbial transcriptomes to uncover complex regulatory networks, metabolic pathways, and interactions within microbial communities, advancing our knowledge in microbiology and biotechnology."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Isoform Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default IsoApplications;