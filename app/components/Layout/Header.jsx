"use client";

// components/Layout/Header.jsx
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeAllMenus}>
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
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-12">
              <li className="relative group">
                <Link
                  href="/dna_sequencing"
                  className="font-medium text-lg py-2"
                  style={{ color: '#2a6564' }}
                >
                  Research
                </Link>
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <li>
                    <Link
                      href="/dna_sequencing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      DNA Sequencing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/rna_sequencing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      RNA Sequencing
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/health"
                  className="font-medium text-lg py-2"
                  style={{ color: '#2a6564' }}
                >
                  Health
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/sample-submission-guideline"
                  className="font-medium text-lg py-2"
                  style={{ color: '#2a6564' }}
                >
                  Knowledge Hub
                </Link>
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <li>
                    <Link
                      href="/sample-submission-guideline"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Sample Submission Guideline
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sample-initiation-form"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Sample Initiation Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/packaging-shipping-guideline"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Packaging and Shipping Guideline
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <Link
                  href="/company"
                  className="font-medium text-lg py-2"
                  style={{ color: '#2a6564' }}
                >
                  About Us
                </Link>
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <li>
                    <Link
                      href="/company"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-team"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      Our Leadership Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
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
            <button className="p-2 text-gray-500 hover:text-teal-600 transition-colors">
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
              className="text-white px-6 py-3 rounded-md hover:opacity-90 transition-all flex items-center space-x-2 font-medium"
              style={{ backgroundColor: '#2a6564' }}
              onClick={closeAllMenus}
            >
              <span>Get In Touch</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <nav className="px-6 py-4">
              <ul className="space-y-2">
                {/* Research Dropdown */}
                <li>
                  <button
                    onClick={() => toggleDropdown('research')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-teal-600 py-2 font-medium"
                  >
                    <span>Research</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === 'research' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === 'research' && (
                    <ul className="pl-4 mt-2 space-y-2">
                      <li>
                        <Link
                          href="/dna_sequencing"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-1"
                          onClick={closeAllMenus}
                        >
                          DNA Sequencing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rna_sequencing"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-1"
                          onClick={closeAllMenus}
                        >
                          RNA Sequencing
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Health */}
                <li>
                  <Link
                    href="/health"
                    className="block text-gray-700 hover:text-teal-600 py-2 font-medium"
                    onClick={closeAllMenus}
                  >
                    Health
                  </Link>
                </li>

                {/* Knowledge Hub Dropdown */}
                <li>
                  <button
                    onClick={() => toggleDropdown('knowledge')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-teal-600 py-2 font-medium"
                  >
                    <span>Knowledge Hub</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === 'knowledge' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === 'knowledge' && (
                    <ul className="pl-4 mt-2 space-y-2">
                      <li>
                        <Link
                          href="/sample-submission-guideline"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-1"
                          onClick={closeAllMenus}
                        >
                          Sample Submission Guideline
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sample-initiation-form"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-1"
                          onClick={closeAllMenus}
                        >
                          Sample Initiation Form
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/packaging-shipping-guideline"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-1"
                          onClick={closeAllMenus}
                        >
                          Packaging and Shipping Guideline
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* About Us Dropdown */}
                <li>
                  <button
                    onClick={() => toggleDropdown('about')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-teal-600 py-2 font-medium"
                  >
                    <span>About Us</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === 'about' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === 'about' && (
                    <ul className="pl-4 mt-2 space-y-2">
                      <li>
                        <Link
                          href="/company"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-1"
                          onClick={closeAllMenus}
                        >
                          Company
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/our-team"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-1"
                          onClick={closeAllMenus}
                        >
                          Our Leadership Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/careers"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-1"
                          onClick={closeAllMenus}
                        >
                          Career
                        </Link>
                      </li>
                    </ul>
                  )}
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