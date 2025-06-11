import React from 'react';
import Image from 'next/image';

const CareerInfo = () => {
  return (
    <div className="lg:w-5/12 relative">
      <div className="p-6 md:p-8 lg:p-8 text-center lg:text-left">
        <div className="mb-6">
          <h2 className="text-gray-700 text-2xl md:text-3xl lg:text-3xl font-semibold leading-tight mb-6">
            If you are passionate about genomics, we would love to meet you!
          </h2>
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/career.png"
              alt="Career"
              width={500}
              height={400}
              className="max-w-full h-auto max-h-80 md:max-h-96 lg:max-h-[28rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerInfo;