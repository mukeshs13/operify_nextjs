const WGBSAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Whole Genome Bisulphite Sequencing (WGBS)
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Provides high-resolution mapping of DNA methylation patterns across the genome, including CpG, CHG, and CHH sites, offering detailed insights into epigenetic modifications.
            </li>
            <li>
              Enables precise quantification of methylation levels, distinguishing between methylated and unmethylated cytosines based on read counts.
            </li>
            <li>
              This technique can detect effective CpG sites reaching over 75% of all CpG sites in the entire genome.
            </li>
            <li>
              Provides valuable insights into cell fate determination, genetic reprogramming, gene regulation, developmental epigenetics, disease mechanisms, and the identification of new epigenetic markers and therapeutic targets.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WGBSAdvantages;