// app/dna-sequencing/metagenomics-sequencing/components/MetagenomicsIntroduction.jsx

const MetagenomicsIntroduction = () => {
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
              Metagenomics is a genomic method to investigate the genetic diversity within a sample, focusing on the specific regions (16S rRNA/ 18S rRNA/ ITS regions) or utilizing Shotgun metagenomics for comprehensive sequencing of all genes present.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow begins with DNA extraction from environmental samples, followed by fragmentation and sequencing of either specific region or the entire geneset.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Bioinformatics analysis encompasses sequence alignment, taxonomy identification, and phylogenetic analysis. Additional analyses may involve functional annotation, comparative genomics, and statistical evaluations.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Can be used to study diverse environmental samples like water, soil, and fecal matter, providing valuable insights into microbial diversity and host-microbiome interactions.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px]"
            style={{ backgroundImage: "url('/images/metagenomics-sequencing.png')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default MetagenomicsIntroduction;