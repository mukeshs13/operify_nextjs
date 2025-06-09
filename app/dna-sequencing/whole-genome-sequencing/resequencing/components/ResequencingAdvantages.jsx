const ResequencingAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Whole Genome ReSequencing
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Provides a detailed examination of an organism's entire genome, revealing all genetic variations compared to a reference genome.
            </li>
            <li>
              Enables accurate identification of single nucleotide polymorphisms (SNPs), insertions, deletions, and structural variants, crucial for understanding genetic diversity and disease mechanisms.
            </li>
            <li>
              Facilitates the discovery of genetic markers associated with diseases, guiding personalized treatment approaches.
            </li>
            <li>
              Supports diverse studies including evolutionary biology, agricultural genetics, and microbial genomics, enhancing insights into genetic adaptations and relationships across species.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResequencingAdvantages;