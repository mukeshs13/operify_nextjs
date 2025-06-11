// app/dna-sequencing/whole-genome-sequencing/denovo/components/DenovoIntroduction.jsx

import IntroductionLayout from '../../../../components/shared/IntroductionLayout';

const DenovoIntroduction = () => {
  const contentItems = [
    "Whole Genome Denovo Sequencing involves sequencing an organism's entire genome from scratch, without a reference genome. This approach is essential for species with unsequenced or incomplete genomes.",
    "The workflow includes isolating DNA, fragmenting it, and sequencing to produce millions of short reads.",
    "These reads are then assembled into longer sequences, called contigs, using bioinformatics tools in the genome assembly process.",
    "It can be used for sequencing diverse species, such as agriculturally important livestock, plants, bacteria, or disease-related microbes."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/denovo-workflow.png"
      imageAlt="De Novo Assembly Workflow"
      badgeText="DE NOVO ASSEMBLY"
      badgeSubtext="Brochure from whole genome"
      backgroundColor="#f8f9fa"
      badgeColor="bg-teal-600"
    />
  );
};

export default DenovoIntroduction;