import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import SampleGuidelinePage from '../components/SampleGuideline/SampleGuidelinePage';

export default function SampleSubmissionGuidelinePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <SampleGuidelinePage />
      </main>
      
      <Footer />
    </div>
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