// app/dna-sequencing/whole-genome-sequencing/denovo/components/DenovoApplications.jsx

const DenovoApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Genome Assembly",
      description: "Enables the construction of comprehensive and accurate genome assemblies from scratch, essential for understanding the genetic blueprint of organisms where reference genomes are unavailable or incomplete."
    },
    {
      number: "2", 
      title: "Genetic Variation Analysis",
      description: "Facilitates the identification of genetic variants, including single nucleotide polymorphisms (SNPs), insertions, deletions, and structural variants, which are crucial for studying genetic diversity, evolution, and disease."
    },
    {
      number: "3",
      title: "Functional Genomics",
      description: "Supports the annotation of genes, regulatory elements, and non-coding regions, providing insights into gene function, gene expression regulation, and the roles of various genomic elements in biological processes."
    },
    {
      number: "4",
      title: "Comparative Genomics",
      description: "Allows for the comparison of genome sequences across different species or strains, aiding in the identification of evolutionary relationships, adaptation mechanisms, and the conservation of key genomic features."
    },
    {
      number: "5",
      title: "Applications in Diverse Fields",
      description: "Supports various research applications such as identifying genetic variants associated with diseases, exploring evolutionary relationships, and understanding genetic diversity in populations, making it valuable for personalized medicine, evolutionary studies, and crop improvement."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Applications of Whole Genome Denovo Sequencing
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
      </div>
    </section>
  );
};

export default DenovoApplications;