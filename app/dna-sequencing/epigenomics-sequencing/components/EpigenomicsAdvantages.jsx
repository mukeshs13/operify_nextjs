
// EpigenomicsAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const EpigenomicsAdvantages = () => {
  const advantageItems = [
    "Provides comprehensive analysis of epigenetic modifications including DNA methylation, histone modifications, and chromatin accessibility, offering insights into gene regulation mechanisms.",
    "Enables single-base resolution mapping of epigenetic marks across the genome, allowing for precise identification of regulatory elements and their modifications.",
    "Reveals epigenetic alterations associated with diseases, development, and environmental responses, providing insights into cellular memory and inheritance patterns.",
    "Identifies potential therapeutic targets and biomarkers for epigenetic-based treatments, supporting the development of personalized medicine approaches."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Epigenomics Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default EpigenomicsAdvantages;