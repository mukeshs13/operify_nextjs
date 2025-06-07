const WGBSBioinformatics = () => {
  return (
    <section className="py-8 lg:py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-gray-600 text-left pb-6 text-2xl lg:text-3xl font-semibold mb-8">
          Bioinformatics Pipeline
        </h2>
        
        {/* Pipeline Image */}
        <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <div className="flex justify-center">
            <img 
              src="/images/wgbs-bioinformatics-pipeline.jpg" 
              alt="WGBS Bioinformatics Pipeline Workflow"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Pipeline Description */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm lg:text-base">
              Comprehensive WGBS bioinformatics pipeline including quality control, alignment, methylation calling, and downstream analysis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WGBSBioinformatics;