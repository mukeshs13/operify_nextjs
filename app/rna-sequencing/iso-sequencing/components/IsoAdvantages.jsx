// IsoAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const IsoAdvantages = () => {
  const advantageItems = [
    "Unlike traditional methods, which may miss complex isoforms or splice variants, Iso-Seq captures full-length RNA sequences, enabling the identification of all transcript isoforms, including those with complex splicing and alternative start or end sites.",
    "Provides high-fidelity data with long read lengths, reducing errors and missing information common in shorter-read sequencing methods.",
    "Reduces challenges with transcript assembly and alignment by providing full-length reads that eliminate ambiguities and enhance transcriptome reconstruction accuracy. Improves genome annotations by precisely identifying gene structures, exons, introns, and regulatory elements, leading to more accurate functional insights.",
    "Uncovers novel isoforms, splice variants, and post-transcriptional modifications, providing a comprehensive view of gene expression. This detailed approach is essential for functional genomics, transcriptomics, and alternative splicing studies, offering valuable insights into gene regulation and function."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Isoform Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default IsoAdvantages;