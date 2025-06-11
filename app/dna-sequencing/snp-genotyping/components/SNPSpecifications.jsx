// app/dna-sequencing/snp-genotyping/components/SNPSpecifications.jsx
import Link from 'next/link';
import SpecificationsLayout from '../../../components/shared/SpecificationsLayout';

const SNPSpecifications = () => {
  const specificationItems = [
    {
      icon: "/images/homepage-2/NGS-Icons-45.svg",
      title: "Sample Requirement",
      renderContent: () => (
        <div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
              <span className="text-gray-600"><strong>Genomic DNA ≥300 ng</strong></span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
              <span className="text-gray-600">Minimum Quantity: 100 ng</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
              <span className="text-gray-600">Concentration ≥10 ng/µL</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
              <span className="text-gray-600">DNA samples require an OD260/280 as close to 1.8~2.0 as possible</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
              <span className="text-gray-600">All DNA should be RNase-treated and should show no degradation or contamination</span>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <strong>
              Please refer to{" "}
              <Link href="/sample-submission-guideline" className="text-teal-600 underline hover:text-teal-700">
                sample submission guidelines
              </Link>
              {" "}or{" "}
              <Link href="/contact-us" className="text-teal-600 underline hover:text-teal-700">
                Contact Us!
              </Link>
            </strong>
          </div>
        </div>
      )
    },
    {
      icon: "/images/homepage-1/service/Advantages-NGS-Icons-20.svg",
      title: "Sequencing Platform",
      content: "Illumina NovaSeq 6000/ NovaSeq X"
    },
    {
      icon: "/images/service/social-support.png",
      title: "Deliverables",
      renderContent: () => (
        <ul className="list-disc pl-5 space-y-2 text-gray-600 text-start">
          <li>The original sequencing data</li>
          <li>Experimental results</li>
          <li>Bioinformatics and Data analysis report</li>
          <li>Details of SNP-based Genotyping (customizable)</li>
        </ul>
      )
    }
  ];

  return (
    <SpecificationsLayout
      title="Service Specifications"
      specificationItems={specificationItems}
    />
  );
};

export default SNPSpecifications;