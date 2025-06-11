// SRNAApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const SRNAApplications = () => {
  const applicationItems = [
    "sRNA sequencing is widely utilized across plants, animals, microbes, and humans.",
    "Cancer Research- Identifies novel small RNAs and biomarkers, revealing their roles in tumor development and progression, and aiding in the discovery of potential therapeutic targets.",
    "Developmental Biology- Examines small RNA expression during development to understand gene regulation, cellular differentiation, and developmental disorders.",
    "Genetic Studies- Analyzes allele-specific expression and variations in small RNAs to gain insights into genetic regulation and variability.",
    "Microbial Genomics- Investigates small RNA profiles in bacteria, aiding in the understanding of gene regulation, host-pathogen interactions, and antibiotic resistance.",
    "Neuroscience- Explores small RNA involvement in brain function and neurodevelopmental disorders, offering insights into neural regulation and disease mechanisms.",
    "Immunology- Studies small RNA expression in immune cells to understand immune responses, autoimmune diseases, and immune system regulation.",
    "Environmental and Ecological Research- Analyzes the impact of environmental changes on small RNA profiles in plants, animals, and microbes, supporting studies on adaptation and stress responses."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Small RNA (sRNA) sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default SRNAApplications;