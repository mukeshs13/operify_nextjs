// app/dna-sequencing/metagenomics-sequencing/components/MetagenomicsAdvantages.jsx

const MetagenomicsAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Metagenomics Sequencing
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Offers a comprehensive view of microbial diversity in complex samples, capturing both known and novel species. NGS enables the parallel sequencing of thousands of organisms in a single run, providing high sequence coverage and detecting low-abundance microbes that may be missed or are cost-prohibitive with other techniques.
            </li>
            <li>
              Analyzes genomes directly from environmental samples without prior isolation or cultivation, overcoming the limitations of traditional culture-based methods. This approach is effective for studying microbial communities in their natural habitats.
            </li>
            <li>
              Reveals the metabolic capabilities and functional diversity of microbial communities, enhancing our understanding of ecosystem processes and microbial roles within various environments.
            </li>
            <li>
              Facilitates detailed genetic and ecological analysis, supporting studies on microbial interactions, evolution, and adaptation, with broad applications in environmental monitoring, biotechnology, agriculture, and human health.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MetagenomicsAdvantages;