// components/Layout/Footer.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Address */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image 
                src="/images/Operify-Logo-White.png" 
                alt="Operify Tech" 
                width={150} 
                height={50}
              />
            </div>
            <address className="text-gray-300 not-italic">
              <a 
                href="https://maps.google.com/?q=Operify+Tech+Pvt+Ltd,+64-65+Satguru+Ram+Singh+Ji+Marg,+Kirti+Nagar+Industrial+Area,+New+Delhi+110015"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Operify Tech Pvt. Ltd.<br />
                64-65, Satguru Ram Singh Ji Marg<br />
                Kirti Nagar Industrial Area<br />
                New Delhi - 110015
              </a>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>DNA Sequencing</li>
              <li>RNA Sequencing</li>
              <li>Genotyping</li>
              <li>Bioinformatics Services</li>
              <li>Long Read Sequencing</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#research" className="text-gray-300 hover:text-white transition-colors">Research</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Health</Link></li>
              <li><Link href="/sample_submission_guideline" className="text-gray-300 hover:text-white transition-colors">Knowledge Hub</Link></li>
              <li><Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+01143046242" className="hover:text-white transition-colors">01143046242</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+9319171176" className="hover:text-white transition-colors">9319171176</a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@operifytech.com" className="hover:text-white transition-colors">Info@operifytech.com</a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Image src="/images/homepage-2/Group 11.png" alt="Twitter" width={20} height={20} />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/operify-tech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Image src="/images/homepage-2/Group 10.png" alt="LinkedIn" width={20} height={20} />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/operifytech_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Image src="/images/homepage-2/Group 12.png" alt="Instagram" width={20} height={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              Copyright © 2024 <Link href="/" className="text-white hover:text-gray-300">operify</Link> All Rights Reserved.
            </p>
            <ul className="flex space-x-6 mt-4 md:mt-0">
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms And Conditions</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer