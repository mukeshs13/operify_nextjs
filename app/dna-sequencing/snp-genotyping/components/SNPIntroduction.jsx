// app/dna-sequencing/snp-genotyping/components/SNPIntroduction.jsx
export default function SNPIntroduction() {
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
              SNP-based genotyping identifies single nucleotide polymorphisms (SNPs) across the genome, 
              offering insights into genetic diversity, disease associations, and trait inheritance. It is widely applied in 
              population genetics, evolutionary biology, and plant and animal breeding.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px] flex items-center justify-center"
            style={{ 
              backgroundImage: "url('/images/snp-genotyping-overview.png')",
              backgroundColor: '#f8f9fa'
            }}
          >
            {/* ISO Certified badge placeholder */}
            <div className="text-center">
              <div className="bg-teal-600 text-white px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">ISO CERTIFIED</span>
              </div>
              <div className="flex justify-center space-x-4">
                <div className="bg-orange-400 text-white px-3 py-2 rounded text-xs">
                  DNA Sequencing
                </div>
                <div className="bg-orange-400 text-white px-3 py-2 rounded text-xs">
                  RNA Sequencing
                </div>
                <div className="bg-orange-400 text-white px-3 py-2 rounded text-xs">
                  Genomics Services
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of SNP-Based Genotyping */}
        <div className="px-6 lg:px-9 py-8">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
            Types of SNP-Based Genotyping using technique:
          </h3>
          
          <div className="space-y-8">
            {/* PCR Method */}
            <div>
              <h4 className="text-lg font-semibold text-teal-700 mb-3">1. PCR:</h4>
              <p className="text-gray-600 leading-relaxed mb-2">
                Utilizes PCR to amplify DNA regions containing SNPs, relying on allele-specific primers, 
                probes, or melting curve differences for SNP detection.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Examples:</strong> TaqMan Assay, KASP, ARMS-PCR, qPCR, High-Resolution Melting (HRM).
              </p>
            </div>

            {/* Microarray Method */}
            <div>
              <h4 className="text-lg font-semibold text-teal-700 mb-3">2. Microarray:</h4>
              <p className="text-gray-600 leading-relaxed mb-2">
                Employs DNA microarrays to detect and analyze SNPs across the genome using 
                hybridization with oligonucleotide probes specific to SNP loci.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Examples:</strong> Affymetrix GeneChips, Illumina Infinium Arrays, SNPlex, Axiom Array Platforms, MALDI-TOF Mass Spectrometry Arrays.
              </p>
            </div>

            {/* NGS Method */}
            <div>
              <h4 className="text-lg font-semibold text-teal-700 mb-3">3. NGS:</h4>
              <p className="text-gray-600 leading-relaxed mb-2">
                Uses Next-Generation Sequencing (NGS) for high-resolution, high-throughput SNP detection and analysis.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Examples:</strong> Whole-Genome Sequencing (WGS), Exome Sequencing, Targeted Sequencing, 
                Genotyping-by-Sequencing (GBS), Double Digest Restriction-site Associated DNA (ddRAD) Sequencing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}