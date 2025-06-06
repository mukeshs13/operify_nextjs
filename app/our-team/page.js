import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import TeamHero from '../components/Team/TeamHero';
import TeamGrid from '../components/Team/TeamGrid';

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <TeamHero />
        <TeamGrid />
      </main>
      
      <Footer />
    </div>
  );
}

// For App Router, export metadata separately
export const metadata = {
  title: 'Our Team - Operify Tech',
  description: 'Meet the leadership team and experts at Operify Tech who are driving innovation in genomic sequencing and research',
  keywords: 'Operify Tech, team, leadership, genomics experts, NGS specialists, research team',
  openGraph: {
    title: 'Our Team - Operify Tech',
    description: 'Meet the leadership team and experts at Operify Tech who are driving innovation in genomic sequencing and research',
    type: 'website',
  },
};
