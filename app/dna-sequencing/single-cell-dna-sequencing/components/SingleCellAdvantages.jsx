// app/dna-sequencing/single-cell-dna-sequencing/components/SingleCellAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const SingleCellAdvantages = () => {
  const advantageItems = [
    "DNA exhibits greater stability compared to RNA, ensuring ample time for sample processing without degradation.",
    "Capable of detecting rare mutation-bearing cell clones with sensitivity levels as low as 0.1%, enabling direct analysis of rare cell types or primary cells even with limited samples.",
    "Reveals the diversity of genetic profiles within cell populations, aiding in the study of complex biological processes and enabling precise profiling of subpopulations like cancer cell evolution or DNA copy number variations in neurons.",
    "Allows for the tracking of genetic changes over time within individual cells, crucial for understanding disease progression and evolution."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Single Cell DNA Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default SingleCellAdvantages;