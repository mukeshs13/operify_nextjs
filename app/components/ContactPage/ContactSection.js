import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
  return (
    <section className="py-10 md:py-16 lg:py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-14">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;