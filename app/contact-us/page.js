import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import ContactPage from '../components/ContactPage/ContactPage';

export default function ContactUsPage() {
  return (
    <PageLayout fixedHeader={true}>
      
      <main>
        <ContactPage />
      </main>
      
    </PageLayout>
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