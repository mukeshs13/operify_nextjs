const ATACAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of ATAC Sequencing
        </h2>
        
        {/* Method of choice */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            ATAC-seq has become the method of choice for studying chromatin accessibility due to its efficiency and robust performance.
          </p>
        </div>

        {/* Low cell requirement */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Requires only 50,000 cells per sample, offering high sensitivity and making it ideal for studies with limited cell populations. This technique is versatile, applicable to both bulk tissue and single-cell analysis.
          </p>
        </div>

        {/* Simplified workflow */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Features simplified experimental steps, offering good reproducibility and a high success rate in generating reliable data.
          </p>
        </div>

        {/* Comprehensive analysis */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Simultaneously reveals the genomic locations of open chromatin, DNA-binding proteins, and transcription factor binding site interactions, providing a holistic view of chromatin accessibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ATACAdvantages;