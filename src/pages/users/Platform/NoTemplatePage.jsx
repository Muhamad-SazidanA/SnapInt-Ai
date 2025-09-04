import React from 'react';
import {
    Zap,
    CheckCircle,
    ArrowRight,
    Target,
    Brain,
    Cpu,
    Settings,
    Eye,
    MessageCircle,
} from 'lucide-react';

export default function NoTemplatePage() {
    const handleNav = (url) => (window.location.href = url);

    return (
        <div className="bg-gray-50 text-gray-900 ">
            {/* Hero */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center mb-6 px-4 py-2 text-sm bg-blue-50 text-gray-700 rounded-lg">
                            <Zap className="w-4 h-4 mr-2 text-primary-800" />
                            <span className="font-semibold">No-Template Technology</span>
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Revolutionary No-Template Document Processing
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                            Bebas dari batasan template. AI kami memahami dan memproses format dokumen apapun tanpa konfigurasi awal — cepat, akurat, dan adaptif.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 rounded-lg bg-[#133E68] text-white hover:bg-[#0F3053] transition-colors inline-flex items-center justify-center" onClick={() => handleNav('/demo')}>
                                See No-Template in Action
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                            <button className="px-8 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-white inline-flex items-center justify-center" onClick={() => handleNav('/solusi/ai-processing')}>
                                Learn More About AI Processing
                            </button>
                        </div>
                    </div>

                    {/* Stats (manual, no loops) */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-primary-800 mx-auto mb-4">
                                <Brain className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary-800 mb-1">0</div>
                            <div className="font-medium mb-1">Templates Required</div>
                            <div className="text-sm text-gray-600">Works with any document format</div>
                        </div>
                        <div className="text-center bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-primary-800 mx-auto mb-4">
                                <Target className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary-800 mb-1">95%</div>
                            <div className="font-medium mb-1">Faster Setup</div>
                            <div className="text-sm text-gray-600">Compared to template-based solutions</div>
                        </div>
                        <div className="text-center bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-primary-800 mx-auto mb-4">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary-800 mb-1">99.3%</div>
                            <div className="font-medium mb-1">Accuracy Rate</div>
                            <div className="text-sm text-gray-600">Without pre-configured templates</div>
                        </div>
                        <div className="text-center bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-primary-800 mx-auto mb-4">
                                <Zap className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-primary-800 mb-1">&lt; 2 min</div>
                            <div className="font-medium mb-1">Processing Time</div>
                            <div className="text-sm text-gray-600">Per document, any format</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Advantages (4 blocks, manual) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Revolutionary Advantages</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Bagaimana no-template mengubah pemrosesan dokumen menjadi simpel</p>
                    </div>

                    {/* Advantage 1 */}
                    <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow overflow-hidden mb-10">
                        <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center text-primary-800"><Eye className="w-12 h-12" /></div>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">Universal Document Understanding</h3>
                                        <p className="text-gray-600 text-lg">AI memahami struktur dan konteks tanpa template</p>
                                    </div>
                                </div>
                                <h4 className="font-semibold mb-3">Key Benefits:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Works with any document format out-of-the-box</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Automatically adapts to new document types</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Handles layout variations</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Multi-language documents</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Understands relationships between data</li>
                                </ul>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary-50 to-primary-100 h-full">
                                    <h4 className="font-semibold mb-6">Traditional vs snapint</h4>
                                    <div className="space-y-6 text-sm">
                                        <div>
                                            <div className="flex items-center mb-2"><span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>Traditional Approach</div>
                                            <p className="text-gray-600 ml-5">Manual template creation for each document type</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-2"><span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>snapint</div>
                                            <p className="text-gray-600 ml-5">Instantly processes any document without setup</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Advantage 2 */}
                    <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow overflow-hidden mb-10">
                        <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center text-primary-800"><Brain className="w-12 h-12" /></div>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">Intelligent Field Recognition</h3>
                                        <p className="text-gray-600 text-lg">Ekstraksi informasi berdasarkan makna, bukan posisi</p>
                                    </div>
                                </div>
                                <h4 className="font-semibold mb-3">Key Benefits:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Recognizes fields by semantic meaning</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Handles complex nested data</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Extracts structured and unstructured content</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Preserves relationships and hierarchy</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Continuous learning from usage</li>
                                </ul>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary-50 to-primary-100 h-full">
                                    <h4 className="font-semibold mb-6">Traditional vs snapint</h4>
                                    <div className="space-y-6 text-sm">
                                        <div>
                                            <div className="flex items-center mb-2"><span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>Traditional Approach</div>
                                            <p className="text-gray-600 ml-5">Fixed field mapping based on coordinates</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-2"><span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>snapint</div>
                                            <p className="text-gray-600 ml-5">Dynamic recognition based on content</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Advantage 3 */}
                    <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow overflow-hidden mb-10">
                        <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center text-primary-800"><Zap className="w-12 h-12" /></div>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">Zero Configuration Deployment</h3>
                                        <p className="text-gray-600 text-lg">Mulai memproses dokumen tanpa setup</p>
                                    </div>
                                </div>
                                <h4 className="font-semibold mb-3">Key Benefits:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />No template creation or training required</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Instant deployment and ROI</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Handles document variations automatically</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Scales to new document types</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Minutes to start processing</li>
                                </ul>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary-50 to-primary-100 h-full">
                                    <h4 className="font-semibold mb-6">Traditional vs snapint</h4>
                                    <div className="space-y-6 text-sm">
                                        <div>
                                            <div className="flex items-center mb-2"><span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>Traditional Approach</div>
                                            <p className="text-gray-600 ml-5">Weeks of template creation and testing</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-2"><span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>snapint</div>
                                            <p className="text-gray-600 ml-5">Minutes to go live</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Advantage 4 */}
                    <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow overflow-hidden">
                        <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center text-primary-800"><Cpu className="w-12 h-12" /></div>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">Self-Learning & Adaptation</h3>
                                        <p className="text-gray-600 text-lg">Akurasi meningkat seiring penggunaan</p>
                                    </div>
                                </div>
                                <h4 className="font-semibold mb-3">Key Benefits:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Learns from your document patterns</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Improves accuracy continuously</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Adapts to terminology</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Handles edge cases automatically</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />Updates without manual intervention</li>
                                </ul>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary-50 to-primary-100 h-full">
                                    <h4 className="font-semibold mb-6">Traditional vs snapint</h4>
                                    <div className="space-y-6 text-sm">
                                        <div>
                                            <div className="flex items-center mb-2"><span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>Traditional Approach</div>
                                            <p className="text-gray-600 ml-5">Manual updates and template modifications</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-2"><span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>snapint</div>
                                            <p className="text-gray-600 ml-5">Automatic improvement and adaptation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Architecture (manual) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Architecture</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Komponen AI yang mendasari no-template understanding</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center"><Settings className="w-6 h-6 text-primary-800" /></div>
                                <div>
                                    <h3 className="text-lg font-semibold">Computer Vision Engine</h3>
                                    <p className="text-gray-600 text-sm">Advanced OCR with layout understanding</p>
                                </div>
                            </div>
                            <h4 className="font-medium mb-3">Key Capabilities:</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Multi-format document parsing</li>
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Table and form recognition</li>
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Handwriting detection</li>
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Image quality enhancement</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center"><Settings className="w-6 h-6 text-primary-800" /></div>
                                <div>
                                    <h3 className="text-lg font-semibold">Natural Language Processing</h3>
                                    <p className="text-gray-600 text-sm">Contextual understanding of content</p>
                                </div>
                            </div>
                            <h4 className="font-medium mb-3">Key Capabilities:</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Named entity recognition</li>
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Relationship extraction</li>
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Semantic field mapping</li>
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Multi-language support</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center"><Settings className="w-6 h-6 text-primary-800" /></div>
                                <div>
                                    <h3 className="text-lg font-semibold">Machine Learning Models</h3>
                                    <p className="text-gray-600 text-sm">Proprietary models trained on millions of docs</p>
                                </div>
                            </div>
                            <h4 className="font-medium mb-3">Key Capabilities:</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Document classification</li>
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Field prediction</li>
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Content validation</li>
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Anomaly detection</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center"><Settings className="w-6 h-6 text-primary-800" /></div>
                                <div>
                                    <h3 className="text-lg font-semibold">Adaptive Learning System</h3>
                                    <p className="text-gray-600 text-sm">Continuous improvement with usage patterns</p>
                                </div>
                            </div>
                            <h4 className="font-medium mb-3">Key Capabilities:</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Performance optimization</li>
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Accuracy enhancement</li>
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />Pattern recognition</li>
                                <li className="flex items-start"><Cpu className="w-3 h-3 text-primary-800 mr-2 mt-1" />User feedback integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Case Examples (manual) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real-World Applications</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Contoh penerapan di berbagai industri</p>
                    </div>
                    <div className="space-y-8">
                        {/* Banking */}
                        <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                                    <div className="lg:col-span-1">
                                        <span className="inline-block text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-lg mb-3">Banking</span>
                                        <h3 className="font-semibold text-lg mb-2">Processing loan applications with varying formats</h3>
                                    </div>
                                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <h4 className="font-medium mb-2 text-red-600">Challenge</h4>
                                            <p className="text-sm text-gray-600">Each partner uses different application formats; templates impractical</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-2 text-primary-800">Solution</h4>
                                            <p className="text-sm text-gray-600">No-template AI extracts info regardless of format</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-2 text-green-700">Result</h4>
                                            <p className="text-sm font-medium text-green-800 bg-green-50 p-3 rounded-lg">100% of partner documents processed without custom templates</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Insurance */}
                        <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                                    <div className="lg:col-span-1">
                                        <span className="inline-block text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-lg mb-3">Insurance</span>
                                        <h3 className="font-semibold text-lg mb-2">Claims documents from multiple sources and formats</h3>
                                    </div>
                                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <h4 className="font-medium mb-2 text-red-600">Challenge</h4>
                                            <p className="text-sm text-gray-600">Claims arrive as emails, PDFs, images, and handwritten forms</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-2 text-primary-800">Solution</h4>
                                            <p className="text-sm text-gray-600">Universal document understanding processes all formats uniformly</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-2 text-green-700">Result</h4>
                                            <p className="text-sm font-medium text-green-800 bg-green-50 p-3 rounded-lg">85% reduction in manual claims processing time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Healthcare */}
                        <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                                    <div className="lg:col-span-1">
                                        <span className="inline-block text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-lg mb-3">Healthcare</span>
                                        <h3 className="font-semibold text-lg mb-2">Medical records from different healthcare systems</h3>
                                    </div>
                                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <h4 className="font-medium mb-2 text-red-600">Challenge</h4>
                                            <p className="text-sm text-gray-600">Patient records vary significantly across providers</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-2 text-primary-800">Solution</h4>
                                            <p className="text-sm text-gray-600">AI understands medical terminology and structures</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-2 text-green-700">Result</h4>
                                            <p className="text-sm font-medium text-green-800 bg-green-50 p-3 rounded-lg">99.5% accuracy in patient data extraction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competitive Advantage (manual table) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why No-Template Approach Wins</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Keunggulan terukur dibanding pendekatan berbasis template</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-primary-800 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                                    <th className="px-6 py-4 text-left font-semibold">Traditional</th>
                                    <th className="px-6 py-4 text-left font-semibold">snapint</th>
                                    <th className="px-6 py-4 text-left font-semibold">Advantage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="px-6 py-4 font-medium">Implementation Time</td>
                                    <td className="px-6 py-4 text-gray-600">6-12 weeks (template creation)</td>
                                    <td className="px-6 py-4 text-green-700 font-medium">1-2 days (immediate deployment)</td>
                                    <td className="px-6 py-4"><span className="inline-flex px-3 py-1 rounded-lg bg-green-100 text-green-800 text-sm">95% faster</span></td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-6 py-4 font-medium">Maintenance Overhead</td>
                                    <td className="px-6 py-4 text-gray-600">High (continuous template updates)</td>
                                    <td className="px-6 py-4 text-green-700 font-medium">Zero (self-adapting AI)</td>
                                    <td className="px-6 py-4"><span className="inline-flex px-3 py-1 rounded-lg bg-green-100 text-green-800 text-sm">-90% cost</span></td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-6 py-4 font-medium">Scalability</td>
                                    <td className="px-6 py-4 text-gray-600">Limited (new templates for each type)</td>
                                    <td className="px-6 py-4 text-green-700 font-medium">Unlimited (handles any document)</td>
                                    <td className="px-6 py-4"><span className="inline-flex px-3 py-1 rounded-lg bg-green-100 text-green-800 text-sm">Scale freely</span></td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-6 py-4 font-medium">Accuracy with Variations</td>
                                    <td className="px-6 py-4 text-gray-600">Breaks with format changes</td>
                                    <td className="px-6 py-4 text-green-700 font-medium">Maintains accuracy across variations</td>
                                    <td className="px-6 py-4"><span className="inline-flex px-3 py-1 rounded-lg bg-green-100 text-green-800 text-sm">99%+ accuracy</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-[#0B2A45] to-[#1D4E89] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Experience the Future of Document Processing</h2>
                    <p className="text-lg sm:text-xl mb-10 opacity-90">Stop being limited by templates. Lihat bagaimana AI kami memproses dokumen apa pun tanpa setup.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-10 py-3 rounded-lg bg-white text-primary-800 hover:bg-gray-100 inline-flex items-center justify-center font-medium" onClick={() => handleNav('/demo')}>
                            See No-Template Demo
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                        <button className="px-10 py-3 rounded-lg border border-white/80 text-white hover:bg-white hover:text-primary-800 inline-flex items-center justify-center font-medium" onClick={() => handleNav('/contact')}>
                            Discuss Your Use Case
                            <MessageCircle className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
