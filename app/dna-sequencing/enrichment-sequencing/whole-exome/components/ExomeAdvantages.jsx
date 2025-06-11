// app/dna-sequencing/enrichment-sequencing/whole-exome/components/ExomeAdvantages.jsx
import AdvantagesLayout from '../../../../components/shared/AdvantagesLayout';

const ExomeAdvantages = () => {
  const advantageItems = [
    "Cost-effective as compared to Whole Genome Sequencing (WGS), making it accessible to a broader range of researchers and clinicians.",
    "WES offers extensive sequencing of exonic regions, improving the detection of single-nucleotide variants (SNVs), copy number variants (CNVs), and insertions/deletions (InDels) with a sensitivity comparable to WGS, ensuring high accuracy in identifying genetic variants.",
    "WES generates a smaller data set compared to WGS, facilitating faster and easier data analysis, which can expedite research and diagnostic processes.",
    "WES is widely used in both medical and agricultural fields, supporting advancements in disease diagnosis, personalized medicine, and crop improvement. Provides a comprehensive, high-resolution view of the genome, surpassing the coverage offered by targeted sequencing."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Whole Exome Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default ExomeAdvantages;