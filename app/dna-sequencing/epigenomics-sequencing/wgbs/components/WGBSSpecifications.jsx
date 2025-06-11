// WGBSSpecifications.jsx
import Link from 'next/link';
import SpecificationsLayout from '../../../../components/shared/SpecificationsLayout';

const WGBSSpecifications = () => {
  const specificationItems = [
    {
      icon: "/images/homepage-2/NGS-Icons-45.svg",
      title: "Sample Requirement",
      renderContent: () => (
        <div>
          <div className="mb-4">
            <p className="text-gray-600">Samples sources including Genomic DNA of human, animals, plants and microorganisms.</p>
          </div>
          <div className="mt-4 text-sm">
            <strong>
              Please refer to{' '}
              <Link href="/sample-submission-guideline" className="text-teal-600 underline hover:text-teal-700">
                sample submission guidelines
              </Link>
              {' '}or{' '}
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
          <li>Bioinformatics and Data Analysis Report</li>
          <li>Details of WGBS Sequencing (customizable)</li>
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

export default WGBSSpecifications;