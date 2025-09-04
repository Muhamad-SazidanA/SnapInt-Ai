import React, { useState } from "react";
import {
    Brain,
    ArrowRight,
    CheckCircle,
    Eye,
    Layers,
    Database,
    TrendingUp,
    Code,
} from "lucide-react";

export default function AIProcessingPage() {
    const [integrationTab, setIntegrationTab] = useState("api"); // 'api' | 'webhooks' | 'sdks'
    const handleNav = (url) => {
        window.location.href = url;
    };

    return (
        <div className="bg-gray-50 ">
            {/* Hero */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center mb-6 px-4 py-2 text-sm bg-blue-50 text-gray-700 rounded-lg">
                            <Brain className="w-4 h-4 mr-2 text-primary-800" />
                            <span className="font-semibold">AI Document Processing</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Pemrosesan Dokumen AI Tanpa Template
                        </h1>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                            Teknologi AI yang memahami dan memproses dokumen apapun tanpa setup manual.
                            Dari invoice kompleks hingga formulir tulisan tangan, sistem mengekstrak data
                            akurat dalam hitungan detik.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="px-8 py-3 rounded-lg bg-[#133E68] text-white flex items-center justify-center hover:bg-[#0F3053] transition-colors"
                                onClick={() => handleNav("/demo")}
                            >
                                Coba Demo Interaktif
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                            <button
                                className="px-8 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-white"
                                onClick={() => handleNav("/technical-specs")}
                            >
                                Download Technical Specs
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities (static, no loops) */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Core Capabilities</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Kemampuan AI processing untuk semua kebutuhan document extraction
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Document Understanding */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-primary-800">
                                    <Eye className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Document Understanding</h3>
                                    <p className="text-gray-600 mb-4">Kemampuan memahami konteks dan struktur dokumen secara mendalam</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Layout analysis untuk semua jenis dokumen
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Context-aware field extraction
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Relationship detection antar data fields
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Semantic understanding dokumen bisnis
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Multi-Modal Processing */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-primary-800">
                                    <Layers className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Multi-Modal Processing</h3>
                                    <p className="text-gray-600 mb-4">Pemrosesan berbagai format dan jenis dokumen dalam satu workflow</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            PDF, DOCX, Excel, PPT, dan 50+ format lainnya
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Gambar scan dengan resolusi tinggi dan rendah
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Dokumen tulisan tangan dan semi-terstruktur
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Video frames dan multimedia documents
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Adaptive Learning */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-primary-800">
                                    <Brain className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Adaptive Learning</h3>
                                    <p className="text-gray-600 mb-4">Model AI yang terus belajar dan mengoptimalkan performa</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Continuous learning dari feedback user
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Domain-specific model fine-tuning
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Error pattern recognition dan correction
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Performance optimization otomatis
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Enterprise Integration */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-primary-800">
                                    <Database className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Enterprise Integration</h3>
                                    <p className="text-gray-600 mb-4">Integrasi seamless dengan sistem enterprise existing</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            RESTful API dengan comprehensive documentation
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Webhook support untuk real-time notifications
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            Batch processing untuk volume tinggi
                                        </li>
                                        <li className="flex items-start text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />
                                            SDK untuk Python, Java, .NET, dan Node.js
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications (static) */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Technical Specifications</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Spesifikasi teknis untuk enterprise planning</p>
                    </div>

                    <div className="space-y-8">
                        {/* Performance Metrics */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Performance Metrics</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-800 mb-2">99.8%</div>
                                    <div className="font-semibold mb-1 text-gray-900">Accuracy Rate</div>
                                    <div className="text-sm text-gray-600">Pada dokumen terstruktur dan semi-terstruktur</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-800 mb-2">&lt; 30 detik</div>
                                    <div className="font-semibold mb-1 text-gray-900">Processing Speed</div>
                                    <div className="text-sm text-gray-600">Rata-rata untuk dokumen 10 halaman</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-800 mb-2">10,000 docs/jam</div>
                                    <div className="font-semibold mb-1 text-gray-900">Throughput</div>
                                    <div className="text-sm text-gray-600">Peak processing capacity per instance</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-800 mb-2">99.9%</div>
                                    <div className="font-semibold mb-1 text-gray-900">Uptime SLA</div>
                                    <div className="text-sm text-gray-600">Guaranteed availability 24/7</div>
                                </div>
                            </div>
                        </div>

                        {/* Supported Formats */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Supported Formats</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-800 mb-2">100+</div>
                                    <div className="font-semibold mb-1 text-gray-900">Document Types</div>
                                    <div className="text-sm text-gray-600">PDF, DOCX, XLS, PPT, TXT, RTF, dan lainnya</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-800 mb-2">15+</div>
                                    <div className="font-semibold mb-1 text-gray-900">Image Formats</div>
                                    <div className="text-sm text-gray-600">JPEG, PNG, TIFF, BMP, WebP, HEIC</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-800 mb-2">40+</div>
                                    <div className="font-semibold mb-1 text-gray-900">Languages</div>
                                    <div className="text-sm text-gray-600">Termasuk Bahasa Indonesia</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-800 mb-2">300-4800 DPI</div>
                                    <div className="font-semibold mb-1 text-gray-900">OCR Quality</div>
                                    <div className="text-sm text-gray-600">Optimized untuk berbagai kualitas scan</div>
                                </div>
                            </div>
                        </div>

                        {/* Security & Compliance */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Security & Compliance</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-800 mb-2">AES-256</div>
                                    <div className="font-semibold mb-1 text-gray-900">Data Encryption</div>
                                    <div className="text-sm text-gray-600">End-to-end encryption</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-800 mb-2">ISO 27001</div>
                                    <div className="font-semibold mb-1 text-gray-900">Compliance</div>
                                    <div className="text-sm text-gray-600">ISO 27001, GDPR</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-800 mb-2">Configurable</div>
                                    <div className="font-semibold mb-1 text-gray-900">Data Residency</div>
                                    <div className="text-sm text-gray-600">Regional storage options</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-800 mb-2">RBAC + MFA</div>
                                    <div className="font-semibold mb-1 text-gray-900">Access Control</div>
                                    <div className="text-sm text-gray-600">Role-based access, MFA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Case Examples (static) */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Real-World Use Cases</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Implementasi nyata di berbagai industri</p>
                    </div>

                    <div className="space-y-8">
                        {/* Financial Services */}
                        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                                <div className="lg:col-span-2 space-y-4">
                                    <span className="inline-block text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">Financial Services</span>
                                    <h3 className="text-xl font-semibold text-gray-900">Loan Application Processing</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold text-red-600 mb-1">Challenge:</h4>
                                            <p className="text-gray-600">Manual review 2-3 hari per aplikasi dengan error rate 12%</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-primary-800 mb-1">Solution:</h4>
                                            <p className="text-gray-600">Otomatisasi ekstraksi data dari slip gaji, rekening koran, dan dokumen pendukung</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-1 bg-gradient-to-br from-green-50 to-primary-50 rounded-2xl p-6">
                                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                                        <TrendingUp className="w-5 h-5 mr-2" />
                                        Results Achieved
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Processing time: 3 hari → 2 jam</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Error rate: 12% → 0.8%</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Cost per application: Rp 450K → Rp 67K</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Customer satisfaction: +67%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Healthcare */}
                        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                                <div className="lg:col-span-2 space-y-4">
                                    <span className="inline-block text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">Healthcare</span>
                                    <h3 className="text-xl font-semibold text-gray-900">Medical Records Digitization</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold text-red-600 mb-1">Challenge:</h4>
                                            <p className="text-gray-600">Paper-based records di 45 klinik dengan pencarian manual</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-primary-800 mb-1">Solution:</h4>
                                            <p className="text-gray-600">Digitalisasi dan ekstraksi data dari lab results, prescription, patient forms</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-1 bg-gradient-to-br from-green-50 to-primary-50 rounded-2xl p-6">
                                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                                        <TrendingUp className="w-5 h-5 mr-2" />
                                        Results Achieved
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Records digitized: 2.3M dokumen</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Search time: 15 menit → 3 detik</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Storage cost: -75%</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Compliance score: 98%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Manufacturing */}
                        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                                <div className="lg:col-span-2 space-y-4">
                                    <span className="inline-block text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">Manufacturing</span>
                                    <h3 className="text-xl font-semibold text-gray-900">Quality Control Documentation</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold text-red-600 mb-1">Challenge:</h4>
                                            <p className="text-gray-600">Manual input quality reports dari 25 production lines</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-primary-800 mb-1">Solution:</h4>
                                            <p className="text-gray-600">Automated extraction dari QC forms, inspection reports, certificates</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-1 bg-gradient-to-br from-green-50 to-primary-50 rounded-2xl p-6">
                                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                                        <TrendingUp className="w-5 h-5 mr-2" />
                                        Results Achieved
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Data entry time: -89%</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Quality incidents: -43%</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Compliance reporting: Automated</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Audit preparation: 2 weeks → 1 day</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Options with Tabs */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Integration Options</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Metode integrasi fleksibel</p>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8">
                        <div className="w-full max-w-4xl mx-auto">
                            <div
                                className="grid grid-cols-3 gap-0 rounded-full p-1.5 md:p-2 border shadow-inner"
                                role="tablist"
                                aria-label="Integration Options"
                                style={{
                                    backgroundColor: '#EEF5FB',
                                    borderColor: '#E6F0FA'
                                }}
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={integrationTab === 'api'}
                                    onClick={() => setIntegrationTab('api')}
                                    className={`w-full h-11 md:h-12 px-4 md:px-6 rounded-full text-sm md:text-base font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${integrationTab === 'api'
                                        ? 'bg-white text-primary-800 shadow-sm border border-primary-200'
                                        : 'text-gray-600 hover:text-primary-800'
                                        }`}
                                >
                                    RESTful API
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={integrationTab === 'webhooks'}
                                    onClick={() => setIntegrationTab('webhooks')}
                                    className={`w-full h-11 md:h-12 px-4 md:px-6 rounded-full text-sm md:text-base font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${integrationTab === 'webhooks'
                                        ? 'bg-white text-primary-800 shadow-sm border border-primary-200'
                                        : 'text-gray-600 hover:text-primary-800'
                                        }`}
                                >
                                    Webhooks
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={integrationTab === 'sdks'}
                                    onClick={() => setIntegrationTab('sdks')}
                                    className={`w-full h-11 md:h-12 px-4 md:px-6 rounded-full text-sm md:text-base font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${integrationTab === 'sdks'
                                        ? 'bg-white text-primary-800 shadow-sm border border-primary-200'
                                        : 'text-gray-600 hover:text-primary-800'
                                        }`}
                                >
                                    SDKs
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Tab Panels */}
                    {integrationTab === 'api' && (
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                                {/* Left: Text + Features */}
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">RESTful API</h3>
                                    <p className="text-lg text-gray-600 mb-6">Standard HTTP API untuk easy integration</p>
                                    <h4 className="font-semibold mb-3">Key Features:</h4>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />OpenAPI 3.0 specification</li>
                                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Rate limiting dan throttling</li>
                                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Comprehensive error handling</li>
                                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Real-time status updates</li>
                                    </ul>
                                    <button
                                        className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-800 text-white font-semibold hover:bg-primary-900 transition-colors"
                                        onClick={() => handleNav('/docs/api')}
                                    >
                                        View API Docs
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Right: Code Block */}
                                <div className="bg-[#0F172A] rounded-2xl p-6 lg:p-8 text-sm h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-300 text-sm">Sample Code</span>
                                        <Code className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <pre className="text-green-400 text-sm leading-relaxed overflow-x-auto flex-1"><code>{`POST /api/v1/documents/process
{
  "document_url": "https://...",
  "extraction_type": "structured",
  "callback_url": "https://..."
}`}</code></pre>
                                </div>
                            </div>
                        </div>
                    )}

                    {integrationTab === 'webhooks' && (
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                                {/* Left: Text + Features */}
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">Webhook Integration</h3>
                                    <p className="text-lg text-gray-600 mb-6">Real-time notifications untuk asynchronous processing</p>
                                    <h4 className="font-semibold mb-3">Key Features:</h4>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Configurable event triggers</li>
                                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Retry mechanism untuk failed deliveries</li>
                                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Secure payload signing</li>
                                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Custom headers support</li>
                                    </ul>
                                    <button
                                        className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-800 text-white font-semibold hover:bg-primary-900 transition-colors"
                                        onClick={() => handleNav('/docs/webhooks')}
                                    >
                                        View Webhook Guide
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Right: Code Block */}
                                <div className="bg-[#0F172A] rounded-2xl p-6 lg:p-8 text-sm h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-300 text-sm">Sample Payload</span>
                                        <Code className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <pre className="text-green-400 text-sm leading-relaxed overflow-x-auto flex-1"><code>{`{
  "event": "document.processed",
  "document_id": "doc_12345",
  "status": "completed",
  "extracted_data": {...}
}`}</code></pre>
                                </div>
                            </div>
                        </div>
                    )}

                    {integrationTab === 'sdks' && (
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                                {/* Left: Text + Features */}
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">SDK Integration</h3>
                                    <p className="text-lg text-gray-600 mb-6">Native libraries untuk popular programming languages</p>
                                    <h4 className="font-semibold mb-3">Key Features:</h4>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Python, Java, .NET, Node.js SDKs</li>
                                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Built-in retry dan error handling</li>
                                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Type-safe interfaces</li>
                                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Comprehensive examples</li>
                                    </ul>
                                    <button
                                        className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-800 text-white font-semibold hover:bg-primary-900 transition-colors"
                                        onClick={() => handleNav('/docs/sdks')}
                                    >
                                        View Documentation
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Right: Code Block */}
                                <div className="bg-[#0F172A] rounded-2xl p-6 lg:p-8 text-sm h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-300 text-sm">Sample Code</span>
                                        <Code className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <pre className="text-green-400 text-sm leading-relaxed overflow-x-auto flex-1"><code>{`from snapint import DocumentProcessor

processor = DocumentProcessor(api_key="...")
result = processor.process_document(
    file_path="./invoice.pdf",
    extraction_type="invoice"
)`}</code></pre>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Ready to Experience AI Document Processing?</h2>
                    <p className="text-lg mb-10 text-gray-700">
                        Lihat bagaimana teknologi AI kami mentransformasi workflow pemrosesan dokumen Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="px-10 py-3 bg-white text-primary-800 border-2 border-primary-800 hover:bg-primary-50 rounded-lg font-semibold"
                            onClick={() => handleNav("/free-trial")}
                        >
                            Start Free Trial
                        </button>
                        <button
                            className="px-10 py-3 bg-primary-800 hover:bg-primary-900 text-white rounded-lg font-semibold"
                            onClick={() => handleNav("/demo")}
                        >
                            Schedule Technical Demo
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
