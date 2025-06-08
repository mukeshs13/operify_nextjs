// app/rna-sequencing/circular-rna-sequencing/components/CircularIntroduction.jsx

const CircularIntroduction = () => {
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
              Circular RNA sequencing (circRNA-seq) focuses on identifying and characterizing non-coding circular RNAs formed through back-splicing events. These circRNAs regulate gene expression by acting as miRNA sponges, influence alternative splicing, modulate transcription, interact with proteins, and serve as potential biomarkers and therapeutic targets.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              As compared to Linear RNAs, circRNAs are covalently closed loops with no free ends, which provides them with enhanced stability and distinct regulatory functions in gene expression and cellular processes.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The workflow starts with isolating total RNA from the sample, which includes both linear and circular RNAs. Linear RNAs are then removed through ribosomal RNA (rRNA) depletion or exonuclease treatment to enrich the circular RNA fraction. Next, the RNA is circularized, and sequencing adapters are added during library preparation. The final step involves sequencing the prepared libraries.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="bg-yellow-200 px-1 rounded">Bioinformatics</span> analysis for circRNA sequencing involves preprocessing data and mapping reads to a reference genome to identify back-splicing junctions. Computational tools are then used to quantify circRNA expression, discover novel circRNAs, and perform downstream analysis.
            </p>
          </div>
          
          {/* Right side image */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 text-center">image from Circular RNA Sequencing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularIntroduction;