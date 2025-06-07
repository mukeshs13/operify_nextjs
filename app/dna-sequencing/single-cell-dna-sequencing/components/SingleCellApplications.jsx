// app/dna-sequencing/single-cell-dna-sequencing/components/SingleCellApplications.jsx

const SingleCellApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Cancer Genomics",
      description: "Detects genetic mutations and variations in individual cancer cells, revealing tumor heterogeneity, identifying subclonal populations, and guiding personalized treatment strategies based on specific genetic alterations."
    },
    {
      number: "2", 
      title: "Developmental Biology",
      description: "Studies genetic variations and mutations in single cells during development, providing insights into cell lineage, differentiation, and the genetic basis of developmental disorders."
    },
    {
      number: "3",
      title: "Stem Cell Research",
      description: "Analyzes genetic profiles of individual stem cells to understand their potential for differentiation, track mutations during cell division, and improve stem cell therapies."
    },
    {
      number: "4",
      title: "Rare Disease Research",
      description: "Identifies genetic variants in single cells from patients with rare diseases, aiding in the discovery of novel disease-associated mutations and improving diagnostic precision."
    },
    {
      number: "5",
      title: "Population Genetics",
      description: "Examines genetic diversity at the single-cell level within populations to understand evolutionary processes, genetic variation, and adaptation mechanisms, offering a more detailed view of population genetics compared to bulk analysis."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Applications of Single Cell DNA Sequencing
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

export default SingleCellApplications;