const CircularAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Circular RNA Sequencing
        </h2>
        
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            {/* Enhanced stability */}
            <li>
              Circular RNAs are inherently more stable due to their covalently closed structure, making them less susceptible to degradation and providing reliable expression data.
            </li>

            {/* Novel identification */}
            <li>
              Enables the identification of novel isoforms and splice variants that may not be detected with traditional RNA sequencing methods.
            </li>

            {/* Detailed expression view */}
            <li>
              Offers a detailed view of circular RNA expression and their interactions within the cell, aiding in a deeper understanding of gene regulation and cellular processes.
            </li>

            {/* Minimized artifacts */}
            <li>
              Closed-loop structure of circRNAs minimizes potential sequencing artifacts, leading to more accurate and consistent data.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CircularAdvantages;