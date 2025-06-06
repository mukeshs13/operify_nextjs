import React from 'react';
import Image from 'next/image';

const AdvantageCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
    <div className="flex items-start space-x-4 mb-4">
      <div className="flex-shrink-0">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 leading-tight">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Advantages of NGS</h2>
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

export default AdvantagesSection