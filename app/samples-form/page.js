import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import SampleFormPage from '../components/SampleForm/SampleFormPage';

export default function SamplesFormPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <SampleFormPage />
      </main>
      
      <Footer />
    </div>
  );
}

// For App Router, export metadata separately
export const metadata = {
  title: 'Sample Initiation Form - Operify Tech',
  description: 'Complete sample initiation form for genomic sequencing services. Fill out customer, sample, service, and bioinformatics information',
  keywords: 'Sample form, genomic sequencing form, DNA sequencing submission, sample details form, laboratory form',
  openGraph: {
    title: 'Sample Initiation Form - Operify Tech',
    description: 'Complete sample initiation form for genomic sequencing services. Fill out customer, sample, service, and bioinformatics information',
    type: 'website',
  },
};