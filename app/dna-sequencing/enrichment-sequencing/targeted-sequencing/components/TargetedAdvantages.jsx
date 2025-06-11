// TargetedAdvantages.jsx
import AdvantagesLayout from '../../../../components/shared/AdvantagesLayout';

const TargetedAdvantages = () => {
  const advantageItems = [
    "Focuses on specific genes or genomic regions, providing high-resolution analysis of mutations that are most relevant to particular diseases or conditions.",
    "Delivers deep coverage of targeted regions, increasing the likelihood of detecting low-frequency variants and rare mutations.",
    "The streamlined workflow and reduced data set enable quicker data processing and analysis, allowing for more rapid diagnostic and research outcomes.",
    "Widely used in clinical settings, targeted sequencing enables the identification of actionable genetic variants that can guide personalized treatment strategies."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Targeted Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default TargetedAdvantages;