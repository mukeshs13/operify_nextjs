const TargetedAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm mx-4 lg:mx-8">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-10">
          Advantages of Targeted Sequencing
        </h2>
        
        {/* High-resolution analysis */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Focuses on specific genes or genomic regions, providing high-resolution analysis of mutations that are most relevant to particular diseases or conditions.
          </p>
        </div>

        {/* Deep coverage */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Delivers deep coverage of targeted regions, increasing the likelihood of detecting low-frequency variants and rare mutations.
          </p>
        </div>

        {/* Streamlined workflow */}
        <div className="mb-6 lg:mb-8 text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            The streamlined workflow and reduced data set enable quicker data processing and analysis, allowing for more rapid diagnostic and research outcomes.
          </p>
        </div>

        {/* Clinical applications */}
        <div className="text-justify">
          <p className="text-gray-600 text-base leading-relaxed">
            Widely used in clinical settings, targeted sequencing enables the identification of actionable genetic variants that can guide personalized treatment strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetedAdvantages;