// app/dna-sequencing/snp-genotyping/components/SNPAdvantages.jsx

const SNPAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of SNP-based Genotyping
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Allows for precise identification of genetic variations at a single nucleotide level, 
              enabling detailed mapping of genetic diversity.
            </li>
            <li>
              Provides an efficient, cost-effective solution for analyzing thousands of SNPs across 
              large populations, ideal for high-throughput studies.
            </li>
            <li>
              SNP markers are stable and abundant across genomes, providing high data quality, 
              reproducibility, and scalability, which are essential for reliable genetic studies, 
              comparative analyses across multiple populations or species, and make SNP-based 
              genotyping a powerful tool for both research and applied genomics.
            </li>
            <li>
              Can reveal associations between genetic variations and complex traits, allowing 
              researchers to identify genetic contributors to health, disease, or productivity in agriculture.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SNPAdvantages;