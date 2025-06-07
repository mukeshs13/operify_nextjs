// app/dna-sequencing/microsatellites-ssr-str/components/MicrosatellitesAdvantages.jsx

const MicrosatellitesAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Microsatellites (SSR/STR) Based Genotyping
        </h2>
        
        {/* Highly variable */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Highly variable in repeat number among individuals,</strong> making them effective for distinguishing genetic differences within and between populations.
          </p>
        </div>

        {/* Locus-specific */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Unlike multi-locus markers like minisatellites,</strong> microsatellites are locus-specific, providing precise, targeted genetic information for detailed genotyping and genetic mapping.
          </p>
        </div>

        {/* Highly reproducible */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Highly reproducible across labs,</strong> making it a reliable method for studies requiring consistent and repeatable results, such as population genetics and forensic analysis.
          </p>
        </div>

        {/* Co-dominant inheritance */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            <strong>Show co-dominant inheritance,</strong> allowing the detection of both alleles at a locus for accurate identification of heterozygous and homozygous genotypes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MicrosatellitesAdvantages;