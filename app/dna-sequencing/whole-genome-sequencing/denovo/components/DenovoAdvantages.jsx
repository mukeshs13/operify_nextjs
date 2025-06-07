// app/dna-sequencing/whole-genome-sequencing/denovo/components/DenovoAdvantages.jsx

const DenovoAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Whole Genome Denovo Sequencing
        </h2>
        
        {/* No reference genome needed */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Eliminates the need for pre-existing reference genomes, which allows for the discovery of novel genetic elements and variations that may not be present in other genomes, providing a truly unbiased view of the genome.
          </p>
        </div>

        {/* Novel gene identification */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Identifies new genes and genetic variations that may be missed by relying on reference genomes alone.
          </p>
        </div>

        {/* High-resolution insights */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Offers high-resolution insights into the genome, including complex regions such as repetitive sequences and heterochromatic regions, which are often challenging to assemble with other sequencing approaches.
          </p>
        </div>

        {/* Enhanced understanding */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Enhances our understanding of genetic diversity, facilitates comparative genomics, and contributes significantly to advancements in genomic research across various fields.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DenovoAdvantages;