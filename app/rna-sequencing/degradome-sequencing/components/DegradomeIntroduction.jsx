// app/rna-sequencing/degradome-sequencing/components/DegradomeIntroduction.jsx

const DegradomeIntroduction = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-none mx-auto px-6">
        <div className="text-start mb-4">
          <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 ">
            Introduction and Workflow
          </h2>
        </div>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Degradome sequencing, also called Parallel Analysis of RNA Ends (PARE), is a high-throughput technique to analyze RNA degradation products, uncovering RNA stability, miRNA targets, and regulatory networks.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Degradome Sequencing Workflow combines next-generation sequencing (NGS) with a modified 5' RACE method, involving RNA extraction, adapter ligation to capture degradation products, cDNA synthesis, and high-throughput sequencing to map RNA cleavage sites.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Bioinformatics analysis for Degradome Sequencing include data preprocessing, aligning reads to reference genomes, identifying miRNA/ta-siRNA cleavage sites, and quantifying cleaved targets, revealing RNA decay dynamics and regulatory mechanisms.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The method facilitates the discovery of novel miRNAs and ta-siRNAs, studies on miRNA-mediated gene regulation, and comparative RNA decay analysis across species, contributing to a comprehensive understanding of RNA life cycles.
            </p>
          </div>
          
          {/* Right side image */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 text-center">Brochure from Degradome<br/>sequencing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DegradomeIntroduction;