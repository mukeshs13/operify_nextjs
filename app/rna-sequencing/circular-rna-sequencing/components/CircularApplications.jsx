// app/rna-sequencing/circular-rna-sequencing/components/CircularApplications.jsx

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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Applications of Circular RNA Sequencing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Circular RNA sequencing is widely utilized across{" "}
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

export default CircularApplications;