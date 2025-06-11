// app/dna-sequencing/metagenomics-sequencing/components/MetagenomicsAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const MetagenomicsAdvantages = () => {
  const advantageItems = [
    "Offers a comprehensive view of microbial diversity in complex samples, capturing both known and novel species. NGS enables the parallel sequencing of thousands of organisms in a single run, providing high sequence coverage and detecting low-abundance microbes that may be missed or are cost-prohibitive with other techniques.",
    "Analyzes genomes directly from environmental samples without prior isolation or cultivation, overcoming the limitations of traditional culture-based methods. This approach is effective for studying microbial communities in their natural habitats.",
    "Reveals the metabolic capabilities and functional diversity of microbial communities, enhancing our understanding of ecosystem processes and microbial roles within various environments.",
    "Facilitates detailed genetic and ecological analysis, supporting studies on microbial interactions, evolution, and adaptation, with broad applications in environmental monitoring, biotechnology, agriculture, and human health."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Metagenomics Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default MetagenomicsAdvantages;