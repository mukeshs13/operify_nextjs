// app/rna-sequencing/whole-transcriptome-sequencing/components/WTSApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const WTSApplications = () => {
  const applicationItems = [
    "Developmental Biology- Explores gene expression changes during development, providing insights into cellular differentiation and organismal growth.",
    "Genetic Research- Enables allele-specific expression analysis, enhancing the understanding of genetic variability and gene regulation.",
    "Microbial Studies- Examines microbial gene expression, host-pathogen interactions, and antibiotic resistance, providing insights into microbial ecology and disease prevention.",
    "Human Health- Identifies gene fusions, mutations, and expression profiles in cancer, neurological disorders, and other diseases, aiding in the discovery of biomarkers and therapeutic targets.",
    "Immunology- Analyzes immune response pathways and gene expression in various immune cell types, contributing to improving our understanding of immune system function and disorders.",
    "Environmental Biology- Assesses the impact of environmental changes on gene expression in plants, animals, and microbes, aiding in ecological and evolutionary studies.",
    "Plant Genomics- Investigates gene expression during growth, stress responses, and development, aiding in crop improvement and understanding plant-environment interactions.",
    "Animal Genomics- Explores gene regulation, development, and disease mechanisms across various animal species, contributing to veterinary research and comparative genomics."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Whole Transcriptome Sequencing (WTS)"
      applicationItems={applicationItems}
    />
  );
};

export default WTSApplications;