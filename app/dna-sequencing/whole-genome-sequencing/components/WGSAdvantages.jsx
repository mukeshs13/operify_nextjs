// app/dna-sequencing/whole-genome-sequencing/components/WGSAdvantages.jsx

const WGSAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Whole Genome Sequencing
        </h2>
        
        {/* Comprehensive view */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Provides a comprehensive, high-resolution view of the genome, surpassing the coverage offered by targeted sequencing.
          </p>
        </div>

        {/* Variant identification */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Identifies both small (SNVs, CNVs, InDels) and large structural variants that may be missed with targeted approaches, offering valuable insights into inherited genetic conditions and characterizing mutations driving cancer progression.
          </p>
        </div>

        {/* Data generation */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Generates large volumes of data quickly, facilitating the assembly of novel genomes.
          </p>
        </div>

        {/* Genomic diversity */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Uncovers genomic diversity, taxonomic classifications, and evolutionary relationships, enhancing our understanding of biological complexity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WGSAdvantages;