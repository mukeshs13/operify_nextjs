// 7a - LongReadIntroduction.jsx
const LongReadIntroduction = () => {
  return (
    <section className="py-0 md:py-12 lg:py-16">
      <div className="container-fluid px-0">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 px-4 lg:px-8">
          Introduction and Workflow
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.14fr_1fr] min-h-[140px] lg:min-h-[280px]">
          <div className="px-6 lg:px-9 py-6 lg:py-0">
            <p className="mb-3 text-gray-600 leading-relaxed">
              Whole Genome Long Read Sequencing captures an organism's entire genome in a single read using extended strands, allowing precise analysis of complex genomic regions and structural variations.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Technologies like Oxford Nanopore and PacBio enable real-time sequencing with high accuracy. The process involves DNA isolation, fragmentation, and advanced bioinformatics analysis for accurate variant detection.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              This workflow supports sequencing for humans, animals, plants, bacteria, and disease-related microbes using long continuous reads for better genome assembly.
            </p>
          </div>

          <div
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center bg-gray-100"
            style={{ 
              backgroundImage: "url('/images/long-read-intro.png')",
              backgroundColor: '#f8f9fa'
            }}
          >
            <div className="text-center p-4">
              <div className="bg-teal-600 text-white px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">LONG READ SEQUENCING</span>
              </div>
              <div className="text-gray-600 text-sm">
                Oxford Nanopore & PacBio Platforms
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongReadIntroduction;