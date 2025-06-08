"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ClientsSection = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef(null);
  
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

  // Triple the array for seamless infinite loop
  const infiniteClients = [...clients, ...clients, ...clients];
  const itemWidth = 100 / 50; // Each item is 1/6 of the container
  const singleSetWidth = clients.length * itemWidth; // Width of one complete set

  useEffect(() => {
    const timer = setInterval(() => {
      setTranslateX(prev => {
        const newTranslateX = prev + itemWidth;
        
        // When we reach the end of the second set, reset to the beginning of the second set
        if (newTranslateX >= singleSetWidth * 1) {
          // Temporarily disable transition for seamless reset
          setIsTransitioning(false);
          setTimeout(() => {
            setTranslateX(singleSetWidth); // Reset to start of second set
            setIsTransitioning(true);
          }, 50);
          
          return prev;
        }
        
        return newTranslateX;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [itemWidth, singleSetWidth]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">
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
        
        {/* Slider Container */}
        <div className="overflow-hidden">
          <div 
            ref={containerRef}
            className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-linear' : ''}`}
            style={{ 
              transform: `translateX(-${translateX}%)`,
              width: `${(infiniteClients.length * 100) / 6}%`
            }}
          >
            {infiniteClients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / infiniteClients.length}%` }}
              >
                <div className="flex justify-center items-center h-24">
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    width={150} 
                    height={75}
                    className="w-32 h-16 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;