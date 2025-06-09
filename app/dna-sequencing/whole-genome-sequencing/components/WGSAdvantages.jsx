// app/dna-sequencing/whole-genome-sequencing/components/WGSAdvantages.jsx

const WGSAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Whole Genome Sequencing
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Provides a comprehensive, high-resolution view of the genome, surpassing the coverage offered by targeted sequencing.
            </li>
            <li>
              Identifies both small (SNVs, CNVs, InDels) and large structural variants that may be missed with targeted approaches, offering valuable insights into inherited genetic conditions and characterizing mutations driving cancer progression.
            </li>
            <li>
              Generates large volumes of data quickly, facilitating the assembly of novel genomes.
            </li>
            <li>
              Uncovers genomic diversity, taxonomic classifications, and evolutionary relationships, enhancing our understanding of biological complexity.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WGSAdvantages;