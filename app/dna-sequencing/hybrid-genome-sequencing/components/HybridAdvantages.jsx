// app/dna-sequencing/hybrid-genome-sequencing/components/HybridAdvantages.jsx

const HybridAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Hybrid Genome Sequencing
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Combines long-read and short-read sequencing for more complete and accurate genome 
              assemblies, effectively resolving complex regions and reducing gaps.
            </li>
            <li>
              Balances the cost efficiency of short-read sequencing with the detailed resolution of 
              long-read sequencing, making it a budget-friendly choice for comprehensive genome analysis.
            </li>
            <li>
              Enhances detection of structural variants, such as large insertions and deletions, 
              improving the understanding of genetic diversity and disease mechanisms.
            </li>
            <li>
              Provides better coverage of challenging genomic features, like high GC content and 
              repetitive sequences, by leveraging the strengths of both sequencing technologies.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HybridAdvantages;