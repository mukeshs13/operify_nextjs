// app/dna-sequencing/metagenomics-sequencing/components/MetagenomicsIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const MetagenomicsIntroduction = () => {
  const contentItems = [
    "Metagenomics is a genomic method to investigate the genetic diversity within a sample, focusing on the specific regions (16S rRNA/ 18S rRNA/ ITS regions) or utilizing Shotgun metagenomics for comprehensive sequencing of all genes present.",
    "The workflow begins with DNA extraction from environmental samples, followed by fragmentation and sequencing of either specific region or the entire geneset.",
    "Bioinformatics analysis encompasses sequence alignment, taxonomy identification, and phylogenetic analysis. Additional analyses may involve functional annotation, comparative genomics, and statistical evaluations.",
    "Can be used to study diverse environmental samples like water, soil, and fecal matter, providing valuable insights into microbial diversity and host-microbiome interactions."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/metagenomics-sequencing.png"
      imageAlt="Metagenomics Sequencing"
      useParagraphs={true}
    />
  );
};

export default MetagenomicsIntroduction;