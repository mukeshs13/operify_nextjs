// app/dna-sequencing/genome-mapping/hi-c-mapping/components/HiCMappingIntroduction.jsx

import IntroductionLayout from '../../../../components/shared/IntroductionLayout';

const HiCMappingIntroduction = () => {
  const contentItems = [
    "Hi-C Sequencing is a proximity ligation method that captures the three-dimensional (3-D) structure of chromatin by identifying spatial interactions between different regions of chromosomes.",
    "It helps understand genome organization, gene regulation, and how chromatin structure affects cellular function.",
    "The workflow involves cross-linking DNA within cells to preserve spatial interactions, followed by fragmentation, ligation of interacting DNA fragments, and sequencing. After sequencing, the resulting data reflects which DNA regions are in close physical proximity within the nucleus.",
    "The sequenced reads are processed using advanced bioinformatics tools, starting with alignment to a reference genome, followed by the identification of chromatin loops and the construction of 3D models of genome organization.",
    "Plays pivotal role in multiple applications, including identifying promoter-enhancer interactions for gene regulation studies, detecting structural rearrangements, scaffolding contigs to define chromosomes de novo, and revealing structural errors while accurately reintegrating mis-joined contigs during genome assembly processes."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/hic-mapping-workflow.png"
      imageAlt="Hi-C Mapping Workflow"
      useParagraphs={true}
    />
  );
};

export default HiCMappingIntroduction;