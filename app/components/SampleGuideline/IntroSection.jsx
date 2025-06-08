import React from 'react';

const IntroSection = () => {
  return (
    <section className="bg-white mx-4 md:mx-8  mt-4 mb-4 py-4">
      <div className="container mx-auto px-4">
        <div className="text-gray-600 max-w-none leading-relaxed text-center">
          <div className="text-base text-justify">
            <p className="m-0">
              We humbly offer a wide range of services, including genomics, transcriptomics,
              metagenomics, epigenomics, single-cell sequencing, genotyping, microarray,
              bioinformatics, and more. To help us deliver the best results for you, we request you to
              review our sample requirements and follow the instructions for packaging, labeling, and
              shipping your samples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;