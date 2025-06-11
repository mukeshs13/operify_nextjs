// app/dna-sequencing/microsatellites-ssr-str/components/MicrosatellitesApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const MicrosatellitesApplications = () => {
  const applicationItems = [
    "Linkage Analysis of Co-Segregation- Microsatellites are widely used in genetic linkage studies to track the inheritance of specific traits or diseases, enabling the identification of disease-associated genes by analyzing co-segregation patterns in families.",
    "Diagnosis and Identification of Human Diseases- Microsatellite-based genotyping is used to identify genetic markers associated with diseases such as cancer, genetic disorders, and neurodegenerative conditions, aiding in diagnosis and risk prediction.",
    "Forensic Identification and Relatedness Testing- In forensic science, microsatellites are used to create unique genetic profiles for individual identification, paternity testing, and resolving cases of human-relatedness or criminal investigations.",
    "Cell Line Identification- Microsatellites are employed to authenticate and verify cell lines in research and clinical settings, ensuring the integrity and uniqueness of cell cultures used in experiments.",
    "Population Studies- Microsatellites are used to assess genetic diversity, structure, and migration patterns in populations, providing insights into evolutionary relationships, conservation genetics, and the impact of environmental factors on genetic variation."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Microsatellites (SSR/STR) Based Genotyping"
      applicationItems={applicationItems}
    />
  );
};

export default MicrosatellitesApplications;