// app/rna-sequencing/lncrna-sequencing/components/LncRNAIntroduction.jsx

const LncRNAIntroduction = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-none mx-auto px-6">
        <div className="text-start mb-4">
          <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2">
            Introduction and Workflow
          </h2>
        </div>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Long non-coding RNAs (lncRNAs) are a class of RNA molecules longer than 200 nucleotides that do not code for proteins. Based on their position and direction of transcription, lncRNAs are further classified into subtypes such as antisense, intergenic, overlapping, intronic, bidirectional, and processed. These RNAs play essential roles in regulating gene expression at various levels, impacting a wide range of cellular processes.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              lncRNA sequencing workflow starts with the removal of ribosomal RNA (rRNA) from the total RNA sample to isolate lncRNAs and mRNAs. The isolated RNA is then subjected to library preparation and high-throughput sequencing. Through specific computational pipelines lncRNAs will be identified during bio-informatic analysis.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The bioinformatics pipeline for lncRNA sequencing involves the alignment of sequencing data to reference genomes, identification of lncRNAs, quantification of their expression level, and other downstream analyses.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              lncRNA sequencing uncovers their roles in gene regulation and highlights their various functions, including chromatin remodeling, transcriptional control, nucleosome repositioning, and post-transcriptional processing.
            </p>
          </div>
          
          {/* Right side image */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 text-center">Brochure<br/>lncRNA Sequencing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LncRNAIntroduction;