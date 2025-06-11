import React from 'react';
import Image from 'next/image';

const ContactInfo = () => {
  return (
    <div className="lg:w-5/12 relative">
      <div className="p-6 md:p-8 lg:p-8 text-center lg:text-left">
        <div className="mb-6">
          <h2 className="text-gray-700 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4">
            Reach out to our team
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            We&apos;re here here to help with your research and innovation needs.
          </p>
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg h-80 md:h-96 lg:h-[28rem]">
              <Image
                src="/images/Contact_us.png"
                alt="Contact Us"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;