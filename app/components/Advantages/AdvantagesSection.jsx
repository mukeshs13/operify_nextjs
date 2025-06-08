import React from 'react';
import Image from 'next/image';

const AdvantageCard = ({ icon, title, description }) => (
  <div className="p-6 rounded-2xl shadow-sm border-0 h-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg group" style={{ backgroundColor: '#f2fcfc' }}>
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <Image src={icon} alt={title} width={24} height={24} />
      </div>
      <h3 className="text-lg font-semibold text-teal-700 leading-tight">{title}</h3>
    </div>
    <div className="relative w-full h-px bg-gray-300 mb-4 overflow-hidden">
      <div className="absolute top-0 left-0 h-full bg-gray-600 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
    </div>
    <p className="text-gray-600 leading-relaxed text-sm text-justify">{description}</p>
  </div>
);

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "/images/homepage-1/service/Advantages-NGS-Icons-20.svg",
      title: "High Throughput",
      description: "NGS technology has the capacity to generate an abundance of sequence data within a relatively short timespan."
    },
    {
      icon: "/images/homepage-1/service/Advantages-NGS-Icons-21.svg",
      title: "High Resolution",
      description: "Advanced sequencing platforms provide highly accurate DNA/RNA data, detecting even minor variations. This precision drives breakthroughs in health, diagnostics, agriculture, and molecular biology."
    },
    {
      icon: "/images/homepage-1/service/Advantages-NGS-Icons-22.svg",
      title: "Cost Efficient",
      description: "Affordability of the technology facilitates researchers in the successful implementation of large-scale sequencing projects."
    },
    {
      icon: "/images/homepage-1/service/Advantages-NGS-Icons-23.svg",
      title: "Flexible",
      description: "Supports a wide range of sample types and library construction methods, making it suitable for various research objectives and experimental designs."
    },
    {
      icon: "/images/homepage-1/service/Advantages-NGS-Icons-24.svg",
      title: "Time Effective",
      description: "Rapid sequencing of large genetic material be completed within a comparatively short duration, thereby yielding quick results."
    },
    {
      icon: "/images/homepage-1/service/Advantages-NGS-Icons-24.svg",
      title: "Bioinformatics Analysis",
      description: "NGS produces vast amounts of data, supporting complex research through advanced bioinformatic analysis."
    }
  ];

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">Advantages of NGS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;