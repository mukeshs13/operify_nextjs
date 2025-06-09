// 7d - LongReadAdvantages.jsx
const LongReadAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Long Read Sequencing
        </h2>
        <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc px-4 lg:px-10">
          <li>Captures long DNA strands in a single read, providing complete and accurate genome representation.</li>
          <li>Reduces gaps and errors, enabling precise detection of large structural variants.</li>
          <li>Facilitates high-quality de novo genome assembly.</li>
          <li>Real-time sequencing allows faster insights and decision-making, especially in clinical settings.</li>
        </ul>
      </div>
    </section>
  );
};

export default LongReadAdvantages;