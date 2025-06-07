const ResequencingAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Whole Genome ReSequencing
        </h2>
        
        {/* Detailed examination */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Provides a detailed examination of an organism's entire genome, revealing all genetic variations compared to a reference genome.
          </p>
        </div>

        {/* Accurate identification */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Enables accurate identification of single nucleotide polymorphisms (SNPs), insertions, deletions, and structural variants, crucial for understanding genetic diversity and disease mechanisms.
          </p>
        </div>

        {/* Disease marker discovery */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Facilitates the discovery of genetic markers associated with diseases, guiding personalized treatment approaches.
          </p>
        </div>

        {/* Diverse studies */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Supports diverse studies including evolutionary biology, agricultural genetics, and microbial genomics, enhancing insights into genetic adaptations and relationships across species.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResequencingAdvantages;