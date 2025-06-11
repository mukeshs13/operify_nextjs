// MetatranscriptomicsApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const MetatranscriptomicsApplications = () => {
  const applicationItems = [
    "Metatranscriptomics sequencing is widely used in microbial genomics to explore microbial diversity, functional potentials, and ecological interactions across environments from soil to human microbiomes.",
    "Environmental Monitoring- Used to assess microbial community dynamics and functional potential in diverse environments like soil, oceans, and freshwater. It helps track microbial contributions to ecosystem processes and environmental health.",
    "Biogeochemical Cycling- Investigates the roles of microorganisms in nutrient cycling processes, such as carbon, nitrogen, and sulfur cycles, providing insights into how microbes influence these critical ecological functions.",
    "Disease Research- Explores the microbial contributions to human health and disease by studying the microbial communities in the human gut, oral cavity, or other body sites, revealing potential biomarkers and therapeutic targets.",
    "Biotechnology and Industry- Facilitates the discovery of novel enzymes and metabolic pathways from microbial communities, which can be applied in biotechnology, agriculture, and industrial processes.",
    "Microbial Interactions- Examines interactions between different microorganisms within complex communities, helping to understand symbiotic relationships, competition, and microbial networks.",
    "Pathogen Detection- Aids in identifying and characterizing pathogenic microbes and their gene expression profiles during infections, enhancing our ability to monitor and manage microbial diseases."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Metatranscriptome Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default MetatranscriptomicsApplications;