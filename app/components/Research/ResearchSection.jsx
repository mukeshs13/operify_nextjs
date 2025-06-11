import React from 'react';
import Image from 'next/image';

const ResearchCard = ({ image, title, description }) => (
  <div className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group relative" style={{ backgroundColor: '#f2fcfc' }}>
    {/* Image Section */}
    <div className="flex-shrink-0 w-full sm:w-auto">
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
        <Image 
          src={image} 
          alt={title} 
          width={180}
          height={140}
          className="object-cover w-full h-48 sm:w-44 sm:h-36 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
    
    {/* Content Section */}
    <div className="flex-1 pt-1 pb-12 sm:pb-12">
      <h3 className="text-lg sm:text-lg font-semibold text-teal-700 mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm text-justify pr-4 sm:pr-0">{description}</p>
    </div>
    
    
  </div>
);

const ResearchSection = () => {
  const researchAreas = [
    {
      image: "/images/blog/plant_fni.jpg",
      title: "Plant Research",
      description: "Enable researchers to generate accurate reference genomes for plants, study genetic variations, and identify genes related to traits like yield, disease resistance, and stress tolerance."
    },
    {
      image: "/images/blog/animan_fni.jpg",
      title: "Animal Research",
      description: "Enable researchers to study the genetic diversity of animal populations, trace ancestry, identify disease-resistant genes, and analyze gene expression patterns."
    },
    {
      image: "/images/blog/microbial_fn.jpg",
      title: "Microbial Research",
      description: "Enable pathogen identification, outbreak tracking, and studying antimicrobial resistance by sequencing the genomes of bacteria, viruses, and other microbes."
    },
    {
      image: "/images/blog/human_fn.jpg",
      title: "Human Research",
      description: "Enable rapid sequencing of genomes or exomes to identify genomic alterations associated with rare and complex disorders."
    }
  ];

  return (
    <section id="research" className="py-6 sm:py-8 bg-white">
      <div className="container mx-auto max-w-none px-6">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">Research Area</h2>
        </div>
        
        {/* Grid layout - 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {researchAreas.map((area, index) => (
            <ResearchCard
              key={index}
              image={area.image}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;