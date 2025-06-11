// app/dna-sequencing/genome-mapping/optical-mapping/components/OpticalMappingApplications.jsx
import ApplicationsLayout from '../../../../components/shared/ApplicationsLayout';

const OpticalMappingApplications = () => {
  const applicationItems = [
    "Transcription Factor Binding Analysis- Identifies and maps the binding sites of transcription factors across the genome, revealing their roles in gene regulation and the modulation of gene expression.",
    "Histone Modification Mapping- Profiles histone modifications to understand their influence on chromatin structure and gene accessibility, providing insights into epigenetic regulation and chromatin dynamics.",
    "Regulatory Element Discovery- Uncovers enhancers, silencers, and other regulatory elements that control gene expression, aiding in the identification of key regions involved in gene regulation.",
    "Epigenetic Research- Studies epigenetic marks associated with various cellular states and processes, such as differentiation and development, to elucidate the mechanisms underlying gene expression changes and disease states.",
    "Cancer Research- Examines changes in chromatin structure and transcription factor binding in cancer cells, identifying potential biomarkers and therapeutic targets for cancer treatment.",
    "Developmental Biology- Investigates changes in gene regulation during development, revealing how chromatin modifications and transcription factor binding contribute to cellular differentiation and tissue development.",
    "Drug Discovery- Provides insights into the effects of drugs on chromatin structure and gene regulation, supporting the identification of new drug targets and the development of therapeutic strategies."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Optical Mapping"
      applicationItems={applicationItems}
    />
  );
};

export default OpticalMappingApplications;