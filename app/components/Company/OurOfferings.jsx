import React from 'react';
import Image from 'next/image';

const OurOfferings = () => {
  return (
    <section className="py-16 bg-white rounded-2xl shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-700 text-left pb-2 mb-10">
          Our Offerings
        </h2>

        {/* Services paragraph */}
        <div className="mb-10 text-justify">
          <p className="text-gray-600 leading-relaxed text-base">
            Our diverse portfolio covers entire spectrum of services Whole Genome DNA
            Sequencing, Hi-C Sequencing, Optical mapping, Whole Exome DNA Sequencing,
            Targeted DNA Sequencing / Gene Panels, Amplicon Sequencing, Transcriptome Sequencing
            (RNA-seq), Small RNA Sequencing, Single-cell DNA and RNA Sequencing, Microbiome
            Profiling, Epigenetics Services, Metagenomics Sequencing, SARS CoV-2
            Sequencing, Bioinformatics Solutions and many more.
          </p>
        </div>

        {/* Introduction text */}
        <div className="mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            As your trusted ally, we deliver customized solutions for extraction,
            library preparation, sequencing, and bioinformatics, all from our state-of-the-art New Delhi
            laboratory. Partner with us for state-of-the-art NGS services on the platform of your choice
            (Illumina, Oxford Nanopore, PacBio), fast turnaround time and strict QC, advanced or
            customized Bioinformatics services, and end-to-end support by our experienced scientists.
          </p>
        </div>

        {/* Team Highlight */}
        <div className="mb-6 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Our team of PhDs, leading each department, ensures unmatched support from
            initial consultation to post-delivery assistance, providing a seamless experience
            throughout. Operify Tech is committed to helping you achieve your research goals efficiently
            and affordably.
          </p>
        </div>

        {/* Closing Statement */}
        <div className="text-justify mb-10">
          <p className="text-gray-600 text-base leading-relaxed">
            Let's collaborate to create innovative solutions and provide exceptional support on your
            genomics journey. Explore our services and contact us for your NGS studies.
          </p>
        </div>

        {/* Centered image with background effect */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative">
            {/* Background gradient circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-radial from-teal-50 to-transparent rounded-full opacity-70"></div>
            </div>
            <Image 
              src="/images/services1.png" 
              alt="Advanced Laboratory Services" 
              width={600} 
              height={400}
              className="relative z-10 w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;