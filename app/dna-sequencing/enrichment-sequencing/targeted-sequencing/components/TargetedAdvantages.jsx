const TargetedAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Targeted Sequencing
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Focuses on specific genes or genomic regions, providing high-resolution analysis of mutations that are most relevant to particular diseases or conditions.
            </li>
            <li>
              Delivers deep coverage of targeted regions, increasing the likelihood of detecting low-frequency variants and rare mutations.
            </li>
            <li>
              The streamlined workflow and reduced data set enable quicker data processing and analysis, allowing for more rapid diagnostic and research outcomes.
            </li>
            <li>
              Widely used in clinical settings, targeted sequencing enables the identification of actionable genetic variants that can guide personalized treatment strategies.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetedAdvantages;