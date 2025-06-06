"use client";

// components/Layout/Header.jsx
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container-fluid">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="flex-shrink-0 mr-5">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Operify Tech"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-start">
            <ul className="flex space-x-8">
              <li className="relative group">
                <Link
                  href="/dna_sequencing"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Research
                </Link>
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <li>
                    <Link
                      href="/dna_sequencing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      DNA Sequencing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/rna_sequencing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      RNA Sequencing
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/health"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Health
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/sample-submission-guideline"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Knowledge Hub
                </Link>
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <li>
                    <Link
                      href="/sample-submission-guideline"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sample Submission Guideline
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sample-initiation-form"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sample Initiation Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/packaging-shipping-guideline"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Packaging and Shipping Guideline
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <Link
                  href="/about-us"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  About Us
                </Link>
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <li>
                    <Link
                      href="/company"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-team"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Our Leadership Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-blue-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <Link
              href="/contact-us"
              className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center space-x-2"
            >
              <span>Get in Touch</span>
              <svg className="w-4 h-4" viewBox="0 0 60 60" fill="currentColor">
                <path d="m31 50.979c-.362.007-.727-.081-1.049-.28-.929-.572-1.212-1.814-.653-2.742.047-.082 5.886-9.826 17.032-15.958h-43.33c-1.103 0-2-.897-2-2s.897-2 2-2h43.33c-11.084-6.097-16.989-15.884-17.047-15.982-.547-.934-.244-2.177.689-2.73.946-.561 2.192-.236 2.757.715.909 1.45 9.433 14.449 24.722 18.046.915.225 1.549 1.026 1.549 1.952s-.63 1.729-1.532 1.948c-15.354 3.61-23.849 16.626-24.767 18.099-.36.577-1.025.919-1.7.932z" />
              </svg>
            </Link>
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/dna_sequencing"
                    className="block text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="/health"
                    className="block text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Health
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sample_submission_guideline"
                    className="block text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Knowledge Hub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="block text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;