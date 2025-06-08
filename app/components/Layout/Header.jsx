"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState([]);

  const toggleDropdown = (dropdownName, event) => {
    if (event) {
      event.stopPropagation();
    }
    
    setOpenDropdown(current => {
      if (current.includes(dropdownName)) {
        // Remove this dropdown and any child dropdowns
        return current.filter(name => !name.startsWith(dropdownName));
      } else {
        // Add this dropdown
        return [...current, dropdownName];
      }
    });
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown([]);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeAllMenus}>
              <Image
                src="/images/logo.png"
                alt="Operify Tech"
                width={200}
                height={60}
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-8 xl:space-x-12">
              <li className="relative group">
                <Link
                  href="/dna-sequencing"
                  className="font-medium text-lg py-2 hover:text-teal-700 transition-colors"
                  style={{ color: '#2a6564' }}
                >
                  Research
                </Link>
                <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <li className="relative group/dna">
                    <Link
                      href="/dna-sequencing"
                      className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600 border-b border-gray-50"
                    >
                      <span className="font-medium">DNA Sequencing</span>
                      <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <ul className="absolute top-0 left-full bg-white shadow-xl rounded-md py-2 w-64 opacity-0 invisible group-hover/dna:opacity-100 group-hover/dna:visible transition-all duration-300 z-50 border border-gray-100 ml-1">
                      <li className="relative group/wgs">
                        <Link
                          href="/dna-sequencing/whole-genome-sequencing"
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Whole Genome Sequencing
                          <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <ul className="absolute top-0 left-full bg-white shadow-xl rounded-md py-2 w-72 opacity-0 invisible group-hover/wgs:opacity-100 group-hover/wgs:visible transition-all duration-300 z-50 border border-gray-100 ml-1">
                          <li>
                            <Link
                              href="/dna-sequencing/whole-genome-sequencing"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              Whole Genome Sequencing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dna-sequencing/whole-genome-sequencing/denovo"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              Whole Genome Denovo Sequencing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dna-sequencing/whole-genome-sequencing/resequencing"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              Whole Genome ReSequencing
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="relative group/enrichment">
                        <Link
                          href="/dna-sequencing/enrichment-sequencing"
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Enrichment Sequencing
                          <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <ul className="absolute top-0 left-full bg-white shadow-xl rounded-md py-2 w-72 opacity-0 invisible group-hover/enrichment:opacity-100 group-hover/enrichment:visible transition-all duration-300 z-50 border border-gray-100 ml-1">
                          <li>
                            <Link
                              href="/dna-sequencing/enrichment-sequencing"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              Enrichment Sequencing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dna-sequencing/enrichment-sequencing/whole-exome"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              Whole Exome Sequencing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dna-sequencing/enrichment-sequencing/amplicon-sequencing"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              Amplicon Sequencing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dna-sequencing/enrichment-sequencing/targeted-sequencing"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              Targeted DNA Sequencing
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          href="/dna-sequencing/single-cell-dna-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Single Cell DNA Sequencing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dna-sequencing/metagenomics-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Metagenomics Sequencing
                        </Link>
                      </li>
                      <li className="relative group/epigenomics">
                        <Link
                          href="/dna-sequencing/epigenomics-sequencing"
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Epigenomics Sequencing
                          <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <ul className="absolute top-0 left-full bg-white shadow-xl rounded-md py-2 w-72 opacity-0 invisible group-hover/epigenomics:opacity-100 group-hover/epigenomics:visible transition-all duration-300 z-50 border border-gray-100 ml-1">
                          <li>
                            <Link
                              href="/dna-sequencing/epigenomics-sequencing"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              Epigenomics Sequencing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dna-sequencing/epigenomics-sequencing/wgbs"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              Whole Genome Bisulphite Sequencing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dna-sequencing/epigenomics-sequencing/chip-sequencing"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              ChIP (Chromatin immunoprecipitation) Sequencing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dna-sequencing/epigenomics-sequencing/atac-sequencing"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              ATAC (Assay for Transposase-Accessible Chromatin) Sequencing
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="relative group/genome-mapping">
                        <Link
                          href="/dna-sequencing/genome-mapping"
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Genome Mapping
                          <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <ul className="absolute top-0 left-full bg-white shadow-xl rounded-md py-2 w-72 opacity-0 invisible group-hover/genome-mapping:opacity-100 group-hover/genome-mapping:visible transition-all duration-300 z-50 border border-gray-100 ml-1">
                          <li>
                            <Link
                              href="/dna-sequencing/genome-mapping"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              Genome Mapping
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dna-sequencing/genome-mapping/hi-c-mapping"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              High-throughput Chromosome Conformation Capture (Hi-C) Mapping
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dna-sequencing/genome-mapping/optical-mapping"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                            >
                              Optical Mapping
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          href="/dna-sequencing/long-read-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Whole Genome Long Read Sequencing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dna-sequencing/hybrid-genome-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Hybrid Genome Sequencing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dna-sequencing/snp-genotyping"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          SNP-based Genotyping
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dna-sequencing/microsatellites-ssr-str"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Microsatellites (SSR/STR) -based genotyping
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="relative group/rna">
                    <Link
                      href="/rna-sequencing"
                      className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                    >
                      <span className="font-medium">RNA Sequencing</span>
                      <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <ul className="absolute top-0 left-full bg-white shadow-xl rounded-md py-2 w-80 opacity-0 invisible group-hover/rna:opacity-100 group-hover/rna:visible transition-all duration-300 z-50 border border-gray-100 ml-1">
                      <li>
                        <Link
                          href="/rna-sequencing/whole-transcriptome-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Whole Transcriptome (Total RNA) Sequencing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rna-sequencing/mrna-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          mRNA Sequencing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rna-sequencing/small-rna-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Small RNA (sRNA) sequencing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rna-sequencing/lncrna-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          lncRNA Sequencing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rna-sequencing/metatranscriptomics-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Metatranscriptomics Sequencing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rna-sequencing/degradome-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Degradome Sequencing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rna-sequencing/iso-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Iso Sequencing using PacBio
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rna-sequencing/circular-rna-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Circular RNA Sequencing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rna-sequencing/single-cell-rna-sequencing"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          Single Cell RNA Sequencing
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/health"
                  className="font-medium text-lg py-2 hover:text-teal-700 transition-colors"
                  style={{ color: '#2a6564' }}
                >
                  Health
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/sample-submission-guideline"
                  className="font-medium text-lg py-2 hover:text-teal-700 transition-colors"
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
                  className="font-medium text-lg py-2 hover:text-teal-700 transition-colors"
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
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 text-gray-500 hover:text-teal-600 transition-colors">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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
              className="hidden sm:flex text-white px-4 lg:px-6 py-2 sm:py-3 rounded-full hover:opacity-90 transition-all items-center space-x-2 font-medium text-sm lg:text-base"
              style={{ backgroundColor: '#2a6564' }}
              onClick={closeAllMenus}
            >
              <span className="hidden md:inline">Get In Touch</span>
              <span className="md:hidden">Contact</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors"
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
            <nav className="px-4 sm:px-6 py-4 max-h-96 overflow-y-auto">
              <ul className="space-y-2">
                {/* Research Dropdown */}
                <li>
                  <button
                    onClick={() => toggleDropdown('research')}
                    className="flex items-center justify-between w-full text-left font-medium py-3 border-b border-gray-100"
                    style={{ color: '#2a6564' }}
                  >
                    <span>Research</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown.includes('research') ? 'rotate-180' : ''
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
                  {openDropdown.includes('research') && (
                    <ul className="pl-4 mt-2 space-y-2 pb-3">
                      <li>
                        <button
                          onClick={(e) => toggleDropdown('dna', e)}
                          className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-teal-600 py-2"
                        >
                          <span>DNA Sequencing</span>
                          <svg
                            className={`w-3 h-3 transition-transform duration-200 ${
                              openDropdown.includes('dna') ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openDropdown.includes('dna') && (
                          <ul className="pl-4 mt-2 space-y-1">
                            <li>
                              <Link
                                href="/dna-sequencing/whole-genome-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Whole Genome Sequencing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dna-sequencing/enrichment-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Enrichment Sequencing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dna-sequencing/single-cell-dna-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Single Cell DNA
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dna-sequencing/metagenomics-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Metagenomics
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dna-sequencing/epigenomics-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Epigenomics
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dna-sequencing/genome-mapping"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Genome Mapping
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dna-sequencing/long-read-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Long Read Sequencing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dna-sequencing/hybrid-genome-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Hybrid Sequencing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dna-sequencing/snp-genotyping"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                SNP Genotyping
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dna-sequencing/microsatellites-ssr-str"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Microsatellites
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <button
                          onClick={(e) => toggleDropdown('rna', e)}
                          className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-teal-600 py-2"
                        >
                          <span>RNA Sequencing</span>
                          <svg
                            className={`w-3 h-3 transition-transform duration-200 ${
                              openDropdown.includes('rna') ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openDropdown.includes('rna') && (
                          <ul className="pl-4 mt-2 space-y-1">
                            <li>
                              <Link
                                href="/rna-sequencing/whole-transcriptome-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Whole Transcriptome (Total RNA)
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/rna-sequencing/mrna-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                mRNA Sequencing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/rna-sequencing/small-rna-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Small RNA (sRNA) sequencing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/rna-sequencing/lncrna-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                lncRNA Sequencing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/rna-sequencing/metatranscriptomics-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Metatranscriptomics
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/rna-sequencing/degradome-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Degradome Sequencing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/rna-sequencing/iso-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Iso Sequencing (PacBio)
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/rna-sequencing/circular-rna-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Circular RNA Sequencing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/rna-sequencing/single-cell-rna-sequencing"
                                className="block text-xs text-gray-500 hover:text-teal-600 py-1"
                                onClick={closeAllMenus}
                              >
                                Single Cell RNA
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>

                {/* Health */}
                <li>
                  <Link
                    href="/health"
                    className="block font-medium py-3 border-b border-gray-100"
                    style={{ color: '#2a6564' }}
                    onClick={closeAllMenus}
                  >
                    Health
                  </Link>
                </li>

                {/* Knowledge Hub Dropdown */}
                <li>
                  <button
                    onClick={() => toggleDropdown('knowledge')}
                    className="flex items-center justify-between w-full text-left font-medium py-3 border-b border-gray-100"
                    style={{ color: '#2a6564' }}
                  >
                    <span>Knowledge Hub</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown.includes('knowledge') ? 'rotate-180' : ''
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
                  {openDropdown.includes('knowledge') && (
                    <ul className="pl-4 mt-2 space-y-2 pb-3">
                      <li>
                        <Link
                          href="/sample-submission-guideline"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-2"
                          onClick={closeAllMenus}
                        >
                          Sample Submission Guideline
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sample-initiation-form"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-2"
                          onClick={closeAllMenus}
                        >
                          Sample Initiation Form
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/packaging-shipping-guideline"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-2"
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
                    className="flex items-center justify-between w-full text-left font-medium py-3 border-b border-gray-100"
                    style={{ color: '#2a6564' }}
                  >
                    <span>About Us</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown.includes('about') ? 'rotate-180' : ''
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
                  {openDropdown.includes('about') && (
                    <ul className="pl-4 mt-2 space-y-2 pb-3">
                      <li>
                        <Link
                          href="/company"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-2"
                          onClick={closeAllMenus}
                        >
                          Company
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/our-team"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-2"
                          onClick={closeAllMenus}
                        >
                          Our Leadership Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/careers"
                          className="block text-sm text-gray-600 hover:text-teal-600 py-2"
                          onClick={closeAllMenus}
                        >
                          Career
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Mobile Contact Button */}
                <li className="pt-4">
                  <Link
                    href="/contact-us"
                    className="flex w-full text-white px-4 py-3 rounded-md hover:opacity-90 transition-all items-center justify-center space-x-2 font-medium"
                    style={{ backgroundColor: '#2a6564' }}
                    onClick={closeAllMenus}
                  >
                    <span>Get In Touch</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
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