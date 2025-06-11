// TargetedApplications.jsx
import ApplicationsLayout from '../../../../components/shared/ApplicationsLayout';

const TargetedApplications = () => {
  const applicationItems = [
    "Microbial Genomics- Focuses on infectious disease research by targeting specific microbial genes to identify and characterize pathogens, improving diagnostic accuracy and outbreak tracking.",
    "Cancer Genomics- Applies targeted DNA sequencing to detect mutations in cancer-related genes, enhancing diagnostic precision, prognostic assessments, and the selection of targeted therapies for better cancer management.",
    "Inherited Genetic Disorders- Identifies disease-causing variants in genes associated with hereditary conditions, facilitating early diagnosis and the development of personalized treatment plans.",
    "Pharmacogenomics- Evaluates genetic variations that influence individual responses to medications, enabling optimization of drug therapy and reduction of adverse effects through tailored treatment approaches.",
    "Personalized Healthcare- Uses targeted sequencing to analyze genetic variants in a patient's DNA, influencing disease risk, treatment responses, and overall health management, supporting a more customized approach to healthcare."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Targeted Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default TargetedApplications;