// LncRNAApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const LncRNAApplications = () => {
  const applicationItems = [
    "LncRNA sequencing is widely utilized across plants, animals, microbes, and humans.",
    "Cancer Research- Identifies tumor-specific lncRNAs and their roles in cancer development, progression, and metastasis, offering potential biomarkers and therapeutic targets.",
    "Developmental Biology- Studies lncRNAs involved in developmental processes and cell differentiation, providing insights into gene regulation during development.",
    "Disease Mechanisms- Uncovers lncRNAs associated with various diseases, including genetic disorders, cardiovascular diseases, and neurodegenerative conditions, facilitating the discovery of novel diagnostic and prognostic markers.",
    "Drug Discovery- Assists in identifying lncRNAs that can be targeted or modulated by drugs, contributing to the development of new therapeutic strategies.",
    "Gene Regulation- Explores lncRNAs' roles in regulating gene expression through chromatin remodeling, transcriptional control, and post-transcriptional modifications, enhancing the understanding of complex gene regulatory networks.",
    "Functional Genomics- Provides insights into the functional roles of lncRNAs in cellular processes, helping to elucidate their impact on gene expression and cellular functions.",
    "Comparative Genomics- Analyzes lncRNA profiles across different species or conditions, supporting research into evolutionary differences and functional conservation of lncRNAs."
  ];

  return (
    <ApplicationsLayout
      title="Applications of lncRNA Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default LncRNAApplications;