// app/dna-sequencing/microsatellites-ssr-str/components/MicrosatellitesIntroduction.jsx
import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const MicrosatellitesIntroduction = () => {
  const contentItems = [
    "Microsatellites, also known as simple sequence repeats (SSRs) or short tandem repeats (STRs), are repetitive DNA sequences typically 2-6 base pairs in length, found abundantly across the genome.",
    "These sequences vary in repeat number across individuals, providing a unique genetic profile. Microsatellite-based genotyping analyze genetic diversity, population structure, and inheritance patterns by identifying the variation in microsatellite loci between individuals.",
    "The workflow begins with DNA extraction, followed by PCR amplification of specific microsatellite regions, and analysis via gel or capillary electrophoresis. The variation in repeat numbers at each locus generates distinctive patterns for genotyping.",
    "Electropherogram data is converted into allele calls, allowing allele size analysis, frequency distribution, and individual or population-level genotype matching.",
    "Microsatellite-based genotyping is widely applied in fields like conservation genetics, forensic science, and agriculture."
  ];

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/microsatellites-sequencing.png"
      imageAlt="Microsatellites Sequencing"
      useParagraphs={true}
    />
  );
};

export default MicrosatellitesIntroduction;