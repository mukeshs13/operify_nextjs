// app/dna-sequencing/hybrid-genome-sequencing/components/HybridBioinformatics.jsx

const HybridBioinformatics = () => {
  return (
    <section className="py-8 lg:py-12 bg-gray-50">
      <div className="container mx-auto max-w-none px-4 lg:px-6">
        <h2 className="text-gray-600 text-left pb-6 text-2xl lg:text-3xl font-normal mb-8">
          Bioinformatics Pipeline
        </h2>
        
        {/* Pipeline Image */}
        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <div className="flex justify-center">
            <img 
              src="/images/bioinformatics-pipeline.jpg" 
              alt="Bioinformatics Pipeline Workflow"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridBioinformatics;