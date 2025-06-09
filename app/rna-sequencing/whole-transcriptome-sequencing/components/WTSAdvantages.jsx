const WTSAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Whole Transcriptome Sequencing (WTS)
        </h2>
        
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            {/* Novel transcripts identification */}
            <li>
              Enables the identification of novel transcripts, alternative splicing events, post-transcriptional 
              modifications, and gene fusions without prior knowledge, making it ideal for exploratory research.
            </li>

            {/* Comprehensive understanding */}
            <li>
              Analyzing the entire transcriptome helps gain a deeper understanding of gene regulation, 
              cellular responses, and pathways, leading to a more comprehensive view of biological processes.
            </li>

            {/* Allele-specific analysis */}
            <li>
              Enables allele-specific gene expression analysis, offering valuable insights into gene 
              regulation and genetic variability.
            </li>

            {/* Higher detection rates */}
            <li>
              Facilitates higher detection rates of gene fusions, indels, SNPs, and other genetic variations, 
              offering greater reliability in research outcomes.
            </li>

            {/* Research applications */}
            <li>
              Widely used in fields such as cancer research and developmental biology, WTS uncovers 
              complex molecular mechanisms and aids in the discovery of potential biomarkers.
            </li>

            {/* Bacterial insights */}
            <li>
              Provides valuable insights into bacterial gene expression, helping to unravel the mysteries of 
              gene regulation, host-pathogen interactions, antibiotic resistance, and the underlying causes 
              of various diseases.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WTSAdvantages;