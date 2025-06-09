// app/dna-sequencing/enrichment-sequencing/whole-exome/components/ExomeAdvantages.jsx
const ExomeAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Whole Exome Sequencing
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Cost-effective as compared to Whole Genome Sequencing (WGS), 
              making it accessible to a broader range of researchers and clinicians.
            </li>
            <li>
              WES offers extensive sequencing of exonic regions, improving 
              the detection of single-nucleotide variants (SNVs), copy number variants (CNVs), 
              and insertions/deletions (InDels) with a sensitivity comparable to WGS, ensuring 
              high accuracy in identifying genetic variants.
            </li>
            <li>
              WES generates a smaller data set compared to WGS, facilitating 
              faster and easier data analysis, which can expedite research and diagnostic processes.
            </li>
            <li>
              WES is widely used in both medical and agricultural fields, 
              supporting advancements in disease diagnosis, personalized medicine, and crop 
              improvement. Provides a comprehensive, high-resolution view of the genome, 
              surpassing the coverage offered by targeted sequencing.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ExomeAdvantages;