// app/dna-sequencing/single-cell-dna-sequencing/components/SingleCellAdvantages.jsx

const SingleCellAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Single Cell DNA Sequencing
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              DNA exhibits greater stability compared to RNA, ensuring ample time for sample processing without degradation.
            </li>
            <li>
              Capable of detecting rare mutation-bearing cell clones with sensitivity levels as low as 0.1%, enabling direct analysis of rare cell types or primary cells even with limited samples.
            </li>
            <li>
              Reveals the diversity of genetic profiles within cell populations, aiding in the study of complex biological processes and enabling precise profiling of subpopulations like cancer cell evolution or DNA copy number variations in neurons.
            </li>
            <li>
              Allows for the tracking of genetic changes over time within individual cells, crucial for understanding disease progression and evolution.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SingleCellAdvantages;