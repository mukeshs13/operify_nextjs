// CircularAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const CircularAdvantages = () => {
  const advantageItems = [
    "Circular RNAs are inherently more stable due to their covalently closed structure, making them less susceptible to degradation and providing reliable expression data.",
    "Enables the identification of novel isoforms and splice variants that may not be detected with traditional RNA sequencing methods.",
    "Offers a detailed view of circular RNA expression and their interactions within the cell, aiding in a deeper understanding of gene regulation and cellular processes.",
    "Closed-loop structure of circRNAs minimizes potential sequencing artifacts, leading to more accurate and consistent data."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Circular RNA Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default CircularAdvantages;