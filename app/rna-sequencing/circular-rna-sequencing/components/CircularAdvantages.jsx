const CircularAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Circular RNA Sequencing
        </h2>
        
        {/* Enhanced stability */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Circular RNAs are inherently more stable due to their covalently closed structure, making them less susceptible to degradation and providing reliable expression data.
          </p>
        </div>

        {/* Novel identification */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Enables the identification of novel isoforms and splice variants that may not be detected with traditional RNA sequencing methods.
          </p>
        </div>

        {/* Detailed expression view */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Offers a detailed view of circular RNA expression and their interactions within the cell, aiding in a deeper understanding of gene regulation and cellular processes.
          </p>
        </div>

        {/* Minimized artifacts */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Closed-loop structure of circRNAs minimizes potential sequencing artifacts, leading to more accurate and consistent data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CircularAdvantages;