// components/Clients/ClientsSection.jsx
import React from 'react';
import Image from 'next/image';

const ClientsSection = () => {
  const clients = [
    { name: "Ashoka University", logo: "/images/client/ashoka.png" },
    { name: "BRIC", logo: "/images/client/BRIC.png" },
    { name: "CSIR", logo: "/images/client/csir.png" },
    { name: "DRDO", logo: "/images/client/drdo.png" },
    { name: "DUAC", logo: "/images/client/duac.png" },
    { name: "ICMR-NIV", logo: "/images/client/icmr-niv.jpg" },
    { name: "IIMR", logo: "/images/client/iimr.png" },
    { name: "IISERB", logo: "/images/client/iiserb.png" },
    { name: "ILBS", logo: "/images/client/ilbs.jpg" },
    { name: "Manipal", logo: "/images/client/manipal.png" },
    { name: "Rani", logo: "/images/client/rani.png" },
    { name: "OUAT", logo: "/images/client/Ouat.png" },
    { name: "AIIMS", logo: "/images/client/aiims.png" },
    { name: "IARI", logo: "/images/client/iari.png" },
    { name: "KGMU", logo: "/images/client/kgmu.png" },
    { name: "BHU", logo: "/images/client/bhu.png" }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">
            Trusted By Leading Institutions
          </h2>
          <div className="flex justify-center mb-8">
            <Image 
              src="/images/homepage-2/Trsuted-Institutions.png" 
              alt="Trusted Institutions" 
              width={250} 
              height={100}
            />
          </div>
        </div>
        
        {/* Client logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image 
                src={client.logo} 
                alt={client.name} 
                width={120} 
                height={80}
                className="max-w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection