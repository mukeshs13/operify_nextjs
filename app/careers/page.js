import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CareerPage from '../components/Career/CareerPage';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <CareerPage />
      </main>
      
      <Footer />
    </div>
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