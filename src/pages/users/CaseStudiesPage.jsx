import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FileText,
    TrendingUp,
    DollarSign,
    Target,
    Building2,
    Heart,
    CreditCard,
    Factory,
    Truck,

    GraduationCap,
    Download,
    ArrowRight,
    Zap,
    BarChart3,
    Search,
    ChevronDown,
} from 'lucide-react';

// CaseStudiesPage — JSX only, manual content (no loops)
export default function CaseStudiesPage() {
    const navigate = useNavigate();
    const goDemo = () => navigate('/demo');
    const goGetStarted = () => navigate('/get-started');

    return (
        <div className="bg-gradient-to-br from-primary/5 to-accent/10 py-24 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                            <FileText className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl font-bold">Customer Success Stories</h1>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Lihat bagaimana perusahaan terkemuka di Indonesia mentransformasi workflow pemrosesan dokumen mereka
                        dengan snapint dan mencapai hasil luar biasa.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="text-center bg-white rounded-2xl p-6 border hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div className="text-3xl font-bold text-primary mb-2">50+</div>
                        <div className="text-sm text-muted-foreground">Enterprise Customers</div>
                    </div>
                    <div className="text-center bg-white rounded-2xl p-6 border hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                            <BarChart3 className="w-6 h-6" />
                        </div>
                        <div className="text-3xl font-bold text-primary mb-2">85%</div>
                        <div className="text-sm text-muted-foreground">Avg. Time Reduction</div>
                    </div>
                    <div className="text-center bg-white rounded-2xl p-6 border hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <div className="text-3xl font-bold text-primary mb-2">Rp 2.1M</div>
                        <div className="text-sm text-muted-foreground">Avg. Monthly Savings</div>
                    </div>
                    <div className="text-center bg-white rounded-2xl p-6 border hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                            <Target className="w-6 h-6" />
                        </div>
                        <div className="text-3xl font-bold text-primary mb-2">97.5%</div>
                        <div className="text-sm text-muted-foreground">Avg. Accuracy Rate</div>
                    </div>
                </div>

                {/* Filters (visual only) */}
                <div className="mb-12">
                    <div className="bg-white rounded-xl border p-4">
                        <div className="flex flex-col lg:flex-row gap-4 items-center">
                            <div className="flex-1 relative w-full">
                                <Search className="w-5 h-5 absolute left-3 top-3 text-muted-foreground" />
                                <input
                                    type="text"
                                    readOnly
                                    placeholder="Cari case study, perusahaan, atau use case..."
                                    className="w-full pl-10 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                            <div className="flex gap-4 w-full lg:w-auto">
                                <div className="relative w-full lg:w-48">
                                    <div className="flex items-center justify-between w-full px-3 py-2 rounded-md border text-sm text-gray-700 bg-white">
                                        <span>Semua Industri</span>
                                        <ChevronDown className="w-4 h-4 text-gray-500" />
                                    </div>
                                </div>
                                <div className="relative w-full lg:w-48">
                                    <div className="flex items-center justify-between w-full px-3 py-2 rounded-md border text-sm text-gray-700 bg-white">
                                        <span>Semua Use Case</span>
                                        <ChevronDown className="w-4 h-4 text-gray-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Case Studies */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8 flex items-center">
                        <Zap className="w-6 h-6 mr-2 text-primary" />
                        Featured Success Stories
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Bank Mandiri */}
                        <div className="relative group bg-white rounded-2xl border p-6 shadow-sm">
                            <div className="h-6 mb-2 flex justify-end">
                                <span className="inline-flex items-center px-2 py-1 rounded bg-primary text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">Featured</span>
                            </div>
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="inline-block border rounded px-2 py-0.5 text-xs mb-2">Banking</span>
                                        <div className="text-sm text-muted-foreground">PT Bank Mandiri (Persero) Tbk</div>
                                    </div>
                                </div>
                                <div className="text-right text-sm text-muted-foreground">
                                    <div>8 min read</div>
                                    <div>Dec 2024</div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Bank Mandiri: Transformasi Digital Customer Onboarding</h3>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="font-semibold mb-2 text-red-700">Challenge:</h5>
                                    <p className="text-sm text-muted-foreground">Proses onboarding nasabah baru memakan waktu 3-5 hari dengan tingkat error manual tinggi</p>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-2 text-blue-700">Solution:</h5>
                                    <p className="text-sm text-muted-foreground">Implementasi snapint untuk otomatisasi verifikasi dokumen KYC dan validasi data</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 p-4 bg-green-50 rounded-xl">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                                        <div className="text-xs text-green-700">Time Reduction</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">99.2%</div>
                                        <div className="text-xs text-blue-700">Accuracy</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600 mb-1">Rp 2.4M/bulan</div>
                                        <div className="text-xs text-purple-700">Monthly Savings</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-orange-600 mb-1">300%</div>
                                        <div className="text-xs text-orange-700">Volume Increase</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">KYC</span>
                                        <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Customer Onboarding</span>
                                        <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Document Verification</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex-1 px-4 py-2 rounded bg-primary text-white"> <Download className="w-4 h-4 mr-2 inline" /> Download PDF</button>
                                    <button className="flex-1 px-4 py-2 rounded border">Read Full Story <ArrowRight className="w-4 h-4 ml-2 inline" /></button>
                                </div>
                            </div>
                        </div>

                        {/* Prudential */}
                        <div className="relative group bg-white rounded-2xl border p-6 shadow-sm">
                            <div className="h-6 mb-2 flex justify-end">
                                <span className="inline-flex items-center px-2 py-1 rounded bg-primary text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">Featured</span>
                            </div>
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        <CreditCard className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="inline-block border rounded px-2 py-0.5 text-xs mb-2">Insurance</span>
                                        <div className="text-sm text-muted-foreground">PT Prudential Life Assurance</div>
                                    </div>
                                </div>
                                <div className="text-right text-sm text-muted-foreground">
                                    <div>6 min read</div>
                                    <div>Nov 2024</div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Asuransi Prudential: Otomatisasi Claims Processing</h3>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="font-semibold mb-2 text-red-700">Challenge:</h5>
                                    <p className="text-sm text-muted-foreground">Pemrosesan klaim asuransi manual dengan waktu settlement 14-21 hari</p>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-2 text-blue-700">Solution:</h5>
                                    <p className="text-sm text-muted-foreground">Deployment snapint untuk ekstraksi data klaim dan validasi dokumen medis</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 p-4 bg-green-50 rounded-xl">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600 mb-1">78%</div>
                                        <div className="text-xs text-green-700">Time Reduction</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">97.8%</div>
                                        <div className="text-xs text-blue-700">Accuracy</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600 mb-1">Rp 1.8M/bulan</div>
                                        <div className="text-xs text-purple-700">Monthly Savings</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-orange-600 mb-1">250%</div>
                                        <div className="text-xs text-orange-700">Volume Increase</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Claims Processing</span>
                                        <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Medical Documents</span>
                                        <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Fraud Detection</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex-1 px-4 py-2 rounded bg-primary text-white"> <Download className="w-4 h-4 mr-2 inline" /> Download PDF</button>
                                    <button className="flex-1 px-4 py-2 rounded border">Read Full Story <ArrowRight className="w-4 h-4 ml-2 inline" /></button>
                                </div>
                            </div>
                        </div>

                        {/* Unilever (Featured) */}
                        <div className="relative group bg-white rounded-2xl border p-6 shadow-sm">
                            <div className="h-6 mb-2 flex justify-end">
                                <span className="inline-flex items-center px-2 py-1 rounded bg-primary text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">Featured</span>
                            </div>
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        <Factory className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="inline-block border rounded px-2 py-0.5 text-xs mb-2">Manufacturing</span>
                                        <div className="text-sm text-muted-foreground">PT Unilever Indonesia Tbk</div>
                                    </div>
                                </div>
                                <div className="text-right text-sm text-muted-foreground">
                                    <div>9 min read</div>
                                    <div>Sep 2024</div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Unilever Indonesia: Supply Chain Document Automation</h3>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="font-semibold mb-2 text-red-700">Challenge:</h5>
                                    <p className="text-sm text-muted-foreground">Pemrosesan dokumen supply chain manual dengan compliance requirements tinggi</p>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-2 text-blue-700">Solution:</h5>
                                    <p className="text-sm text-muted-foreground">Implementasi snapint untuk otomatisasi PO, invoice, dan shipping documents</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 p-4 bg-green-50 rounded-xl">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600 mb-1">82%</div>
                                        <div className="text-xs text-green-700">Time Reduction</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">98.1%</div>
                                        <div className="text-xs text-blue-700">Accuracy</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600 mb-1">Rp 3.2M/bulan</div>
                                        <div className="text-xs text-purple-700">Monthly Savings</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-orange-600 mb-1">400%</div>
                                        <div className="text-xs text-orange-700">Volume Increase</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Supply Chain</span>
                                        <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Invoice Processing</span>
                                        <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Compliance</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex-1 px-4 py-2 rounded bg-primary text-white"> <Download className="w-4 h-4 mr-2 inline" /> Download PDF</button>
                                    <button className="flex-1 px-4 py-2 rounded border">Read Full Story <ArrowRight className="w-4 h-4 ml-2 inline" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regular Case Studies */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8">All Case Studies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* RS Siloam */}
                        <div className="bg-white rounded-2xl border p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary"><Heart className="w-5 h-5" /></div>
                                <div className="flex-1">
                                    <span className="inline-block border rounded px-2 py-0.5 text-xs mb-1">Healthcare</span>
                                    <div className="text-xs text-muted-foreground">Siloam Hospitals Group</div>
                                </div>
                                <div className="text-xs text-muted-foreground text-right">
                                    <div>7 min</div>
                                    <div>Oct 2024</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-4">RS Siloam: Digitalisasi Medical Records Management</h3>
                            <div className="grid grid-cols-2 gap-3 text-center">
                                <div className="p-3 bg-green-50 rounded-lg"><div className="text-lg font-bold text-green-600">70%</div><div className="text-xs text-green-700">Time Saved</div></div>
                                <div className="p-3 bg-blue-50 rounded-lg"><div className="text-lg font-bold text-blue-600">Rp 890K/bulan</div><div className="text-xs text-blue-700">Monthly Savings</div></div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Medical Records</span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Healthcare</span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">+1 more</span>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <button className="flex-1 px-3 py-2 rounded bg-primary text-white text-sm">Download</button>
                                <button className="flex-1 px-3 py-2 rounded border text-sm">Read More</button>
                            </div>
                        </div>



                        {/* JNE */}
                        <div className="bg-white rounded-2xl border p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary"><Truck className="w-5 h-5" /></div>
                                <div className="flex-1">
                                    <span className="inline-block border rounded px-2 py-0.5 text-xs mb-1">Logistics</span>
                                    <div className="text-xs text-muted-foreground">PT Jalur Nugraha Ekakurir (JNE)</div>
                                </div>
                                <div className="text-xs text-muted-foreground text-right">
                                    <div>5 min</div>
                                    <div>Aug 2024</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-4">JNE Express: Logistics Document Processing Revolution</h3>
                            <div className="grid grid-cols-2 gap-3 text-center">
                                <div className="p-3 bg-green-50 rounded-lg"><div className="text-lg font-bold text-green-600">75%</div><div className="text-xs text-green-700">Time Saved</div></div>
                                <div className="p-3 bg-blue-50 rounded-lg"><div className="text-lg font-bold text-blue-600">Rp 1.5M/bulan</div><div className="text-xs text-blue-700">Monthly Savings</div></div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Logistics</span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Shipping Documents</span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">+1 more</span>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <button className="flex-1 px-3 py-2 rounded bg-primary text-white text-sm">Download</button>
                                <button className="flex-1 px-3 py-2 rounded border text-sm">Read More</button>
                            </div>
                        </div>

                        {/* Universitas Indonesia */}
                        <div className="bg-white rounded-2xl border p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary"><GraduationCap className="w-5 h-5" /></div>
                                <div className="flex-1">
                                    <span className="inline-block border rounded px-2 py-0.5 text-xs mb-1">Education</span>
                                    <div className="text-xs text-muted-foreground">Universitas Indonesia</div>
                                </div>
                                <div className="text-xs text-muted-foreground text-right">
                                    <div>6 min</div>
                                    <div>Jul 2024</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Universitas Indonesia: Academic Records Digitization</h3>
                            <div className="grid grid-cols-2 gap-3 text-center">
                                <div className="p-3 bg-green-50 rounded-lg"><div className="text-lg font-bold text-green-600">68%</div><div className="text-xs text-green-700">Time Saved</div></div>
                                <div className="p-3 bg-blue-50 rounded-lg"><div className="text-lg font-bold text-blue-600">Rp 650K/bulan</div><div className="text-xs text-blue-700">Monthly Savings</div></div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Academic Records</span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">Education</span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs">+1 more</span>
                            </div>
                            <div className="flex gap-2 mt-4">
                                <button className="flex-1 px-3 py-2 rounded bg-primary text-white text-sm">Download</button>
                                <button className="flex-1 px-3 py-2 rounded border text-sm">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-white rounded-3xl p-16 shadow-xl">
                    <TrendingUp className="w-10 h-10 text-[#133E68] mx-auto mb-4" />
                    <h3 className="text-3xl font-semibold mb-6">Siap Mencapai Hasil Serupa?</h3>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                        Bergabunglah dengan perusahaan-perusahaan terkemuka yang telah bertransformasi dengan snapint. Jadwalkan demo untuk melihat bagaimana kami dapat membantu mencapai efisiensi dan penghematan yang serupa.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                        <button
                            className="px-8 sm:px-10 py-3 sm:py-4 text-base rounded-lg bg-[#133E68] text-white shadow-md hover:bg-[#0f3355] hover:shadow-lg transition-all duration-300"
                            onClick={goDemo}
                        >
                            Jadwalkan Demo Personal <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-3 inline" />
                        </button>
                        <button
                            className="px-8 sm:px-10 py-3 sm:py-4 text-base rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-all duration-300"
                            onClick={goGetStarted}
                        >
                            Mulai Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
