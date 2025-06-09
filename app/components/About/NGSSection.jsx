import React from "react";
import Image from "next/image";
import Link from "next/link";

const NGSSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Image */}
          <div className="lg:w-1/2">
            <Image
              src="/images/homepage-2/NGS-Section.png"
              alt="NGS Technology"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-teal-700 mb-6 leading-tight">
              NGS and Its analysis
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 text-justify">
              Next Generation Sequencing (NGS) is a transformative technology
              that has revolutionized scientific research. Unlike traditional
              methods that required years to decode a single genome, NGS can
              sequence entire genomes within days. This groundbreaking
              technology employs massively parallel sequencing, simultaneously
              analyzing millions of small DNA fragments, allowing researchers to
              investigate thousands of genomic regions at single-base resolution
              in a single experiment, empowering them to tackle ambitious
              questions and achieve comprehensive insights.
            </p>

            {/* Horizontal Line */}
            <div className="w-full h-px bg-gray-200 mb-8"></div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/homepage-2/NGS-Icons-44.svg"
                    alt="Sequencing"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 text-lg leading-tight">
                    Sequencing<br />
                    Capabilities
                  </h3>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/homepage-2/NGS-Icons-45.svg"
                    alt="Sample"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 text-lg leading-tight">
                    Sample<br />
                    Compatibility
                  </h3>
                </div>
              </div>
            </div>

            <Link
              href="#research"
              className="inline-flex items-center space-x-3 border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 ease-in-out font-medium group"
            >
              <span>Read More</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 60 60" fill="currentColor">
                <path d="m31 50.979c-.362.007-.727-.081-1.049-.28-.929-.572-1.212-1.814-.653-2.742.047-.082 5.886-9.826 17.032-15.958h-43.33c-1.103 0-2-.897-2-2s.897-2 2-2h43.33c-11.084-6.097-16.989-15.884-17.047-15.982-.547-.934-.244-2.177.689-2.73.946-.561 2.192-.236 2.757.715.909 1.45 9.433 14.449 24.722 18.046.915.225 1.549 1.026 1.549 1.952s-.63 1.729-1.532 1.948c-15.354 3.61-23.849 16.626-24.767 18.099-.36.577-1.025.919-1.7.932z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NGSSection;