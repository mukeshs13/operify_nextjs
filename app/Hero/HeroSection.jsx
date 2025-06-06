import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/homepage-2/DNA-BG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-4xl">
          <p className="text-lg font-medium mb-4 text-yellow-400">
            #WEBSITEUNDERCONSTRUCTION
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Unleash the genomic Secrets <br /> with Us!
          </h1>
        </div>
      </div>

      {/* Bottom shapes */}
      <div className="absolute bottom-0 left-0">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          className="text-red-500 fill-current"
        >
          <path d="M30 30V0C30 16 16 30 0 30H30Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          className="text-red-500 fill-current"
        >
          <path d="M30 30V0C30 16 16 30 0 30H30Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
