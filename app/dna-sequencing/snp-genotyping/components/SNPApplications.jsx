// app/dna-sequencing/snp-genotyping/components/SNPApplications.jsx
export default function SNPApplications() {
  const applications = [
    {
      number: "1",
      title: "Genome-wide association studies (GWAS)",
      description: "SNP-based genotyping is widely utilized in Genome-Wide Association Studies (GWAS) to identify genetic variants linked to specific traits or diseases, providing insights into genetic predispositions and the mechanisms underlying complex conditions such as diabetes, heart disease, and neurological disorders."
    },
    {
      number: "2", 
      title: "Plant and animal breeding",
      description: "In agriculture, SNP-based genotyping facilitates marker-assisted selection (MAS) to enhance desirable traits such as yield, disease resistance, and environmental adaptability in crops and livestock."
    },
    {
      number: "3",
      title: "Personalized medicine",
      description: "SNP genotyping can guide personalized treatment strategies by identifying genetic variations that affect drug metabolism, efficacy, and toxicity, leading to more tailored healthcare approaches."
    },
    {
      number: "4",
      title: "Forensic science",
      description: "SNPs are employed in forensic analysis for human identification and paternity testing, providing reliable genetic markers that can help solve criminal cases or establish family relationships."
    },
    {
      number: "5",
      title: "Evolutionary biology",
      description: "Researchers use SNP genotyping to study evolutionary relationships, population dynamics, and the genetic basis of adaptation in various species, contributing to our understanding of evolutionary processes."
    },
    {
      number: "6",
      title: "Disease prediction and prevention",
      description: "SNP-based genotyping is applied in public health to assess genetic risk factors for diseases, enabling early interventions and prevention strategies in at-risk populations."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Applications of SNP-based Genotyping
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-teal-600 text-white rounded-full text-sm font-semibold">
                    {app.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-teal-700 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ddRAD Sequencing Highlight */}
        <div className="mt-10 bg-teal-50 rounded-lg p-6 border border-teal-100">
          <h3 className="text-xl font-semibold text-teal-700 mb-4">
            Double Digest Restriction-site Associated DNA (ddRAD) Sequencing
          </h3>
          <p className="text-teal-800 font-medium mb-2">
            Focused, Cost-Effective Genotyping with ddRAD
          </p>
          <p className="text-gray-700 leading-relaxed">
            ddRAD sequencing is based on the Restriction Fragmentation technique combined with 
            Next-Generation Sequencing (NGS). It is a robust approach for "genotyping and SNP discovery" 
            that doesn't require a reference genome. With the potential to develop hundreds to tens of thousands 
            of genetic markers, ddRAD is ideal for applications in population genetics, germplasm assessment, 
            marker-trait associations, GWAS, and QTL mapping.
          </p>
        </div>
      </div>
    </section>
  );
}