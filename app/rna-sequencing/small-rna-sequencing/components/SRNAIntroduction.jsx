// app/rna-sequencing/small-rna-sequencing/components/SRNAIntroduction.jsx

const SRNAIntroduction = () => {
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
              Small RNA sequencing (sRNA-seq) is designed to identify and analyze small non-coding RNAs (ncRNAs) that are under 200 nucleotides in length. These small RNAs, including microRNAs (miRNAs), small interfering RNAs (siRNAs), small nucleolar RNAs (snoRNAs), PIWI-interacting RNAs (piRNAs), and trans-acting siRNAs (tasiRNAs), play crucial roles in gene silencing and post-transcriptional regulation.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The sRNA-seq workflow involves isolating miRNAs from samples, followed by preparing libraries with specific adapters and sequencing them using high-throughput platforms.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The bioinformatics pipeline for sRNA-seq encompasses data preprocessing, alignment with reference genomes, and identification of small RNA species. This analysis includes differential expression studies, characterization of novel small RNAs, and pathway analysis to gain functional insights into sRNA-target interactions.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Facilitates the discovery of novel small RNAs and offers detailed insights into their expression and functions. It links post-transcriptional regulation to phenotypic outcomes, aiding in the understanding of disease mechanisms and the identification of new biomarkers.
            </p>
          </div>
          
          {/* Right side image */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 text-center">from brochure<br/>Small RNA<br/>sequencing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SRNAIntroduction;