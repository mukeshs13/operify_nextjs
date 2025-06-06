import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import SampleInitiationPage from '../components/SampleInitiation/SampleInitiationPage';

export default function SampleInitiationFormPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <SampleInitiationPage />
      </main>
      
      <Footer />
    </div>
  );
}

// For App Router, export metadata separately
export const metadata = {
  title: 'Sample Initiation Form - Operify Tech',
  description: 'Submit your sample initiation form online or download our Excel template. Simple process for genomic sequencing sample submission',
  keywords: 'Sample initiation form, sample submission form, genomic sequencing form, DNA sequencing form, online sample submission',
  openGraph: {
    title: 'Sample Initiation Form - Operify Tech',
    description: 'Submit your sample initiation form online or download our Excel template. Simple process for genomic sequencing sample submission',
    type: 'website',
  },
};