import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ContactPage from '../components/ContactPage/ContactPage';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <ContactPage />
      </main>
      
      <Footer />
    </div>
  );
}

// For App Router, export metadata separately
export const metadata = {
  title: 'Contact Us - Operify Tech',
  description: 'Get in touch with Operify Tech for your genomic sequencing, DNA analysis, and research needs. We are here to help with your innovation projects',
  keywords: 'Contact Operify Tech, genomic sequencing contact, DNA sequencing services, NGS contact, research collaboration',
  openGraph: {
    title: 'Contact Us - Operify Tech',
    description: 'Get in touch with Operify Tech for your genomic sequencing, DNA analysis, and research needs. We are here to help with your innovation projects',
    type: 'website',
  },
};