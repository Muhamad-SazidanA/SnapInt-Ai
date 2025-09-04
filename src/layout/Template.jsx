import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaWhatsapp, FaBars, FaTimes, FaChevronDown, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaShieldAlt, FaGlobe, FaFileAlt, FaBuilding, FaPaperPlane } from "react-icons/fa";

export default function Template() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleNavigation = (url) => {
        window.location.href = url;
    };

    const handleNavClick = (page, href) => {
        if (page) {
            handleNavigation(`/${page}`);
        } else if (href) {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
        setActiveDropdown(null);
    };

    const handleLogoClick = () => {
        handleNavigation('/');
        setIsMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <div className="flex flex-col bg-gray-50 text-gray-900">
            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/628973923000"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-tr from-green-400 to-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 group"
                title="Hubungi via WhatsApp"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-30 animate-pulse"></div>
                    <FaWhatsapp size={28} className="relative z-10" />
                </div>
            </a>

            {/* Header */}
            <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm supports-[backdrop-filter]:bg-white/90">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative grid grid-cols-[auto_1fr_auto] items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <div
                                className="flex items-center space-x-2 group cursor-pointer"
                                onClick={handleLogoClick}
                            >
                                <div className="w-8 h-8 bg-gradient-to-br from-primary-800 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <span className="text-white font-bold text-sm">S</span>
                                </div>
                                <span className="text-xl font-bold text-gray-900 group-hover:text-primary-800 transition-colors duration-200">
                                    snapint
                                </span>
                            </div>
                        </div>

                        {/* Desktop Navigation (centered via grid) */}
                        <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-5 whitespace-nowrap justify-self-center">
                            {/* Platform */}
                            <div
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('Platform')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    onClick={() => handleNavClick(null, '#platform')}
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 py-1.5 px-2.5 rounded-lg hover:bg-gray-50 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                    type="button"
                                >
                                    <span>Platform</span>
                                    <FaChevronDown
                                        className={`text-xs transition-transform duration-200 ${activeDropdown === 'Platform' ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {/* Platform Dropdown */}
                                {activeDropdown === 'Platform' && (
                                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in-0 zoom-in-95">
                                        <button
                                            onClick={() => handleNavClick('solusi/ai-processing')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Pemrosesan Dokumen AI
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('json-output', '#json-output')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Output API JSON
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('no-template', '#no-template')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Ekstraksi Tanpa Template
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('deployment', '#deployment')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Opsi Implementasi
                                        </button>

                                    </div>
                                )}
                            </div>

                            {/* Solusi */}
                            <div
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('Solusi')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    onClick={() => handleNavClick(null, '#solutions')}
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 py-1.5 px-2.5 rounded-lg hover:bg-gray-50 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                    type="button"
                                >
                                    <span>Solusi</span>
                                    <FaChevronDown
                                        className={`text-xs transition-transform duration-200 ${activeDropdown === 'Solusi' ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {/* Solusi Dropdown */}
                                {activeDropdown === 'Solusi' && (
                                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in-0 zoom-in-95">
                                        <button
                                            onClick={() => handleNavClick('customer-onboarding', '#customer-onboarding')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Customer Onboarding
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('solusi/accounts-payable', '#accounts-payable')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Accounts Payable
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('solusi/purchase-orders', '#purchase-orders')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Purchase Order Processing
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('solusi/industry-solutions', '#industry-solutions')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Solusi per Industri
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Pelanggan */}
                            <div
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('Pelanggan')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    onClick={() => handleNavClick(null, '#customers')}
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 py-1.5 px-2.5 rounded-lg hover:bg-gray-50 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                    type="button"
                                >
                                    <span>Pelanggan</span>
                                    <FaChevronDown
                                        className={`text-xs transition-transform duration-200 ${activeDropdown === 'Pelanggan' ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {/* Pelanggan Dropdown */}
                                {activeDropdown === 'Pelanggan' && (
                                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in-0 zoom-in-95">
                                        <button
                                            onClick={() => handleNavClick('banking', '#banking')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Perbankan
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('insurance', '#insurance')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Insurance
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('healthcare', '#healthcare')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Kesehatan
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('logistics', '#logistics')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Logistik
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('pelanggan/education', '#education')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Pendidikan
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('pelanggan/manufacturing', '#manufacturing')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Manufaktur
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Mitra */}
                            <div
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('Mitra')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    onClick={() => handleNavClick(null, '#partners')}
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 py-1.5 px-2.5 rounded-lg hover:bg-gray-50 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                    type="button"
                                >
                                    <span>Mitra</span>
                                    <FaChevronDown
                                        className={`text-xs transition-transform duration-200 ${activeDropdown === 'Mitra' ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {/* Mitra Dropdown */}
                                {activeDropdown === 'Mitra' && (
                                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in-0 zoom-in-95">
                                        <button
                                            onClick={() => handleNavClick('mitra/partnership-opportunities', '#partnership-opportunities')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Peluang Kemitraan
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('mitra/partner-benefits', '#partner-benefits')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Keuntungan Partner
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('mitra/partner-types', '#partner-types')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Jenis Partner
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Sumber Daya */}
                            <div
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('Sumber Daya')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    onClick={() => handleNavClick(null, '#resources')}
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 py-1.5 px-2.5 rounded-lg hover:bg-gray-50 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                    type="button"
                                >
                                    <span>Sumber Daya</span>
                                    <FaChevronDown
                                        className={`text-xs transition-transform duration-200 ${activeDropdown === 'Sumber Daya' ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {/* Sumber Daya Dropdown */}
                                {activeDropdown === 'Sumber Daya' && (
                                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in-0 zoom-in-95">
                                        <button
                                            onClick={() => handleNavClick('blog', '#blog')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Blog
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('case-studies', '#case-studies')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Studi Kasus
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('whitepapers', '#whitepapers')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Whitepaper
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('webinars', '#webinars')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Webinar
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Perusahaan */}
                            <div
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('Perusahaan')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    onClick={() => handleNavClick(null, '#company')}
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 py-1.5 px-2.5 rounded-lg hover:bg-gray-50 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                    type="button"
                                >
                                    <span>Perusahaan</span>
                                    <FaChevronDown
                                        className={`text-xs transition-transform duration-200 ${activeDropdown === 'Perusahaan' ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {/* Perusahaan Dropdown */}
                                {activeDropdown === 'Perusahaan' && (
                                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in-0 zoom-in-95">
                                        <button
                                            onClick={() => handleNavClick('about', '#about')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Tentang Kami
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('newsroom', '#newsroom')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Newsroom
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('careers', '#careers')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Karier
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('contact', '#contact')}
                                            className="block w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg mx-2"
                                        >
                                            Hubungi Kami
                                        </button>
                                    </div>
                                )}
                            </div>
                        </nav>

                        {/* Language Selector & CTA Buttons */}
                        <div className="hidden md:flex items-center space-x-2 justify-self-end whitespace-nowrap">
                            <button
                                onClick={() => handleNavigation('/demo')}
                                className="border border-gray-200 bg-white hover:bg-gray-50 text-gray-900 px-4 h-10 rounded-2xl text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                            >
                                Request Demo
                            </button>
                            <button
                                onClick={() => handleNavigation('/free-trial')}
                                className="bg-primary-800 hover:bg-primary-900 text-white px-5 h-10 rounded-2xl text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
                            >
                                Get Started
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center space-x-2 justify-self-end col-start-3 row-start-1">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="hover:bg-gray-50 text-gray-600 p-2 rounded-lg"
                            >
                                {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {/* Platform Mobile */}
                                <button
                                    onClick={() => handleNavClick(null, '#platform')}
                                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                                >
                                    Platform
                                </button>
                                <div className="ml-4 space-y-1">
                                    <button
                                        onClick={() => handleNavClick('solusi/ai-processing')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Pemrosesan Dokumen AI
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('json-output', '#json-output')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Output API JSON
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('no-template', '#no-template')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Ekstraksi Tanpa Template
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('deployment', '#deployment')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Opsi Implementasi
                                    </button>

                                </div>

                                {/* Solusi Mobile */}
                                <button
                                    onClick={() => handleNavClick(null, '#solutions')}
                                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                                >
                                    Solusi
                                </button>
                                <div className="ml-4 space-y-1">
                                    <button
                                        onClick={() => handleNavClick('customer-onboarding', '#customer-onboarding')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Customer Onboarding
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('solusi/accounts-payable', '#accounts-payable')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Accounts Payable
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('solusi/purchase-orders', '#purchase-orders')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Purchase Order Processing
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('solusi/industry-solutions', '#industry-solutions')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Solusi per Industri
                                    </button>
                                </div>

                                {/* Pelanggan Mobile */}
                                <button
                                    onClick={() => handleNavClick(null, '#customers')}
                                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                                >
                                    Pelanggan
                                </button>
                                <div className="ml-4 space-y-1">
                                    <button
                                        onClick={() => handleNavClick('banking', '#banking')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Perbankan
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('insurance', '#insurance')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Insurance
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('healthcare', '#healthcare')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Kesehatan
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('logistics', '#logistics')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Logistik
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('pelanggan/education', '#education')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Pendidikan
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('pelanggan/manufacturing', '#manufacturing')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Manufaktur
                                    </button>
                                </div>

                                {/* Mitra Mobile */}
                                <button
                                    onClick={() => handleNavClick(null, '#partners')}
                                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                                >
                                    Mitra
                                </button>
                                <div className="ml-4 space-y-1">
                                    <button
                                        onClick={() => handleNavClick('mitra/partnership-opportunities', '#partnership-opportunities')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Peluang Kemitraan
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('mitra/partner-benefits', '#partner-benefits')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Keuntungan Partner
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('mitra/partner-types', '#partner-types')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Jenis Partner
                                    </button>
                                </div>

                                {/* Sumber Daya Mobile */}
                                <button
                                    onClick={() => handleNavClick(null, '#resources')}
                                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                                >
                                    Sumber Daya
                                </button>
                                <div className="ml-4 space-y-1">
                                    <button
                                        onClick={() => handleNavClick('blog', '#blog')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Blog
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('case-studies', '#case-studies')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Studi Kasus
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('whitepapers', '#whitepapers')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Whitepaper
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('webinars', '#webinars')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Webinar
                                    </button>
                                </div>

                                {/* Perusahaan Mobile */}
                                <button
                                    onClick={() => handleNavClick(null, '#company')}
                                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                                >
                                    Perusahaan
                                </button>
                                <div className="ml-4 space-y-1">
                                    <button
                                        onClick={() => handleNavClick('about', '#about')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Tentang Kami
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('newsroom', '#newsroom')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Newsroom
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('careers', '#careers')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Karier
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('contact', '#contact')}
                                        className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                    >
                                        Hubungi Kami
                                    </button>
                                </div>

                                <div className="px-3 py-2 space-y-2 border-t border-gray-200 mt-4 pt-4">
                                    <button
                                        className="w-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-900 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                        onClick={() => {
                                            handleNavigation('/demo');
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        Request Demo
                                    </button>
                                    <button
                                        className="w-full bg-primary-800 hover:bg-primary-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                        onClick={() => {
                                            handleNavigation('/free-trial');
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            {/* Main Content */}
            <main className="flex-1 w-full">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-800/50 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-700/20 via-transparent to-transparent"></div>

                {/* Main Footer Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-100 rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="text-primary-800 font-bold">S</span>
                                </div>
                                <span className="text-xl font-semibold text-white">snapint</span>
                            </div>
                            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
                                Transformasi setiap dokumen menjadi data terstruktur yang bersih dengan
                                platform Pemrosesan Dokumen Cerdas berbasis AI kami.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center space-x-2 text-gray-200">
                                    <FaEnvelope className="w-4 h-4" />
                                    <a href="mailto:sales@snapint.ai" className="hover:text-white transition-colors duration-200">
                                        sales@snapint.ai
                                    </a>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-200">
                                    <FaPhone className="w-4 h-4" />
                                    <a href="tel:+6289739230000" className="hover:text-white transition-colors duration-200">
                                        +62 897 392 3000
                                    </a>
                                </div>
                                <div className="flex items-start space-x-2 text-gray-200">
                                    <FaMapMarkerAlt className="w-4 h-4 mt-1" />
                                    <span>Cideng, Jakarta Pusat<br />Indonesia</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4 mt-6">
                                <button className="text-gray-200 hover:text-white p-2 hover:bg-primary-700/30 rounded-lg transition-all duration-200 transform hover:scale-110">
                                    <FaTwitter className="w-4 h-4" />
                                </button>
                                <button className="text-gray-200 hover:text-white p-2 hover:bg-primary-700/30 rounded-lg transition-all duration-200 transform hover:scale-110">
                                    <FaLinkedin className="w-4 h-4" />
                                </button>
                                <button className="text-gray-200 hover:text-white p-2 hover:bg-primary-700/30 rounded-lg transition-all duration-200 transform hover:scale-110">
                                    <FaGithub className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {/* Platform */}
                            <div>
                                <h4 className="font-semibold mb-4">Platform</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#ai-processing" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Pemrosesan Dokumen AI
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#json-output" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Output API JSON
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#no-template" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Ekstraksi Tanpa Template
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#deployment" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Opsi Implementasi
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Solutions */}
                            <div>
                                <h4 className="font-semibold mb-4">Solusi</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#customer-onboarding" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Customer Onboarding
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#accounts-payable" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Accounts Payable
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#purchase-orders" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Purchase Order Processing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#banking" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Solusi per Industri
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h4 className="font-semibold mb-4">Sumber Daya</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#blog" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#case-studies" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Studi Kasus
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#whitepapers" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Whitepaper
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#webinars" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Webinar
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <h4 className="font-semibold mb-4">Perusahaan</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#about" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Tentang Kami
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#careers" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Karier
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#newsroom" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Newsroom
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#partners" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Mitra
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact" className="text-sm text-slate-300 hover:text-white transition-colors duration-200">
                                            Hubungi Kami
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="mt-12 pt-8 border-t border-slate-700">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                            <div>
                                <h4 className="font-semibold mb-2">Tetap Update</h4>
                                <p className="text-sm text-slate-300">
                                    Dapatkan insights terbaru tentang AI document processing dan automasi bisnis.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                <input
                                    type="email"
                                    placeholder="Masukkan email Anda"
                                    className="px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 text-sm min-w-64"
                                />
                                <button className="px-6 py-2 rounded-lg bg-white text-slate-800 hover:bg-slate-100 text-sm font-medium flex items-center transition-colors">
                                    <FaPaperPlane className="w-4 h-4 mr-2" />
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-slate-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
                            {/* Compliance Badges */}
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center space-x-2 text-xs text-slate-300">
                                    <FaShieldAlt className="w-4 h-4" />
                                    <span>ISO 27001</span>
                                </div>
                                <div className="flex items-center space-x-2 text-xs text-slate-300">
                                    <FaGlobe className="w-4 h-4" />
                                    <span>GDPR Compliant</span>
                                </div>
                                <div className="flex items-center space-x-2 text-xs text-slate-300">
                                    <FaFileAlt className="w-4 h-4" />
                                    <span>SOC 2 Type II</span>
                                </div>
                                <div className="flex items-center space-x-2 text-xs text-slate-300">
                                    <FaBuilding className="w-4 h-4" />
                                    <span>Data Lokalisasi</span>
                                </div>
                            </div>

                            {/* Legal Links */}
                            <div className="flex flex-wrap items-center space-x-6 text-xs text-slate-300">
                                <a href="#" className="hover:text-white transition-colors">
                                    Kebijakan Privasi
                                </a>
                                <a href="#" className="hover:text-white transition-colors">
                                    Syarat & Ketentuan
                                </a>
                                <a href="#" className="hover:text-white transition-colors">
                                    Kebijakan Cookie
                                </a>
                                <span>© 2024 snapint. Hak cipta dilindungi.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}
