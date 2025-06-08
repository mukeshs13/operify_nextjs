// app/rna-sequencing/iso-sequencing/components/IsoIntroduction.jsx

const IsoIntroduction = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Introduction and Workflow
          </h2>
        </div>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Iso-Seq, or Isoform Sequencing, leverages PCR free PacBio's Single Molecule, Real-Time (SMRT) sequencing technology to deliver detailed and accurate insights into RNA transcripts. PCR free SMRT technology produces long reads of upto 25Mbps length with 99.9% base level accuracy through circular consensus sequencing (CCS) mode.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              PacBio's SMRT sequencing technology enables the reading of full-length cDNA molecules in a single pass, allowing for the accurate identification of various isoforms, including alternative splicing events and post-transcriptional modifications. This approach minimizes errors and provides a high-resolution map of transcript structures.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The process begins with the isolation of high-quality RNA, which is then converted into cDNA followed by sequencing using PacBio SMRT technology.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The <span className="bg-yellow-200 px-1 rounded">bioinformatics</span> analysis of Iso-Seq data involves assembling full-length transcripts, annotating them, and comparing them to reference genomes or existing databases. This detailed analysis reveals the complexity of gene expression, including novel isoforms and splice variants, and aids in understanding their functional roles in various biological processes.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Iso-Seq using PacBio is particularly valuable for exploring gene expression at a granular level, discovering novel transcripts, and enhancing annotations of complex genomes.
            </p>
          </div>
          
          {/* Right side image */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 text-center">image from Iso Sequencing<br/>using PacBio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsoIntroduction;