const EnrichmentAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Enriched Sequencing
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Provides a more affordable alternative to Whole Genome Sequencing (WGS), making it accessible to a wider range of researchers and clinicians.
            </li>
            <li>
              Enhances detection of single-nucleotide variants (SNVs), copy number variants (CNVs), and insertions/deletions (InDels) with sensitivity and accuracy comparable to WGS, particularly in exonic regions.
            </li>
            <li>
              Produces smaller data sets compared to WGS, allowing for quicker and more straightforward data analysis, which accelerates research and diagnostics.
            </li>
            <li>
              Focuses on exonic regions, which are more likely to harbor disease-causing variants, leading to a more efficient and targeted approach in identifying genetic variants.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EnrichmentAdvantages;