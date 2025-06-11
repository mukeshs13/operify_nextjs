// SingleCellApplications.jsx (RNA version)
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const SingleCellApplications = () => {
  const applicationItems = [
    "Single Cell RNA sequencing is widely utilized across plants, animals, and humans.",
    "Cellular Heterogeneity- Enables the identification and characterization of distinct cell types within complex tissues, providing insights into the diversity and functions of individual cells in health and disease.",
    "Developmental Biology- Reveals how gene expression changes during development and differentiation, helping to understand the mechanisms driving cell fate decisions and tissue formation.",
    "Immunology- Provides detailed profiles of immune cell types and states, aiding in the study of immune responses, autoimmune diseases, and vaccine development by uncovering the dynamics of individual immune cells.",
    "Cancer Research- Helps in identifying rare tumor cell populations, understanding tumor heterogeneity, and discovering novel biomarkers or therapeutic targets specific to different cancer subtypes."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Single Cell RNA Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default SingleCellApplications;