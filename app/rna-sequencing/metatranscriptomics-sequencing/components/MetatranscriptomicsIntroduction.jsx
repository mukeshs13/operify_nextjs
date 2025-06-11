// app/rna-sequencing/metatranscriptomics-sequencing/components/MetatranscriptomicsIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const MetatranscriptomicsIntroduction = () => {
  const contentItems = [
    "Metatranscriptomics sequencing examines RNA transcripts from entire microbial communities within their natural environments during a specific time frame. This approach helps to infer the functional profile of a community under specific conditions, which are usually dependent on the status of the host.",
    "The process starts with the extraction of total RNA from a mixed microbial sample, without the need for bacterial isolation. Ribosomal RNA (rRNA) is then removed to enrich for mRNA and other non-ribosomal RNAs. The RNA is subsequently processed, prepared into libraries, and sequenced.",
    "The bioinformatics workflow includes preprocessing the raw sequencing reads, performing quality control, and normalizing the data. The reads are mapped to reference genomes or databases to quantify gene expression levels. Functional annotation and pathway analysis are then carried out to understand the roles of various transcripts and their impact on microbial community functions.",
    "Metatranscriptomics is applicable to a wide range of environmental samples, such as soil, oceans, and the human gut, facilitating studies on microbial diversity, disease mechanisms, nutrient cycling, and environmental adaptation."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      badgeSubtext="Brochure Metatranscriptomics"
      useParagraphs={true}
    />
  );
};

export default MetatranscriptomicsIntroduction;