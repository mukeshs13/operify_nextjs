// app/dna-sequencing/snp-genotyping/components/SNPApplications.jsx
import ApplicationsLayout from '../../../components/shared/ApplicationsLayout';

const SNPApplications = () => {
  const applicationItems = [
    "Genome-wide association studies (GWAS)- SNP-based genotyping is widely utilized in Genome-Wide Association Studies (GWAS) to identify genetic variants linked to specific traits or diseases, providing insights into genetic predispositions and the mechanisms underlying complex conditions such as diabetes, heart disease, and neurological disorders.",
    "Plant and animal breeding- In agriculture, SNP-based genotyping facilitates marker-assisted selection (MAS) to enhance desirable traits such as yield, disease resistance, and environmental adaptability in crops and livestock.",
    "Personalized medicine- SNP genotyping can guide personalized treatment strategies by identifying genetic variations that affect drug metabolism, efficacy, and toxicity, leading to more tailored healthcare approaches.",
    "Forensic science- SNPs are employed in forensic analysis for human identification and paternity testing, providing reliable genetic markers that can help solve criminal cases or establish family relationships.",
    "Evolutionary biology- Researchers use SNP genotyping to study evolutionary relationships, population dynamics, and the genetic basis of adaptation in various species, contributing to our understanding of evolutionary processes.",
    "Disease prediction and prevention- SNP-based genotyping is applied in public health to assess genetic risk factors for diseases, enabling early interventions and prevention strategies in at-risk populations.",
    "Double Digest Restriction-site Associated DNA (ddRAD) Sequencing- ddRAD sequencing is based on the Restriction Fragmentation technique combined with Next-Generation Sequencing (NGS). It is a robust approach for genotyping and SNP discovery that doesn't require a reference genome. With the potential to develop hundreds to tens of thousands of genetic markers, ddRAD is ideal for applications in population genetics, germplasm assessment, marker-trait associations, GWAS, and QTL mapping."
  ];

  return (
    <ApplicationsLayout
      title="Applications of SNP-based Genotyping"
      applicationItems={applicationItems}
    />
  );
};

export default SNPApplications;