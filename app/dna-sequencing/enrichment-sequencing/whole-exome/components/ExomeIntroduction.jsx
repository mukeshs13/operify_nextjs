// app/dna-sequencing/enrichment-sequencing/whole-exome/components/ExomeIntroduction.jsx
export default function ExomeIntroduction() {
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
              Whole Exome Sequencing (WES) is sequencing of only protein-coding 
              regions (&lt;2% of the genome, also known as exome), which accounts for 
              80-85% of disease-related variants.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow involves DNA isolation, fragmentation, capturing exonic 
              regions, and sequencing to generate millions of short reads. In the 
              bioinformatics analysis, these reads undergo alignment to a reference 
              genome, followed by the variant calling (SNVs, Indels) and data analysis.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Pinpoints potential disease-causing mutations, providing valuable insights 
              for population genetics, genetic disease research, and cancer studies.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Extensively utilized in diagnostic setting to detect clinically relevant 
              genomic alterations associated with phenotype of the patient.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px]"
            style={{ 
              backgroundImage: "url('/images/dna.jpg')" 
            }}
          />
        </div>
      </div>
    </section>
  );
}