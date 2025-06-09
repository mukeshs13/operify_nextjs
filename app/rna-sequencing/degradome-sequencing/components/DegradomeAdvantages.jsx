const DegradomeAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Degradome Sequencing
        </h2>
        
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            {/* Focused analysis */}
            <li>
              Degradome sequencing provides a focused analysis of RNA degradation, specifically targeting cleavage sites mediated by miRNAs and ta-siRNAs, making it ideal for studying gene regulation and RNA stability.
            </li>

            {/* Enhanced sensitivity */}
            <li>
              By targeting degradation products, degradome sequencing minimizes the impact of intact RNAs, enhancing sensitivity for detecting miRNA targets and cleavage events.
            </li>

            {/* Cost-effective */}
            <li>
              Degradome sequencing focuses on RNA cleavage sites, eliminating the need for additional steps like ribosomal RNA removal, making it a more cost-effective alternative to broader transcriptome studies.
            </li>

            {/* Novel discovery */}
            <li>
              Degradome sequencing enables the identification of novel regulatory elements, such as circRNAs and biomarkers, expanding its utility in understanding RNA regulatory networks.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DegradomeAdvantages;