// components/Research/ResearchSection.jsx
import React from 'react';
import Image from 'next/image';

const ResearchCard = ({ image, title, description }) => (
  <div className="flex items-center gap-6">
    {/* Image Section */}
    <div className="flex-shrink-0">
      <div className="relative">
        <Image 
          src={image} 
          alt={title} 
          width={240} 
          height={180}
          className="rounded-2xl object-cover"
        />
      </div>
    </div>
    
    {/* Content Section */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-gray-700 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm mb-4">{description}</p>
      
      {/* Arrow Button */}
      <div className="flex justify-end">
        <button className="w-10 h-10 bg-teal-700 text-white rounded-full flex items-center justify-center hover:bg-teal-800 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
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
    <section id="research" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">Research Area</h2>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <ResearchCard
              image={researchAreas[0].image}
              title={researchAreas[0].title}
              description={researchAreas[0].description}
            />
            <ResearchCard
              image={researchAreas[1].image}
              title={researchAreas[1].title}
              description={researchAreas[1].description}
            />
          </div>
          
          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ResearchCard
              image={researchAreas[2].image}
              title={researchAreas[2].title}
              description={researchAreas[2].description}
            />
            <ResearchCard
              image={researchAreas[3].image}
              title={researchAreas[3].title}
              description={researchAreas[3].description}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;