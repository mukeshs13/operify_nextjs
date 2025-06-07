// app/dna-sequencing/hybrid-genome-sequencing/components/HybridAdvantages.jsx

const HybridAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Hybrid Genome Sequencing
        </h2>
        
        {/* Combines technologies */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Combines long-read and short-read sequencing</strong> for more complete and accurate genome 
            assemblies, effectively resolving complex regions and reducing gaps.
          </p>
        </div>

        {/* Cost efficiency */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Balances the cost efficiency</strong> of short-read sequencing with the detailed resolution of 
            long-read sequencing, making it a budget-friendly choice for comprehensive genome analysis.
          </p>
        </div>

        {/* Structural variants */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Enhances detection of structural variants,</strong> such as large insertions and deletions, 
            improving the understanding of genetic diversity and disease mechanisms.
          </p>
        </div>

        {/* Better coverage */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Provides better coverage</strong> of challenging genomic features, like high GC content and 
            repetitive sequences, by leveraging the strengths of both sequencing technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HybridAdvantages;