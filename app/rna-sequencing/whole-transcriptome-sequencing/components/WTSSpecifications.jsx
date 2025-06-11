// WTSSpecifications.jsx
import Link from 'next/link';
import SpecificationsLayout from '../../../components/shared/SpecificationsLayout';

const WTSSpecifications = () => {
  const specificationItems = [
    {
      icon: "/images/homepage-2/NGS-Icons-45.svg",
      title: "Sample Requirement",
      renderContent: () => (
        <div>
          <div className="mb-4">
            <p className="text-gray-600">Total RNA ≥ 2 μg, Minimum Quantity: 500 ng, Concentration≥ 50 ng/µL</p>
            <p className="text-gray-600">Cells, Tissue and other samples</p>
          </div>
          <div className="mt-4 text-sm">
            <strong>
              Please refer to{' '}
              <Link href="/sample-submission-guidelines" className="text-teal-600 underline hover:text-teal-700">
                sample submission guidelines
              </Link>
              {' '}or{' '}
              <Link href="/contact" className="text-teal-600 underline hover:text-teal-700">
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
      content: "Illumina NovaSeq 6000/ NovaSeq X Plus"
    },
    {
      icon: "/images/service/social-support.png",
      title: "Deliverables",
      renderContent: () => (
        <ul className="list-disc pl-5 space-y-2 text-gray-600 text-start">
          <li>The original sequencing data</li>
          <li>Experimental results</li>
          <li>Bioinformatics and Data Analysis Report</li>
          <li>Details in Total RNA Sequencing for your writing (customization)</li>
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

export default WTSSpecifications;