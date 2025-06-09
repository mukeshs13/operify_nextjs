// app/dna-sequencing/microsatellites-ssr-str/components/MicrosatellitesAdvantages.jsx

const MicrosatellitesAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Microsatellites (SSR/STR) Based Genotyping
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Highly variable in repeat number among individuals, making them effective for distinguishing genetic differences within and between populations.
            </li>
            <li>
              Unlike multi-locus markers like minisatellites, microsatellites are locus-specific, providing precise, targeted genetic information for detailed genotyping and genetic mapping.
            </li>
            <li>
              Highly reproducible across labs, making it a reliable method for studies requiring consistent and repeatable results, such as population genetics and forensic analysis.
            </li>
            <li>
              Show co-dominant inheritance, allowing the detection of both alleles at a locus for accurate identification of heterozygous and homozygous genotypes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MicrosatellitesAdvantages;