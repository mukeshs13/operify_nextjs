// app/dna-sequencing/enrichment-sequencing/whole-exome/components/ExomeAdvantages.jsx
export default function ExomeAdvantages() {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Whole Exome Sequencing
        </h2>
        
        {/* Cost-effectiveness */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Cost-effective</strong> as compared to Whole Genome Sequencing (WGS), 
            making it accessible to a broader range of researchers and clinicians.
          </p>
        </div>

        {/* Detection capabilities */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            WES offers <strong>extensive sequencing of exonic regions</strong>, improving 
            the detection of single-nucleotide variants (SNVs), copy number variants (CNVs), 
            and insertions/deletions (InDels) with a sensitivity comparable to WGS, ensuring 
            high accuracy in identifying genetic variants.
          </p>
        </div>

        {/* Data processing */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            WES generates a <strong>smaller data set</strong> compared to WGS, facilitating 
            faster and easier data analysis, which can expedite research and diagnostic processes.
          </p>
        </div>

        {/* Wide applications */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            WES is <strong>widely used in both medical and agricultural fields</strong>, 
            supporting advancements in disease diagnosis, personalized medicine, and crop 
            improvement. Provides a comprehensive, high-resolution view of the genome, 
            surpassing the coverage offered by targeted sequencing.
          </p>
        </div>
      </div>
    </section>
  );
}