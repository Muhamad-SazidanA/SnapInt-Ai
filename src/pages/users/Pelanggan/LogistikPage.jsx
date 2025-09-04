import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Truck,
    CheckCircle,
    ArrowRight,
    Users,
    Ship,
    Globe,
    Route as RouteIcon,
    Package,
    Sparkles,
    Quote,
    Calendar,
    BarChart3,
} from 'lucide-react';

// LogistikPage (Logistics) — JSX only, manual content (no loops)
export default function LogistikPage() {
    const navigate = useNavigate();
    const goContact = () => navigate('/contact');

    return (
        <div className="bg-background ">
            {/* Hero */}
            <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center mb-6 px-4 py-2 text-sm bg-blue-50 text-gray-700 rounded-lg">
                            <Truck className="w-4 h-4 mr-2 text-primary-800" />
                            <span className="font-semibold">Logistics Solutions</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
                            Accelerate Global Trade with AI-Powered Document Processing
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                            Streamline shipping documentation, customs clearance, and supply chain workflows with intelligent automation.
                            Trusted by 25+ logistics companies to deliver faster, error-free international trade operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 rounded-lg bg-[#133E68] text-white flex items-center justify-center hover:bg-[#0F3053] transition-colors" onClick={goContact}>
                                Schedule Logistics Demo
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                            <button className="px-8 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-white" onClick={goContact}>
                                Speak with Logistics Expert
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Truck className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">25+</div>
                            <div className="font-medium mb-2">Logistics Partners</div>
                            <div className="text-sm text-muted-foreground">Leading logistics companies</div>
                        </div>
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Package className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                            <div className="font-medium mb-2">Shipments/Month</div>
                            <div className="text-sm text-muted-foreground">Processed with AI automation</div>
                        </div>
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">65%</div>
                            <div className="font-medium mb-2">Processing Speed</div>
                            <div className="text-sm text-muted-foreground">Faster document handling</div>
                        </div>
                        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                                <Globe className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary mb-2">100%</div>
                            <div className="font-medium mb-2">Customs Compliance</div>
                            <div className="text-sm text-muted-foreground">Automated compliance checks</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Logistics Use Cases</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Comprehensive AI solutions for modern logistics and supply chain operations</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* 1. Shipping Documentation Automation (blue) */}
                        <div className="rounded-2xl border hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center">
                                        <Ship className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Shipping Documentation Automation</h3>
                                </div>
                                <p className="text-slate-600">Automate bill of lading, commercial invoices, and shipping manifests</p>
                                <div className="mt-6"><h5 className="font-semibold mb-2 text-red-600">Challenge:</h5><p className="text-sm text-muted-foreground">Manual processing of shipping documents causing delays and errors in international trade</p></div>
                                <div className="mt-4"><h5 className="font-semibold mb-2 text-blue-600">Solution:</h5><p className="text-sm text-muted-foreground">AI-powered extraction and validation of shipping documents with real-time tracking integration</p></div>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Process shipping documents in real-time</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Automated customs documentation</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Real-time shipment tracking updates</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Integration with carrier systems</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Reduced shipping delays by 80%</li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg p-4 bg-blue-50 border border-blue-200">
                                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center"><div className="font-bold text-lg">80%</div><div className="text-muted-foreground">time reduction</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">99.5%</div><div className="text-muted-foreground">accuracy</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">100%</div><div className="text-muted-foreground">compliance</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">Rp 38M/year</div><div className="text-muted-foreground">cost saving</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Customs Clearance Automation (green) */}
                        <div className="rounded-2xl border hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-green-500 to-green-600" />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-green-100 text-green-600 flex items-center justify-center">
                                        <Globe className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Customs Clearance Automation</h3>
                                </div>
                                <p className="text-slate-600">Streamline customs documentation and clearance processes</p>
                                <div className="mt-6"><h5 className="font-semibold mb-2 text-red-600">Challenge:</h5><p className="text-sm text-muted-foreground">Complex customs requirements and manual document preparation causing border delays</p></div>
                                <div className="mt-4"><h5 className="font-semibold mb-2 text-green-600">Solution:</h5><p className="text-sm text-muted-foreground">Intelligent customs document generation with automated compliance verification</p></div>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Automated customs forms generation</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Real-time duty and tax calculations</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Compliance with international trade regulations</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Integration with customs authorities</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Faster border clearance times</li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg p-4 bg-green-50 border border-green-200">
                                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center"><div className="font-bold text-lg">75%</div><div className="text-muted-foreground">clearance time</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">100%</div><div className="text-muted-foreground">compliance</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">-90%</div><div className="text-muted-foreground">errors</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">+200%</div><div className="text-muted-foreground">efficiency</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Vendor Management & Onboarding (purple) */}
                        <div className="rounded-2xl border hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-purple-500 to-purple-600" />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-purple-100 text-purple-600 flex items-center justify-center">
                                        <Users className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Vendor Management & Onboarding</h3>
                                </div>
                                <p className="text-slate-600">Digitize vendor registration and compliance documentation</p>
                                <div className="mt-6"><h5 className="font-semibold mb-2 text-red-600">Challenge:</h5><p className="text-sm text-muted-foreground">Manual vendor onboarding taking weeks with extensive document verification</p></div>
                                <div className="mt-4"><h5 className="font-semibold mb-2 text-purple-600">Solution:</h5><p className="text-sm text-muted-foreground">Automated vendor document processing and compliance verification workflows</p></div>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Accelerate vendor onboarding from weeks to days</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Automated compliance and certification tracking</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Digital vendor portal with document management</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Risk assessment and scoring automation</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Continuous compliance monitoring</li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg p-4 bg-purple-50 border border-purple-200">
                                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center"><div className="font-bold text-lg">85%</div><div className="text-muted-foreground">onboarding time</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">100%</div><div className="text-muted-foreground">compliance</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">70%</div><div className="text-muted-foreground">risk reduction</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">+150%</div><div className="text-muted-foreground">efficiency</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Supply Chain Visibility (red) */}
                        <div className="rounded-2xl border hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-full h-2 bg-gradient-to-r from-red-500 to-red-600" />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-20 h-20 rounded-3xl bg-red-100 text-red-600 flex items-center justify-center">
                                        <RouteIcon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Supply Chain Visibility</h3>
                                </div>
                                <p className="text-slate-600">End-to-end supply chain documentation and tracking</p>
                                <div className="mt-6"><h5 className="font-semibold mb-2 text-red-600">Challenge:</h5><p className="text-sm text-muted-foreground">Limited visibility across complex supply chains with multiple stakeholders</p></div>
                                <div className="mt-4"><h5 className="font-semibold mb-2 text-red-600">Solution:</h5><p className="text-sm text-muted-foreground">Unified document processing platform providing real-time supply chain insights</p></div>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Real-time supply chain visibility</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Automated milestone tracking</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Exception management and alerts</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Supplier performance analytics</li>
                                        <li className="flex"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" /> Inventory optimization insights</li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg p-4 bg-red-50 border border-red-200">
                                    <h5 className="font-semibold mb-3">Typical Results:</h5>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center"><div className="font-bold text-lg">100%</div><div className="text-muted-foreground">visibility</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">+65%</div><div className="text-muted-foreground">efficiency</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">-45%</div><div className="text-muted-foreground">costs</div></div>
                                        <div className="text-center"><div className="font-bold text-lg">+50%</div><div className="text-muted-foreground">satisfaction</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Story */}
            <section className="py-24 bg-accent/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Customer Success Story</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">How a major logistics company revolutionized operations with AI</p>
                    </div>

                    <div className="overflow-hidden max-w-6xl mx-auto rounded-2xl border">
                        <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-8 text-white">
                            <div className="flex items-center gap-4 mb-6">
                                <Truck className="w-12 h-12" />
                                <div>
                                    <h3 className="text-2xl font-semibold">Major Indonesian Logistics Company</h3>
                                    <p className="opacity-90">Leading provider handling 500K+ shipments monthly across 15 countries</p>
                                </div>
                            </div>
                            <div className="rounded-xl p-6 mb-6 bg-white/10 border border-white/15">
                                <Quote className="w-8 h-8 mb-4 opacity-90" />
                                <p className="text-lg italic mb-4">"snapint transformed our entire documentation workflow. We now handle 3x more shipments with the same team while maintaining perfect compliance across all markets."</p>
                                <p className="text-sm opacity-90">- Chief Operations Officer</p>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold mb-4 text-red-600">Challenge:</h4>
                                    <p className="text-muted-foreground mb-6">Manual documentation processes causing shipping delays and customs issues</p>
                                    <h4 className="font-semibold mb-4 text-blue-600">Implementation:</h4>
                                    <p className="text-muted-foreground mb-4">Comprehensive automation of shipping and customs documentation workflows</p>
                                    <div className="flex items-center text-sm text-muted-foreground"><Calendar className="w-4 h-4 mr-2" /> Timeline: 10 weeks regional implementation</div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-4 text-green-600">Measurable Results:</h4>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Document processing time: 2 days → 4 hours (80% reduction)</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Customs clearance: 2 days → 6 hours average</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Shipping delays: -75% reduction in documentation-related delays</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Operational efficiency: +65% improvement</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Customer satisfaction: +50% improvement</li>
                                        <li className="flex"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /> Cross-border compliance: 100% accuracy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-orange-600 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Accelerate Your Global Supply Chain</h2>
                    <p className="text-xl mb-10 opacity-90">Join 25+ logistics leaders optimizing their operations with intelligent document processing. See how AI can streamline your shipping, customs, and supply chain workflows.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-10 py-3 rounded-xl bg-white/95 text-slate-900 shadow-sm transition-all duration-200 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:px-12" onClick={goContact}>
                            Schedule Logistics Demo
                            <ArrowRight className="w-5 h-5 ml-2 inline" />
                        </button>
                        <button className="px-10 py-3 rounded-xl border border-white/60 text-white bg-white/10 backdrop-blur-sm transition-all duration-200 hover:text-orange-400 hover:bg-white/20 hover:border-white/80 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:px-12" onClick={goContact}>
                            Speak with Expert
                            <Users className="w-4 h-4 ml-2 inline" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
