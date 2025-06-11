// app/dna-sequencing/single-cell-dna-sequencing/components/SingleCellIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const SingleCellIntroduction = () => {
  const contentItems = [
    "Single Cell DNA Sequencing analyzes genetic material from individual cells, revealing unique genomic insights that bulk sequencing methods often obscure.",
    "The workflow begins with cell partitioning facilitated by the 10X Chromium system, employing gel beads and oil-surfactant solutions. Each droplet encapsulates a solitary cell uniquely tagged with a barcode.",
    "Within these partitions, DNA amplification yields amplified DNA fragments from each cell. Subsequently, barcoded samples combine for library preparation, where DNA fragments undergo adapter ligation to facilitate sequencing.",
    "During sequencing, the barcode identifiers enable precise tracking of data to its specific cell or nucleus of origin, thereby providing comprehensive genetic insights for individual cells.",
    "This technique enables researchers to unravel unique genetic characteristics and variations present within individual cells, providing unprecedented insights into cellular diversity and function."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/single-cell-dna-sequencing.png"
      imageAlt="Single Cell DNA Sequencing"
      useParagraphs={true}
    />
  );
};

export default SingleCellIntroduction;