// app/dna-sequencing/enrichment-sequencing/components/EnrichmentIntroduction.jsx

import IntroductionLayout from '../../../components/shared/IntroductionLayout';

const EnrichmentIntroduction = () => {
  const contentItems = [
    "Enriched Sequencing is a comprehensive approach to analyze part of genomes base-by-base, providing enriched genomic view.",
    "The workflow includes isolating DNA, fragmenting it, capturing the regions of interest followed by sequencing to produce millions of short reads.",
    "In the bioinformatics analysis, these reads are aligned to a known reference genome to detect genomic alterations.",
    "It is a powerful tool for diverse genomic studies, capable of sequencing humans, livestock, plants, bacteria, and disease-related microbes."
  ];

  const customBadgeContent = (
    <div className="text-center">
      <div className="bg-teal-600 text-white px-4 py-2 rounded-lg mb-4">
        <span className="text-sm font-medium">ENRICHMENT SEQUENCING</span>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="bg-orange-400 text-white px-3 py-2 rounded text-xs">
          Whole Exome DNA Sequencing
        </div>
        <div className="bg-orange-400 text-white px-3 py-2 rounded text-xs">
          Amplicon Sequencing (16S/18S/ITS)
        </div>
        <div className="bg-orange-400 text-white px-3 py-2 rounded text-xs">
          Targeted Sequencing
        </div>
      </div>
    </div>
  );

  return (
    <IntroductionLayout
      title="Introduction and Workflow"
      contentItems={contentItems}
      imageUrl="/images/enrichment-overview.png"
      imageAlt="Enrichment Overview"
      backgroundColor="#f8f9fa"
      customBadgeContent={customBadgeContent}
      useParagraphs={true}
    />
  );
};

export default EnrichmentIntroduction;