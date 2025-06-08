// components/Layout/Footer.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-white relative overflow-hidden rounded-t-3xl" style={{ backgroundColor: '#2a6564' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 transform rotate-45 translate-x-48 -translate-y-48">
          <div className="w-full h-full border-2 border-white rounded-full"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 transform -rotate-12 -translate-x-32 translate-y-32">
          <div className="w-full h-full border border-white rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Address */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Image 
                src="/images/Operify-Logo-White.png" 
                alt="Operify Tech" 
                width={180} 
                height={60}
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <address className="text-teal-100 not-italic leading-relaxed">
              <div className="space-y-1">
                <div className="font-medium text-white">Operify Tech Pvt. Ltd.</div>
                <div>64-65, Satguru Ram Singh Ji Marg</div>
                <div>Kirti Nagar Industrial Area</div>
                <div>New Delhi - 110015</div>
              </div>
            </address>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Image src="/images/homepage-2/Group 11.png" alt="Twitter" width={20} height={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/operify-tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Image src="/images/homepage-2/Group 10.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a 
                href="https://www.instagram.com/operifytech_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Image src="/images/homepage-2/Group 12.png" alt="Instagram" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-teal-100">
              <li className="hover:text-white transition-colors cursor-pointer">DNA Sequencing</li>
              <li className="hover:text-white transition-colors cursor-pointer">RNA Sequencing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Genotyping</li>
              <li className="hover:text-white transition-colors cursor-pointer">Bioinformatics Services</li>
              <li className="hover:text-white transition-colors cursor-pointer">Long Read Sequencing</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Useful Link</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-teal-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#research" className="text-teal-100 hover:text-white transition-colors">Research</Link></li>
              <li><Link href="#" className="text-teal-100 hover:text-white transition-colors">Health</Link></li>
              <li><Link href="/sample-submission-guideline" className="text-teal-100 hover:text-white transition-colors">Knowledge Hub</Link></li>
              <li><Link href="/company" className="text-teal-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="text-teal-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Details</h3>
            <div className="space-y-4 text-teal-100">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@operifytech.com" className="hover:text-white transition-colors">
                  Info@operifytech.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:01143046242" className="hover:text-white transition-colors">
                  01143046242
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:9319171176" className="hover:text-white transition-colors">
                  9319171176
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 text-gray-600 relative z-10 rounded-t-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              Copyright © 2024 <span className="text-gray-800 font-medium">Operify</span> All Rights Reserved.
            </p>
            <ul className="flex space-x-6 mt-3 md:mt-0">
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</Link></li>
              <li className="text-gray-400">|</li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">Term And Condition</Link></li>
              <li className="text-gray-400">|</li>
              <li><Link href="#" className="hover:text-gray-800 transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;