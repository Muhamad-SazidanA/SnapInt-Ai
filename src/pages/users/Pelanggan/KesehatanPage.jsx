import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Heart,
    FileText,
    TrendingUp,
    Shield,
    CheckCircle,
    ArrowRight,
    Clipboard,
    FileCheck,
    Stethoscope,
    Activity,
    Pill,
    Calendar,
    BarChart3,
    Sparkles,
    HeartHandshake,
    Quote
} from 'lucide-react';

// KesehatanPage (Healthcare) — JSX only, manual content (no loops)
export default function KesehatanPage() {
    const navigate = useNavigate();
    const goContact = () => navigate('/contact');

    return (
        <div className="bg-background ">
            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center mb-6 px-4 py-2 text-sm bg-blue-50 text-gray-700 rounded-lg">
                            <Heart className="w-4 h-4 mr-2 text-primary-800" />
                            <span className="font-semibold">Healthcare Solutions</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
                            Digitize Healthcare with AI-Powered Document Intelligence
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                            Transform patient care with intelligent document processing. From medical records digitization to claims automation,
                            empower healthcare providers with AI that understands medical terminology and workflows.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 rounded-lg bg-[#133E68] text-white flex items-center justify-center hover:bg-[#0F3053] transition-colors" onClick={goContact}>
                                Schedule Healthcare Demo
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                            <button className="px-8 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-white" onClick={goContact}>
                                Speak with Healthcare Expert
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Heart className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">40+</div>
                            <div className="font-medium mb-2">Healthcare Providers</div>
                            <div className="text-sm text-muted-foreground">Hospitals and clinics using our AI</div>
                        </div>
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <FileText className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">2M+</div>
                            <div className="font-medium mb-2">Patient Records/Month</div>
                            <div className="text-sm text-muted-foreground">Digitized and processed</div>
                        </div>
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">70%</div>
                            <div className="font-medium mb-2">Efficiency Gain</div>
                            <div className="text-sm text-muted-foreground">In administrative tasks</div>
                        </div>
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Shield className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
                            <div className="font-medium mb-2">Accuracy Rate</div>
                            <div className="text-sm text-muted-foreground">In medical document processing</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Healthcare Use Cases</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">AI-powered solutions for every aspect of healthcare documentation and workflows</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* 1. Patient Record Digitization (blue) */}
                        <div className="rounded-2xl border hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center">
                                        <Clipboard className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Patient Record Digitization</h3>
                                </div>
                                <p className="text-slate-600">Convert paper-based medical records into structured digital format</p>
                                <div className="mt-6"><h5 className="font-semibold mb-2 text-red-600">Challenge:</h5><p className="text-sm text-muted-foreground">Manual transcription of medical records consuming significant staff time and prone to errors</p></div>
                                <div className="mt-4"><h5 className="font-semibold mb-2 text-blue-600">Solution:</h5><p className="text-sm text-muted-foreground">AI-powered OCR with medical terminology understanding for accurate digital conversion</p></div>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Instant access to complete patient history</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Automated medical coding (ICD-10, ICD-11)</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Integration with existing SIMRS/HIS systems</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Searchable medical records database</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Improved patient safety through better information access</li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg p-4 bg-blue-50 border border-blue-200">
                                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center"><div className="font-bold text-lg">80%</div><div className="text-muted-foreground">time reduction</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">99.5%</div><div className="text-muted-foreground">accuracy</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">Rp 890M/year</div><div className="text-muted-foreground">cost saving</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">100%</div><div className="text-muted-foreground">accessibility</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Medical Claims Processing (green) */}
                        <div className="rounded-2xl border hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-green-500 to-green-600" />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center">
                                        <FileCheck className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Medical Claims Processing</h3>
                                </div>
                                <p className="text-slate-600">Automate insurance claims processing and reimbursement workflows</p>
                                <div className="mt-6"><h5 className="font-semibold mb-2 text-red-600">Challenge:</h5><p className="text-sm text-muted-foreground">Complex medical claims requiring manual review and lengthy approval processes</p></div>
                                <div className="mt-4"><h5 className="font-semibold mb-2 text-green-600">Solution:</h5><p className="text-sm text-muted-foreground">Intelligent claims processing with medical coding automation and fraud detection</p></div>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Real-time claims processing and approval</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Automated medical necessity verification</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Integration with BPJS and private insurers</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Reduced claim rejection rates</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Faster reimbursement for patients</li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg p-4 bg-green-50 border border-green-200">
                                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center"><div className="font-bold text-lg">75%</div><div className="text-muted-foreground">processing time</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">-60%</div><div className="text-muted-foreground">rejection rate</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">3 days</div><div className="text-muted-foreground">reimbursement</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">+50%</div><div className="text-muted-foreground">satisfaction</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Clinical Documentation (purple) */}
                        <div className="rounded-2xl border hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-purple-500 to-purple-600" />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-purple-100 text-purple-600 flex items-center justify-center">
                                        <Stethoscope className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Clinical Documentation</h3>
                                </div>
                                <p className="text-slate-600">Streamline clinical documentation and physician workflows</p>
                                <div className="mt-6"><h5 className="font-semibold mb-2 text-red-600">Challenge:</h5><p className="text-sm text-muted-foreground">Physicians spending excessive time on documentation instead of patient care</p></div>
                                <div className="mt-4"><h5 className="font-semibold mb-2 text-purple-600">Solution:</h5><p className="text-sm text-muted-foreground">AI-assisted clinical documentation with voice-to-text and smart templates</p></div>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Reduce documentation time by 60%</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Automated clinical note generation</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Smart clinical decision support</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Standardized documentation formats</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> More time for direct patient care</li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg p-4 bg-purple-50 border border-purple-200">
                                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center"><div className="font-bold text-lg">60%</div><div className="text-muted-foreground">time reduction</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">+40%</div><div className="text-muted-foreground">patient time</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">99%</div><div className="text-muted-foreground">accuracy</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">+35%</div><div className="text-muted-foreground">satisfaction</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Laboratory Results Management (red) */}
                        <div className="rounded-2xl border hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-red-500 to-red-600" />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-red-100 text-red-600 flex items-center justify-center">
                                        <Activity className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Laboratory Results Management</h3>
                                </div>
                                <p className="text-slate-600">Automate lab results processing and clinical decision support</p>
                                <div className="mt-6"><h5 className="font-semibold mb-2 text-red-600">Challenge:</h5><p className="text-sm text-muted-foreground">Manual lab results entry and interpretation leading to delays in patient care</p></div>
                                <div className="mt-4"><h5 className="font-semibold mb-2 text-red-600">Solution:</h5><p className="text-sm text-muted-foreground">Automated lab results digitization with abnormal value flagging and trend analysis</p></div>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Instant lab results digitization</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Automated critical value alerts</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Trend analysis and pattern recognition</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Integration with EMR systems</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Clinical decision support recommendations</li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg p-4 bg-red-50 border border-red-200">
                                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center"><div className="font-bold text-lg">90%</div><div className="text-muted-foreground">processing time</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">100%</div><div className="text-muted-foreground">alerts</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">99.8%</div><div className="text-muted-foreground">accuracy</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">100%</div><div className="text-muted-foreground">integration</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions by Healthcare Setting */}
            <section className="py-24 bg-accent/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Solutions by Healthcare Setting</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Tailored AI solutions for different healthcare environments</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Hospitals */}
                        <div className="hover:shadow-lg transition-shadow duration-300 p-6 text-center rounded-2xl border bg-white">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Hospitals</h3>
                            <div className="mb-4">
                                <h4 className="font-medium mb-2 text-sm">Use Cases:</h4>
                                <div className="text-xs space-x-1 space-y-1">
                                    <span className="inline-block border rounded px-2 py-1">Patient Registration</span>
                                    <span className="inline-block border rounded px-2 py-1">Medical Records</span>
                                    <span className="inline-block border rounded px-2 py-1">Discharge Summaries</span>
                                    <span className="inline-block border rounded px-2 py-1">Insurance Claims</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                                <ul className="space-y-1 text-xs text-muted-foreground text-left inline-block">
                                    <li>• Streamlined admissions</li>
                                    <li>• Better patient care</li>
                                    <li>• Reduced costs</li>
                                </ul>
                            </div>
                        </div>

                        {/* Clinics */}
                        <div className="hover:shadow-lg transition-shadow duration-300 p-6 text-center rounded-2xl border bg-white">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Stethoscope className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Clinics</h3>
                            <div className="mb-4">
                                <h4 className="font-medium mb-2 text-sm">Use Cases:</h4>
                                <div className="text-xs space-x-1 space-y-1">
                                    <span className="inline-block border rounded px-2 py-1">Appointment Scheduling</span>
                                    <span className="inline-block border rounded px-2 py-1">Patient Forms</span>
                                    <span className="inline-block border rounded px-2 py-1">Prescription Management</span>
                                    <span className="inline-block border rounded px-2 py-1">Billing</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                                <ul className="space-y-1 text-xs text-muted-foreground text-left inline-block">
                                    <li>• Efficient operations</li>
                                    <li>• Digital workflows</li>
                                    <li>• Improved experience</li>
                                </ul>
                            </div>
                        </div>

                        {/* Laboratories */}
                        <div className="hover:shadow-lg transition-shadow duration-300 p-6 text-center rounded-2xl border bg-white">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Laboratories</h3>
                            <div className="mb-4">
                                <h4 className="font-medium mb-2 text-sm">Use Cases:</h4>
                                <div className="text-xs space-x-1 space-y-1">
                                    <span className="inline-block border rounded px-2 py-1">Test Results</span>
                                    <span className="inline-block border rounded px-2 py-1">Quality Control</span>
                                    <span className="inline-block border rounded px-2 py-1">Reporting</span>
                                    <span className="inline-block border rounded px-2 py-1">Integration</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                                <ul className="space-y-1 text-xs text-muted-foreground text-left inline-block">
                                    <li>• Faster results</li>
                                    <li>• Quality assurance</li>
                                    <li>• System integration</li>
                                </ul>
                            </div>
                        </div>

                        {/* Pharmacies */}
                        <div className="hover:shadow-lg transition-shadow duration-300 p-6 text-center rounded-2xl border bg-white">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Pill className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Pharmacies</h3>
                            <div className="mb-4">
                                <h4 className="font-medium mb-2 text-sm">Use Cases:</h4>
                                <div className="text-xs space-x-1 space-y-1">
                                    <span className="inline-block border rounded px-2 py-1">Prescription Processing</span>
                                    <span className="inline-block border rounded px-2 py-1">Inventory Management</span>
                                    <span className="inline-block border rounded px-2 py-1">Insurance Verification</span>
                                    <span className="inline-block border rounded px-2 py-1">Compliance</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                                <ul className="space-y-1 text-xs text-muted-foreground text-left inline-block">
                                    <li>• Accurate dispensing</li>
                                    <li>• Stock optimization</li>
                                    <li>• Regulatory compliance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Story */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Customer Success Story</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">How a major hospital network revolutionized patient care with AI</p>
                    </div>

                    <div className="overflow-hidden max-w-6xl mx-auto rounded-2xl border">
                        <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-8 text-white">
                            <div className="flex items-center gap-4 mb-6">
                                <Heart className="w-12 h-12" />
                                <div>
                                    <h3 className="text-2xl font-semibold">Leading Hospital Network Indonesia</h3>
                                    <p className="opacity-90">Multi-location hospital network with 45+ facilities serving 500K+ patients annually</p>
                                </div>
                            </div>
                            <div className="rounded-xl p-6 mb-6 bg-gradient-to-r from-emerald-500/25 to-blue-500/25 border border-white/15">
                                <Quote className="w-8 h-8 mb-4 opacity-90" />
                                <p className="text-lg italic mb-4">"snapint transformed our entire patient experience. Doctors now have instant access to complete medical histories, significantly improving care quality and patient safety."</p>
                                <p className="text-sm opacity-90">- Chief Medical Information Officer</p>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold mb-4 text-red-600">Challenge:</h4>
                                    <p className="text-muted-foreground mb-6">Paper-based patient records creating inefficiencies and patient safety risks</p>
                                    <h4 className="font-semibold mb-4 text-blue-600">Implementation:</h4>
                                    <p className="text-muted-foreground mb-4">Comprehensive digitization of patient records across all facilities with AI-powered processing</p>
                                    <div className="flex items-center text-sm text-muted-foreground"><Calendar className="w-4 h-4 mr-2" /> Timeline: 12 weeks phased rollout</div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-4 text-green-600">Measurable Results:</h4>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Patient registration time: 30 minutes → 5 minutes (85% reduction)</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Medical record retrieval: 2 hours → Instant access</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Documentation accuracy: +95% improvement</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Administrative costs: -60% reduction</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Patient satisfaction: +60% improvement</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Staff productivity: +40% increase</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Healthcare Compliance</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Built for healthcare with comprehensive regulatory compliance</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="rounded-2xl border bg-white p-6 hover:shadow-lg">
                            <div className="flex items-center gap-3 mb-4"><Shield className="w-8 h-8 text-primary" /><h3 className="font-semibold text-lg">Ministry of Health Regulations</h3></div>
                            <p className="text-muted-foreground mb-4">Compliance with Indonesian healthcare data management requirements</p>
                            <h4 className="font-medium mb-3">Coverage Areas:</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Patient data protection</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Medical record standards</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Digital health guidelines</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Quality assurance</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border bg-white p-6 hover:shadow-lg">
                            <div className="flex items-center gap-3 mb-4"><Shield className="w-8 h-8 text-primary" /><h3 className="font-semibold text-lg">Hospital Accreditation (KARS)</h3></div>
                            <p className="text-muted-foreground mb-4">Meeting Indonesian hospital accreditation standards</p>
                            <h4 className="font-medium mb-3">Coverage Areas:</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Documentation standards</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Patient safety protocols</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Quality management</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Information systems</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border bg-white p-6 hover:shadow-lg">
                            <div className="flex items-center gap-3 mb-4"><Shield className="w-8 h-8 text-primary" /><h3 className="font-semibold text-lg">International Standards</h3></div>
                            <p className="text-muted-foreground mb-4">Adherence to global healthcare information standards</p>
                            <h4 className="font-medium mb-3">Coverage Areas:</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> HL7 FHIR compatibility</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> ICD-10/ICD-11 coding</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> SNOMED CT integration</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> HIPAA-equivalent privacy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-emerald-600 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Transform Healthcare with AI</h2>
                    <p className="text-xl mb-10 opacity-90">Join 40+ healthcare providers improving patient care through intelligent document processing. See how AI can streamline your workflows and enhance patient outcomes.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-10 py-3 rounded-xl bg-white/95 text-slate-900 shadow-sm transition-all duration-200 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:px-12" onClick={goContact}>
                            Schedule Healthcare Demo
                            <ArrowRight className="w-5 h-5 ml-2 inline" />
                        </button>
                        <button className="px-10 py-3 rounded-xl border border-white/60 text-white bg-white/10 backdrop-blur-sm transition-all duration-200 hover:text-emerald-400 hover:bg-white/20 hover:border-white/80 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:px-12" onClick={goContact}>
                            Speak with Expert
                            <HeartHandshake className="w-4 h-4 ml-2 inline" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
