// LncRNAAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const LncRNAAdvantages = () => {
  const advantageItems = [
    "Identifies both well-known and novel lncRNAs, providing fresh insights into their roles and potential as biomarkers.",
    "Reveals lncRNAs' involvement in a broad range of molecular functions, such as chromatin remodeling, which is essential for regulating gene expression. This process includes modifying chromatin structure to control gene accessibility and influencing various cellular mechanisms, demonstrating lncRNAs' crucial roles in gene regulation and cellular function across mammals and plants.",
    "Provides a thorough understanding of lncRNAs' roles in gene regulation, encompassing both transcriptional and post-transcriptional levels. It highlights how lncRNAs affect transcription factors, alter nucleosome positioning, and contribute to RNA splicing and stability, thus impacting overall gene expression and cellular processes.",
    "Enables high-resolution analysis, allowing for precise detection and detailed characterization of lncRNA expression and their regulatory networks, offering a deep dive into their functional roles within cells."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of lncRNA sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default LncRNAAdvantages;