// ATACAdvantages.jsx
import AdvantagesLayout from '../../../../components/shared/AdvantagesLayout';

const ATACAdvantages = () => {
  const advantageItems = [
    "ATAC-seq has become the method of choice for studying chromatin accessibility due to its efficiency and robust performance.",
    "Requires only 50,000 cells per sample, offering high sensitivity and making it ideal for studies with limited cell populations. This technique is versatile, applicable to both bulk tissue and single-cell analysis.",
    "Features simplified experimental steps, offering good reproducibility and a high success rate in generating reliable data.",
    "Simultaneously reveals the genomic locations of open chromatin, DNA-binding proteins, and transcription factor binding site interactions, providing a holistic view of chromatin accessibility."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of ATAC Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default ATACAdvantages;
