// MetatranscriptomicsAdvantages.jsx
import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const MetatranscriptomicsAdvantages = () => {
  const advantageItems = [
    "Provides insights into the functional dynamics of microorganisms by revealing active gene expression and their roles within complex communities. This approach uncovers how microorganisms contribute to ecosystem processes and their interactions.",
    "Analyzes microbial communities directly from environmental samples, removing the need for isolating or cultivating individual microbes. This method captures a more comprehensive view of microbial diversity.",
    "Uses next-generation sequencing (NGS) to identify novel genes and track transcriptional changes, offering high-resolution data on gene expression. This allows for precise identification of active genes, pathways, and regulatory networks within microbial communities.",
    "Offers an advantage over metagenomics by including both microbial species information and gene expression data. This dual focus provides a deeper understanding of microbial community changes from a transcriptional perspective and aids in the discovery of potential new genes."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Metatranscriptome Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default MetatranscriptomicsAdvantages;