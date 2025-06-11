// app/company/page.js

import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import CompanyHero from '../components/Company/CompanyHero'
import CompanyIntro from '../components/Company/CompanyIntro';
import VisionMission from '../components/Company/VisionMission';
import OurOfferings from '../components/Company/OurOfferings';
import WhyChooseUs from '../components/Company/WhyChooseUs';

export default function CompanyPage() {
  return (
    <PageLayout fixedHeader={true}>
      \<main>
        <CompanyHero />
        <CompanyIntro />
        <VisionMission />
        <OurOfferings />
        <WhyChooseUs />
      </main>
    </PageLayout>
  );
}

// For App Router, export metadata separately
export const metadata = {
  title: 'Our Company - Operify Tech',
  description: 'Learn about Operify Tech\'s mission, vision, and commitment to advancing genomic research through next-generation sequencing technology',
  keywords: 'Operify Tech, company, genomics, NGS, next generation sequencing, mission, vision',
  openGraph: {
    title: 'Our Company - Operify Tech',
    description: 'Learn about Operify Tech\'s mission, vision, and commitment to advancing genomic research through next-generation sequencing technology',
    type: 'website',
  },
};