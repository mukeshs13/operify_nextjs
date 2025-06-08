import React from 'react';
import Image from 'next/image';

const FeatureCard = ({ icon, title, description, hasBorder = true }) => (
  <div className={`p-6 h-full ${hasBorder ? 'border-r border-gray-300' : ''}`}>
    <div className="mb-4">
      <Image src={icon} alt={title} width={80} height={80} className="object-contain" />
    </div>
    <h3 className="text-xl font-semibold text-teal-600 mb-3">
      {title}
    </h3>
    <p className="text-gray-600 text-base leading-relaxed">
      {description}
    </p>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: "/images/service/award.png",
      title: "Unmatched Quality",
      description: "Our ISO certification in DNA Sequencing, RNA Sequencing, and Genomics Informatics underscores our dedication to delivering superior technical advice and results that align seamlessly with research objectives and expected outcomes."
    },
    {
      icon: "/images/service/execution.png",
      title: "Exceptional Value",
      description: "Our comprehensive NGS and bioinformatics services offer unbeatable value for money. We ensure that our pricing structure never stands in the way of your research goals."
    },
    {
      icon: "/images/service/social-support.png",
      title: "Dedicated Support",
      description: "We prioritize your needs, offering prompt technical advice and support. Our fast response times and client-focused approach ensure your research stays on track."
    },
    {
      icon: "/images/service/accurate.png",
      title: "Proven Reliability",
      description: "We guarantee timely, accurate results using the latest chemistry, instruments, and software, maintaining the highest standards in our analyses."
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl p-8" style={{ backgroundColor: '#f2fcfc' }}>
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-gray-600 text-left">
              Why Choose Operify Tech?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                hasBorder={index < 3} // Remove border from last item
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;