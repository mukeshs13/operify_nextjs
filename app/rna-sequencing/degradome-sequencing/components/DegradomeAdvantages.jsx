// app/rna-sequencing/degradome-sequencing/components/DegradomeAdvantages.jsx

const DegradomeAdvantages = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advantages of Degradome Sequencing
          </h2>
        </div>
        
        {/* Focused analysis */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Degradome sequencing provides a focused analysis of RNA degradation,</strong> specifically targeting cleavage sites mediated by miRNAs and ta-siRNAs, making it ideal for studying gene regulation and RNA stability.
          </p>
        </div>

        {/* Enhanced sensitivity */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>By targeting degradation products,</strong> degradome sequencing minimizes the impact of intact RNAs, enhancing sensitivity for detecting miRNA targets and cleavage events.
          </p>
        </div>

        {/* Cost-effective */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Degradome sequencing focuses on RNA cleavage sites,</strong> eliminating the need for additional steps like ribosomal RNA removal, making it a more cost-effective alternative to broader transcriptome studies.
          </p>
        </div>

        {/* Novel discovery */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Degradome sequencing enables the identification of novel regulatory elements,</strong> such as circRNAs and biomarkers, expanding its utility in understanding RNA regulatory networks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DegradomeAdvantages;