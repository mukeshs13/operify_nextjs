import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const MicrosatellitesAdvantages = () => {
  const advantageItems = [
    "Highly variable in repeat number among individuals, making them effective for distinguishing genetic differences within and between populations.",
    "Unlike multi-locus markers like minisatellites, microsatellites are locus-specific, providing precise, targeted genetic information for detailed genotyping and genetic mapping.",
    "Highly reproducible across labs, making it a reliable method for studies requiring consistent and repeatable results, such as population genetics and forensic analysis.",
    "Show co-dominant inheritance, allowing the detection of both alleles at a locus for accurate identification of heterozygous and homozygous genotypes."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Microsatellites (SSR/STR) Based Genotyping"
      advantageItems={advantageItems}
    />
  );
};

export default MicrosatellitesAdvantages;