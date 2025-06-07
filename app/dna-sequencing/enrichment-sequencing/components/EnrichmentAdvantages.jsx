const EnrichmentAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Enriched Sequencing
        </h2>
        
        {/* Affordable alternative */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Provides a more affordable alternative to Whole Genome Sequencing (WGS), making it accessible to a wider range of researchers and clinicians.
          </p>
        </div>

        {/* Enhanced detection */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Enhances detection of single-nucleotide variants (SNVs), copy number variants (CNVs), and insertions/deletions (InDels) with sensitivity and accuracy comparable to WGS, particularly in exonic regions.
          </p>
        </div>

        {/* Smaller data sets */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Produces smaller data sets compared to WGS, allowing for quicker and more straightforward data analysis, which accelerates research and diagnostics.
          </p>
        </div>

        {/* Focused approach */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Focuses on exonic regions, which are more likely to harbor disease-causing variants, leading to a more efficient and targeted approach in identifying genetic variants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnrichmentAdvantages;