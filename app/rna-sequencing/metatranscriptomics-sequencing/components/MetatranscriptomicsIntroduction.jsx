// app/rna-sequencing/metatranscriptomics-sequencing/components/MetatranscriptomicsIntroduction.jsx

const MetatranscriptomicsIntroduction = () => {
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
              Metatranscriptomics sequencing examines RNA transcripts from entire microbial communities within their natural environments during a specific time frame. This approach helps to infer the functional profile of a community under specific conditions, which are usually dependent on the status of the host.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The process starts with the extraction of total RNA from a mixed microbial sample, without the need for bacterial isolation. Ribosomal RNA (rRNA) is then removed to enrich for mRNA and other non-ribosomal RNAs. The RNA is subsequently processed, prepared into libraries, and sequenced.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              The bioinformatics workflow includes preprocessing the raw sequencing reads, performing quality control, and normalizing the data. The reads are mapped to reference genomes or databases to quantify gene expression levels. Functional annotation and pathway analysis are then carried out to understand the roles of various transcripts and their impact on microbial community functions.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Metatranscriptomics is applicable to a wide range of environmental samples, such as soil, oceans, and the human gut, facilitating studies on microbial diversity, disease mechanisms, nutrient cycling, and environmental adaptation.
            </p>
          </div>
          
          {/* Right side image */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 text-center">Brochure<br/>Metatranscriptomics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetatranscriptomicsIntroduction;