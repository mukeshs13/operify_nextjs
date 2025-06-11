// app/dna-sequencing/hybrid-genome-sequencing/components/HybridAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const HybridAdvantages = () => {
  const advantageItems = [
    "Combines long-read and short-read sequencing for more complete and accurate genome assemblies, effectively resolving complex regions and reducing gaps.",
    "Balances the cost efficiency of short-read sequencing with the detailed resolution of long-read sequencing, making it a budget-friendly choice for comprehensive genome analysis.",
    "Enhances detection of structural variants, such as large insertions and deletions, improving the understanding of genetic diversity and disease mechanisms.",
    "Provides better coverage of challenging genomic features, like high GC content and repetitive sequences, by leveraging the strengths of both sequencing technologies."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Hybrid Genome Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default HybridAdvantages;