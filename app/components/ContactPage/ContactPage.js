import React from 'react';
import PageTitle from './PageTitle';
import ContactSection from './ContactSection';
import ContactMap from './ContactMap';

const ContactPage = () => {
  return (
    <div className="page-content contact-us">
      <PageTitle />
      <div className="h-9"></div>
      <ContactSection />
      <ContactMap />
    </div>
  );
};

export default ContactPage;