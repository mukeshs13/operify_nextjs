// app/rna-sequencing/mrna-sequencing/components/MRNAIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const MRNAIntroduction = () => {
  const contentItems = [
    "Messenger RNA-Seq (mRNA-Seq) is a focused RNA-Seq method that targets polyadenylated (poly-A) transcripts, which comprise only about 1-2% of the transcriptome, mainly representing coding genes. By enriching these poly-A-tailed RNAs, mRNA-Seq offers a precise snapshot of gene expression, capturing the complete range of mRNA transcripts within a sample and enabling detailed analysis of gene activity across various conditions.",
    "mRNA-seq workflow typically includes RNA extraction, enrichment or depletion of mRNA, library preparation, and high-throughput sequencing. This workflow ensures precise and efficient capture of mRNA transcripts for thorough downstream analysis.",
    "Bioinformatics analysis for mRNA-seq involves several key steps: data preprocessing, alignment to a reference genome, quantifying gene expression levels, and advanced downstream analyses such as differential expression, pathway enrichment, and gene ontology analysis.",
    "Widely applicable across diverse research fields, including human, animal, and plant studies, providing profound insights into genetic landscapes and contributing to our understanding of gene function and regulation."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="https://stock.adobe.com/in/images/messenger-rna-or-mrna-strand-3d-rendering-illustration-with-copy-space-genetics-science-medical-research-genome-replication-concepts/404350568"
      imageAlt="mRNA Sequencing Workflow"
      useParagraphs={true}
    />
  );
};

export default MRNAIntroduction;