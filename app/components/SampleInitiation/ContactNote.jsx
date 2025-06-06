import React from 'react';
import Link from 'next/link';

const ContactNote = () => {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-gray-700 leading-relaxed ml-6 md:ml-8 lg:ml-8">
          We offer comprehensive assistance for planning your experiment, including design, execution, and evaluation of your sequencing project. Consult with our scientists by emailing{' '}
          <Link 
            href="mailto:info@operifytech.com" 
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            info@operifytech.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ContactNote;