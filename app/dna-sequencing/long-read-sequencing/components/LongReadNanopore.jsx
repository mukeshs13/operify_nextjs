// 7c - LongReadNanopore.jsx
const LongReadNanopore = () => {
  return (
    <section className="py-0 md:py-12 lg:py-16">
      <div className="container-fluid px-0">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 px-4 lg:px-8 mb-8">
          Long Read Sequencing Technologies
        </h2>

        {/* Oxford Nanopore Technology Section */}
        <div className="mb-12">
          <h3 className="text-xl lg:text-2xl text-gray-700 text-left pb-2 px-4 lg:px-8 mb-4">
            Long Read Sequencing using Oxford Nanopore Technology
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.14fr] min-h-[140px] lg:min-h-[280px]">
            <div
              className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center bg-gray-100 order-2 lg:order-1"
              style={{ 
                backgroundImage: "url('/images/oxford-nanopore-tech.png')",
                backgroundColor: '#f8f9fa'
              }}
            >
              <div className="text-center p-4">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4">
                  <span className="text-sm font-medium">OXFORD NANOPORE</span>
                </div>
                <div className="text-gray-600 text-sm">
                  Real-time DNA Analysis
                </div>
              </div>
            </div>

            <div className="px-6 lg:px-9 py-6 lg:py-0 order-1 lg:order-2">
              <p className="mb-3 text-gray-600 leading-relaxed">
                Long-read Sequencing using Oxford Nanopore Technologies (ONT) delivers longer, continuous, and unambiguously assembled sequences, resulting in fewer contigs and enhancing overlap for accurate genome assembly.
              </p>
              <p className="mb-3 text-gray-600 leading-relaxed">
                Helps in sequencing long stretches of DNA for complete genome assemblies of microbial, human, animal and plant species.
              </p>
              <p className="mb-3 text-gray-600 leading-relaxed">
                Enables direct, real-time analysis of long DNA or RNA fragments by measuring changes in electric current as they pass through a nanopore embedded in a flow cell.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nanopore sequencing offers advantages across multiple research areas, including genome assembly, full-length transcript detection, base modification detection, and specialized applications like rapid clinical diagnoses and outbreak surveillance.
              </p>
            </div>
          </div>
        </div>

        {/* PacBio Technology Section */}
        <div>
          <h3 className="text-xl lg:text-2xl text-gray-700 text-left pb-2 px-4 lg:px-8 mb-4">
            Long Read Sequencing using PacBio Technology
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.14fr_1fr] min-h-[140px] lg:min-h-[280px]">
            <div className="px-6 lg:px-9 py-6 lg:py-0">
              <p className="mb-3 text-gray-600 leading-relaxed">
                PCR-free SMRT technology producing Hi-Fi reads via circular consensus sequencing (CCS) mode, yielding long reads up to 25 kb with 99.9% base level accuracy.
              </p>
              <p className="mb-3 text-gray-600 leading-relaxed">
                Enables rapid and cost-effective generation of contiguous, complete, and accurate de novo genome assemblies, even for complex genomes.
              </p>
              <p className="mb-3 text-gray-600 leading-relaxed">
                Allows the haplotype resolution of complex polyploids, particularly in plants.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The technology can be utilized to provide a comprehensive view of the epigenome and transcriptome, as well as uncover different variants such as SNPs, homopolymer repeats, translocations, structural variants, and copy number variants.
              </p>
            </div>

            <div
              className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center bg-gray-100"
              style={{ 
                backgroundImage: "url('/images/pacbio-tech.png')",
                backgroundColor: '#f8f9fa'
              }}
            >
              <div className="text-center p-4">
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg mb-4">
                  <span className="text-sm font-medium">PACBIO SMRT</span>
                </div>
                <div className="text-gray-600 text-sm">
                  Hi-Fi Circular Consensus Sequencing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongReadNanopore;