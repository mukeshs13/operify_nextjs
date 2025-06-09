// 7e - LongReadApplications.jsx
const LongReadApplications = () => {
  const items = [
    {
      title: "Structural Variant Detection",
      desc: "Identifies large insertions, deletions, duplications, inversions, and translocations that short reads often miss."
    },
    {
      title: "De Novo Genome Assembly",
      desc: "Generates complete genome assemblies even in repetitive or uncharted genomic regions."
    },
    {
      title: "Haplotype Phasing",
      desc: "Spans long stretches of DNA, useful for understanding inherited traits and allelic relationships."
    },
    {
      title: "Complex Region Analysis",
      desc: "Effective in resolving telomeres, centromeres, MHC, and other challenging genomic regions."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6">
          Applications of Long Read Sequencing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LongReadApplications;