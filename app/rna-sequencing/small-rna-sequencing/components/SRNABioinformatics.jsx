// app/rna-sequencing/small-rna-sequencing/components/SRNABioinformatics.jsx

const SRNABioinformatics = () => {
  return (
    <section className="py-8 lg:py-12 bg-gray-50">
      <div className="container mx-auto max-w-none px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Bioinformatics Pipeline
        </h2>
        
        {/* Pipeline Image */}
        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <div className="flex justify-center">
            <img 
              src="/images/srna-bioinformatics-pipeline.jpg" 
              alt="Small RNA Sequencing Bioinformatics Pipeline Workflow"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Pipeline Description */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm lg:text-base">
              Small RNA sequencing bioinformatics pipeline for miRNA and small RNA analysis and expression profiling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SRNABioinformatics;