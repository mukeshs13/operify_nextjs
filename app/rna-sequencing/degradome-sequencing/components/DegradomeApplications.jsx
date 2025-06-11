// DegradomeApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const DegradomeApplications = () => {
  const applicationItems = [
    "Gene Regulation Studies- Used to identify miRNA targets and cleavage sites, elucidating the regulatory networks that control gene expression and RNA turnover in different organisms.",
    "Developmental Biology- Explores RNA degradation patterns during developmental stages, uncovering the molecular mechanisms underlying cell differentiation and tissue formation.",
    "Disease Research- Investigates RNA cleavage profiles associated with diseases such as cancer and neurodegenerative disorders, helping to identify potential biomarkers and therapeutic targets.",
    "Functional Genomics- Provides a detailed view of RNA decay dynamics, enabling the study of gene function and the roles of regulatory RNAs in cellular processes.",
    "Comparative Genomics- Analyzes RNA degradation patterns across species or environmental conditions to understand evolutionary conservation and differences in regulatory mechanisms.",
    "Stress and Environmental Responses- Examines changes in RNA stability under stress conditions, shedding light on the molecular mechanisms of stress adaptation and survival strategies."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Degradome Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default DegradomeApplications;