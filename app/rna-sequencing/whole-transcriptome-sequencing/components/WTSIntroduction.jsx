// app/rna-sequencing/whole-transcriptome-sequencing/components/WTSIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const WTSIntroduction = () => {
  const contentItems = [
    "Whole Transcriptome Sequencing (WTS) comprehensively captures and quantifies all RNA transcripts, both coding (mRNA) and long non-coding (rRNA, tRNA), providing an in-depth view of gene expression.",
    "This method combines a ribosomal RNA depletion strategy with Illumina NGS technology for efficient and precise results. The approach (1) reduces ribosomal contamination and increases the proportion of uniquely mapped reads, and (2) is particularly beneficial for species, such as bacteria, whose mRNA may lack a poly-A tail.",
    "The bioinformatics pipeline includes data preprocessing, genome mapping, transcript identification, and downstream analyses like differential expression analysis, lncRNA target gene analysis, GO enrichment analysis, and KEGG enrichment analysis.",
    "This technique is applicable to a wide range of species, including humans, mouse, rat, other animals, plants, and prokaryotes. It is compatible with various samples like; high and low-quality RNA samples, cell-free RNA, formalin-fixed paraffin-embedded (FFPE) tissues and RNA."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="https://stock.adobe.com/in/images/messenger-rna-or-mrna-strand-3d-rendering-illustration-with-copy-space-genetics-science-medical-research-genome-replication-concepts/404350568"
      imageAlt="Whole Transcriptome Sequencing Workflow"
      useParagraphs={true}
    />
  );
};

export default WTSIntroduction;