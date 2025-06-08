// app/rna-sequencing/metatranscriptomics-sequencing/components/MetatranscriptomicsSpecifications.jsx
import Link from 'next/link';

const MetatranscriptomicsSpecifications = () => {
  const specifications = [
    {
      icon: "/images/homepage-2/NGS-Icons-45.svg",
      title: "Sample Requirement",
      content: (
        <div>
          <div className="mb-2">
            <span>Total RNA samples, isolated from various environmental samples such as soil, water, sediments, roots, leaves, animal gut/intestine etc,.</span>
          </div>
          <div>
            <strong>
              Please refer to{" "}
              <Link href="/sample-submission-guidelines" className="text-blue-600 hover:text-blue-800 underline">
                sample submission guidelines
              </Link>
              {" "}or{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Contact Us!
              </Link>
            </strong>
          </div>
        </div>
      )
    },
    {
      icon: "/images/homepage-1/service/Advantages-NGS-Icons-20.svg",
      title: "Sequencing Platform",
      content: (
        <div>
          <span>Illumina NovaSeq 6000/ NovaSeq X</span>
        </div>
      )
    },
    {
      icon: "/images/service/social-support.png",
      title: "Deliverables",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>The original sequencing data</li>
          <li>Experimental results</li>
          <li>Bioinformatics and Data analysis report</li>
          <li>Details of Metatranscriptome Sequencing (customizable)</li>
        </ul>
      )
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Service Specifications
          </h2>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specifications.map((spec, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <img 
                  src={spec.icon} 
                  alt={spec.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {spec.title}
              </h3>
              
              {/* Content */}
              <div className="text-gray-700 text-left">
                {spec.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetatranscriptomicsSpecifications;