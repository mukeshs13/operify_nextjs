import React from 'react';
import Image from 'next/image';

const CTASection = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto max-w-none px-6">
        <div className="rounded-3xl p-8 lg:p-12 text-center" style={{ backgroundColor: '#2a6564' }}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Feeling Overwhelmed About Designing Your Experiment?
          </h2>
          
          <div className="mb-8">
            <Image 
              src="/images/homepage-2/Scientist.png" 
              alt="Scientist" 
              width={600} 
              height={400}
              className="rounded-2xl mx-auto max-w-full h-auto"
            />
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-6">
            Operify Has You Covered
          </h3>
          
          <p className="text-white text-base lg:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            We offer comprehensive assistance for planning your experiment, including design, 
            execution, and evaluation of your sequencing project. Consult with our scientists 
            and bioinformatics experts to tailor a workflow that suits your needs, process 
            your samples, and generate your first NGS dataset.
          </p>
          
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;