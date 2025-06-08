// app/rna-sequencing/single-cell-rna-sequencing/components/SingleCellApplications.jsx

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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Applications of Single Cell RNA Sequencing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Single Cell RNA sequencing is widely utilized across{" "}
            <span className="bg-orange-200 px-2 py-1 rounded">plants</span>,{" "}
            <span className="bg-orange-200 px-2 py-1 rounded">animals</span>, and{" "}
            <span className="bg-orange-200 px-2 py-1 rounded">humans</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">
                  {app.number}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {app.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCellApplications;