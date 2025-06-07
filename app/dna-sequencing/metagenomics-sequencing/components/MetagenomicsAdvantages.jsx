// app/dna-sequencing/metagenomics-sequencing/components/MetagenomicsAdvantages.jsx

const MetagenomicsAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Metagenomics Sequencing
        </h2>
        
        {/* Comprehensive view */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Offers a comprehensive view of microbial diversity</strong> in complex samples, capturing both known and novel species. NGS enables the parallel sequencing of thousands of organisms in a single run, providing high sequence coverage and detecting low-abundance microbes that may be missed or are cost-prohibitive with other techniques.
          </p>
        </div>

        {/* Direct analysis */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Analyzes genomes directly from environmental samples</strong> without prior isolation or cultivation, overcoming the limitations of traditional culture-based methods. This approach is effective for studying microbial communities in their natural habitats.
          </p>
        </div>

        {/* Metabolic capabilities */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Reveals the metabolic capabilities and functional diversity</strong> of microbial communities, enhancing our understanding of ecosystem processes and microbial roles within various environments.
          </p>
        </div>

        {/* Detailed analysis */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Facilitates detailed genetic and ecological analysis,</strong> supporting studies on microbial interactions, evolution, and adaptation, with broad applications in environmental monitoring, biotechnology, agriculture, and human health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetagenomicsAdvantages;