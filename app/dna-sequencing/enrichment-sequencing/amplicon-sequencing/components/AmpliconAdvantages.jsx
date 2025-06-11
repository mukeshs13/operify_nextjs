// AmpliconAdvantages.jsx
import AdvantagesLayout from '../../../../components/shared/AdvantagesLayout';

const AmpliconAdvantages = () => {
  const advantageItems = [
    "Unlike targeted or exome sequencing, amplicon sequencing narrows down to even smaller, highly specific regions, resulting in a more efficient and focused approach for certain applications, such as microbial diversity studies or detecting rare variants.",
    "Capable of detecting low-abundance species or genetic variants, providing specific resolution of target regions.",
    "Focuses on specific genomic regions, allowing for detailed and precise analysis.",
    "Provides quick insights into genetic composition and diversity, facilitating timely research and diagnostics."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Amplicon Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default AmpliconAdvantages;