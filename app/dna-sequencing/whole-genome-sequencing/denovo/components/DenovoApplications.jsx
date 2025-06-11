// app/dna-sequencing/whole-genome-sequencing/denovo/components/DenovoApplications.jsx

import ApplicationsLayout from '../../../../components/shared/ApplicationsLayout';

const DenovoApplications = () => {
  const applicationItems = [
    "Genome Assembly- Enables the construction of comprehensive and accurate genome assemblies from scratch, essential for understanding the genetic blueprint of organisms where reference genomes are unavailable or incomplete.",
    "Genetic Variation Analysis- Facilitates the identification of genetic variants, including single nucleotide polymorphisms (SNPs), insertions, deletions, and structural variants, which are crucial for studying genetic diversity, evolution, and disease.",
    "Functional Genomics- Supports the annotation of genes, regulatory elements, and non-coding regions, providing insights into gene function, gene expression regulation, and the roles of various genomic elements in biological processes.",
    "Comparative Genomics- Allows for the comparison of genome sequences across different species or strains, aiding in the identification of evolutionary relationships, adaptation mechanisms, and the conservation of key genomic features.",
    "Applications in Diverse Fields- Supports various research applications such as identifying genetic variants associated with diseases, exploring evolutionary relationships, and understanding genetic diversity in populations, making it valuable for personalized medicine, evolutionary studies, and crop improvement."
  ];

  return (
    <ApplicationsLayout
      title="Applications of Whole Genome Denovo Sequencing"
      applicationItems={applicationItems}
    />
  );
};

export default DenovoApplications;