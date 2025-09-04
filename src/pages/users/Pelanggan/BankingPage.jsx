import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2, CheckCircle, ArrowRight, TrendingUp, Shield, Users,
  FileText, CreditCard, Lock, Globe, Sparkles, Quote, Calendar, BarChart3
} from 'lucide-react';

// NOTE: No data loops; all content is written directly in JSX
export default function BankingPage() {
  const navigate = useNavigate();
  const handleDemoClick = () => navigate('/contact');
  const handleContactClick = () => navigate('/contact');

  return (
    <div className="bg-background ">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-6 px-4 py-2 text-sm bg-blue-50 text-gray-700 rounded-lg">
              <Building2 className="w-4 h-4 mr-2 text-primary-800" />
              <span className="font-semibold">Banking Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 leading-tight">
              Transform Banking Operations with AI Document Processing
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Automate KYC, credit processing, and compliance workflows with industry-leading AI technology.
              Trusted by 50+ banks across Indonesia to accelerate digital transformation while ensuring regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-lg bg-[#133E68] text-white flex items-center justify-center hover:bg-[#0F3053] transition-colors" onClick={handleDemoClick}>
                Schedule Banking Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-white" onClick={handleContactClick}>
                Speak with Banking Expert
              </button>
            </div>
          </div>

          {/* Banking Stats (no map) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="font-medium mb-2">Bank Customers</div>
              <div className="text-sm text-muted-foreground">Leading banks across Indonesia</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">10M+</div>
              <div className="font-medium mb-2">Documents/Month</div>
              <div className="text-sm text-muted-foreground">Processed for banking sector</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="font-medium mb-2">Time Reduction</div>
              <div className="text-sm text-muted-foreground">Average processing time saved</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
              <div className="font-medium mb-2">Accuracy Rate</div>
              <div className="text-sm text-muted-foreground">In document processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Use Cases (no map) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Banking Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions for every aspect of modern banking operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/20 rounded-2xl">
              <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-20 h-20 rounded-3xl flex items-center justify-center bg-blue-100 text-blue-600">
                    <Users className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Digital Customer Onboarding & KYC</h3>
                  </div>
                </div>
                <p className="text-base text-slate-600">Automate customer verification and compliance processes</p>

                <div className="mt-6">
                  <h5 className="font-semibold mb-2 text-red-600">Challenge:</h5>
                  <p className="text-sm text-muted-foreground">Manual KYC processes taking 3-5 days with high error rates and compliance risks</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold mb-2 text-blue-600">Solution:</h5>
                  <p className="text-sm text-muted-foreground">AI-powered identity verification, document authentication, and automated compliance checks</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Reduce onboarding time from 5 days to 2 hours</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />99.5% accuracy in identity verification</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Automatic fraud detection and prevention</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Full regulatory compliance (OJK, BI)</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Enhanced customer experience</li>
                  </ul>
                </div>
                <div className="mt-6 rounded-lg p-4 bg-blue-50 border border-blue-200">
                  <h5 className="font-semibold mb-3">Typical Results:</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center"><div className="font-bold text-lg">92%</div><div className="text-muted-foreground">time reduction</div></div>
                    <div className="text-center"><div className="font-bold text-lg">Rp 2.4B/year</div><div className="text-muted-foreground">cost saving</div></div>
                    <div className="text-center"><div className="font-bold text-lg">99.5%</div><div className="text-muted-foreground">accuracy</div></div>
                    <div className="text-center"><div className="font-bold text-lg">100%</div><div className="text-muted-foreground">compliance</div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/20 rounded-2xl">
              <div className="w-full h-2 bg-gradient-to-r from-green-500 to-green-600" />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-20 h-20 rounded-3xl flex items-center justify-center bg-green-100 text-green-600">
                    <CreditCard className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Credit Application Processing</h3>
                  </div>
                </div>
                <p className="text-base text-slate-600">Streamline loan origination and credit assessment workflows</p>

                <div className="mt-6">
                  <h5 className="font-semibold mb-2 text-red-600">Challenge:</h5>
                  <p className="text-sm text-muted-foreground">Complex credit applications requiring manual review of multiple documents and lengthy approval cycles</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold mb-2 text-blue-600">Solution:</h5>
                  <p className="text-sm text-muted-foreground">Automated document extraction, risk scoring, and intelligent workflow routing</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Accelerate credit decisions from 14 days to 2 days</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Automated risk assessment and scoring</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Real-time document verification</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Intelligent approval workflows</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Comprehensive audit trails</li>
                  </ul>
                </div>
                <div className="mt-6 rounded-lg p-4 bg-green-50 border border-green-200">
                  <h5 className="font-semibold mb-3">Typical Results:</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center"><div className="font-bold text-lg">85%</div><div className="text-muted-foreground">time reduction</div></div>
                    <div className="text-center"><div className="font-bold text-lg">99.2%</div><div className="text-muted-foreground">accuracy</div></div>
                    <div className="text-center"><div className="font-bold text-lg">300%</div><div className="text-muted-foreground">throughput</div></div>
                    <div className="text-center"><div className="font-bold text-lg">+45%</div><div className="text-muted-foreground">satisfaction</div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/20 rounded-2xl">
              <div className="w-full h-2 bg-gradient-to-r from-purple-500 to-purple-600" />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-20 h-20 rounded-3xl flex items-center justify-center bg-purple-100 text-purple-600">
                    <Globe className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Trade Finance Documentation</h3>
                  </div>
                </div>
                <p className="text-base text-slate-600">Digitize complex trade finance and international banking documents</p>

                <div className="mt-6">
                  <h5 className="font-semibold mb-2 text-red-600">Challenge:</h5>
                  <p className="text-sm text-muted-foreground">Manual processing of trade documents leading to delays and errors in international transactions</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold mb-2 text-blue-600">Solution:</h5>
                  <p className="text-sm text-muted-foreground">Intelligent extraction of LC, Invoice, and shipping documents with validation</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Process trade documents in real-time</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Automatic compliance checking</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Integration with SWIFT and banking systems</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Reduced operational risk</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Faster settlement times</li>
                  </ul>
                </div>
                <div className="mt-6 rounded-lg p-4 bg-purple-50 border border-purple-200">
                  <h5 className="font-semibold mb-3">Typical Results:</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center"><div className="font-bold text-lg">75%</div><div className="text-muted-foreground">time reduction</div></div>
                    <div className="text-center"><div className="font-bold text-lg">95%</div><div className="text-muted-foreground">error reduction</div></div>
                    <div className="text-center"><div className="font-bold text-lg">100%</div><div className="text-muted-foreground">compliance</div></div>
                    <div className="text-center"><div className="font-bold text-lg">+200%</div><div className="text-muted-foreground">throughput</div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/20 rounded-2xl">
              <div className="w-full h-2 bg-gradient-to-r from-red-500 to-red-600" />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-20 h-20 rounded-3xl flex items-center justify-center bg-red-100 text-red-600">
                    <Lock className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Anti-Money Laundering (AML)</h3>
                  </div>
                </div>
                <p className="text-base text-slate-600">Enhanced AML compliance and suspicious activity detection</p>

                <div className="mt-6">
                  <h5 className="font-semibold mb-2 text-red-600">Challenge:</h5>
                  <p className="text-sm text-muted-foreground">Manual transaction monitoring and document review for AML compliance</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold mb-2 text-blue-600">Solution:</h5>
                  <p className="text-sm text-muted-foreground">AI-powered transaction analysis and automated suspicious activity reporting</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold mb-3 text-green-600">Key Benefits:</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Real-time transaction monitoring</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Automated SAR generation</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Enhanced due diligence processes</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Regulatory reporting automation</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />Reduced false positives by 80%</li>
                  </ul>
                </div>
                <div className="mt-6 rounded-lg p-4 bg-red-50 border border-red-200">
                  <h5 className="font-semibold mb-3">Typical Results:</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center"><div className="font-bold text-lg">-80%</div><div className="text-muted-foreground">false positives</div></div>
                    <div className="text-center"><div className="font-bold text-lg">+65%</div><div className="text-muted-foreground">detection rate</div></div>
                    <div className="text-center"><div className="font-bold text-lg">100%</div><div className="text-muted-foreground">compliance</div></div>
                    <div className="text-center"><div className="font-bold text-lg">+90%</div><div className="text-muted-foreground">efficiency</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story (no loops) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Customer Success Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How a leading digital bank transformed their operations with snapint
            </p>
          </div>

          <div className="overflow-hidden max-w-6xl mx-auto rounded-2xl border">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <Building2 className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-semibold">Major Indonesian Digital Bank</h3>
                  <p className="opacity-90">Leading digital bank processing 50K+ customer applications monthly</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6 mb-6">
                <Quote className="w-8 h-8 mb-4 opacity-80" />
                <p className="text-lg italic mb-4">"snapint transformed our entire customer journey. We now process 10x more applications with the same team while maintaining perfect compliance."</p>
                <p className="text-sm opacity-80">- Chief Digital Officer</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-red-600">Challenge:</h4>
                  <p className="text-muted-foreground mb-6">Manual KYC and credit application processing created bottlenecks and compliance risks</p>

                  <h4 className="font-semibold mb-4 text-blue-600">Implementation:</h4>
                  <p className="text-muted-foreground mb-4">Deployed snapint across customer onboarding and loan origination workflows</p>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Timeline: 6 weeks implementation
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-green-600">Measurable Results:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /><span className="font-medium">Customer onboarding time: 3 days → 2 hours (92% reduction)</span></li>
                    <li className="flex items-start"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /><span className="font-medium">Credit application processing: 14 days → 2 days (85% reduction)</span></li>
                    <li className="flex items-start"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /><span className="font-medium">Operational cost reduction: Rp 2.4B annually</span></li>
                    <li className="flex items-start"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /><span className="font-medium">Customer satisfaction increase: +45%</span></li>
                    <li className="flex items-start"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /><span className="font-medium">Compliance score: 100% (OJK audit)</span></li>
                    <li className="flex items-start"><BarChart3 className="w-4 h-4 text-green-500 mr-3 mt-1" /><span className="font-medium">Processing capacity: +300% without hiring</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Banking Operations?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join 50+ leading banks that have already transformed their document processing workflows.
            Schedule a personalized demo to see how snapint can accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-3 rounded-lg bg-white text-blue-600" onClick={handleDemoClick}>
              Schedule Banking Demo
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="px-10 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-blue-600" onClick={handleContactClick}>
              Speak with Expert
              <Users className="w-4 h-4 ml-2 inline" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
