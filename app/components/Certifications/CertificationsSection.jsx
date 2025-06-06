import React from 'react';

const CertificationCard = ({ title, description, certificateLink }) => (
  <div className="text-center">
    <div className="bg-white p-6 rounded-lg border-t-4 border-blue-500 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      </div>
      <a 
        href={certificateLink} 
        className="inline-flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors"
      >
        <span>Read More</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
);

const CertificationsSection = () => {
  const certifications = [
    {
      title: "ISO Certificate DNA Sequencing",
      description: "Certified quality management systems for next-generation sequencing DNA services.",
      certificateLink: "/images/certificates/iso-dna-sequencing.jpg"
    },
    {
      title: "ISO Certificate RNA Sequencing", 
      description: "Internationally recognized standards for transcriptome analysis and RNA-seq services.",
      certificateLink: "/images/certificates/iso-rna-sequencing.jpg"
    },
    {
      title: "ISO Certificate Genomics Informatics",
      description: "Certified bioinformatics processes and data analysis standards for genomic research.",
      certificateLink: "/images/certificates/iso-genomics-informatics.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600">
            Operify Tech is committed to maintaining the highest quality standards with ISO 
            certifications in genomic services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              description={cert.description}
              certificateLink={cert.certificateLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection