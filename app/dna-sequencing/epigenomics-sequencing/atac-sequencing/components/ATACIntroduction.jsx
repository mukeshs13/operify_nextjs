const ATACIntroduction = () => {
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
              ATAC-seq identifies open chromatin regions, marking transcriptionally active areas in the genome, and provides insights into chromatin accessibility and gene expression regulation.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow uses Tn5 transposase to tag and amplify open chromatin (transposase-accessible) regions, followed by DNA fragmentation, purification, library construction, and sequencing.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The sequenced fragments are analysed using advanced bioinformatics tools to characterize the regulatory landscape, including chromatin accessibility, nucleosome mapping, and transcription factor binding.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Assist in numerous applications like biomarker discovery, identification of novel enhancer, analysis of cell-type specific regulation, evolutionary studies and comparative epigenomic studies.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center"
            style={{ 
              backgroundImage: "url('/images/atac-workflow.png')",
              backgroundColor: '#f8f9fa'
            }}
          >
            <div className="text-center p-4">
              <div className="bg-teal-600 text-white px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">ATAC WORKFLOW</span>
              </div>
              <div className="text-gray-600 text-sm">
                Workflow from Assay for Transposase-Accessible Chromatin (ATAC) Sequencing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATACIntroduction;