// app/rna-sequencing/single-cell-rna-sequencing/components/SingleCellIntroduction.jsx

const SingleCellIntroduction = () => {
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
              Single Cell RNA Sequencing (scRNA-seq) analyzes gene expression at the resolution of individual cells, allowing for the exploration of cellular transcriptomic heterogeneity and the discovery of rare cell types within complex tissues.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The workflow involves isolating individual cells from a sample, often using techniques like fluorescence-activated cell sorting (FACS), followed by RNA extraction, library preparation and (or) all the mRNA molecules in each cell are specifically barcoded either by capturing individual cells in a gel-emulsions (Gem; 10X) or Split-pool approach.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The <span className="bg-yellow-200 px-1 rounded">bioinformatics</span> pipeline includes data preprocessing, which involves quality control and normalization of the sequencing reads. The reads are then aligned to a reference genome or transcriptome to identify gene expression levels in each cell. Subsequent analysis involves clustering of cells based on expression profiles, differential gene expression analysis, and the identification of cell types and states.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Single-cell high-resolution transcriptome profiling offers valuable insights into gene regulatory networks and unveils diverse gene expression patterns within individual cells across cell cultures, tissues, and organs.
            </p>
          </div>
          
          {/* Right side image */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 text-center">Workflow from Single Cell RNA Sequencing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCellIntroduction;