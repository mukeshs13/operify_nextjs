const CircularApplications = () => {
  const applications = [
    {
      number: "1",
      title: "Therapeutic Targets for Cancer",
      description: "Small molecules or antisense oligonucleotides can be used to modulate circRNA activity. Consequently, targeting oncogenic circRNAs could provide novel strategies for inhibiting tumor growth."
    },
    {
      number: "2", 
      title: "Developmental Biology",
      description: "Investigates circRNA roles in developmental processes and differentiation, enhancing understanding of gene regulation during growth and development."
    },
    {
      number: "3",
      title: "Disease Biomarkers",
      description: "circRNAs are stable in body fluids such as blood and saliva, and exhibit altered expression in conditions like cancer, cardiovascular disorders, and neurological diseases. This stability and variation in expression patterns suggest their potential as biomarkers for these diseases."
    },
    {
      number: "4",
      title: "Functional Studies",
      description: "Functional studies can involve manipulating circRNA levels in cell models through techniques such as knockdown or CRISPR/Cas9, to investigate their roles in cellular processes."
    }
  ];

  return (
    <section className="py-5 lg:py-8 bg-gray-50">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Applications of Circular RNA Sequencing
        </h2>
        <p className="text-gray-600 text-base mb-6 lg:mb-8">
          Circular RNA sequencing is widely utilized across plants, animals, and humans.
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

export default CircularApplications;