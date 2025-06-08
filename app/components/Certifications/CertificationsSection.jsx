"use client"
import React, { useState } from 'react';

const CertificationModal = ({ isOpen, onClose, certificateImage, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-5xl h-[95vh] relative flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Certificate image */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <img
            src={certificateImage}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const CertificationCard = ({ title, description, certificateLink, onOpenModal }) => (
  <div className="text-center relative group">
    <div className="p-5 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between" style={{ backgroundColor: '#f2fcfc' }}>
      <div>
        <h3 className="text-lg font-semibold text-teal-700 mb-3 leading-tight">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm mb-5 text-justify">{description}</p>
      </div>
      
      {/* Arrow Button */}
      <div className="flex justify-end">
        <button 
          onClick={() => onOpenModal(certificateLink, title)}
          className="w-8 h-8 bg-teal-700 text-white rounded-full flex items-center justify-center hover:bg-teal-800 transition-all duration-300 hover:scale-110 group-hover:shadow-lg"
        >
          <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const CertificationsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState({ image: '', title: '' });

  const openModal = (certificateImage, title) => {
    setSelectedCertificate({ image: certificateImage, title });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertificate({ image: '', title: '' });
  };

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
    <>
      <section className="py-6 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-teal-700 mb-6">Certifications</h2>
            <p className="text-gray-600 leading-relaxed text-base text-justify max-w-4xl">
              Operify Tech is committed to maintaining the highest quality standards with ISO 
              certifications in genomic services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                title={cert.title}
                description={cert.description}
                certificateLink={cert.certificateLink}
                onOpenModal={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <CertificationModal
        isOpen={modalOpen}
        onClose={closeModal}
        certificateImage={selectedCertificate.image}
        title={selectedCertificate.title}
      />
    </>
  );
};

export default CertificationsSection;