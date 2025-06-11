// app/dna-sequencing/snp-genotyping/components/SNPAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const SNPAdvantages = () => {
  const advantageItems = [
    "Allows for precise identification of genetic variations at a single nucleotide level, enabling detailed mapping of genetic diversity.",
    "Provides an efficient, cost-effective solution for analyzing thousands of SNPs across large populations, ideal for high-throughput studies.",
    "SNP markers are stable and abundant across genomes, providing high data quality, reproducibility, and scalability, which are essential for reliable genetic studies, comparative analyses across multiple populations or species, and make SNP-based genotyping a powerful tool for both research and applied genomics.",
    "Can reveal associations between genetic variations and complex traits, allowing researchers to identify genetic contributors to health, disease, or productivity in agriculture."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of SNP-based Genotyping"
      advantageItems={advantageItems}
    />
  );
};

export default SNPAdvantages;
