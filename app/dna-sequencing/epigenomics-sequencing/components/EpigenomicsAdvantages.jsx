const EpigenomicsAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Epigenomics Sequencing
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Provides comprehensive analysis of epigenetic modifications including DNA methylation, histone modifications, and chromatin accessibility, offering insights into gene regulation mechanisms.
            </li>
            <li>
              Enables single-base resolution mapping of epigenetic marks across the genome, allowing for precise identification of regulatory elements and their modifications.
            </li>
            <li>
              Reveals epigenetic alterations associated with diseases, development, and environmental responses, providing insights into cellular memory and inheritance patterns.
            </li>
            <li>
              Identifies potential therapeutic targets and biomarkers for epigenetic-based treatments, supporting the development of personalized medicine approaches.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EpigenomicsAdvantages;