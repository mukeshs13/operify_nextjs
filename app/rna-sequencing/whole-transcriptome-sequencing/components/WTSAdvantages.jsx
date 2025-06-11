// WTSAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const WTSAdvantages = () => {
  const advantageItems = [
    "Enables the identification of novel transcripts, alternative splicing events, post-transcriptional modifications, and gene fusions without prior knowledge, making it ideal for exploratory research.",
    "Analyzing the entire transcriptome helps gain a deeper understanding of gene regulation, cellular responses, and pathways, leading to a more comprehensive view of biological processes.",
    "Enables allele-specific gene expression analysis, offering valuable insights into gene regulation and genetic variability.",
    "Facilitates higher detection rates of gene fusions, indels, SNPs, and other genetic variations, offering greater reliability in research outcomes.",
    "Widely used in fields such as cancer research and developmental biology, WTS uncovers complex molecular mechanisms and aids in the discovery of potential biomarkers.",
    "Provides valuable insights into bacterial gene expression, helping to unravel the mysteries of gene regulation, host-pathogen interactions, antibiotic resistance, and the underlying causes of various diseases."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Whole Transcriptome Sequencing (WTS)"
      advantageItems={advantageItems}
    />
  );
};

export default WTSAdvantages;