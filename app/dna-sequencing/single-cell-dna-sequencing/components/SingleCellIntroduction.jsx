// app/dna-sequencing/single-cell-dna-sequencing/components/SingleCellIntroduction.jsx

const SingleCellIntroduction = () => {
  return (
    <section className="py-0 md:py-12 lg:py-16">
      <div className="container-fluid px-0">
        <h2 className="text-2xl lg:text-3xl text-gray-700 text-left pb-2 px-4 lg:px-8">
          Introduction and Workflow
        </h2>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.14fr_1fr] min-h-[140px] lg:min-h-[280px]">
          {/* Left side content */}
          <div className="px-6 lg:px-9 py-6 lg:py-0">
            <p className="mb-3 text-gray-600 leading-relaxed">
              Single Cell DNA Sequencing analyzes genetic material from individual cells, revealing unique genomic insights that bulk sequencing methods often obscure.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              The workflow begins with cell partitioning facilitated by the 10X Chromium system, employing gel beads and oil-surfactant solutions. Each droplet encapsulates a solitary cell uniquely tagged with a barcode.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              Within these partitions, DNA amplification yields amplified DNA fragments from each cell. Subsequently, barcoded samples combine for library preparation, where DNA fragments undergo adapter ligation to facilitate sequencing.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              During sequencing, the barcode identifiers enable precise tracking of data to its specific cell or nucleus of origin, thereby providing comprehensive genetic insights for individual cells.
            </p>
            <p className="mb-3 text-gray-600 leading-relaxed">
              This technique enables researchers to unravel unique genetic characteristics and variations present within individual cells, providing unprecedented insights into cellular diversity and function.
            </p>
          </div>
          
          {/* Right side image */}
          <div 
            className="bg-cover bg-center bg-no-repeat min-h-[220px] lg:min-h-[280px]"
            style={{ backgroundImage: "url('/images/single-cell-dna-sequencing.png')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SingleCellIntroduction;