// MRNAApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const MRNAApplications = () => {
  const applicationItems = [
    "mRNA sequencing is widely utilized across plants, animals, microbes, and humans.",
    "Developmental Biology- Studies gene expression patterns during different stages of development, helping to unravel the mechanisms of cell differentiation and tissue formation.",
    "Disease Mechanisms- Uncovers mRNA expression profiles associated with various diseases, including genetic disorders and autoimmune conditions, to identify potential diagnostic markers and therapeutic targets.",
    "Drug Discovery- Analyzes mRNA expression changes in response to drug treatments, providing insights into drug mechanisms of action and helping to identify potential drug candidates.",
    "Functional Genomics- Provides a comprehensive view of gene expression across different conditions, facilitating the study of gene functions and regulatory networks.",
    "Comparative Genomics- Compares mRNA expression profiles across different species or environmental conditions to understand evolutionary differences and functional conservation.",
    "Toxicology- Assesses changes in gene expression in response to toxic substances, aiding in the identification of biomarkers for toxicity and understanding the impact of chemicals on biological systems."
  ];

  return (
    <ApplicationsLayout
      title="Applications of mRNA Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default MRNAApplications;