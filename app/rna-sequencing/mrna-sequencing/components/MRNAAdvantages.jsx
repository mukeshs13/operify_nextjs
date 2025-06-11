// MRNAAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const MRNAAdvantages = () => {
  const advantageItems = [
    "mRNA-Seq provides a targeted analysis of gene expression specific to protein-coding regions, making it ideal for studies focused on gene regulation, protein synthesis, and disease-related expression changes.",
    "mRNA-Seq focuses on mRNA enrichment, which minimizes the impact of non-coding RNAs and enhances sensitivity for detecting gene expression changes.",
    "Focusing solely on coding regions, mRNA-Seq does not require rRNA-specific probes (Costly) for ribosomal RNA removal and requires comparatively lesser data, making it a more cost-effective alternative to Whole Transcriptome Sequencing.",
    "With a more targeted dataset, the bioinformatics analysis of mRNA-Seq is often simpler and faster, focusing on coding genes without the complexity introduced by non-coding RNAs."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of mRNA Sequencing (mRNA-Seq) over Whole Transcriptome Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default MRNAAdvantages;