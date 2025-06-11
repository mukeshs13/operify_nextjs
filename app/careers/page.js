import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import CareerPage from '../components/Career/CareerPage';

export default function CareersPage() {
  return (
    <PageLayout fixedHeader={true}>
      <main>
        <CareerPage />
      </main>
    </PageLayout>
  );
}

// For App Router, export metadata separately
export const metadata = {
  title: 'Careers - Operify Tech',
  description: 'Join our passionate team at Operify Tech. Explore career opportunities in genomics, DNA sequencing, and cutting-edge research technology',
  keywords: 'Careers Operify Tech, genomics jobs, DNA sequencing careers, NGS jobs, research careers, biotechnology jobs',
  openGraph: {
    title: 'Careers - Operify Tech',
    description: 'Join our passionate team at Operify Tech. Explore career opportunities in genomics, DNA sequencing, and cutting-edge research technology',
    type: 'website',
  },
};