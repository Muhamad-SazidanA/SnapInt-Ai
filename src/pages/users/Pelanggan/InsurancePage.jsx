import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CreditCard,
    FileText,
    TrendingUp,
    Shield,
    CheckCircle,
    ArrowRight,
    Heart,
    Car,
    Home,
    UserCheck,
    Calendar,
    BarChart3,
    Sparkles,
    Users,
    FileCheck,
    Calculator,
    Search,
    Quote
} from 'lucide-react';

// InsurancePage — JSX only, all content manual (no loops)
export default function InsurancePage() {
    const navigate = useNavigate();
    const goContact = () => navigate('/contact');

    return (
        <div className="bg-background ">
            {/* Hero */}
            <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center mb-6 px-4 py-2 text-sm bg-blue-50 text-gray-700 rounded-lg">
                            <CreditCard className="w-4 h-4 mr-2 text-primary-800" />
                            <span className="font-semibold">Insurance Solutions</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
                            Revolutionize Insurance Operations with AI-Powered Automation
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                            Transform claims processing, underwriting, and fraud detection with cutting-edge AI technology.
                            Trusted by 30+ insurance companies to deliver faster, more accurate, and cost-effective operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 rounded-lg bg-[#133E68] text-white flex items-center justify-center hover:bg-[#0F3053] transition-colors" onClick={goContact}>
                                Schedule Insurance Demo
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                            <button className="px-8 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-white" onClick={goContact}>
                                Speak with Insurance Expert
                            </button>
                        </div>
                    </div>

                    {/* Stats (manual) */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <CreditCard className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">30+</div>
                            <div className="font-medium mb-2">Insurance Companies</div>
                            <div className="text-sm text-muted-foreground">Leading insurers across Indonesia</div>
                        </div>
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <FileText className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">5M+</div>
                            <div className="font-medium mb-2">Claims/Month</div>
                            <div className="text-sm text-muted-foreground">Processed with AI automation</div>
                        </div>
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">78%</div>
                            <div className="font-medium mb-2">Faster Claims</div>
                            <div className="text-sm text-muted-foreground">Average processing acceleration</div>
                        </div>
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Shield className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">99.7%</div>
                            <div className="font-medium mb-2">Accuracy Rate</div>
                            <div className="text-sm text-muted-foreground">In claims assessment</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases (4 cards, colored) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Insurance Use Cases</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Comprehensive AI solutions for every aspect of insurance operations</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* 1. Claims Processing Automation (blue) */}
                        <div className="rounded-2xl border hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center">
                                        <FileCheck className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Claims Processing Automation</h3>
                                </div>
                                <p className="text-slate-600">Automate end-to-end claims workflows from submission to settlement</p>
                                <div className="mt-6"><h5 className="font-semibold mb-2 text-red-600">Challenge:</h5><p className="text-sm text-muted-foreground">Manual claims processing taking 2-4 weeks with high error rates and customer dissatisfaction</p></div>
                                <div className="mt-4"><h5 className="font-semibold mb-2 text-blue-600">Solution:</h5><p className="text-sm text-muted-foreground">AI-powered document extraction, damage assessment, and automated workflow routing</p></div>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Reduce claims processing time from 3 weeks to 3 days</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Automated damage assessment from photos/videos</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Real-time fraud detection and prevention</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Seamless integration with existing systems</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Enhanced customer satisfaction and NPS</li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg p-4 bg-blue-50 border border-blue-200">
                                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center"><div className="font-bold text-lg">78%</div><div className="text-muted-foreground">time reduction</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">Rp 1.8B/year</div><div className="text-muted-foreground">cost saving</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">99.7%</div><div className="text-muted-foreground">accuracy</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">+40%</div><div className="text-muted-foreground">satisfaction</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Policy Underwriting Intelligence (green) */}
                        <div className="rounded-2xl border hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-green-500 to-green-600" />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center">
                                        <Calculator className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Policy Underwriting Intelligence</h3>
                                </div>
                                <p className="text-slate-600">Intelligent risk assessment and automated policy underwriting</p>
                                <div className="mt-6"><h5 className="font-semibold mb-2 text-red-600">Challenge:</h5><p className="text-sm text-muted-foreground">Complex underwriting requiring manual review of multiple documents and risk factors</p></div>
                                <div className="mt-4"><h5 className="font-semibold mb-2 text-green-600">Solution:</h5><p className="text-sm text-muted-foreground">AI-driven risk analysis, automated premium calculation, and intelligent policy recommendations</p></div>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Accelerate underwriting decisions from 7 days to 24 hours</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Automated risk scoring and premium calculation</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Comprehensive applicant background verification</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Dynamic pricing based on risk profiles</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Improved underwriting accuracy and profitability</li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg p-4 bg-green-50 border border-green-200">
                                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center"><div className="font-bold text-lg">85%</div><div className="text-muted-foreground">time reduction</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">+35%</div><div className="text-muted-foreground">accuracy</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">+25%</div><div className="text-muted-foreground">profitability</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">+200%</div><div className="text-muted-foreground">capacity</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Medical Claims Review (purple) */}
                        <div className="rounded-2xl border hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-purple-500 to-purple-600" />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-purple-100 text-purple-600 flex items-center justify-center">
                                        <Heart className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Medical Claims Review</h3>
                                </div>
                                <p className="text-slate-600">Automated medical claims processing and healthcare document analysis</p>
                                <div className="mt-6"><h5 className="font-semibold mb-2 text-red-600">Challenge:</h5><p className="text-sm text-muted-foreground">Complex medical claims requiring specialized knowledge and lengthy review processes</p></div>
                                <div className="mt-4"><h5 className="font-semibold mb-2 text-purple-600">Solution:</h5><p className="text-sm text-muted-foreground">Medical AI that understands healthcare terminology and automates clinical document review</p></div>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Process medical claims in real-time</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Automated medical coding and billing</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Clinical decision support integration</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Regulatory compliance (BPJS, Ministry of Health)</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Reduced medical review costs by 60%</li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg p-4 bg-purple-50 border border-purple-200">
                                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center"><div className="font-bold text-lg">70%</div><div className="text-muted-foreground">time reduction</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">60%</div><div className="text-muted-foreground">cost reduction</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">99.5%</div><div className="text-muted-foreground">accuracy</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">100%</div><div className="text-muted-foreground">compliance</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Fraud Detection & Prevention (red) */}
                        <div className="rounded-2xl border hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-red-500 to-red-600" />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-red-100 text-red-600 flex items-center justify-center">
                                        <Search className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Fraud Detection & Prevention</h3>
                                </div>
                                <p className="text-slate-600">Advanced AI-powered fraud detection across all insurance lines</p>
                                <div className="mt-6"><h5 className="font-semibold mb-2 text-red-600">Challenge:</h5><p className="text-sm text-muted-foreground">Increasing insurance fraud leading to significant financial losses and investigation costs</p></div>
                                <div className="mt-4"><h5 className="font-semibold mb-2 text-red-600">Solution:</h5><p className="text-sm text-muted-foreground">Machine learning models that detect patterns and anomalies indicating potential fraud</p></div>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Real-time fraud scoring and alerts</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Automated investigation workflow</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Pattern recognition across claims history</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Integration with external fraud databases</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Reduce fraud losses by 65%</li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg p-4 bg-red-50 border border-red-200">
                                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center"><div className="font-bold text-lg">+65%</div><div className="text-muted-foreground">fraud detection</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">-50%</div><div className="text-muted-foreground">false positives</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">+90%</div><div className="text-muted-foreground">investigations</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">Rp 2.2B/year</div><div className="text-muted-foreground">savings</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions by Insurance Line */}
            <section className="py-24 bg-accent/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Solutions by Insurance Line</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Tailored AI solutions for every type of insurance product</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Life Insurance */}
                        <div className="hover:shadow-lg transition-shadow duration-300 p-6 text-center rounded-2xl border bg-white">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Life Insurance</h3>
                            <div className="mb-4">
                                <h4 className="font-medium mb-2 text-sm">Use Cases:</h4>
                                <div className="text-xs space-x-1 space-y-1">
                                    <span className="inline-block border rounded px-2 py-1">Policy Applications</span>
                                    <span className="inline-block border rounded px-2 py-1">Medical Underwriting</span>
                                    <span className="inline-block border rounded px-2 py-1">Claims Processing</span>
                                    <span className="inline-block border rounded px-2 py-1">Beneficiary Verification</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                                <ul className="space-y-1 text-xs text-muted-foreground text-left inline-block">
                                    <li>• Faster policy issuance</li>
                                    <li>• Improved risk assessment</li>
                                    <li>• Streamlined claims</li>
                                </ul>
                            </div>
                        </div>

                        {/* Motor Insurance */}
                        <div className="hover:shadow-lg transition-shadow duration-300 p-6 text-center rounded-2xl border bg-white">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Car className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Motor Insurance</h3>
                            <div className="mb-4">
                                <h4 className="font-medium mb-2 text-sm">Use Cases:</h4>
                                <div className="text-xs space-x-1 space-y-1">
                                    <span className="inline-block border rounded px-2 py-1">Instant Policy Quotes</span>
                                    <span className="inline-block border rounded px-2 py-1">Damage Assessment</span>
                                    <span className="inline-block border rounded px-2 py-1">Claims Automation</span>
                                    <span className="inline-block border rounded px-2 py-1">Vehicle Verification</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                                <ul className="space-y-1 text-xs text-muted-foreground text-left inline-block">
                                    <li>• Real-time quotes</li>
                                    <li>• Photo-based damage assessment</li>
                                    <li>• Faster settlements</li>
                                </ul>
                            </div>
                        </div>

                        {/* Property Insurance */}
                        <div className="hover:shadow-lg transition-shadow duration-300 p-6 text-center rounded-2xl border bg-white">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Home className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Property Insurance</h3>
                            <div className="mb-4">
                                <h4 className="font-medium mb-2 text-sm">Use Cases:</h4>
                                <div className="text-xs space-x-1 space-y-1">
                                    <span className="inline-block border rounded px-2 py-1">Property Valuation</span>
                                    <span className="inline-block border rounded px-2 py-1">Risk Assessment</span>
                                    <span className="inline-block border rounded px-2 py-1">Claims Investigation</span>
                                    <span className="inline-block border rounded px-2 py-1">Repair Estimates</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                                <ul className="space-y-1 text-xs text-muted-foreground text-left inline-block">
                                    <li>• Accurate valuations</li>
                                    <li>• Risk-based pricing</li>
                                    <li>• Automated settlements</li>
                                </ul>
                            </div>
                        </div>

                        {/* Health Insurance */}
                        <div className="hover:shadow-lg transition-shadow duration-300 p-6 text-center rounded-2xl border bg-white">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <UserCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold mb-4">Health Insurance</h3>
                            <div className="mb-4">
                                <h4 className="font-medium mb-2 text-sm">Use Cases:</h4>
                                <div className="text-xs space-x-1 space-y-1">
                                    <span className="inline-block border rounded px-2 py-1">Medical Claims</span>
                                    <span className="inline-block border rounded px-2 py-1">Provider Networks</span>
                                    <span className="inline-block border rounded px-2 py-1">Pre-authorization</span>
                                    <span className="inline-block border rounded px-2 py-1">Case Management</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2 text-sm">Key Benefits:</h4>
                                <ul className="space-y-1 text-xs text-muted-foreground text-left inline-block">
                                    <li>• Faster reimbursements</li>
                                    <li>• Cost control</li>
                                    <li>• Better outcomes</li>
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
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">How a leading insurer transformed their operations with snapint</p>
                    </div>

                    <div className="overflow-hidden max-w-6xl mx-auto rounded-2xl border">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-8 text-white">
                            <div className="flex items-center gap-4 mb-6">
                                <CreditCard className="w-12 h-12" />
                                <div>
                                    <h3 className="text-2xl font-semibold">Major Indonesian Insurance Company</h3>
                                    <p className="opacity-90">Leading insurer processing 100K+ claims annually across multiple product lines</p>
                                </div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-6 mb-6">
                                <Quote className="w-8 h-8 mb-4 opacity-90" />
                                <p className="text-lg italic mb-4">"snapint revolutionized our claims operation. We now provide customers with lightning-fast service while maintaining the highest levels of accuracy and fraud protection."</p>
                                <p className="text-sm opacity-90">- Chief Claims Officer</p>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold mb-4 text-red-600">Challenge:</h4>
                                    <p className="text-muted-foreground mb-6">Manual claims processing creating customer dissatisfaction and operational inefficiencies</p>
                                    <h4 className="font-semibold mb-4 text-blue-600">Implementation:</h4>
                                    <p className="text-muted-foreground mb-4">Deployed snapint across motor, property, and health insurance claims workflows</p>
                                    <div className="flex items-center text-sm text-muted-foreground"><Calendar className="w-4 h-4 mr-2" /> Timeline: 8 weeks phased implementation</div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-4 text-green-600">Measurable Results:</h4>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Claims processing time: 3 weeks → 3 days (78% reduction)</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Customer satisfaction: +40% improvement in NPS scores</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Operational cost reduction: Rp 1.8B annually</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Fraud detection rate: +65% improvement</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Processing capacity: +200% without additional staff</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> First-call resolution: +55% improvement</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regulatory Compliance */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Regulatory Compliance</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Built-in compliance with Indonesian and international insurance regulations</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="rounded-2xl border bg-white p-6 hover:shadow-lg">
                            <div className="flex items-center gap-3 mb-4"><Shield className="w-8 h-8 text-primary" /><h3 className="font-semibold text-lg">OJK Insurance Regulations</h3></div>
                            <p className="text-muted-foreground mb-4">Full compliance with Indonesian financial services authority requirements</p>
                            <h4 className="font-medium mb-3">Coverage Areas:</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Solvency requirements</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Consumer protection</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Risk management</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Reporting standards</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border bg-white p-6 hover:shadow-lg">
                            <div className="flex items-center gap-3 mb-4"><Shield className="w-8 h-8 text-primary" /><h3 className="font-semibold text-lg">Data Protection Laws</h3></div>
                            <p className="text-muted-foreground mb-4">Comprehensive data privacy and security compliance</p>
                            <h4 className="font-medium mb-3">Coverage Areas:</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Personal data protection</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Consent management</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Data retention</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Cross-border transfers</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border bg-white p-6 hover:shadow-lg">
                            <div className="flex items-center gap-3 mb-4"><Shield className="w-8 h-8 text-primary" /><h3 className="font-semibold text-lg">Anti-Money Laundering</h3></div>
                            <p className="text-muted-foreground mb-4">AML/CFT compliance for insurance transactions</p>
                            <h4 className="font-medium mb-3">Coverage Areas:</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Customer due diligence</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Transaction monitoring</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Suspicious activity reporting</li>
                                <li className="flex"><CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1" /> Record keeping</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Transform Your Insurance Operations Today</h2>
                    <p className="text-xl mb-10 opacity-90">Join 30+ leading insurance companies that have revolutionized their operations with snapint. See how AI can accelerate your claims, underwriting, and fraud detection processes.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-10 py-3 rounded-lg bg-white text-purple-700" onClick={goContact}>
                            Schedule Insurance Demo
                            <ArrowRight className="w-5 h-5 ml-2 inline" />
                        </button>
                        <button className="px-10 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-purple-700" onClick={goContact}>
                            Speak with Expert
                            <Users className="w-4 h-4 ml-2 inline" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
