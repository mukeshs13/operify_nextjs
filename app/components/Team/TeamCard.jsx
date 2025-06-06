import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamCard = ({ 
  image, 
  name, 
  position, 
  linkedinUrl, 
  detailUrl
}) => {
  return (
    <article className="w-full h-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <div className="relative group">
            <Image 
              src={image} 
              alt={name} 
              width={300} 
              height={350}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {detailUrl && (
              <Link 
                href={detailUrl}
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
              />
            )}
          </div>
        </div>

        {/* Content Section - Flexible to fill remaining space */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              {detailUrl ? (
                <Link href={detailUrl}>{name}</Link>
              ) : (
                name
              )}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{position}</p>
          </div>

          {/* LinkedIn Button - Always at bottom */}
          {linkedinUrl && (
            <div className="flex justify-start mt-auto">
              <Link 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default TeamCard;