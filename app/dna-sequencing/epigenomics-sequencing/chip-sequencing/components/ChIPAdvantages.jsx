const ChIPAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of ChIP Sequencing
        </h2>
        
        {/* Genome-wide mapping */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Offers detailed genome-wide mapping of protein-DNA interactions, identifying binding sites of transcription factors, regulators, and other DNA-associated proteins.
          </p>
        </div>

        {/* Specific antibodies */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Utilizes specific antibodies to precisely capture and sequence protein-DNA complexes, providing accurate reflections of in vivo binding events.
          </p>
        </div>

        {/* Gene regulation insights */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Reveals critical insights into gene regulation and chromatin dynamics, aiding in the understanding of gene expression, regulatory mechanisms, and epigenetic modifications.
          </p>
        </div>

        {/* Diverse applications */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Facilitates studies on gene regulation in various contexts, including developmental processes, cancer research, and other biological phenomena, enhancing our understanding of complex biological systems and diseases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChIPAdvantages;