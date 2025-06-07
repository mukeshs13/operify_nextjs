// app/dna-sequencing/snp-genotyping/components/SNPAdvantages.jsx
export default function SNPAdvantages() {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of SNP-based Genotyping
        </h2>
        
        {/* Precision identification */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Allows for precise identification of genetic variations</strong> at a single nucleotide level, 
            enabling detailed mapping of genetic diversity.
          </p>
        </div>

        {/* Cost-effective solution */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Provides an efficient, cost-effective solution</strong> for analyzing thousands of SNPs across 
            large populations, ideal for high-throughput studies.
          </p>
        </div>

        {/* Stability and quality */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>SNP markers are stable and abundant</strong> across genomes, providing high data quality, 
            reproducibility, and scalability, which are essential for reliable genetic studies, 
            comparative analyses across multiple populations or species, and make SNP-based 
            genotyping a powerful tool for both research and applied genomics.
          </p>
        </div>

        {/* Association capabilities */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Can reveal associations between genetic variations and complex traits</strong>, allowing 
            researchers to identify genetic contributors to health, disease, or productivity in agriculture.
          </p>
        </div>
      </div>
    </section>
  );
}