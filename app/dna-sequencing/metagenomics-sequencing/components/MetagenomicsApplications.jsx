// app/dna-sequencing/metagenomics-sequencing/components/MetagenomicsApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const MetagenomicsApplications = () => {
  const applicationItems = [
    "Environmental Monitoring- Assessing microbial diversity in natural environments, tracking changes in response to environmental factors, and monitoring ecosystem health.",
    "Biotechnology- Discovering novel enzymes, bioactive compounds, and metabolic pathways from microbial communities for applications in bioremediation, biofuel production, and pharmaceuticals.",
    "Agriculture- Studying soil microbiomes to improve crop yield, enhance nutrient cycling, and develop sustainable agricultural practices.",
    "Human Health- Investigating the human microbiome to understand its role in health and disease, including studies on gut microbiota, antibiotic resistance, and personalized medicine.",
    "Ecological Studies- Exploring microbial interactions, community dynamics, and ecosystem functions in diverse habitats, from oceans to terrestrial environments.",
    "Microbial Ecology- Analyzing community structure, biodiversity, and adaptation strategies of microbes in various ecosystems, advancing our understanding of microbial ecology and evolution."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Metagenomics Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default MetagenomicsApplications;