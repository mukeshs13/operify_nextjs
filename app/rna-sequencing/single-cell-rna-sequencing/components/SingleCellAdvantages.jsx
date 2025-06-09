const SingleCellAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Single Cell RNA Sequencing
        </h2>
        
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            {/* Individual cell analysis */}
            <li>
              Unlike traditional bulk RNA sequencing, which averages gene expression across many cells and can hide unique cellular differences, single-cell RNA sequencing examines each cell individually. This reveals variations in gene expression and provides detailed insights into cellular functions, development, and disease mechanisms that are often lost in population-level data.
            </li>

            {/* Rare cell discovery */}
            <li>
              Enables the discovery and characterization of rare or previously unrecognized cell populations, essential for understanding complex biological systems and disease mechanisms.
            </li>

            {/* High-resolution data */}
            <li>
              Delivers high-resolution data on gene expression patterns, allowing for precise mapping of gene regulatory networks and cellular states, and uncovering intricate details of cellular interactions.
            </li>

            {/* Biomarker identification */}
            <li>
              Supports the identification of biomarkers and therapeutic targets by offering a detailed snapshot of gene activity specific to individual cell types or states, facilitating more targeted and effective research and treatments.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SingleCellAdvantages;