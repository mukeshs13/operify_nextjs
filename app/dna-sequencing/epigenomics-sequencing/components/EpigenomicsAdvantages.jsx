const EpigenomicsAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Epigenomics Sequencing
        </h2>
        
        {/* Comprehensive epigenetic analysis */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Provides comprehensive analysis of epigenetic modifications including DNA methylation, histone modifications, and chromatin accessibility, offering insights into gene regulation mechanisms.
          </p>
        </div>

        {/* Single-base resolution */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Enables single-base resolution mapping of epigenetic marks across the genome, allowing for precise identification of regulatory elements and their modifications.
          </p>
        </div>

        {/* Disease mechanisms */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Reveals epigenetic alterations associated with diseases, development, and environmental responses, providing insights into cellular memory and inheritance patterns.
          </p>
        </div>

        {/* Therapeutic targets */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Identifies potential therapeutic targets and biomarkers for epigenetic-based treatments, supporting the development of personalized medicine approaches.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EpigenomicsAdvantages;