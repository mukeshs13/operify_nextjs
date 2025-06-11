// WGBSApplications.jsx
import ApplicationsLayout from '../../../../components/shared/AdvantagesLayout';

const WGBSApplications = () => {
  const applicationItems = [
    "DNA Methylation Profiling- Provides a comprehensive map of DNA methylation across the entire genome, revealing methylation patterns associated with gene regulation, epigenetic modifications, and cellular differentiation.",
    "Cancer Epigenetics- Identifies aberrant DNA methylation patterns in cancerous tissues, which can help in understanding tumorigenesis, detecting early biomarkers for cancer diagnosis, and developing epigenetic-based therapies.",
    "Developmental Biology- Analyzes changes in DNA methylation during development, offering insights into how epigenetic modifications influence cell differentiation and tissue development.",
    "Genetic and Epigenetic Research- Explores the interplay between genetic sequences and epigenetic modifications, enhancing our understanding of how genetic variations and environmental factors interact to affect gene expression and contribute to complex diseases.",
    "Disease Mechanisms- Uncovers epigenetic alterations associated with various diseases, including neurological disorders and cardiovascular diseases, helping in the identification of novel biomarkers and therapeutic targets."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Whole Genome Bisulphite Sequencing (WGBS)"
      applicationItems={applicationItems}
    />
  );
};

export default WGBSApplications;