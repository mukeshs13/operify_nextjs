// ChIPAdvantages.jsx
import AdvantagesLayout from '../../../../components/shared/AdvantagesLayout';

const ChIPAdvantages = () => {
  const advantageItems = [
    "Offers detailed genome-wide mapping of protein-DNA interactions, identifying binding sites of transcription factors, regulators, and other DNA-associated proteins.",
    "Utilizes specific antibodies to precisely capture and sequence protein-DNA complexes, providing accurate reflections of in vivo binding events.",
    "Reveals critical insights into gene regulation and chromatin dynamics, aiding in the understanding of gene expression, regulatory mechanisms, and epigenetic modifications.",
    "Facilitates studies on gene regulation in various contexts, including developmental processes, cancer research, and other biological phenomena, enhancing our understanding of complex biological systems and diseases."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of ChIP Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default ChIPAdvantages;