const AmpliconAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Amplicon Sequencing
        </h2>
        
        {/* Focused approach */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Unlike targeted or exome sequencing, amplicon sequencing narrows down to even smaller, highly specific regions, resulting in a more efficient and focused approach for certain applications, such as microbial diversity studies or detecting rare variants.
          </p>
        </div>

        {/* Low-abundance detection */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Capable of detecting low-abundance species or genetic variants, providing specific resolution of target regions.
          </p>
        </div>

        {/* Precise analysis */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Focuses on specific genomic regions, allowing for detailed and precise analysis.
          </p>
        </div>

        {/* Quick insights */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Provides quick insights into genetic composition and diversity, facilitating timely research and diagnostics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmpliconAdvantages;