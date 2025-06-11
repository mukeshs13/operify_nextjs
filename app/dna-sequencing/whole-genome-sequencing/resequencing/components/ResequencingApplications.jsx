// ResequencingApplications.jsx

import ApplicationsLayout from '../../../../components/shared/ApplicationsLayout';

const ResequencingApplications = () => {
  const applicationItems = [
    "Genetic Variation Discovery- Identifies and characterizes genetic variations, including single nucleotide polymorphisms (SNPs), insertions, deletions, and structural variants, across different individuals or populations, aiding in the study of genetic diversity and evolution.",
    "Disease Research- Helps in pinpointing genetic mutations and variants associated with genetic disorders, complex diseases, and rare conditions, enhancing our understanding of disease mechanisms and enabling the development of targeted therapies.",
    "Personalized Medicine- Facilitates the tailoring of medical treatments based on an individual's genetic profile, allowing for more precise and effective interventions and drug responses.",
    "Population Genetics- Assists in studying the genetic makeup of populations to understand evolutionary processes, migration patterns, and adaptation to environmental changes, providing insights into the genetic basis of traits and diseases.",
    "Agricultural Genomics- Identifies genetic markers linked to desirable traits and maps quantitative trait loci (QTL) to enhance selective breeding and improve characteristics such as yield, disease resistance, and stress tolerance. It also supports genome-wide association studies (GWAS) to connect genetic variants with specific traits or diseases."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Whole Genome ReSequencing"
      applicationItems={applicationItems}
    />
  );
};

export default ResequencingApplications;