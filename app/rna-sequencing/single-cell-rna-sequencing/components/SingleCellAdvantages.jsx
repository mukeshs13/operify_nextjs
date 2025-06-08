// app/rna-sequencing/single-cell-rna-sequencing/components/SingleCellAdvantages.jsx

const SingleCellAdvantages = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advantages of Single Cell RNA Sequencing
          </h2>
        </div>
        
        {/* Individual cell analysis */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Unlike traditional bulk RNA sequencing, which averages gene expression across many cells</strong> and can hide unique cellular differences, single-cell RNA sequencing examines each cell individually. This reveals variations in gene expression and provides detailed insights into cellular functions, development, and disease mechanisms that are often lost in population-level data.
          </p>
        </div>

        {/* Rare cell discovery */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Enables the discovery and characterization of rare or previously unrecognized cell populations,</strong> essential for understanding complex biological systems and disease mechanisms.
          </p>
        </div>

        {/* High-resolution data */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Delivers high-resolution data on gene expression patterns,</strong> allowing for precise mapping of gene regulatory networks and cellular states, and uncovering intricate details of cellular interactions.
          </p>
        </div>

        {/* Biomarker identification */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Supports the identification of biomarkers and therapeutic targets</strong> by offering a detailed snapshot of gene activity specific to individual cell types or states, facilitating more targeted and effective research and treatments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCellAdvantages;