// app/dna-sequencing/genome-mapping/optical-mapping/components/OpticalMappingIntroduction.jsx

import IntroductionLayout from '../../../../components/shared/IntroductionLayout';

const OpticalMappingIntroduction = () => {
  const contentItems = [
    "Method to resolve large-scale structural variations by linearizing strands of high molecular weight (HMW) DNA and imaging them in their native state, offering high sensitivity and accuracy to correct sequencing-based errors.",
    "The workflow begins with isolating high-molecular-weight DNA, followed by labeling specific sequences with fluorescent tags. These labeled long DNA molecules are then loaded onto Saphyr Chip's NanoChannels for imaging, where they are linearized and imaged to create a \"barcode\" pattern representing the genome's structure.",
    "The barcode patterns are aligned to a reference genome for assembly with enhanced contiguity using bioinformatics tools to detect structural variations and assemble large genomic segments.",
    "This allows for the comparison of genomic maps, identification of rearrangements, and integration with other sequencing data for comprehensive genome analysis.",
    "With the application in clinical and discovery research, the technique is improving genomics assembly, understanding of genetic disease and cancer by detecting CNVs, chromosomal aberrations and structural variants. Enables high-resolution analysis of large eukaryotic genomes and their structural features."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/optical-mapping-workflow.png"
      imageAlt="Optical Mapping Workflow"
      useParagraphs={true}
    />
  );
};

export default OpticalMappingIntroduction;