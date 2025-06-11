// app/dna-sequencing/single-cell-dna-sequencing/components/SingleCellApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const SingleCellApplications = () => {
  const applicationItems = [
    "Cancer Genomics- Detects genetic mutations and variations in individual cancer cells, revealing tumor heterogeneity, identifying subclonal populations, and guiding personalized treatment strategies based on specific genetic alterations.",
    "Developmental Biology- Studies genetic variations and mutations in single cells during development, providing insights into cell lineage, differentiation, and the genetic basis of developmental disorders.",
    "Stem Cell Research- Analyzes genetic profiles of individual stem cells to understand their potential for differentiation, track mutations during cell division, and improve stem cell therapies.",
    "Rare Disease Research- Identifies genetic variants in single cells from patients with rare diseases, aiding in the discovery of novel disease-associated mutations and improving diagnostic precision.",
    "Population Genetics- Examines genetic diversity at the single-cell level within populations to understand evolutionary processes, genetic variation, and adaptation mechanisms, offering a more detailed view of population genetics compared to bulk analysis."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Single Cell DNA Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default SingleCellApplications;