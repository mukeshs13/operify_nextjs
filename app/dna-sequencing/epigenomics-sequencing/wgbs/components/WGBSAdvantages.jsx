// WGBSAdvantages.jsx
import AdvantagesLayout from '../../../../components/shared/AdvantagesLayout';

const WGBSAdvantages = () => {
  const advantageItems = [
    "Provides high-resolution mapping of DNA methylation patterns across the genome, including CpG, CHG, and CHH sites, offering detailed insights into epigenetic modifications.",
    "Enables precise quantification of methylation levels, distinguishing between methylated and unmethylated cytosines based on read counts.",
    "This technique can detect effective CpG sites reaching over 75% of all CpG sites in the entire genome.",
    "Provides valuable insights into cell fate determination, genetic reprogramming, gene regulation, developmental epigenetics, disease mechanisms, and the identification of new epigenetic markers and therapeutic targets."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Whole Genome Bisulphite Sequencing (WGBS)"
      advantageItems={advantageItems}
    />
  );
};

export default WGBSAdvantages;