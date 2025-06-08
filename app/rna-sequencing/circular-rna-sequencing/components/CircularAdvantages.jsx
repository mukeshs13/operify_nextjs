// app/rna-sequencing/circular-rna-sequencing/components/CircularAdvantages.jsx

const CircularAdvantages = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advantages of Circular RNA Sequencing
          </h2>
        </div>
        
        {/* Enhanced stability */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Circular RNAs are inherently more stable</strong> due to their covalently closed structure, making them less susceptible to degradation and providing reliable expression data.
          </p>
        </div>

        {/* Novel identification */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Enables the identification of novel isoforms and splice variants</strong> that may not be detected with traditional RNA sequencing methods.
          </p>
        </div>

        {/* Detailed expression view */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Offers a detailed view of circular RNA expression</strong> and their interactions within the cell, aiding in a deeper understanding of gene regulation and cellular processes.
          </p>
        </div>

        {/* Minimized artifacts */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Closed-loop structure of circRNAs minimizes potential sequencing artifacts,</strong> leading to more accurate and consistent data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircularAdvantages;