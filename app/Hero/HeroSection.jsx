import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden rounded-3xl m-6">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      >
        <source src="/images/homepage-2/DNA-BG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 h-full flex items-center">
        <div className="text-white max-w-4xl">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-gray-800 bg-opacity-80 text-white px-4 py-2 rounded-full text-sm font-medium border border-gray-600">
              #WEBSITEUNDERCONSTRUCTION
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Unleash The Genomic Secrets<br />
            With Us!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;