// ResequencingAdvantages.jsx
import AdvantagesLayout from '../../../../components/shared/AdvantagesLayout';

const ResequencingAdvantages = () => {
  const advantageItems = [
    "Provides a detailed examination of an organism's entire genome, revealing all genetic variations compared to a reference genome.",
    "Enables accurate identification of single nucleotide polymorphisms (SNPs), insertions, deletions, and structural variants, crucial for understanding genetic diversity and disease mechanisms.",
    "Facilitates the discovery of genetic markers associated with diseases, guiding personalized treatment approaches.",
    "Supports diverse studies including evolutionary biology, agricultural genetics, and microbial genomics, enhancing insights into genetic adaptations and relationships across species."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Whole Genome ReSequencing"
      advantageItems={advantageItems}
    />
  );
};

export default ResequencingAdvantages;