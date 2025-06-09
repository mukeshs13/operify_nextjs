const AmpliconAdvantages = () => {
  return (
    <section className="py-5 lg:py-8 bg-gradient-to-br from-white to-white rounded-2xl shadow-sm">
      <div className="container-fluid px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 mb-6 lg:mb-6">
          Advantages of Amplicon Sequencing
        </h2>
        
        {/* Focused approach */}
        <div className="text-justify px-4 lg:px-10">
          <ul className="space-y-4 text-gray-600 text-base leading-relaxed list-disc">
            <li>
              Unlike targeted or exome sequencing, amplicon sequencing narrows down to even smaller, highly specific regions, resulting in a more efficient and focused approach for certain applications, such as microbial diversity studies or detecting rare variants.
            </li>
            <li>
              Capable of detecting low-abundance species or genetic variants, providing specific resolution of target regions.
            </li>
            <li>
              Focuses on specific genomic regions, allowing for detailed and precise analysis.
            </li>
            <li>
              Provides quick insights into genetic composition and diversity, facilitating timely research and diagnostics.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AmpliconAdvantages;