// app/dna-sequencing/microsatellites-ssr-str/components/MicrosatellitesApplications.jsx

const MicrosatellitesApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Linkage Analysis of Co-Segregation",
      description: "Microsatellites are widely used in genetic linkage studies to track the inheritance of specific traits or diseases, enabling the identification of disease-associated genes by analyzing co-segregation patterns in families."
    },
    {
      number: "2", 
      title: "Diagnosis and Identification of Human Diseases",
      description: "Microsatellite-based genotyping is used to identify genetic markers associated with diseases such as cancer, genetic disorders, and neurodegenerative conditions, aiding in diagnosis and risk prediction."
    },
    {
      number: "3",
      title: "Forensic Identification and Relatedness Testing",
      description: "In forensic science, microsatellites are used to create unique genetic profiles for individual identification, paternity testing, and resolving cases of human-relatedness or criminal investigations."
    },
    {
      number: "4",
      title: "Cell Line Identification",
      description: "Microsatellites are employed to authenticate and verify cell lines in research and clinical settings, ensuring the integrity and uniqueness of cell cultures used in experiments."
    },
    {
      number: "5",
      title: "Population Studies",
      description: "Microsatellites are used to assess genetic diversity, structure, and migration patterns in populations, providing insights into evolutionary relationships, conservation genetics, and the impact of environmental factors on genetic variation."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Applications of Microsatellites (SSR/STR) Based Genotyping
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

export default MicrosatellitesApplications;