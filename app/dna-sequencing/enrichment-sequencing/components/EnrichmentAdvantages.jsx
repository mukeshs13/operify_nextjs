// EnrichmentAdvantages.jsx

import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const EnrichmentAdvantages = () => {
  const advantageItems = [
    "Provides a more affordable alternative to Whole Genome Sequencing (WGS), making it accessible to a wider range of researchers and clinicians.",
    "Enhances detection of single-nucleotide variants (SNVs), copy number variants (CNVs), and insertions/deletions (InDels) with sensitivity and accuracy comparable to WGS, particularly in exonic regions.",
    "Produces smaller data sets compared to WGS, allowing for quicker and more straightforward data analysis, which accelerates research and diagnostics.",
    "Focuses on exonic regions, which are more likely to harbor disease-causing variants, leading to a more efficient and targeted approach in identifying genetic variants."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Enriched Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default EnrichmentAdvantages;