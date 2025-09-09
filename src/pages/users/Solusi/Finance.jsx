import React, { useState } from 'react';
import {
    Users,
    ArrowRight,
    Clock,
    Target,
    Shield,
    CheckCircle,
    XCircle,
    AlertTriangle,
    Building2,
    CreditCard
} from 'lucide-react';

// Full Finance (Customer Onboarding) page with all sections, only ROI Calculator buttons removed
export default function Finance() {
    const [activeDocTab, setActiveDocTab] = useState('identity'); // identity | financial | business
    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-blue-100 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center mb-6 px-4 py-2 text-sm bg-blue-50 text-gray-700 rounded-lg">
                            <Users className="w-4 h-4 mr-2 text-[#133E68]" />
                            <span className="font-semibold">Customer Onboarding Solutions</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Customer Onboarding yang Instant & Compliant
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                            Transformasi complete customer onboarding experience dengan AI-powered document processing.
                            Dari KYC verification hingga income assessment, semua automated dengan akurasi tinggi dan
                            compliance yang terjamin.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#133E68] text-white font-semibold inline-flex items-center justify-center shadow-md hover:bg-[#0f3355] hover:shadow-lg transition-all">
                                Demo Interactive
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                            {/* ROI Calculator button removed */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Onboarding Challenges */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Onboarding Challenges Solved</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Address critical pain points dalam customer onboarding dengan AI automation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="hover:shadow-xl transition-all duration-300 p-8 bg-white rounded-2xl border border-gray-200">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-50 ring-1 ring-red-100 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold mb-2">Manual Document Review</h3>
                                    <p className="text-red-600 text-sm mb-3 flex items-center"><XCircle className="w-4 h-4 mr-2" />Review manual 2-5 hari per customer</p>
                                    <p className="text-green-600 text-sm flex items-center"><CheckCircle className="w-4 h-4 mr-2" />Automated document extraction dan validation dalam 30 detik</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="hover:shadow-xl transition-all duration-300 p-8 bg-white rounded-2xl border border-gray-200">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-50 ring-1 ring-red-100 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold mb-2">High Error Rates</h3>
                                    <p className="text-red-600 text-sm mb-3 flex items-center"><XCircle className="w-4 h-4 mr-2" />15-25% error rate dari manual data entry</p>
                                    <p className="text-green-600 text-sm flex items-center"><CheckCircle className="w-4 h-4 mr-2" />99.8% accuracy rate dengan AI-powered extraction</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="hover:shadow-xl transition-all duration-300 p-8 bg-white rounded-2xl border border-gray-200">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-50 ring-1 ring-red-100 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold mb-2">Compliance Risk</h3>
                                    <p className="text-red-600 text-sm mb-3 flex items-center"><XCircle className="w-4 h-4 mr-2" />Risk compliance failure dan regulatory fines</p>
                                    <p className="text-green-600 text-sm flex items-center"><CheckCircle className="w-4 h-4 mr-2" />Built-in KYC/AML compliance checks dan audit trails</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="hover:shadow-xl transition-all duration-300 p-8 bg-white rounded-2xl border border-gray-200">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-50 ring-1 ring-red-100 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold mb-2">Poor Customer Experience</h3>
                                    <p className="text-red-600 text-sm mb-3 flex items-center"><XCircle className="w-4 h-4 mr-2" />Customer abandonment rate 30-40%</p>
                                    <p className="text-green-600 text-sm flex items-center"><CheckCircle className="w-4 h-4 mr-2" />Real-time processing dengan instant feedback</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supported Documents with Active Tabs */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Supported Document Types</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive support untuk semua document types yang dibutuhkan dalam onboarding
                        </p>
                    </div>
                    {/* Tabs Switcher */}
                    <div className="max-w-4xl mx-auto mb-10">
                        <div className="w-full bg-blue-50 rounded-2xl p-1 ring-1 ring-blue-100 shadow-inner">
                            <div className="grid grid-cols-3 gap-1">
                                <button
                                    type="button"
                                    onClick={() => setActiveDocTab('identity')}
                                    className={`${activeDocTab === 'identity' ? 'bg-white text-gray-900 shadow-sm' : 'text-slate-600 hover:text-gray-900'} h-12 rounded-xl font-semibold transition-all`}
                                >
                                    Identity Documents
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveDocTab('financial')}
                                    className={`${activeDocTab === 'financial' ? 'bg-white text-gray-900 shadow-sm' : 'text-slate-600 hover:text-gray-900'} h-12 rounded-xl font-semibold transition-all`}
                                >
                                    Financial Documents
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveDocTab('business')}
                                    className={`${activeDocTab === 'business' ? 'bg-white text-gray-900 shadow-sm' : 'text-slate-600 hover:text-gray-900'} h-12 rounded-xl font-semibold transition-all`}
                                >
                                    Business Documents
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tab Content */}
                    {activeDocTab === 'identity' && (
                        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-10">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold mb-2">Identity Documents</h3>
                                <p className="text-gray-600">Dokumen identitas nasional dan internasional</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* KTP */}
                                <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold">KTP Indonesia</h4>
                                        <span className="text-green-600 text-xs px-2 py-1 rounded-full border border-green-200">99.8%</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3"><strong>Extracted Fields:</strong> NIK, Name, Address, Birth Date, etc.</p>
                                    <div className="flex items-center text-xs text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Production Ready</div>
                                </div>
                                {/* Passport */}
                                <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold">Passport</h4>
                                        <span className="text-green-600 text-xs px-2 py-1 rounded-full border border-green-200">99.5%</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3"><strong>Extracted Fields:</strong> Passport Number, Name, Nationality, etc.</p>
                                    <div className="flex items-center text-xs text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Production Ready</div>
                                </div>
                                {/* SIM */}
                                <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold">SIM/Driver License</h4>
                                        <span className="text-green-600 text-xs px-2 py-1 rounded-full border border-green-200">99.2%</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3"><strong>Extracted Fields:</strong> License Number, Name, Address, etc.</p>
                                    <div className="flex items-center text-xs text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Production Ready</div>
                                </div>
                                {/* NPWP */}
                                <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold">NPWP</h4>
                                        <span className="text-green-600 text-xs px-2 py-1 rounded-full border border-green-200">99.9%</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3"><strong>Extracted Fields:</strong> Tax ID, Name, Address</p>
                                    <div className="flex items-center text-xs text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Production Ready</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeDocTab === 'financial' && (
                        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-10">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold mb-2">Financial Documents</h3>
                                <p className="text-gray-600">Dokumen finansial untuk income verification</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold">Bank Statements</h4>
                                        <span className="text-green-600 text-xs px-2 py-1 rounded-full border border-green-200">98.9%</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3"><strong>Extracted Fields:</strong> Account Number, Balance, Transactions</p>
                                    <div className="flex items-center text-xs text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Production Ready</div>
                                </div>
                                <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold">Payslips</h4>
                                        <span className="text-green-600 text-xs px-2 py-1 rounded-full border border-green-200">99.1%</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3"><strong>Extracted Fields:</strong> Salary, Employer, Tax Deductions</p>
                                    <div className="flex items-center text-xs text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Production Ready</div>
                                </div>
                                <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold">Tax Returns</h4>
                                        <span className="text-green-600 text-xs px-2 py-1 rounded-full border border-green-200">98.7%</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3"><strong>Extracted Fields:</strong> Income, Tax Paid, Employer Info</p>
                                    <div className="flex items-center text-xs text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Production Ready</div>
                                </div>
                                <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold">Credit Reports</h4>
                                        <span className="text-green-600 text-xs px-2 py-1 rounded-full border border-green-200">99.3%</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3"><strong>Extracted Fields:</strong> Credit Score, History, Accounts</p>
                                    <div className="flex items-center text-xs text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Production Ready</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeDocTab === 'business' && (
                        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-10">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold mb-2">Business Documents</h3>
                                <p className="text-gray-600">Dokumen untuk business customer onboarding</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold">Company Registration</h4>
                                        <span className="text-green-600 text-xs px-2 py-1 rounded-full border border-green-200">99.4%</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3"><strong>Extracted Fields:</strong> Company Name, Registration Number, Directors</p>
                                    <div className="flex items-center text-xs text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Production Ready</div>
                                </div>
                                <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold">Business License</h4>
                                        <span className="text-green-600 text-xs px-2 py-1 rounded-full border border-green-200">98.8%</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3"><strong>Extracted Fields:</strong> License Number, Business Type, Validity</p>
                                    <div className="flex items-center text-xs text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Production Ready</div>
                                </div>
                                <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold">Financial Statements</h4>
                                        <span className="text-green-600 text-xs px-2 py-1 rounded-full border border-green-200">98.6%</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3"><strong>Extracted Fields:</strong> Revenue, Assets, Liabilities</p>
                                    <div className="flex items-center text-xs text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Production Ready</div>
                                </div>
                                <div className="bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold">Articles of Association</h4>
                                        <span className="text-green-600 text-xs px-2 py-1 rounded-full border border-green-200">97.9%</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3"><strong>Extracted Fields:</strong> Shareholders, Capital, Purpose</p>
                                    <div className="flex items-center text-xs text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> Production Ready</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Industry Use Cases */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Tailored onboarding solutions untuk different industries dengan specific requirements
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Banking & Financial Services */}
                        <div className="border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                                <div className="lg:col-span-1 space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                            <Building2 className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">Banking & Financial Services</h3>
                                            <p className="text-sm text-gray-600">Complete digital onboarding untuk retail dan corporate banking</p>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                                        <h4 className="font-semibold mb-4 text-green-700">Achieved Results:</h4>
                                        <div className="grid grid-cols-2 gap-4 text-center">
                                            <div>
                                                <div className="text-2xl font-bold text-green-600">85%</div>
                                                <div className="text-xs text-gray-500">Time Reduction</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-blue-600">92%</div>
                                                <div className="text-xs text-gray-500">Error Reduction</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-purple-600">Rp 2.8M/customer</div>
                                                <div className="text-xs text-gray-500">Cost Saving</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-orange-600">+67%</div>
                                                <div className="text-xs text-gray-500">Satisfaction</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-semibold mb-4 text-red-600 flex items-center">
                                            <AlertTriangle className="w-4 h-4 mr-2" /> Key Challenges
                                        </h4>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>Manual KYC process memakan waktu 3-7 hari</li>
                                            <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>High abandonment rate di digital channels</li>
                                            <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>Compliance requirements yang complex</li>
                                            <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>Integration dengan core banking systems</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-4 text-green-600 flex items-center">
                                            <CheckCircle className="w-4 h-4 mr-2" /> Our Solutions
                                        </h4>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Automated document verification dalam 30 detik</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Real-time fraud detection dan risk scoring</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Complete audit trail untuk regulatory compliance</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />API integration dengan existing banking infrastructure</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-100 p-6 border-t">
                                <h4 className="font-semibold mb-3">Case Study: Bank Digital Terkemuka</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div><span className="font-medium text-red-600">Challenge:</span><p className="text-gray-600">Processing 1000+ applications per day dengan manual review</p></div>
                                    <div><span className="font-medium text-blue-600">Implementation:</span><p className="text-gray-600">3-month phased rollout dengan snapint integration</p></div>
                                    <div><span className="font-medium text-green-600">Outcome:</span><p className="text-gray-600">Same-day account opening untuk 95% applications</p></div>
                                </div>
                            </div>
                        </div>

                        {/* Insurance */}
                        <div className="border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                                <div className="lg:col-span-1 space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                            <Shield className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">Insurance</h3>
                                            <p className="text-sm text-gray-600">Digital underwriting dan policy issuance automation</p>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                                        <h4 className="font-semibold mb-4 text-green-700">Achieved Results:</h4>
                                        <div className="grid grid-cols-2 gap-4 text-center">
                                            <div>
                                                <div className="text-2xl font-bold text-green-600">78%</div>
                                                <div className="text-xs text-gray-500">Time Reduction</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-blue-600">88%</div>
                                                <div className="text-xs text-gray-500">Error Reduction</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-purple-600">Rp 1.9M/policy</div>
                                                <div className="text-xs text-gray-500">Cost Saving</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-orange-600">+54%</div>
                                                <div className="text-xs text-gray-500">Satisfaction</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-semibold mb-4 text-red-600 flex items-center">
                                            <AlertTriangle className="w-4 h-4 mr-2" /> Key Challenges
                                        </h4>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>Underwriting process 5-14 hari untuk life insurance</li>
                                            <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>Medical records review yang manual dan costly</li>
                                            <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>Risk assessment inconsistency</li>
                                            <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>High operational costs untuk document processing</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-4 text-green-600 flex items-center">
                                            <CheckCircle className="w-4 h-4 mr-2" /> Our Solutions
                                        </h4>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Automated medical records extraction dan analysis</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Risk scoring based on comprehensive document analysis</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Integration dengan underwriting workflows</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Real-time policy quotation dan issuance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-100 p-6 border-t">
                                <h4 className="font-semibold mb-3">Case Study: Asuransi Jiwa Nasional</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div><span className="font-medium text-red-600">Challenge:</span><p className="text-gray-600">Manual medical underwriting untuk 500+ applications monthly</p></div>
                                    <div><span className="font-medium text-blue-600">Implementation:</span><p className="text-gray-600">AI-powered medical document analysis implementation</p></div>
                                    <div><span className="font-medium text-green-600">Outcome:</span><p className="text-gray-600">Instant quotes untuk 70% standard risk applications</p></div>
                                </div>
                            </div>
                        </div>

                        {/* Fintech & Lending */}
                        <div className="border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                                <div className="lg:col-span-1 space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                            <CreditCard className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">Fintech & Lending</h3>
                                            <p className="text-sm text-gray-600">Instant loan approval dengan comprehensive risk assessment</p>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                                        <h4 className="font-semibold mb-4 text-green-700">Achieved Results:</h4>
                                        <div className="grid grid-cols-2 gap-4 text-center">
                                            <div>
                                                <div className="text-2xl font-bold text-green-600">91%</div>
                                                <div className="text-xs text-gray-500">Time Reduction</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-blue-600">89%</div>
                                                <div className="text-xs text-gray-500">Error Reduction</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-purple-600">Rp 450K/application</div>
                                                <div className="text-xs text-gray-500">Cost Saving</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-orange-600">+71%</div>
                                                <div className="text-xs text-gray-500">Satisfaction</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-semibold mb-4 text-red-600 flex items-center">
                                            <AlertTriangle className="w-4 h-4 mr-2" /> Key Challenges
                                        </h4>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>Manual income verification dari multiple sources</li>
                                            <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>Credit decision time 2-5 hari</li>
                                            <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>High default rates dari inadequate screening</li>
                                            <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>Scale limitations dengan manual processes</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-4 text-green-600 flex items-center">
                                            <CheckCircle className="w-4 h-4 mr-2" /> Our Solutions
                                        </h4>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Multi-source income verification automation</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Real-time creditworthiness assessment</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Fraud detection dengan document authenticity checks</li>
                                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Scalable processing untuk high-volume applications</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-100 p-6 border-t">
                                <h4 className="font-semibold mb-3">Case Study: Platform Pinjaman Online</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div><span className="font-medium text-red-600">Challenge:</span><p className="text-gray-600">10,000+ loan applications per month dengan manual verification</p></div>
                                    <div><span className="font-medium text-blue-600">Implementation:</span><p className="text-gray-600">End-to-end automation dengan snapint</p></div>
                                    <div><span className="font-medium text-green-600">Outcome:</span><p className="text-gray-600">Instant approval untuk 80% qualified applications</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Roadmap */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Implementation Roadmap</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Structured approach untuk successful onboarding automation implementation
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="hover:shadow-lg transition-shadow p-8 bg-white border rounded-2xl">
                            <div className="flex items-start space-x-6">
                                <div className="w-16 h-16 bg-[#133E68] rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold">Assessment & Planning</h3>
                                        <span className="px-3 py-1 rounded-full border text-sm">1-2 weeks</span>
                                    </div>
                                    <p className="text-gray-600 mb-6">Analysis current onboarding process dan design solution architecture</p>
                                    <div>
                                        <h4 className="font-semibold mb-3">Key Activities:</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Current state assessment dan pain point identification</div>
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Document types mapping dan extraction requirements</div>
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Integration points identification dengan existing systems</div>
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Compliance requirements review dan validation approach</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="hover:shadow-lg transition-shadow p-8 bg-white border rounded-2xl">
                            <div className="flex items-start space-x-6">
                                <div className="w-16 h-16 bg-[#133E68] rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold">Pilot Implementation</h3>
                                        <span className="px-3 py-1 rounded-full border text-sm">2-3 weeks</span>
                                    </div>
                                    <p className="text-gray-600 mb-6">Limited pilot dengan subset of document types dan use cases</p>
                                    <div>
                                        <h4 className="font-semibold mb-3">Key Activities:</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Development environment setup dan API integration</div>
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Pilot document processing dengan sample data</div>
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Accuracy validation dan model fine-tuning</div>
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />User acceptance testing dengan key stakeholders</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="hover:shadow-lg transition-shadow p-8 bg-white border rounded-2xl">
                            <div className="flex items-start space-x-6">
                                <div className="w-16 h-16 bg-[#133E68] rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold">Full Production Rollout</h3>
                                        <span className="px-3 py-1 rounded-full border text-sm">3-4 weeks</span>
                                    </div>
                                    <p className="text-gray-600 mb-6">Complete production deployment dengan monitoring dan optimization</p>
                                    <div>
                                        <h4 className="font-semibold mb-3">Key Activities:</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Production environment deployment</div>
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Full document type coverage dan workflow integration</div>
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Staff training dan change management</div>
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Performance monitoring dan continuous optimization</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="hover:shadow-lg transition-shadow p-8 bg-white border rounded-2xl">
                            <div className="flex items-start space-x-6">
                                <div className="w-16 h-16 bg-[#133E68] rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-semibold">Optimization &amp; Scaling</h3>
                                        <span className="px-3 py-1 rounded-full border text-sm">Ongoing</span>
                                    </div>
                                    <p className="text-gray-600 mb-6">Continuous improvement dan scaling untuk additional use cases</p>
                                    <div>
                                        <h4 className="font-semibold mb-3">Key Activities:</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Performance analytics dan optimization recommendations</div>
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Additional document types dan use cases expansion</div>
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Integration dengan additional downstream systems</div>
                                            <div className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Advanced features rollout (ML insights, predictive analytics)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-green-600 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Transform Your Customer Onboarding Today</h2>
                    <p className="text-xl mb-10 opacity-90">
                        Bergabung dengan 200+ perusahaan yang telah mengautomasi onboarding process dan meningkatkan customer experience secara significant.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-10 py-4 rounded-lg bg-white text-[#133E68] font-semibold inline-flex items-center justify-center shadow-md hover:bg-slate-100 transition-all">
                            Schedule Demo
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                        {/* Bottom Calculate ROI button removed */}
                    </div>
                </div>
            </section>
        </div>
    );
}
