import React, { useState } from 'react';
import { Rocket, CheckCircle, ArrowRight, Star, Clock, Shield, Zap, Users, Building2, Target } from 'lucide-react';

export default function GetStartedPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        industry: '',
        companySize: '',
        useCase: '',
        currentChallenge: '',
        documentVolume: '',
        timeline: '',
        agreedToTerms: false,
        agreedToMarketing: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInput = (field, value) => setFormData(p => ({ ...p, [field]: value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agreedToTerms || isSubmitting) return;
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1200);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-primary/5 to-blue-50 py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-white border border-green-200 rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-10 text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <h1 className="text-3xl font-bold mb-3">Free Trial Berhasil Diaktivasi!</h1>
                            <p className="text-slate-600 mb-8">Selamat! Akun free trial Anda telah dibuat dan siap digunakan.</p>

                            <div className="bg-slate-50 rounded-xl p-6 max-w-3xl mx-auto text-left mb-8">
                                <h3 className="text-lg font-semibold mb-4">Detail Akun Trial:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center">
                                    <div className="p-4 rounded-lg bg-blue-50">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">1,000</div>
                                        <div className="text-sm text-blue-800">Dokumen Tersedia</div>
                                    </div>
                                    <div className="p-4 rounded-lg bg-green-50">
                                        <div className="text-2xl font-bold text-green-600 mb-1">30 Hari</div>
                                        <div className="text-sm text-green-800">Periode Trial</div>
                                    </div>
                                    <div className="p-4 rounded-lg bg-purple-50">
                                        <div className="text-2xl font-bold text-purple-600 mb-1">API</div>
                                        <div className="text-sm text-purple-800">Akses Lengkap</div>
                                    </div>
                                    <div className="p-4 rounded-lg bg-orange-50">
                                        <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                                        <div className="text-sm text-orange-800">Support</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 justify-center flex-wrap">
                                <button className="px-6 py-3 rounded-xl bg-primary-800 text-white hover:bg-primary-900 transition flex items-center">
                                    Akses Dashboard
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </button>
                                <button className="px-6 py-3 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50 transition">Download Dokumentasi</button>
                                <button className="px-6 py-3 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50 transition">Schedule Onboarding</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 to-blue-50 py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-3 mb-5">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Rocket className="w-8 h-8 text-primary-700" />
                        </div>
                        <h1 className="text-4xl font-bold">Mulai Uji Coba Gratis</h1>
                    </div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Coba snapint secara gratis selama 30 hari. Tidak perlu kartu kredit—langsung mulai memproses dokumen Anda hari ini.
                    </p>
                </div>

                {/* Benefits (manual, no loops) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-700 mx-auto mb-4">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-1">1,000 Dokumen Gratis</h3>
                        <p className="text-sm text-slate-600">Process hingga 1,000 dokumen tanpa biaya</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-700 mx-auto mb-4">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-1">30 Hari Akses Penuh</h3>
                        <p className="text-sm text-slate-600">Akses semua fitur platform selama 1 bulan</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-700 mx-auto mb-4">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-1">Setup & Support Gratis</h3>
                        <p className="text-sm text-slate-600">Bantuan setup dan technical support</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-700 mx-auto mb-4">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-1">Custom Use Case</h3>
                        <p className="text-sm text-slate-600">Konfigurasi sesuai kebutuhan spesifik Anda</p>
                    </div>
                </div>

                {/* Form */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                        <div className="text-center p-8 pb-6 border-b border-slate-200">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary-800 text-sm font-medium mb-3">
                                <Star className="w-4 h-4 mr-1" /> Free Trial - No Credit Card Required
                            </div>
                            <h2 className="text-2xl font-semibold">Mulai Free Trial Anda</h2>
                            <p className="text-slate-600 mt-1">Isi form di bawah untuk mendapatkan akses instan ke platform snapint.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-10">
                            {/* Informasi Pribadi */}
                            <section>
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <Users className="w-5 h-5 mr-2" /> Informasi Pribadi
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="firstName">Nama Depan *</label>
                                        <input id="firstName" className="w-full h-11 rounded-xl border border-slate-300 px-3" placeholder="John" value={formData.firstName} onChange={e => handleInput('firstName', e.target.value)} required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="lastName">Nama Belakang *</label>
                                        <input id="lastName" className="w-full h-11 rounded-xl border border-slate-300 px-3" placeholder="Doe" value={formData.lastName} onChange={e => handleInput('lastName', e.target.value)} required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email Bisnis *</label>
                                        <input id="email" type="email" className="w-full h-11 rounded-xl border border-slate-300 px-3" placeholder="john@company.com" value={formData.email} onChange={e => handleInput('email', e.target.value)} required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="phone">Nomor Telepon</label>
                                        <input id="phone" className="w-full h-11 rounded-xl border border-slate-300 px-3" placeholder="+62 812 3456 7890" value={formData.phone} onChange={e => handleInput('phone', e.target.value)} />
                                    </div>
                                </div>
                            </section>

                            {/* Informasi Perusahaan */}
                            <section className="border-t border-slate-200 pt-8">
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <Building2 className="w-5 h-5 mr-2" /> Informasi Perusahaan
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="company">Nama Perusahaan *</label>
                                        <input id="company" className="w-full h-11 rounded-xl border border-slate-300 px-3" placeholder="PT. Contoh Teknologi" value={formData.company} onChange={e => handleInput('company', e.target.value)} required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="jobTitle">Job Title *</label>
                                        <input id="jobTitle" className="w-full h-11 rounded-xl border border-slate-300 px-3" placeholder="IT Manager, CTO, dll." value={formData.jobTitle} onChange={e => handleInput('jobTitle', e.target.value)} required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="industry">Industri *</label>
                                        <select id="industry" className="w-full h-11 rounded-xl border border-slate-300 px-3 bg-white" value={formData.industry} onChange={e => handleInput('industry', e.target.value)} required>
                                            <option value="" disabled>Pilih industri</option>
                                            <option value="banking">Banking & Financial Services</option>
                                            <option value="insurance">Insurance</option>
                                            <option value="healthcare">Healthcare</option>
                                            <option value="manufacturing">Manufacturing</option>
                                            <option value="logistics">Logistics & Supply Chain</option>
                                            <option value="education">Education</option>
                                            <option value="government">Government</option>
                                            <option value="technology">Technology</option>
                                            <option value="retail">Retail & E-commerce</option>
                                            <option value="other">Lainnya</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="companySize">Ukuran Perusahaan *</label>
                                        <select id="companySize" className="w-full h-11 rounded-xl border border-slate-300 px-3 bg-white" value={formData.companySize} onChange={e => handleInput('companySize', e.target.value)} required>
                                            <option value="" disabled>Pilih ukuran perusahaan</option>
                                            <option value="startup">1-10 karyawan</option>
                                            <option value="small">11-50 karyawan</option>
                                            <option value="medium">51-200 karyawan</option>
                                            <option value="large">201-1000 karyawan</option>
                                            <option value="enterprise">1000+ karyawan</option>
                                        </select>
                                    </div>
                                </div>
                            </section>

                            {/* Use Case */}
                            <section className="border-t border-slate-200 pt-8">
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <Target className="w-5 h-5 mr-2" /> Use Case & Requirements
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="useCase">Primary Use Case *</label>
                                        <select id="useCase" className="w-full h-11 rounded-xl border border-slate-300 px-3 bg-white" value={formData.useCase} onChange={e => handleInput('useCase', e.target.value)} required>
                                            <option value="" disabled>Pilih use case utama</option>
                                            <option value="invoice-processing">Invoice & AP Processing</option>
                                            <option value="customer-onboarding">Customer Onboarding & KYC</option>
                                            <option value="contract-analysis">Contract Analysis</option>
                                            <option value="compliance">Compliance & Regulatory</option>
                                            <option value="claims-processing">Claims Processing</option>
                                            <option value="hr-documents">HR Document Processing</option>
                                            <option value="financial-analysis">Financial Document Analysis</option>
                                            <option value="other">Lainnya</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="documentVolume">Volume Dokumen per Bulan</label>
                                        <select id="documentVolume" className="w-full h-11 rounded-xl border border-slate-300 px-3 bg-white" value={formData.documentVolume} onChange={e => handleInput('documentVolume', e.target.value)}>
                                            <option value="" disabled>Estimasi volume</option>
                                            <option value="low">&lt; 100 dokumen/bulan</option>
                                            <option value="medium">100-1,000 dokumen/bulan</option>
                                            <option value="high">1,000-10,000 dokumen/bulan</option>
                                            <option value="enterprise">&gt; 10,000 dokumen/bulan</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label className="block text-sm font-medium mb-1" htmlFor="currentChallenge">Tantangan Saat Ini *</label>
                                    <textarea id="currentChallenge" rows="4" className="w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Ceritakan tantangan pemrosesan dokumen yang sedang Anda hadapi..." value={formData.currentChallenge} onChange={e => handleInput('currentChallenge', e.target.value)} required />
                                </div>

                                <div className="mt-6">
                                    <label className="block text-sm font-medium mb-1" htmlFor="timeline">Timeline Implementasi</label>
                                    <select id="timeline" className="w-full h-11 rounded-xl border border-slate-300 px-3 bg-white" value={formData.timeline} onChange={e => handleInput('timeline', e.target.value)}>
                                        <option value="" disabled>Kapan rencana implementasi?</option>
                                        <option value="immediate">Segera (≤ 1 bulan)</option>
                                        <option value="quarter">Q1-Q2 tahun ini</option>
                                        <option value="later">Q3-Q4 tahun ini</option>
                                        <option value="exploring">Masih eksplorasi</option>
                                    </select>
                                </div>
                            </section>

                            {/* Terms */}
                            <section className="border-t border-slate-200 pt-8 space-y-4">
                                <label className="inline-flex items-start gap-2 cursor-pointer select-none">
                                    <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300" checked={formData.agreedToTerms} onChange={e => handleInput('agreedToTerms', e.target.checked)} />
                                    <span className="text-sm">Saya setuju dengan <a href="#" className="text-primary-700 hover:underline">syarat & ketentuan</a> dan <a href="#" className="text-primary-700 hover:underline">kebijakan privasi</a> snapint. *</span>
                                </label>
                                <label className="inline-flex items-start gap-2 cursor-pointer select-none">
                                    <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300" checked={formData.agreedToMarketing} onChange={e => handleInput('agreedToMarketing', e.target.checked)} />
                                    <span className="text-sm">Saya ingin menerima update produk, tips, dan penawaran khusus dari snapint.</span>
                                </label>
                            </section>

                            {/* Submit */}
                            <section className="border-t border-slate-200 pt-8">
                                <div className="text-center space-y-3">
                                    <button
                                        type="submit"
                                        disabled={!formData.agreedToTerms || isSubmitting}
                                        className={`inline-flex items-center justify-center px-8 h-12 rounded-2xl text-white text-base font-medium shadow-sm hover:shadow-md transition-all duration-200 ${(!formData.agreedToTerms || isSubmitting) ? 'bg-primary-800 opacity-60 cursor-not-allowed' : 'bg-primary-800 hover:bg-primary-900'}`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                                                Sedang Memproses...
                                            </>
                                        ) : (
                                            <>
                                                Mulai Free Trial Sekarang
                                                <ArrowRight className="w-5 h-5 ml-2" />
                                            </>
                                        )}
                                    </button>
                                    <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                                        <span className="inline-flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500" /> No Credit Card</span>
                                        <span className="inline-flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500" /> 30 Days Free</span>
                                        <span className="inline-flex items-center"><CheckCircle className="w-4 h-4 mr-1 text-green-500" /> Cancel Anytime</span>
                                    </div>
                                </div>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
