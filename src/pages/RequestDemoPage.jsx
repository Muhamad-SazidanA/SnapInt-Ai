import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Monitor, Target, User, Building2, ArrowRight } from 'lucide-react';

export default function RequestDemoPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        industry: '',
        companySize: '',
        currentChallenges: '',
        demoGoals: '',
        timeframe: '',
        preferredDate: '',
        preferredTime: '',
        timezone: 'WIB',
        demoType: '',
        documentTypes: '',
        attendees: '',
        specificQuestions: '',
        agreedToTerms: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInput = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

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
                            <h1 className="text-3xl font-bold mb-3">Demo berhasil dijadwalkan!</h1>
                            <p className="text-slate-600 mb-8">Terima kasih. Kami akan menghubungi Anda dalam 24 jam untuk konfirmasi jadwal.</p>

                            <div className="bg-slate-50 rounded-xl p-6 max-w-3xl mx-auto text-left mb-8">
                                <h3 className="text-lg font-semibold mb-4">Ringkasan:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                                    <div>
                                        <div className="text-slate-500">Nama</div>
                                        <div className="font-medium">{formData.firstName || '-'} {formData.lastName || ''}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-500">Email</div>
                                        <div className="font-medium">{formData.email || '-'}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-500">Jenis Demo</div>
                                        <div className="font-medium">{formData.demoType || '-'}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-500">Preferensi Waktu</div>
                                        <div className="font-medium">{formData.preferredTime || 'Fleksibel'} ({formData.timezone || 'WIB'})</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 justify-center flex-wrap">
                                <button className="px-6 py-3 rounded-xl bg-primary-700 text-white hover:bg-primary-800 transition flex items-center">
                                    Tambah ke Kalender
                                    <Calendar className="w-5 h-5 ml-2" />
                                </button>
                                <button className="px-6 py-3 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50 transition">Download Prep Guide</button>
                                <button className="px-6 py-3 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50 transition" onClick={() => (window.location.href = '/')}>Kembali ke Beranda</button>
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
                            <Calendar className="w-8 h-8 text-primary-700" />
                        </div>
                        <h1 className="text-4xl font-bold">Jadwalkan Demo Personal</h1>
                    </div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Lihat bagaimana snapint mentransformasi workflow pemrosesan dokumen Anda. Demo personal bersama solution architect kami.
                    </p>
                </div>

                {/* Demo Features (manual, no loop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-700 mx-auto mb-4">
                            <Monitor className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-1">Live Demo</h3>
                        <p className="text-sm text-slate-600">Interactive demo dengan document samples nyata</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-700 mx-auto mb-4">
                            <HeadsetIcon />
                        </div>
                        <h3 className="font-semibold mb-1">Q&A Session</h3>
                        <p className="text-sm text-slate-600">Diskusi mendalam dengan solution architect</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-700 mx-auto mb-4">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-1">Custom Use Case</h3>
                        <p className="text-sm text-slate-600">Demo disesuaikan dengan kebutuhan Anda</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-700 mx-auto mb-4">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-1">No Commitment</h3>
                        <p className="text-sm text-slate-600">Gratis tanpa kewajiban apapun</p>
                    </div>
                </div>

                {/* Main Form */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                        <div className="text-center p-8 pb-6 border-b border-slate-200">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary-800 text-sm font-medium mb-3">
                                <Monitor className="w-4 h-4 mr-1" /> Live Demo Session
                            </div>
                            <h2 className="text-2xl font-semibold">Request Demo Personal</h2>
                            <p className="text-slate-600 mt-1">Isi form di bawah. Kami akan menghubungi Anda untuk menjadwalkan.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-10">
                            {/* Informasi Kontak */}
                            <section>
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <User className="w-5 h-5 mr-2" /> Informasi Kontak
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
                                        <label className="block text-sm font-medium mb-1" htmlFor="phone">Nomor Telepon *</label>
                                        <input id="phone" className="w-full h-11 rounded-xl border border-slate-300 px-3" placeholder="+62 812 3456 7890" value={formData.phone} onChange={e => handleInput('phone', e.target.value)} required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="position">Posisi/Jabatan *</label>
                                        <input id="position" className="w-full h-11 rounded-xl border border-slate-300 px-3" placeholder="IT Manager, CTO, Operations Head" value={formData.position} onChange={e => handleInput('position', e.target.value)} required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="company">Nama Perusahaan *</label>
                                        <input id="company" className="w-full h-11 rounded-xl border border-slate-300 px-3" placeholder="PT. Contoh Teknologi Indonesia" value={formData.company} onChange={e => handleInput('company', e.target.value)} required />
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

                            {/* Requirements Demo */}
                            <section className="border-t border-slate-200 pt-8">
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <Target className="w-5 h-5 mr-2" /> Requirements Demo
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="demoType">Jenis Demo *</label>
                                        <select id="demoType" className="w-full h-11 rounded-xl border border-slate-300 px-3 bg-white" value={formData.demoType} onChange={e => handleInput('demoType', e.target.value)} required>
                                            <option value="" disabled>Pilih jenis demo</option>
                                            <option value="Platform Overview">Platform Overview - Gambaran umum (30 menit)</option>
                                            <option value="Technical Deep Dive">Technical Deep Dive - API & Integrasi (45 menit)</option>
                                            <option value="Industry-Specific Demo">Industry-Specific Demo - Use cases industri (45 menit)</option>
                                            <option value="Custom Demo">Custom Demo - Sesuai dokumen & workflow (60 menit)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="currentChallenges">Tantangan Saat Ini *</label>
                                        <textarea id="currentChallenges" rows="3" className="w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Ceritakan tantangan Anda..." value={formData.currentChallenges} onChange={e => handleInput('currentChallenges', e.target.value)} required />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="demoGoals">Tujuan Demo *</label>
                                        <textarea id="demoGoals" rows="3" className="w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Apa yang ingin Anda lihat dari demo ini?" value={formData.demoGoals} onChange={e => handleInput('demoGoals', e.target.value)} required />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-1" htmlFor="documentTypes">Jenis Dokumen yang Ingin Di-Demo</label>
                                            <input id="documentTypes" className="w-full h-11 rounded-xl border border-slate-300 px-3" placeholder="Invoice, Kontrak, KTP, dll." value={formData.documentTypes} onChange={e => handleInput('documentTypes', e.target.value)} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1" htmlFor="attendees">Jumlah Peserta Demo</label>
                                            <input id="attendees" className="w-full h-11 rounded-xl border border-slate-300 px-3" placeholder="1-5 orang" value={formData.attendees} onChange={e => handleInput('attendees', e.target.value)} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="timeframe">Timeline Implementasi</label>
                                        <select id="timeframe" className="w-full h-11 rounded-xl border border-slate-300 px-3 bg-white" value={formData.timeframe} onChange={e => handleInput('timeframe', e.target.value)}>
                                            <option value="" disabled>Kapan rencana implementasi?</option>
                                            <option value="Segera">Segera (≤ 1 bulan)</option>
                                            <option value="Q1-Q2">Q1-Q2 tahun ini</option>
                                            <option value="Q3-Q4">Q3-Q4 tahun ini</option>
                                            <option value="Tahun depan">Tahun depan</option>
                                            <option value="Eksplorasi">Masih eksplorasi</option>
                                        </select>
                                    </div>
                                </div>
                            </section>

                            {/* Preferensi Jadwal */}
                            <section className="border-t border-slate-200 pt-8">
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <Clock className="w-5 h-5 mr-2" /> Preferensi Jadwal
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="preferredDate">Tanggal Preferensi</label>
                                        <input id="preferredDate" type="date" className="w-full h-11 rounded-xl border border-slate-300 px-3" value={formData.preferredDate} onChange={e => handleInput('preferredDate', e.target.value)} min={new Date().toISOString().split('T')[0]} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="preferredTime">Waktu Preferensi *</label>
                                        <select id="preferredTime" className="w-full h-11 rounded-xl border border-slate-300 px-3 bg-white" value={formData.preferredTime} onChange={e => handleInput('preferredTime', e.target.value)} required>
                                            <option value="" disabled>Pilih waktu</option>
                                            <option value="09:00 - 12:00 WIB">09:00 - 12:00 WIB</option>
                                            <option value="13:00 - 17:00 WIB">13:00 - 17:00 WIB</option>
                                            <option value="19:00 - 21:00 WIB">19:00 - 21:00 WIB</option>
                                            <option value="Fleksibel">Fleksibel</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="timezone">Timezone</label>
                                        <select id="timezone" className="w-full h-11 rounded-xl border border-slate-300 px-3 bg-white" value={formData.timezone} onChange={e => handleInput('timezone', e.target.value)}>
                                            <option value="WIB">WIB (Jakarta)</option>
                                            <option value="WITA">WITA (Makassar)</option>
                                            <option value="WIT">WIT (Jayapura)</option>
                                            <option value="SGT">SGT (Singapore)</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </section>

                            {/* Pertanyaan Spesifik */}
                            <section className="border-t border-slate-200 pt-8">
                                <label className="block text-sm font-medium mb-1" htmlFor="specificQuestions">Pertanyaan Spesifik (Opsional)</label>
                                <textarea id="specificQuestions" rows="3" className="w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Ada hal spesifik yang ingin dibahas saat demo?" value={formData.specificQuestions} onChange={e => handleInput('specificQuestions', e.target.value)} />
                            </section>

                            {/* Persetujuan */}
                            <section className="border-t border-slate-200 pt-8">
                                <label className="inline-flex items-start gap-2 cursor-pointer select-none">
                                    <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300" checked={formData.agreedToTerms} onChange={e => handleInput('agreedToTerms', e.target.checked)} />
                                    <span className="text-sm">Saya setuju dengan <a href="#" className="text-primary-700 hover:underline">kebijakan privasi</a> dan memberikan persetujuan untuk dihubungi oleh tim snapint untuk keperluan demo. *</span>
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
                                                Request Demo Sekarang
                                                <ArrowRight className="w-5 h-5 ml-2" />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-sm text-gray-500">Tim kami akan menghubungi Anda dalam 24 jam untuk konfirmasi jadwal demo.</p>
                                </div>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Minimal headset icon built with SVG to avoid extra dependencies and keep manual JSX
function HeadsetIcon({ className = 'w-6 h-6' }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M4 12a8 8 0 0 1 16 0" />
            <path d="M18 19a3 3 0 0 1-3 3h-2" />
            <rect x="2" y="11" width="4" height="8" rx="2" />
            <rect x="18" y="11" width="4" height="8" rx="2" />
        </svg>
    );
}
