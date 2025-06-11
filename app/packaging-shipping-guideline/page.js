import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import PackagingShippingPage from '../components/PackagingShipping/PackagingShippingPage';

export default function PackagingShippingGuideline() {
  return (
    <PageLayout fixedHeader={true}>
      <main>
        <PackagingShippingPage />
      </main>
    </PageLayout>
  );
}

// For App Router, export metadata separately
export const metadata = {
  title: 'Packaging and Shipping Guideline – Operify Tech',
  description: 'Comprehensive packaging and shipping guidelines for DNA, RNA, and other biological samples.',
  keywords: 'sample packaging, shipping guidelines, DNA samples, RNA samples, biological samples, sample submission',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Packaging and Shipping Guideline – Operify Tech',
    description: 'Comprehensive packaging and shipping guidelines for DNA, RNA, and other biological samples.',
    type: 'website',
  },
};