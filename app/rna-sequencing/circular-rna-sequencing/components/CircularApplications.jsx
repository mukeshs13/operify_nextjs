// CircularApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const CircularApplications = () => {
  const applicationItems = [
    "Circular RNA sequencing is widely utilized across plants, animals, and humans.",
    "Therapeutic Targets for Cancer- Small molecules or antisense oligonucleotides can be used to modulate circRNA activity. Consequently, targeting oncogenic circRNAs could provide novel strategies for inhibiting tumor growth.",
    "Developmental Biology- Investigates circRNA roles in developmental processes and differentiation, enhancing understanding of gene regulation during growth and development.",
    "Disease Biomarkers- circRNAs are stable in body fluids such as blood and saliva, and exhibit altered expression in conditions like cancer, cardiovascular disorders, and neurological diseases. This stability and variation in expression patterns suggest their potential as biomarkers for these diseases.",
    "Functional Studies- Functional studies can involve manipulating circRNA levels in cell models through techniques such as knockdown or CRISPR/Cas9, to investigate their roles in cellular processes."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Circular RNA Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default CircularApplications;