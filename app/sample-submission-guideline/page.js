import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import SampleGuidelinePage from '../components/SampleGuideline/SampleGuidelinePage';

export default function SampleSubmissionGuidelinePage() {
  return (
    <PageLayout fixedHeader={true}>
      <main>
        <SampleGuidelinePage />
      </main>
    </PageLayout>
  );
}

// For App Router, export metadata separately
export const metadata = {
  title: 'Sample Submission Guideline - Operify Tech',
  description: 'Complete guidelines for sample submission at Operify Tech. Learn about DNA, RNA, and single cell sample requirements for genomic sequencing services',
  keywords: 'Sample submission guidelines, DNA sample requirements, RNA sample requirements, genomic sequencing samples, NGS sample prep',
  openGraph: {
    title: 'Sample Submission Guideline - Operify Tech',
    description: 'Complete guidelines for sample submission at Operify Tech. Learn about DNA, RNA, and single cell sample requirements for genomic sequencing services',
    type: 'website',
  },
};