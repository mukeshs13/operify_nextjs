// 7f - LongReadSpecifications.jsx
import Link from 'next/link';

const LongReadSpecifications = () => {
  const specifications = [
    {
      icon: "/images/homepage-2/NGS-Icons-45.svg",
      title: "Sample Requirement",
      content: (
        <div>
          <div className="mb-4">
            <p className="text-gray-600">Genomic DNA, Cultivated cells, Blood, tissues, and other samples</p>
          </div>
          <div className="mt-4 text-sm">
            <strong>
              Please refer to{" "}
              <Link 
                href="/sample-submission-guideline" 
                className="text-teal-600 underline hover:text-teal-700"
              >
                sample submission guidelines
              </Link>
              {" "}or{" "}
              <Link 
                href="/contact-us" 
                className="text-teal-600 underline hover:text-teal-700"
              >
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
        <div className="text-gray-600">
          <p className="font-medium text-lg">PacBio, Oxford Nanopore</p>
        </div>
      )
    },
    {
      icon: "/images/service/social-support.png",
      title: "Deliverables",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>The original sequencing data</li>
          <li>Experimental results</li>
          <li>Bioinformatics and Data Analysis Report</li>
          <li>Details of Whole Genome ReSequencing (customizable)</li>
        </ul>
      )
    }
  ];

  return (
    <section className="py-3 lg:py-5">
      <div className="container-fluid px-4 lg:px-6">
        <div className="bg-teal-50 rounded-lg py-6 lg:py-8 px-0">
          {/* Section Header */}
          <div className="mb-6 px-4 lg:px-6">
            <h2 className="text-2xl lg:text-4xl text-gray-600 text-left">
              Service Specifications
            </h2>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {specifications.map((spec, index) => (
              <article 
                key={index}
                className="p-6 h-full border-r border-gray-300 last:border-r-0 md:odd:border-r md:even:border-r lg:border-r lg:last:border-r-0"
              >
                <div className="h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <img 
                      src={spec.icon} 
                      className="w-20 h-20 object-contain" 
                      alt={`${spec.title} Icon`}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-teal-700 text-lg font-semibold mb-3">
                    {spec.title}
                  </h3>
                  
                  {/* Content */}
                  <div className="text-gray-600 text-base leading-relaxed">
                    {spec.content}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongReadSpecifications;