import React from 'react';
import Image from 'next/image';

const VisionMissionCard = ({ icon, title, description, color, borderColor }) => (
  <div className="relative z-10 p-4">
    <div className="flex items-center gap-5 mb-5">
      <div 
        className={`${color} rounded-xl w-15 h-15 flex items-center justify-center flex-shrink-0`}
        style={{ width: '60px', height: '60px' }}
      >
        <Image src={icon} alt={title} width={30} height={30} className="object-contain" />
      </div>
      <h2 className={`text-2xl font-bold ${borderColor === 'border-teal-600' ? 'text-teal-600' : 'text-yellow-500'} tracking-tight`}>
        {title}
      </h2>
    </div>
    <div className={`text-gray-600 text-base leading-relaxed ml-2 border-l-2 ${borderColor} pl-5`}>
      {description}
    </div>
  </div>
);

const VisionMission = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Section */}
          <VisionMissionCard
            icon="/images/service/sight.png"
            title="Our Vision"
            description="To decode and discover the intricacies of genomes using the power of Next-Generation Sequencing (NGS) with the highest quality possible. To contribute to taking Indian NGS discoveries to a global scale."
            color="bg-teal-50"
            borderColor="border-teal-600"
          />

          {/* Mission Section */}
          <VisionMissionCard
            icon="/images/service/target.png"
            title="Our Mission"
            description="To transform genomics by delivering unparalleled quality and affordability in high-throughput technology services, empowering academia, research, and clinical practices to achieve groundbreaking discoveries and advancements."
            color="bg-yellow-50"
            borderColor="border-yellow-500"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;