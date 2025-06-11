// SRNASpecifications.jsx
import Link from 'next/link';
import SpecificationsLayout from '../../../components/shared/SpecificationsLayout';

const SRNASpecifications = () => {
  const specificationItems = [
    {
      icon: "/images/homepage-2/NGS-Icons-45.svg",
      title: "Sample Requirement",
      renderContent: () => (
        <div>
          <div className="mb-4">
            <p className="text-gray-600">Total RNA ≥ 1 μg, Cells≥ 2×10<sup>6</sup>, or Tissue ≥ 500 mg.</p>
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
      content: "Illumina MiSeq, Nextseq 550"
    },
    {
      icon: "/images/service/social-support.png",
      title: "Deliverables",
      renderContent: () => (
        <ul className="list-disc pl-5 space-y-2 text-gray-600 text-start">
          <li>The original sequencing data</li>
          <li>Experimental results</li>
          <li>Bioinformatics and Data analysis report</li>
          <li>Details in Small RNA Sequencing for your writing (customization)</li>
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

export default SRNASpecifications;