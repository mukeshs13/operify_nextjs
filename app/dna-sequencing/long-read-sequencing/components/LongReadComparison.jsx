const LongReadComparison = () => {
  const comparisonData = [
    {
      category: "Read Length",
      illumina: "Paired-end 150 bp or 250bp\nHighly accurate (> 99.9%) while Limited to ~500bp",
      pacbio: "Average ≥ 15 kb\nbp to kb",
      nanopore: "Average > 17 kb\nKb to Mb"
    },
    {
      category: "Variant Calling",
      illumina: "Accurately detect the SNVs and InDels\nWhile Lower accuracy on the complex SVs detection",
      pacbio: "Long Read Length with High Accuracy: Good coverage of highly repetition and complexity area\nDetect SVs with high precision",
      nanopore: "Long Read Length with High Accuracy: Good coverage of highly repetition and complexity area\nDetect SVs with high precision"
    },
    {
      category: "Amplification/GC Bias",
      illumina: "PCR for cluster generation:\n1.Clonally amplified templates masquerade as variants\n2.Underrepresentation of AT-rich and GC-rich regions",
      pacbio: "NO GC Bias & Amplification Bias\nPCR-free to allow a uniform coverage and High Contiguity",
      nanopore: "NO GC Bias & Amplification Bias\nPCR-free to allow a uniform coverage and High Contiguity"
    },
    {
      category: "Machine Errors",
      illumina: "Signal Decay and Dephasing:\nGradual consumption of reagent\nSeq error rate increases with the length of reads",
      pacbio: "Relaxed requirement for cycle efficiency",
      nanopore: "Relaxed requirement for cycle efficiency"
    },
    {
      category: "DNA Methylation Detection",
      illumina: "WGBS or RRBS is required and limited on detection of CpG, CHH, CHG",
      pacbio: "Simultaneous Epigenetic Characterization\nDiverse DNA methylation types: CpG, CHH, CHG, 6mA, 4mC, 5hmc",
      nanopore: "Simultaneous Epigenetic Characterization\nDiverse DNA methylation types: CpG, CHH, CHG, 6mA, 4mC, 5hmc"
    }
  ];

  const formatContent = (content, isHighlighted = false) => {
    if (content.includes("Long Read Length")) {
      return (
        <div>
          <span className="text-blue-600 font-medium">Long Read Length with High Accuracy</span>
          {content.replace("Long Read Length with High Accuracy", "")}
        </div>
      );
    } else if (content.includes("NO GC Bias")) {
      return (
        <div>
          <span className="text-blue-600 font-medium">NO GC Bias & Amplification Bias</span>
          {content.replace("NO GC Bias & Amplification Bias", "")}
        </div>
      );
    } else if (content.includes("Simultaneous")) {
      return (
        <div>
          <span className="text-blue-600 font-medium">Simultaneous Epigenetic Characterization</span>
          {content.replace("Simultaneous Epigenetic Characterization", "")}
        </div>
      );
    }
    return content;
  };

  return (
    <section className="py-12 bg-white">
      <div className="container-fluid px-4 lg:px-12">
        <h2 className="text-2xl lg:text-3xl text-gray-700 mb-8">
          Comparison of Sequencers
        </h2>
        
        {/* Original Image Section */}
        <div className="mb-12">
          <div className="text-center">
            <img
              src="/images/long-read-comparison.jpg"
              alt="Long Read Comparison Chart"
              className="w-full max-w-4xl mx-auto rounded-lg border shadow-md"
            />
          </div>
        </div>

        {/* Detailed Comparison Table Section */}
        <div className="mb-8">
          <h3 className="text-xl lg:text-2xl text-gray-700 mb-6 text-center">
            Comparison and specification of sequencing platforms between short-read and long-read sequencing on WGS
          </h3>
        </div>
        
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Mobile Card Layout (hidden on desktop) */}
          <div className="xl:hidden space-y-6">
            {comparisonData.map((row, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-sm">
                <div className="bg-gray-100 px-4 py-3 rounded-t-lg">
                  <h4 className="font-semibold text-gray-700">{row.category}</h4>
                </div>
                <div className="p-4 space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="font-medium text-sm text-gray-600 mb-2">Illumina NovaSeq 6000</h5>
                    <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                      {row.illumina}
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h5 className="font-medium text-sm text-gray-600 mb-2">PacBio Sequel II/IIe</h5>
                    <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                      {formatContent(row.pacbio)}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm text-gray-600 mb-2">Nanopore PromethION</h5>
                    <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                      {formatContent(row.nanopore)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table Layout (hidden on mobile) */}
          <div className="hidden xl:flex flex-1">
            <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">
                    Platform Types
                  </th>
                  <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700">
                    Illumina NovaSeq 6000
                  </th>
                  <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700">
                    PacBio Sequel II/IIe
                  </th>
                  <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700">
                    Nanopore PromethION
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-300 p-3 font-medium text-gray-700 bg-gray-50">
                      {row.category}
                    </td>
                    <td className="border border-gray-300 p-3 text-sm text-gray-600">
                      <div className="whitespace-pre-line leading-relaxed">
                        {row.illumina}
                      </div>
                    </td>
                    <td className="border border-gray-300 p-3 text-sm text-gray-600">
                      <div className="whitespace-pre-line leading-relaxed">
                        {formatContent(row.pacbio)}
                      </div>
                    </td>
                    <td className="border border-gray-300 p-3 text-sm text-gray-600">
                      <div className="whitespace-pre-line leading-relaxed">
                        {formatContent(row.nanopore)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right side - Key Highlights */}
          <div className="xl:w-80 flex-shrink-0">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 h-full">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-teal-200 pb-2">
                Key Technology Highlights
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-green-600 mb-2">Oxford Nanopore</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Real-time sequencing via protein nanopores</li>
                    <li>• Portable devices for field diagnostics</li>
                    <li>• Direct base modification detection</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-green-600 mb-2">PacBio SMRT</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hi-Fi reads with 99.9% accuracy</li>
                    <li>• Excellent for complex genomes</li>
                    <li>• Haplotype resolution in polyploids</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-green-600 mb-2">Illumina</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• High accuracy for SNVs and InDels</li>
                    <li>• Cost-effective for large studies</li>
                    <li>• Mature bioinformatics tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongReadComparison;