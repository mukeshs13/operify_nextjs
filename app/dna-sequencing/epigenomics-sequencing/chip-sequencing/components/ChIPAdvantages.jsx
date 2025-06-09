const ChIPAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of ChIP Sequencing
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Offers detailed genome-wide mapping of protein-DNA interactions, identifying binding sites of transcription factors, regulators, and other DNA-associated proteins.
            </li>
            <li>
              Utilizes specific antibodies to precisely capture and sequence protein-DNA complexes, providing accurate reflections of in vivo binding events.
            </li>
            <li>
              Reveals critical insights into gene regulation and chromatin dynamics, aiding in the understanding of gene expression, regulatory mechanisms, and epigenetic modifications.
            </li>
            <li>
              Facilitates studies on gene regulation in various contexts, including developmental processes, cancer research, and other biological phenomena, enhancing our understanding of complex biological systems and diseases.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChIPAdvantages;