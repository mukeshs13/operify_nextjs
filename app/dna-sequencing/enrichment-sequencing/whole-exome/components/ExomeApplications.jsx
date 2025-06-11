// app/dna-sequencing/enrichment-sequencing/whole-exome/components/ExomeApplications.jsx
import ApplicationsLayout from '../../../../components/shared/ApplicationsLayout';

const ExomeApplications = () => {
  const applicationItems = [
    "Genetic Disorder Diagnosis- Identifies genetic mutations associated with rare and inherited disorders by focusing on the exonic regions where most disease-related variants occur. This enables accurate diagnosis and personalized treatment plans.",
    "Cancer Research- Detects somatic mutations in cancer genomes, providing insights into tumor biology, identifying potential biomarkers for early detection, and guiding targeted therapies for more effective treatment.",
    "Drug Development- Assists in the discovery of new drug targets and the development of precision medicine by revealing the genetic underpinnings of diseases and how genetic variations affect drug responses.",
    "Population Genetics- Explores genetic variations in diverse populations to understand genetic diversity, evolutionary processes, and the genetic basis of complex traits and diseases, aiding in public health and epidemiological studies.",
    "Functional Genomics- Provides insights into gene function and regulation by identifying coding mutations that impact protein function, contributing to our understanding of gene-disease relationships and mechanisms of gene action.",
    "Plant Genomics- Supports crop improvement and plant breeding programs by revealing the genetic basis of desirable traits and enhancing the understanding of plant genomes."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Whole Exome Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default ExomeApplications;