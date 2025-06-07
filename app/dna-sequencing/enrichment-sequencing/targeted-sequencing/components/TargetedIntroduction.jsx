const TargetedIntroduction = () => {
  return (
    <section className="py-0 md:py-12 lg:py-16">
      <div className="container-fluid px-0">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 px-4 lg:px-8">
          Introduction and Workflow
        </h2>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.14fr_1fr] min-h-[140px] lg:min-h-[280px]">
          {/* Left side content */}
          <div className="px-6 lg:px-9 py-6 lg:py-0">
            <p className="mb-3 text-gray-600 leading-relaxed">
              Targeted DNA Sequencing (also know as Gene Panel Sequencing) concentrate on specific genes or genomic regions of interest, allowing for in-depth analysis of mutations that are most relevant to particular diseases or conditions.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The process begins with the selection of specific genes or regions, followed by the amplification of these targets through PCR. Sequencing is then performed on the amplified regions, ensuring high coverage and accuracy.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Advanced bioinformatics tools are employed to analyze the sequencing data, providing detailed insights into genetic variants, their potential impact, and relevance to disease.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Targeted sequencing is widely used in clinical settings for the diagnosis of genetic disorders, personalized medicine, and cancer genomics, providing actionable insights that can directly impact patient care.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center"
            style={{ 
              backgroundImage: "url('/images/targeted-sequencing-overview.png')",
              backgroundColor: '#f8f9fa'
            }}
          >
            <div className="text-center p-4">
              <div className="bg-teal-600 text-white px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">TARGETED SEQUENCING</span>
              </div>
              <div className="text-gray-600 text-sm">
                Targeted Region of Interest
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetedIntroduction;