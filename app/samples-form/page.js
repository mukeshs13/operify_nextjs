import React from 'react';
import SampleFormPage from '../components/SampleForm/SampleFormPage';
import PageLayout from '../components/Layout/PageLayout';

export default function SamplesFormPage() {
  return (
    <PageLayout fixedHeader={true}>
      <main >
        <SampleFormPage />
      </main>
    </PageLayout>
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