// DegradomeAdvantages.jsx
import AdvantagesLayout from '../../../../components/shared/AdvantagesLayout';

const DegradomeAdvantages = () => {
  const advantageItems = [
    "Degradome sequencing provides a focused analysis of RNA degradation, specifically targeting cleavage sites mediated by miRNAs and ta-siRNAs, making it ideal for studying gene regulation and RNA stability.",
    "By targeting degradation products, degradome sequencing minimizes the impact of intact RNAs, enhancing sensitivity for detecting miRNA targets and cleavage events.",
    "Degradome sequencing focuses on RNA cleavage sites, eliminating the need for additional steps like ribosomal RNA removal, making it a more cost-effective alternative to broader transcriptome studies.",
    "Degradome sequencing enables the identification of novel regulatory elements, such as circRNAs and biomarkers, expanding its utility in understanding RNA regulatory networks."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Degradome Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default DegradomeAdvantages;