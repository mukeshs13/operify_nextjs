import React from 'react';

const CompanyIntro = () => {
  return (
    <section className="py-0">
      <div className="container-fluid">

          {/* Right side content */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-8 lg:p-12 flex items-center">
            <div className="w-full">

              <p className=" leading-relaxed text-justify">
                Operify Tech is at the forefront of unlocking genomic secrets through advanced
                next-generation sequencing (NGS) technology that empowers researchers,
                academicians, and innovators. We are ISO certified for quality management of DNA
                sequencing, RNA sequencing, and genomics informatics to bring the best to the
                research and clinical community. Whether you are planning for whole genome sequencing
                for never-before sequenced genomes or thinking of performing Total RNA sequencing for
                your experiments, we have got it covered.
              </p>

            </div>
          </div>
        </div>
    </section>
  );
};

export default CompanyIntro;