// LongReadApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const LongReadApplications = () => {
  const applicationItems = [
    "Structural Variant Detection- Identifies large insertions, deletions, duplications, inversions, and translocations that short reads often miss.",
    "De Novo Genome Assembly- Generates complete genome assemblies even in repetitive or uncharted genomic regions.",
    "Haplotype Phasing- Spans long stretches of DNA, useful for understanding inherited traits and allelic relationships.",
    "Complex Region Analysis- Effective in resolving telomeres, centromeres, MHC, and other challenging genomic regions."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Long Read Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default LongReadApplications;