import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaWhatsapp, FaBars, FaTimes, FaChevronDown, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaShieldAlt, FaGlobe, FaFileAlt, FaBuilding, FaPaperPlane } from "react-icons/fa";

export default function Template() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileOpen, setMobileOpen] = useState({
        platform: false,
        solusi: false,
        pelanggan: false,
        mitra: false,
        sumberDaya: false,
        perusahaan: false,
    });

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

    const toggleDropdown = (name) => {
        setActiveDropdown((prev) => (prev === name ? null : name));
    };

    const toggleMobile = (key) => {
        setMobileOpen((prev) => ({ ...prev, [key]: !prev[key] }));
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
                                <img
                                    src="/images/SnapInt.png"
                                    alt="SnapInt Logo"
                                    className="h-6 object-contain group-hover:opacity-90 transition-opacity duration-200"
                                />
                            </div>
                        </div>

                        {/* Desktop Navigation (centered via grid) */}
                        <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-5 whitespace-nowrap justify-self-center">
                            <button
                                onClick={() => handleNavClick('#')}
                                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 py-1.5 px-2.5 rounded-lg hover:bg-gray-50 font-medium text-sm focus:outline-none"
                                type="button"
                            >
                                <span>Home</span>
                            </button>
                            <button
                                onClick={() => handleNavClick('about')}
                                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 py-1.5 px-2.5 rounded-lg hover:bg-gray-50 font-medium text-sm focus:outline-none"
                                type="button"
                            >
                                <span>About</span>
                            </button>
                            {/* Solusi */}
                            <div
                                className="relative"
                                onMouseEnter={() => setActiveDropdown('Solusi')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    onClick={() => toggleDropdown('Solusi')}
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 py-1.5 px-2.5 rounded-lg hover:bg-gray-50 font-medium text-sm focus:outline-none"
                                    type="button"
                                >
                                    <span>Solusi</span>
                                    <FaChevronDown
                                        className={`text-xs transition-transform duration-200 ${activeDropdown === 'Solusi' ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {/* Solusi Dropdown */}
                                {activeDropdown === 'Solusi' && (
                                    <div className="absolute top-full left-0 mt-0 w-fit whitespace-nowrap bg-white rounded-xl shadow-xl ring-1 ring-black/5 p-2 z-50 overflow-hidden animate-in fade-in-0 zoom-in-95">
                                        <button
                                            onClick={() => handleNavClick('solusi/finance')}
                                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-md focus:outline-none"
                                        >
                                            Finance
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('solusi/human-resource')}
                                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-md focus:outline-none"
                                        >
                                            Human Resource
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('solusi/logistic')}
                                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-md focus:outline-none"
                                        >
                                            Logistic
                                        </button>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => handleNavClick('blog')}
                                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 py-1.5 px-2.5 rounded-lg hover:bg-gray-50 font-medium text-sm focus:outline-none"
                                type="button"
                            >
                                <span>Blog</span>
                            </button>
                            <button
                                onClick={() => handleNavClick('case-studies')}
                                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1 py-1.5 px-2.5 rounded-lg hover:bg-gray-50 font-medium text-sm focus:outline-none"
                                type="button"
                            >
                                <span>Study Case</span>
                            </button>
                        </nav>

                        {/* Language Selector & CTA Buttons */}
                        <div className="hidden md:flex items-center space-x-2 justify-self-end whitespace-nowrap">
                            <button
                                onClick={() => handleNavigation('/demo')}
                                className="bg-[#023FC8] hover:bg-[#00309B]/90 text-white px-5 h-10 rounded-2xl text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap focus:outline-none"
                            >
                                Request Demo
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center space-x-2 justify-self-end col-start-3 row-start-1">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="hover:bg-gray-50 text-gray-600 p-2 rounded-lg focus:outline-none"
                            >
                                {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {/* Solusi Mobile */}
                                <button
                                    onClick={() => toggleMobile('solusi')}
                                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium focus:outline-none"
                                >
                                    Solusi
                                </button>
                                {mobileOpen.solusi && (
                                    <div className="ml-4 space-y-1">
                                        <button
                                            onClick={() => handleNavClick('solusi/finance', '#finance')}
                                            className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                        >
                                            Finance
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('solusi/human-resource', '#human-resource')}
                                            className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                        >
                                            Human Resource
                                        </button>
                                        <button
                                            onClick={() => handleNavClick('solusi/logistic', '#logistic')}
                                            className="block w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                        >
                                            Logistic
                                        </button>
                                    </div>
                                )}

                                {/* Pelanggan Mobile */}
                                <button
                                    onClick={() => toggleMobile('pelanggan')}
                                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium focus:outline-none"
                                >
                                    Pelanggan
                                </button>
                                {mobileOpen.pelanggan && (
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
                                )}

                                {/* Mitra Mobile */}
                                <button
                                    onClick={() => toggleMobile('mitra')}
                                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium focus:outline-none"
                                >
                                    Mitra
                                </button>
                                {mobileOpen.mitra && (
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
                                )}

                                {/* Sumber Daya Mobile */}
                                <button
                                    onClick={() => toggleMobile('sumberDaya')}
                                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium focus:outline-none"
                                >
                                    Sumber Daya
                                </button>
                                {mobileOpen.sumberDaya && (
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
                                )}

                                {/* Perusahaan Mobile */}
                                <button
                                    onClick={() => toggleMobile('perusahaan')}
                                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium focus:outline-none"
                                >
                                    Perusahaan
                                </button>
                                {mobileOpen.perusahaan && (
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
                                )}

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
            <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden group font-inter">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-800/50 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-700/20 via-transparent to-transparent"></div>

                {/* Main Footer Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            {/* Logo */}
                            <div className="flex-shrink-0 space-y-4 mb-2">
                                <div
                                    className="flex items-center space-x-2 group cursor-pointer"
                                    onClick={handleLogoClick}
                                >
                                    <img
                                        src="/images/SnapInt.png"
                                        alt="SnapInt Logo"
                                        className="h-6 object-contain filter brightness-0 invert"
                                    />
                                </div>
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
                            <div className="flex space-x-3 mt-6">
                                <button aria-label="Twitter" className="text-gray-200 hover:text-white p-2 ring-1 ring-white/10 hover:ring-white/20 rounded-lg transition-all duration-200">
                                    <FaTwitter className="w-4 h-4" />
                                </button>
                                <button aria-label="LinkedIn" className="text-gray-200 hover:text-white p-2 ring-1 ring-white/10 hover:ring-white/20 rounded-lg transition-all duration-200">
                                    <FaLinkedin className="w-4 h-4" />
                                </button>
                                <button aria-label="GitHub" className="text-gray-200 hover:text-white p-2 ring-1 ring-white/10 hover:ring-white/20 rounded-lg transition-all duration-200">
                                    <FaGithub className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Footer Links aligned with Header */}
                        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-40 justify-self-end max-w-2xl">
                            {/* Navigation (matches header top-level) */}
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-normal text-slate-100 mb-3">Navigasi</h4>
                                <ul className="space-y-2.5">
                                    <li>
                                        <a href="/" className="text-sm text-slate-300 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-flex items-center">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about" className="text-sm text-slate-300 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-flex items-center">About</a>
                                    </li>
                                    <li>
                                        <a href="/blog" className="text-sm text-slate-300 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-flex items-center">Blog</a>
                                    </li>
                                    <li>
                                        <a href="/case-studies" className="text-sm text-slate-300 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-flex items-center">Study Case</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Solusi (same as header dropdown) */}
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-normal text-slate-100 mb-3">Solusi</h4>
                                <ul className="space-y-2.5">
                                    <li>
                                        <a href="/solusi/finance" className="text-sm text-slate-300 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-flex items-center">Finance</a>
                                    </li>
                                    <li>
                                        <a href="/solusi/human-resource" className="text-sm text-slate-300 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-flex items-center">Human Resource</a>
                                    </li>
                                    <li>
                                        <a href="/solusi/logistic" className="text-sm text-slate-300 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-flex items-center">Logistic</a>
                                    </li>
                                </ul>
                            </div>

                            {/* CTA */}
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-normal text-slate-100 mb-3">Aksi</h4>
                                <ul className="space-y-2.5">
                                    <li>
                                        <a href="/demo" className="text-sm text-slate-300 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-flex items-center">Request Demo</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="mt-12 pt-8 border-t border-slate-700/80">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                            <div>
                                <h4 className="font-semibold mb-2">Tetap Update</h4>
                                <p className="text-sm text-slate-300">
                                    Dapatkan insights terbaru tentang AI document processing dan automasi bisnis.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                                <input
                                    type="email"
                                    placeholder="Masukkan email Anda"
                                    className="px-4 py-2 rounded-lg bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm min-w-64 focus:outline-none focus:ring-2 focus:ring-white/20"
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
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
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
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-300">
                                <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
                                <span className="opacity-30">•</span>
                                <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
                                <span className="opacity-30">•</span>
                                <a href="#" className="hover:text-white transition-colors">Kebijakan Cookie</a>
                                <span className="opacity-30 hidden lg:inline">•</span>
                                <span>© 2024 snapint. Hak cipta dilindungi.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}
