// app/rna-sequencing/lncrna-sequencing/components/LncRNABioinformatics.jsx

const LncRNABioinformatics = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bioinformatics Pipeline
          </h2>
        </div>
        
        {/* Pipeline Image */}
        <div className="flex justify-center">
          <div className="bg-gray-100 p-12 rounded-lg shadow-lg max-w-5xl w-full">
            <div className="grid grid-cols-6 gap-4 items-center">
              {/* Raw Sequencing Data */}
              <div className="text-center">
                <div className="bg-blue-200 p-4 rounded-lg mb-2">
                  <p className="text-sm font-semibold">Raw Sequencing Data</p>
                  <p className="text-xs">(fastq file)</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="text-center">
                <div className="text-2xl text-gray-600">→</div>
              </div>
              
              {/* Quality Control */}
              <div className="text-center">
                <div className="bg-green-200 p-4 rounded-lg mb-2">
                  <p className="text-sm font-semibold">Quality Control</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="text-center">
                <div className="text-2xl text-gray-600">→</div>
              </div>
              
              {/* Cleaned High Quality Sequencing Data */}
              <div className="text-center">
                <div className="bg-yellow-200 p-4 rounded-lg mb-2">
                  <p className="text-sm font-semibold">Cleaned High Quality Sequencing Data</p>
                  <p className="text-xs">(fastq file)</p>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="text-center">
                <div className="text-2xl text-gray-600">→</div>
              </div>
              
              {/* Next row */}
              <div className="col-span-6 mt-4">
                <div className="grid grid-cols-5 gap-4 items-center">
                  {/* Alignment to Reference Genome */}
                  <div className="text-center">
                    <div className="bg-purple-200 p-4 rounded-lg mb-2">
                      <p className="text-sm font-semibold">Alignment to Reference Genome</p>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-center">
                    <div className="text-2xl text-gray-600">→</div>
                  </div>
                  
                  {/* Aligned Reads to Reference Genome */}
                  <div className="text-center">
                    <div className="bg-orange-200 p-4 rounded-lg mb-2">
                      <p className="text-sm font-semibold">Aligned Reads to Reference Genome</p>
                      <p className="text-xs">(bam file)</p>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-center">
                    <div className="text-2xl text-gray-600">→</div>
                  </div>
                  
                  {/* Expression Profiling */}
                  <div className="text-center">
                    <div className="bg-red-200 p-4 rounded-lg mb-2">
                      <p className="text-sm font-semibold">Expression Profiling</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Final row */}
              <div className="col-span-6 mt-4">
                <div className="grid grid-cols-3 gap-4 items-center">
                  {/* Normalized Expression Profile */}
                  <div className="text-center">
                    <div className="bg-teal-200 p-4 rounded-lg mb-2">
                      <p className="text-sm font-semibold">Normalized Expression Profile</p>
                      <p className="text-xs">(FPKM/TPM)</p>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-center">
                    <div className="text-2xl text-gray-600">→</div>
                  </div>
                  
                  {/* Downstream Advanced Analysis */}
                  <div className="text-center">
                    <div className="bg-indigo-200 p-4 rounded-lg mb-2">
                      <p className="text-sm font-semibold">Downstream Advanced Analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LncRNABioinformatics;