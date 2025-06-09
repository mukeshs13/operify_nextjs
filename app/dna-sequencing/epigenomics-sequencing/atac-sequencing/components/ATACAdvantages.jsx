const ATACAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of ATAC Sequencing
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              ATAC-seq has become the method of choice for studying chromatin accessibility due to its efficiency and robust performance.
            </li>
            <li>
              Requires only 50,000 cells per sample, offering high sensitivity and making it ideal for studies with limited cell populations. This technique is versatile, applicable to both bulk tissue and single-cell analysis.
            </li>
            <li>
              Features simplified experimental steps, offering good reproducibility and a high success rate in generating reliable data.
            </li>
            <li>
              Simultaneously reveals the genomic locations of open chromatin, DNA-binding proteins, and transcription factor binding site interactions, providing a holistic view of chromatin accessibility.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ATACAdvantages;