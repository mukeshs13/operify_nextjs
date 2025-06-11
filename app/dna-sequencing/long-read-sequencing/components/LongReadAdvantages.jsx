import AdvantagesLayout from '../../../components/shared/AdvantagesLayout';

const LongReadAdvantages = () => {
  const advantageItems = [
    "Captures long DNA strands in a single read, providing complete and accurate genome representation.",
    "Reduces gaps and errors, enabling precise detection of large structural variants.",
    "Facilitates high-quality de novo genome assembly.",
    "Real-time sequencing allows faster insights and decision-making, especially in clinical settings."
  ];

  return (
    <AdvantagesLayout
      title="Advantages of Long Read Sequencing"
      advantageItems={advantageItems}
    />
  );
};

export default LongReadAdvantages;