// app/dna-sequencing/microsatellites-ssr-str/components/MicrosatellitesIntroduction.jsx

const MicrosatellitesIntroduction = () => {
  return (
    <section className="py-0 md:py-12 lg:py-16">
      <div className="container-fluid px-0">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 px-4 lg:px-8">
          Introduction and Workflow
        </h2>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.14fr_1fr] min-h-[140px] lg:min-h-[280px]">
          {/* Left side content */}
          <div className="px-6 lg:px-9 py-6 lg:py-0">
            <p className="mb-3 text-gray-600 leading-relaxed">
              Microsatellites, also known as simple sequence repeats (SSRs) or short tandem repeats (STRs), are repetitive DNA sequences typically 2-6 base pairs in length, found abundantly across the genome.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              These sequences vary in repeat number across individuals, providing a unique genetic profile. Microsatellite-based genotyping analyze genetic diversity, population structure, and inheritance patterns by identifying the variation in microsatellite loci between individuals.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow begins with DNA extraction, followed by PCR amplification of specific microsatellite regions, and analysis via gel or capillary electrophoresis. The variation in repeat numbers at each locus generates distinctive patterns for genotyping.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Electropherogram data is converted into allele calls, allowing allele size analysis, frequency distribution, and individual or population-level genotype matching.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Microsatellite-based genotyping is widely applied in fields like conservation genetics, forensic science, and agriculture.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px]"
            style={{ backgroundImage: "url('/images/microsatellites-sequencing.png')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default MicrosatellitesIntroduction;