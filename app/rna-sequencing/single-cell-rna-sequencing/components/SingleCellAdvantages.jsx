// SingleCellAdvantages.jsx (RNA version)
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const SingleCellAdvantages = () => {
  const advantageItems = [
    "Unlike traditional bulk RNA sequencing, which averages gene expression across many cells and can hide unique cellular differences, single-cell RNA sequencing examines each cell individually. This reveals variations in gene expression and provides detailed insights into cellular functions, development, and disease mechanisms that are often lost in population-level data.",
    "Enables the discovery and characterization of rare or previously unrecognized cell populations, essential for understanding complex biological systems and disease mechanisms.",
    "Delivers high-resolution data on gene expression patterns, allowing for precise mapping of gene regulatory networks and cellular states, and uncovering intricate details of cellular interactions.",
    "Supports the identification of biomarkers and therapeutic targets by offering a detailed snapshot of gene activity specific to individual cell types or states, facilitating more targeted and effective research and treatments."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Single Cell RNA Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default SingleCellAdvantages;