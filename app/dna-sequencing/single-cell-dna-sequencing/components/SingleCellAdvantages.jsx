// app/dna-sequencing/single-cell-dna-sequencing/components/SingleCellAdvantages.jsx

const SingleCellAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Single Cell DNA Sequencing
        </h2>
        
        {/* DNA stability */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>DNA exhibits greater stability compared to RNA,</strong> ensuring ample time for sample processing without degradation.
          </p>
        </div>

        {/* Rare mutation detection */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Capable of detecting rare mutation-bearing cell clones</strong> with sensitivity levels as low as 0.1%, enabling direct analysis of rare cell types or primary cells even with limited samples.
          </p>
        </div>

        {/* Genetic diversity */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Reveals the diversity of genetic profiles</strong> within cell populations, aiding in the study of complex biological processes and enabling precise profiling of subpopulations like cancer cell evolution or DNA copy number variations in neurons.
          </p>
        </div>

        {/* Genetic changes tracking */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Allows for the tracking of genetic changes over time</strong> within individual cells, crucial for understanding disease progression and evolution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCellAdvantages;