const SingleCellApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Cellular Heterogeneity",
      description: "Enables the identification and characterization of distinct cell types within complex tissues, providing insights into the diversity and functions of individual cells in health and disease."
    },
    {
      number: "2", 
      title: "Developmental Biology",
      description: "Reveals how gene expression changes during development and differentiation, helping to understand the mechanisms driving cell fate decisions and tissue formation."
    },
    {
      number: "3",
      title: "Immunology",
      description: "Provides detailed profiles of immune cell types and states, aiding in the study of immune responses, autoimmune diseases, and vaccine development by uncovering the dynamics of individual immune cells."
    },
    {
      number: "4",
      title: "Cancer Research",
      description: "Helps in identifying rare tumor cell populations, understanding tumor heterogeneity, and discovering novel biomarkers or therapeutic targets specific to different cancer subtypes."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Applications of Single Cell RNA Sequencing
        </h2>
        <p className="text-gray-600 text-base mb-6 lg:mb-8">
          Single Cell RNA sequencing is widely utilized across plants, animals, and humans.
        </p>
        
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