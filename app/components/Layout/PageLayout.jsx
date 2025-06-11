// components/Layout/PageLayout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function PageLayout({ children, fixedHeader = false }) {
  if (fixedHeader) {
    return (
      <div className="min-h-screen bg-white">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <main className="pt-[60px] sm:pt-[65px] md:pt-[80px]">
          {children}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}