const WGBSAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Whole Genome Bisulphite Sequencing (WGBS)
        </h2>
        
        {/* High-resolution mapping */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Provides high-resolution mapping of DNA methylation patterns across the genome, including CpG, CHG, and CHH sites, offering detailed insights into epigenetic modifications.
          </p>
        </div>

        {/* Precise quantification */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Enables precise quantification of methylation levels, distinguishing between methylated and unmethylated cytosines based on read counts.
          </p>
        </div>

        {/* CpG site detection */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            This technique can detect effective CpG sites reaching over 75% of all CpG sites in the entire genome.
          </p>
        </div>

        {/* Valuable insights */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Provides valuable insights into cell fate determination, genetic reprogramming, gene regulation, developmental epigenetics, disease mechanisms, and the identification of new epigenetic markers and therapeutic targets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WGBSAdvantages;