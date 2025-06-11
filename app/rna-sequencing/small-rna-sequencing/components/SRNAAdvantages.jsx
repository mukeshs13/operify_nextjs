// SRNAAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const SRNAAdvantages = () => {
  const advantageItems = [
    "Provides a comprehensive view of the small RNA landscape by capturing a broad range of small RNA species, including miRNAs, siRNAs, snoRNAs, piRNAs, and tasiRNAs.",
    "Facilitates comparative studies by allowing the comparison of small RNA expression profiles across different conditions or species, supporting investigations into developmental, environmental, and disease-related changes.",
    "Identifies previously unmapped small RNAs and isoforms, as well as novel biomarkers, expanding the scope of genetic research and potential clinical applications.",
    "Enhances understanding of how post-transcriptional regulation affects phenotypes and offers detailed functional insights into small RNA-target interactions and their roles in various cellular pathways, improving the understanding of gene regulation and function."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Small RNA (sRNA) sequencing (miRNA)"
      advantageItems={advantageItems}
    />
  );
};

export default SRNAAdvantages;