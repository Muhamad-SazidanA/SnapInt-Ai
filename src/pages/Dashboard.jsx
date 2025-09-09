import React, { useState } from "react";
import { CheckCircle, ArrowRight, Target, Clock, TrendingUp, Shield, Globe, Star, Brain, Cpu, Zap, FileJson, Cloud, Server, Building2, Database, Workflow, BarChart3, Settings, Scan, Layers, Users, Receipt, FileText, DollarSign, Heart, CreditCard, GraduationCap, Factory, Truck, Quote, Award, Handshake, Network, Code, BookOpen, Video, HelpCircle, Download, Calendar, ExternalLink, Lightbulb, Play, Eye, MessageSquare, Mail, Phone, MapPin, Briefcase, Newspaper, Coffee } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('ai-processing');
  const [industryTab, setIndustryTab] = useState('perbankan');
  const [partnerTab, setPartnerTab] = useState('technology');
  const [resourceTab, setResourceTab] = useState('blog');
  const [companyTab, setCompanyTab] = useState('about');

  const handleNavigation = (url) => {
    window.location.href = url;
  };

  const handleGetStartedClick = () => {
    handleNavigation('/free-trial');
  };

  const handleDemoClick = () => {
    handleNavigation('/demo');
  };

  // Industry Pages Data
  const industryPages = [
    {
      id: "perbankan",
      name: "Perbankan",
      icon: <Building2 className="w-8 h-8" />,
      description: "Solusi pemrosesan dokumen untuk transformasi digital perbankan",
      realUseCases: [
        {
          title: "Originasi Kredit Digital",
          problem: "Proses manual aplikasi kredit memakan waktu 2 minggu dengan tingkat error tinggi",
          solution: "Automasi end-to-end verifikasi dokumen, scoring risiko, dan approval workflow",
          result: "Waktu pemrosesan turun 85%, dari 14 hari ke 2 hari dengan akurasi 99.8%"
        },
        {
          title: "KYC/AML Compliance",
          problem: "Review manual dokumen identitas rentan error dan memakan waktu lama",
          solution: "Verifikasi identitas otomatis dengan deteksi fraud terintegrasi",
          result: "100% compliance rate dengan pengurangan waktu verifikasi 90%"
        }
      ],
      mainBenefits: [
        "Percepatan time-to-market produk finansial baru",
        "Pengurangan risiko operasional dan compliance",
        "Peningkatan customer experience dan retention",
        "Optimasi biaya operasional hingga 60%"
      ],
      implementationCase: {
        client: "Bank Regional Terbesar",
        challenge: "Manual processing 50K+ aplikasi kredit per bulan",
        timeframe: "6 minggu implementasi",
        results: [
          "Processing time: 14 hari → 2 hari",
          "Kapasitas processing meningkat 300%",
          "Customer satisfaction +45%",
          "ROI 420% dalam 12 bulan"
        ]
      }
    },
    {
      id: "asuransi",
      name: "Asuransi",
      icon: <CreditCard className="w-8 h-8" />,
      description: "Transformasi digital untuk industri asuransi dan risk management",
      realUseCases: [
        {
          title: "Pemrosesan Klaim Otomatis",
          problem: "Pemrosesan klaim manual memakan waktu 2 minggu dengan bottleneck di berbagai tahap",
          solution: "Automasi intake klaim, assessment dokumen, dan workflow approval",
          result: "Waktu pemrosesan klaim turun 70%, dari 14 hari ke 4 hari"
        },
        {
          title: "Underwriting Intelligence",
          problem: "Analisis dokumen underwriting manual rentan inkonsistensi dan lambat",
          solution: "AI-powered risk assessment dengan analisis dokumen otomatis",
          result: "Akurasi underwriting meningkat 35% dengan waktu proses 80% lebih cepat"
        }
      ],
      mainBenefits: [
        "Percepatan settlement klaim untuk meningkatkan loyalitas",
        "Peningkatan akurasi fraud detection hingga 94%",
        "Optimasi portfolio risk management",
        "Pengurangan biaya operasional claims processing 50%"
      ],
      implementationCase: {
        client: "Perusahaan Asuransi Umum Terkemuka",
        challenge: "Proses klaim manual untuk 25K+ klaim per bulan",
        timeframe: "8 minggu implementasi",
        results: [
          "Claim processing: 14 hari → 4 hari",
          "Fraud detection accuracy +40%",
          "Customer satisfaction +35%",
          "Operational cost reduction 50%"
        ]
      }
    },
    {
      id: "kesehatan",
      name: "Kesehatan",
      icon: <Heart className="w-8 h-8" />,
      description: "Digitalisasi healthcare untuk meningkatkan kualitas pelayanan pasien",
      realUseCases: [
        {
          title: "Digital Patient Onboarding",
          problem: "Proses registrasi pasien manual memakan waktu lama dan rentan error",
          solution: "Digitalisasi formulir intake dengan verifikasi asuransi otomatis",
          result: "Waktu registrasi turun 75% dengan akurasi data 99.5%"
        },
        {
          title: "Medical Records Digitization",
          problem: "Rekam medis paper-based sulit diakses dan berisiko hilang",
          solution: "Konversi otomatis rekam medis fisik ke format digital terstruktur",
          result: "100% digitalisasi dengan searchable medical history"
        }
      ],
      mainBenefits: [
        "Peningkatan kualitas dan aksesibilitas layanan pasien",
        "Compliance penuh dengan regulasi kesehatan nasional",
        "Efisiensi operasional dan pengurangan beban administratif",
        "Integrasi seamless dengan sistem SIMRS existing"
      ],
      implementationCase: {
        client: "Rumah Sakit Jaringan Nasional",
        challenge: "Digitalisasi 50+ lokasi dengan 100K+ rekam medis",
        timeframe: "12 minggu implementasi bertahap",
        results: [
          "Patient registration: 30 menit → 5 menit",
          "Medical records accessibility 100%",
          "Administrative cost reduction 60%",
          "Staff productivity +40%"
        ]
      }
    },
    {
      id: "logistik",
      name: "Logistik",
      icon: <Truck className="w-8 h-8" />,
      description: "Optimasi supply chain dan dokumentasi logistik end-to-end",
      realUseCases: [
        {
          title: "Supply Chain Documentation",
          problem: "Dokumentasi manual shipping dan customs menimbulkan delay dan error",
          solution: "Automasi pemrosesan bill of lading, customs documents, dan tracking",
          result: "Pengurangan processing time 80% dengan 100% accuracy"
        },
        {
          title: "Vendor Onboarding Automation",
          problem: "Onboarding vendor baru memakan waktu 4-6 minggu dengan review manual",
          solution: "Digitalisasi dan verifikasi otomatis dokumen legal dan sertifikasi vendor",
          result: "Vendor onboarding dipercepat menjadi 3-5 hari"
        }
      ],
      mainBenefits: [
        "Real-time visibility across entire supply chain",
        "Compliance automation untuk regulasi ekspor-impor",
        "Optimasi inventory management dan demand forecasting",
        "Pengurangan operational costs hingga 45%"
      ],
      implementationCase: {
        client: "Perusahaan Logistik Multinasional",
        challenge: "Standardisasi dokumentasi di 15 negara Asia",
        timeframe: "10 minggu implementasi regional",
        results: [
          "Document processing: 2 hari → 4 jam",
          "Cross-border compliance 100%",
          "Operational efficiency +65%",
          "Customer satisfaction +50%"
        ]
      }
    },
    {
      id: "pendidikan",
      name: "Pendidikan",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Modernisasi administrasi pendidikan dan manajemen akademik",
      realUseCases: [
        {
          title: "Student Application Processing",
          problem: "Pemrosesan manual 50K+ aplikasi mahasiswa baru memakan waktu 2 bulan",
          solution: "Automasi verifikasi dokumen akademik, scoring, dan workflow penerimaan",
          result: "Waktu pemrosesan aplikasi turun 70%, dari 8 minggu ke 2 minggu"
        },
        {
          title: "Academic Records Management",
          problem: "Manajemen transkrip dan sertifikat manual rentan fraud dan slow retrieval",
          solution: "Digitalisasi dengan blockchain verification dan instant access",
          result: "Akses real-time dengan 100% authenticity verification"
        }
      ],
      mainBenefits: [
        "Peningkatan efisiensi administrasi akademik",
        "Transparansi dan aksesibilitas informasi mahasiswa",
        "Compliance dengan regulasi pendidikan nasional",
        "User experience yang lebih baik untuk mahasiswa dan staff"
      ],
      implementationCase: {
        client: "Universitas Negeri Terkemuka",
        challenge: "Digitalisasi administrasi 45K+ mahasiswa",
        timeframe: "16 minggu implementasi kampus-wide",
        results: [
          "Application processing: 8 minggu → 2 minggu",
          "Document retrieval: 2 hari → instant",
          "Administrative workload -50%",
          "Student satisfaction +60%"
        ]
      }
    },
    {
      id: "manufaktur",
      name: "Manufaktur",
      icon: <Factory className="w-8 h-8" />,
      description: "Digitalisasi quality control dan supply chain manufacturing",
      realUseCases: [
        {
          title: "Quality Control Documentation",
          problem: "Manual QC reporting di multiple facilities memakan waktu dan rentan error",
          solution: "Automasi capture dan analysis QC data dengan real-time reporting",
          result: "QC reporting time turun 85% dengan 99% accuracy"
        },
        {
          title: "Supplier Compliance Management",
          problem: "Tracking compliance certificates dari 500+ suppliers secara manual",
          solution: "Automated compliance monitoring dengan alert system untuk expiry",
          result: "100% supplier compliance dengan zero manual tracking"
        }
      ],
      mainBenefits: [
        "Real-time quality insights dan predictive analytics",
        "Compliance automation untuk standar internasional",
        "Optimasi supply chain dengan transparent tracking",
        "Pengurangan manufacturing costs hingga 35%"
      ],
      implementationCase: {
        client: "Manufacturer Automotive Terbesar",
        challenge: "Quality standardization di 8 plants",
        timeframe: "12 minggu implementasi multi-site",
        results: [
          "QC processing: 4 jam → 20 menit",
          "Supplier compliance: manual → 100% automated",
          "Quality incidents -75%",
          "Manufacturing efficiency +40%"
        ]
      }
    }
  ];

  const platformFeatures = [
    {
      id: 'ai-processing',
      icon: <Brain className="w-10 h-10" />,
      title: 'AI Processing',
      description: 'Pemrosesan dokumen dengan teknologi AI terdepan',
      features: [
        'Pengenalan struktur dokumen otomatis tanpa template',
        'Model AI yang terus belajar dan beradaptasi',
        'Support dokumen semi-struktur dan tidak terstruktur',
        'Akurasi tinggi untuk berbagai jenis dokumen'
      ],
      capabilities: [
        { name: 'Document Types', value: '100+' },
        { name: 'Languages Supported', value: '40+' },
        { name: 'Accuracy Rate', value: '99.8%' },
        { name: 'Processing Speed', value: '<30s' }
      ]
    },
    {
      id: 'json-output',
      icon: <FileJson className="w-10 h-10" />,
      title: 'JSON Output',
      description: 'Output terstruktur siap integrasi',
      features: [
        'Output JSON terstandarisasi dan konsisten',
        'Integrasi langsung ke ERP, CRM, dan RPA',
        'RESTful API dengan dokumentasi lengkap',
        'Real-time processing dan response'
      ],
      capabilities: [
        { name: 'API Endpoints', value: '15+' },
        { name: 'Response Time', value: '<2s' },
        { name: 'Uptime SLA', value: '99.9%' },
        { name: 'Integrations', value: '50+' }
      ]
    },
    {
      id: 'no-template',
      icon: <Zap className="w-10 h-10" />,
      title: 'Tanpa Template',
      description: 'Zero setup untuk dokumen baru',
      features: [
        'Zero setup untuk dokumen baru',
        'Tidak perlu training data atau konfigurasi manual',
        'Adaptasi otomatis terhadap format dokumen baru',
        'Penghematan waktu setup hingga 95%'
      ],
      capabilities: [
        { name: 'Setup Time', value: '0 min' },
        { name: 'Training Required', value: 'None' },
        { name: 'Format Adaptation', value: 'Auto' },
        { name: 'Time Savings', value: '95%' }
      ]
    },
    {
      id: 'deployment',
      icon: <Cloud className="w-10 h-10" />,
      title: 'Deployment Fleksibel',
      description: 'Pilihan deployment sesuai kebutuhan',
      features: [
        'SaaS (Cloud) - Fully managed dengan auto-scaling',
        'On-Premise - Kontrol penuh dan security maksimum',
        'Private Cloud - Dedicated infrastructure',
        'Hybrid deployment untuk fleksibilitas maksimal'
      ],
      capabilities: [
        { name: 'Deployment Options', value: '4' },
        { name: 'Security Standards', value: 'ISO 27001' },
        { name: 'Compliance', value: 'Multi-region' },
        { name: 'Scalability', value: 'Auto' }
      ]
    }
  ];

  const deploymentOptions = [
    {
      title: 'SaaS (Cloud)',
      subtitle: 'Solusi cloud fully-managed',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Platform cloud yang sepenuhnya dikelola dengan skalabilitas otomatis',
      features: [
        'Setup dalam 5 menit',
        'Auto-scaling berdasarkan volume',
        'Global CDN untuk performa optimal',
        'Monitoring 24/7 dan support'
      ],
      bestFor: 'Startup hingga enterprise yang ingin deployment cepat',
      pricing: 'Pay per document',
      highlight: 'Most Popular'
    },
    {
      title: 'On-Premise',
      subtitle: 'Kontrol penuh infrastruktur',
      icon: <Server className="w-8 h-8" />,
      description: 'Deployment di infrastruktur internal untuk kontrol maksimum',
      features: [
        'Data tetap di internal infrastructure',
        'Kustomisasi mendalam sesuai kebutuhan',
        'Air-gapped deployment untuk security maksimum',
        'Integration dengan existing security systems'
      ],
      bestFor: 'Enterprise dengan requirement keamanan tinggi',
      pricing: 'Annual license',
      highlight: 'Maximum Security'
    },
    {
      title: 'Private Cloud',
      subtitle: 'Dedicated cloud resources',
      icon: <Shield className="w-8 h-8" />,
      description: 'Cloud privat khusus dengan dedicated resources',
      features: [
        'Dedicated compute dan storage resources',
        'Custom compliance dan data residency',
        'Enhanced security controls',
        'SLA khusus dan prioritas support'
      ],
      bestFor: 'Regulated industries dan large enterprises',
      pricing: 'Monthly subscription',
      highlight: 'Enterprise Grade'
    }
  ];

  const integrations = [
    {
      category: 'Enterprise Systems',
      systems: ['SAP S/4HANA', 'Oracle ERP', 'Microsoft Dynamics', 'Workday'],
      icon: <Building2 className="w-5 h-5" />
    },
    {
      category: 'Document Management',
      systems: ['SharePoint', 'Box', 'Dropbox', 'Google Drive'],
      icon: <Database className="w-5 h-5" />
    },
    {
      category: 'RPA & Automation',
      systems: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Power Automate'],
      icon: <Workflow className="w-5 h-5" />
    },
    {
      category: 'Business Intelligence',
      systems: ['Power BI', 'Tableau', 'Qlik', 'Looker'],
      icon: <BarChart3 className="w-5 h-5" />
    }
  ];

  const partnershipOpportunities = [
    {
      title: "Technology Integration Partners",
      description: "Integrasikan solusi Anda dengan platform snapint untuk memberikan nilai tambah kepada pelanggan bersama.",
      icon: <Code className="w-8 h-8" />,
      opportunities: [
        "Pre-built connectors untuk ERP/CRM systems",
        "White-label document processing capabilities",
        "Embedded AI processing dalam platform Anda",
        "Co-development untuk industry-specific solutions"
      ],
      benefits: [
        "Akses early ke new features dan APIs",
        "Technical support dan documentation prioritas",
        "Co-marketing opportunities dan joint case studies",
        "Revenue sharing dari customer referrals"
      ],
      ideal: "Software vendors, system integrators, consultants"
    },
    {
      title: "Reseller & Distribution Partners",
      description: "Perluas portfolio solusi Anda dengan menjadi reseller snapint di wilayah atau vertikal industri tertentu.",
      icon: <Building2 className="w-8 h-8" />,
      opportunities: [
        "Exclusive territory atau industry vertical rights",
        "White-label branding options",
        "Custom pricing dan packaging models",
        "Local language dan compliance support"
      ],
      benefits: [
        "Margin yang kompetitif dengan volume scaling",
        "Sales training dan certification programs",
        "Marketing development funds (MDF)",
        "Dedicated channel manager support"
      ],
      ideal: "VAR, distributors, consultants, regional players"
    },
    {
      title: "Strategic Alliance Partners",
      description: "Bentuk aliansi strategis untuk go-to-market bersama dan pengembangan solusi terintegrasi.",
      icon: <Handshake className="w-8 h-8" />,
      opportunities: [
        "Joint solution development dan packaging",
        "Co-innovation untuk emerging technologies",
        "Shared customer success programs",
        "Cross-training sales dan technical teams"
      ],
      benefits: [
        "Access ke customer base dan ecosystem",
        "Joint marketing campaigns dan events",
        "Preferred partner status dan visibility",
        "Strategic roadmap alignment"
      ],
      ideal: "Enterprise software companies, cloud providers, consultancies"
    }
  ];

  const partnerBenefits = [
    {
      category: "Business Growth",
      benefits: [
        {
          title: "Revenue Opportunities",
          description: "Multiple revenue streams melalui direct sales, referrals, dan value-added services",
          icon: <DollarSign className="w-6 h-6" />
        },
        {
          title: "Market Expansion",
          description: "Akses ke new markets dan customer segments melalui AI document processing",
          icon: <Globe className="w-6 h-6" />
        },
        {
          title: "Competitive Advantage",
          description: "Differentiate solusi Anda dengan advanced AI capabilities",
          icon: <Target className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Technical Support",
      benefits: [
        {
          title: "Comprehensive APIs",
          description: "RESTful APIs dengan documentation lengkap dan SDKs untuk major languages",
          icon: <Code className="w-6 h-6" />
        },
        {
          title: "Integration Support",
          description: "Dedicated technical team untuk membantu integration dan troubleshooting",
          icon: <Settings className="w-6 h-6" />
        },
        {
          title: "Training & Certification",
          description: "Technical training programs dan partner certification paths",
          icon: <Award className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Marketing & Sales",
      benefits: [
        {
          title: "Co-Marketing Programs",
          description: "Joint marketing campaigns, events, dan content collaboration",
          icon: <Network className="w-6 h-6" />
        },
        {
          title: "Sales Enablement",
          description: "Sales tools, training materials, dan demo environments",
          icon: <Users className="w-6 h-6" />
        },
        {
          title: "Lead Generation",
          description: "Qualified leads sharing dan referral programs",
          icon: <TrendingUp className="w-6 h-6" />
        }
      ]
    }
  ];

  const partnerTypes = [
    {
      type: "Technology Partners",
      description: "Software companies yang mengintegrasikan snapint ke dalam platform mereka",
      requirements: [
        "Existing software platform atau SaaS solution",
        "Technical team untuk integration development",
        "Customer base yang membutuhkan document processing",
        "Commitment untuk long-term partnership"
      ],
      benefits: [
        "Access ke advanced AI document processing",
        "Increase platform value proposition",
        "New revenue streams dari enhanced features",
        "Technical support untuk integration"
      ],
      examples: ["ERP vendors", "CRM platforms", "Workflow automation tools", "Industry-specific software"],
      applicationProcess: [
        "Submit partnership application form",
        "Technical compatibility assessment",
        "Business case review dan approval",
        "Integration development dan testing",
        "Go-to-market planning dan launch"
      ]
    },
    {
      type: "Reseller Partners",
      description: "Perusahaan yang menjual snapint sebagai bagian dari portfolio solusi mereka",
      requirements: [
        "Established sales team dan customer relationships",
        "Experience dengan enterprise software sales",
        "Understanding document processing market",
        "Commitment untuk sales targets"
      ],
      benefits: [
        "Competitive margins dengan volume scaling",
        "Exclusive territory opportunities",
        "Sales training dan certification",
        "Marketing development funds"
      ],
      examples: ["System integrators", "Consulting firms", "Regional VARs", "Industry specialists"],
      applicationProcess: [
        "Partner application submission",
        "Sales capability assessment",
        "Reference checks dan background verification",
        "Contract negotiation dan signing",
        "Sales training dan onboarding"
      ]
    },
    {
      type: "System Integrators",
      description: "Professional services firms yang mengimplementasikan snapint untuk enterprise customers",
      requirements: [
        "Proven track record dalam enterprise implementations",
        "Technical team dengan integration expertise",
        "Industry knowledge dan customer relationships",
        "Capability untuk provide ongoing support"
      ],
      benefits: [
        "Certified implementation methodology",
        "Technical training dan support",
        "Customer success programs",
        "Preferred partner recognition"
      ],
      examples: ["Digital transformation consultants", "Enterprise architects", "Industry specialists", "Big 4 consulting"],
      applicationProcess: [
        "SI partnership application",
        "Capability dan experience review",
        "Technical certification process",
        "Customer success case development",
        "Ongoing partnership management"
      ]
    }
  ];

  // Data untuk Resources Section
  const blogPosts = [
    {
      title: "Masa Depan Intelligent Document Processing: Melampaui OCR Tradisional",
      excerpt: "Jelajahi bagaimana AI-powered document processing merevolusi workflow bisnis dan menetapkan standar baru untuk akurasi dan efisiensi di Indonesia.",
      category: "Industry Insights",
      readTime: "8 menit baca",
      date: "15 Des 2024",
      featured: true,
      views: "2.5K",
      comments: 18
    },
    {
      title: "Implementasi Document AI di Perbankan Indonesia: Panduan Lengkap",
      excerpt: "Panduan step-by-step untuk institusi keuangan yang ingin mengautomasi loan processing dan KYC compliance dengan AI.",
      category: "Implementation Guide",
      readTime: "12 menit baca",
      date: "10 Des 2024",
      featured: false,
      views: "1.8K",
      comments: 24
    },
    {
      title: "ROI Calculator: Mengukur Kesuksesan Automasi Document Processing",
      excerpt: "Pelajari cara menghitung dan mendemonstrasikan return on investment dari initiative automasi document processing.",
      category: "Business Case",
      readTime: "6 menit baca",
      date: "5 Des 2024",
      featured: false,
      views: "3.1K",
      comments: 12
    },
    {
      title: "Best Practices Integrasi API untuk Document Processing",
      excerpt: "Panduan teknis covering authentication, error handling, dan strategi optimasi untuk document processing APIs.",
      category: "Technical Guide",
      readTime: "10 menit baca",
      date: "28 Nov 2024",
      featured: false,
      views: "1.2K",
      comments: 8
    },
    {
      title: "Compliance & Security dalam AI Document Processing",
      excerpt: "Deep dive into framework keamanan, compliance requirements, dan best practices untuk handling sensitive documents.",
      category: "Security",
      readTime: "15 menit baca",
      date: "20 Nov 2024",
      featured: false,
      views: "2.8K",
      comments: 31
    }
  ];

  const caseStudies = [
    {
      title: "Bank Mandiri: Transformasi Digital Loan Processing",
      industry: "Perbankan",
      company: "Bank Mandiri",
      challenge: "Pemrosesan aplikasi kredit manual memakan waktu 2 minggu dengan tingkat error tinggi",
      solution: "Implementasi end-to-end automation untuk document verification dan risk assessment",
      results: [
        "Waktu pemrosesan turun 85% (14 hari → 2 hari)",
        "Kapasitas pemrosesan meningkat 300%",
        "Customer satisfaction +45%",
        "ROI 420% dalam 12 bulan"
      ],
      downloadCount: "1.2K",
      category: "Banking Success"
    },
    {
      title: "Astra International: Supply Chain Documentation Automation",
      industry: "Manufaktur",
      company: "PT Astra International",
      challenge: "Manual quality control documentation di 20+ fasilitas global",
      solution: "Standardisasi QC processing dengan automated compliance monitoring",
      results: [
        "QC reporting time -85%",
        "100% supplier compliance automation",
        "Quality incidents -75%",
        "Manufacturing efficiency +40%"
      ],
      downloadCount: "890",
      category: "Manufacturing Excellence"
    },
    {
      title: "RS Siloam: Healthcare Document Digitalization",
      industry: "Kesehatan",
      company: "Siloam Hospitals Group",
      challenge: "Paper-based medical records di 50+ lokasi rumah sakit",
      solution: "HIPAA-compliant medical records digitization dengan searchable database",
      results: [
        "Patient registration: 30 menit → 5 menit",
        "Medical records accessibility 100%",
        "Administrative cost -60%",
        "Staff productivity +40%"
      ],
      downloadCount: "756",
      category: "Healthcare Innovation"
    }
  ];

  const whitepapers = [
    {
      title: "Panduan Enterprise untuk AI-Powered Document Processing",
      description: "Analisis komprehensif market trends, technology capabilities, dan strategi implementasi untuk enterprise document automation di Indonesia.",
      pages: "32 halaman",
      format: "PDF",
      category: "Strategy Guide",
      downloadCount: "3.2K",
      language: "Bahasa Indonesia"
    },
    {
      title: "Security & Compliance dalam Document AI",
      description: "Deep dive into security frameworks, compliance requirements, dan best practices untuk handling sensitive documents dengan AI di Indonesia.",
      pages: "24 halaman",
      format: "PDF",
      category: "Security",
      downloadCount: "2.1K",
      language: "Bahasa Indonesia"
    },
    {
      title: "Benchmarking Document Processing Solutions 2024",
      description: "Independent comparison dari leading document processing platforms, featuring performance metrics dan capability analysis untuk market Indonesia.",
      pages: "18 halaman",
      format: "PDF",
      category: "Market Research",
      downloadCount: "1.8K",
      language: "Bahasa Indonesia & English"
    },
    {
      title: "ROI Framework: Document Processing Automation",
      description: "Framework praktis untuk menghitung, mengukur, dan memaksimalkan ROI dari initiative document processing automation.",
      pages: "16 halaman",
      format: "PDF",
      category: "Business Case",
      downloadCount: "2.7K",
      language: "Bahasa Indonesia"
    }
  ];

  const webinars = [
    {
      title: "AI Document Processing: Transformasi Digital untuk Perbankan Indonesia",
      description: "Webinar khusus untuk industry perbankan tentang implementasi AI document processing untuk loan origination dan KYC compliance.",
      duration: "45 menit",
      date: "18 Januari 2025",
      time: "14:00 WIB",
      speaker: "Dr. Sarah Wijaya, Head of Digital Banking",
      registeredCount: 1250,
      status: "upcoming",
      category: "Industry Focus"
    },
    {
      title: "Best Practices: Implementasi Document AI di Enterprise",
      description: "Session praktis covering planning, implementation, dan optimization strategies untuk large-scale document processing projects.",
      duration: "60 menit",
      date: "25 Januari 2025",
      time: "10:00 WIB",
      speaker: "Michael Santoso, Solutions Architect",
      registeredCount: 890,
      status: "upcoming",
      category: "Technical Deep Dive"
    },
    {
      title: "Healthcare Digital Transformation dengan AI Document Processing",
      description: "Khusus untuk healthcare professionals: digitalisasi medical records, claims processing, dan compliance automation.",
      duration: "50 menit",
      date: "10 Desember 2024",
      time: "15:00 WIB",
      speaker: "Dr. Jennifer Kusuma, Healthcare CTO",
      viewCount: 2340,
      status: "recorded",
      category: "Healthcare"
    },
    {
      title: "Manufacturing Excellence: Quality Control Automation",
      description: "Session untuk manufacturing industry tentang automasi quality documentation dan supply chain compliance.",
      duration: "40 menit",
      date: "28 November 2024",
      time: "13:00 WIB",
      speaker: "Budi Rahardjo, Manufacturing Director",
      viewCount: 1560,
      status: "recorded",
      category: "Manufacturing"
    }
  ];

  const documentation = [
    {
      title: "Getting Started Guide",
      description: "Panduan quick start untuk setup document processing workflow pertama Anda dengan snapint",
      category: "Basics",
      icon: <BookOpen className="w-5 h-5" />,
      estimatedTime: "15 menit"
    },
    {
      title: "API Reference Documentation",
      description: "Complete API documentation dengan examples dan code samples untuk semua programming languages",
      category: "Technical",
      icon: <Code className="w-5 h-5" />,
      estimatedTime: "30 menit"
    },
    {
      title: "Integration Tutorials",
      description: "Step-by-step tutorials untuk popular integrations dan use cases dengan sistem enterprise",
      category: "Tutorials",
      icon: <Video className="w-5 h-5" />,
      estimatedTime: "45 menit"
    },
    {
      title: "SDK Documentation",
      description: "Comprehensive guides untuk menggunakan snapint SDKs dalam Python, Node.js, Java, dan .NET",
      category: "Development",
      icon: <Code className="w-5 h-5" />,
      estimatedTime: "60 menit"
    },
    {
      title: "Best Practices Guide",
      description: "Optimization tips dan recommended patterns untuk production deployments dan scaling",
      category: "Advanced",
      icon: <Lightbulb className="w-5 h-5" />,
      estimatedTime: "25 menit"
    },
    {
      title: "Troubleshooting Guide",
      description: "Common issues, error codes, dan solutions untuk development dan production environments",
      category: "Support",
      icon: <HelpCircle className="w-5 h-5" />,
      estimatedTime: "20 menit"
    }
  ];

  const values = [
    {
      title: "Inovasi Berkelanjutan",
      description: "Kami mendorong batas-batas kemungkinan dengan teknologi AI dan pemrosesan dokumen terdepan.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Kesuksesan Pelanggan",
      description: "Kesuksesan Anda mendorong inovasi kami. Kami berkomitmen untuk memberikan nilai bisnis yang terukur.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Keamanan & Kepercayaan",
      description: "Kami menjaga standar keamanan dan privasi tertinggi dalam segala hal yang kami bangun.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Transparansi",
      description: "Kami percaya pada komunikasi yang jelas, hubungan yang jujur, dan praktik bisnis yang transparan.",
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const newsItems = [
    {
      title: "snapint Raih Pendanaan Series A Sebesar $25 Juta",
      date: "15 Desember 2024",
      category: "Funding",
      excerpt: "Pendanaan ini akan digunakan untuk mempercepat pengembangan produk dan ekspansi global ke pasar Asia Tenggara."
    },
    {
      title: "Kemitraan Strategis dengan Microsoft Azure Indonesia",
      date: "28 November 2024",
      category: "Partnership",
      excerpt: "Kolaborasi untuk menyediakan solusi AI document processing yang lebih scalable untuk enterprise Indonesia."
    },
    {
      title: "snapint Terpilih sebagai 'Rising Tech Company of the Year'",
      date: "10 November 2024",
      category: "Award",
      excerpt: "Penghargaan dari Indonesia Tech Awards 2024 atas kontribusi dalam transformasi digital Indonesia."
    },
    {
      title: "Peluncuran Fitur Multi-Language Support untuk 40+ Bahasa",
      date: "22 Oktober 2024",
      category: "Product Update",
      excerpt: "Ekspansi capabilities untuk mendukung document processing dalam bahasa regional Indonesia dan Asia."
    }
  ];

  const careers = [
    {
      title: "Senior Machine Learning Engineer",
      department: "Engineering",
      location: "Jakarta / Remote",
      type: "Full-time",
      experience: "5+ tahun"
    },
    {
      title: "Product Manager - Enterprise Solutions",
      department: "Product",
      location: "Jakarta / Hybrid",
      type: "Full-time",
      experience: "4+ tahun"
    },
    {
      title: "Solutions Architect",
      department: "Customer Success",
      location: "Jakarta / Remote",
      type: "Full-time",
      experience: "6+ tahun"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ tahun"
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Jakarta",
      type: "Full-time",
      experience: "5+ tahun"
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Jakarta / Hybrid",
      type: "Full-time",
      experience: "3+ tahun"
    }
  ];

  const benefits = [
    "Gaji kompetitif dengan equity options",
    "Asuransi kesehatan premium untuk keluarga",
    "Flexible working arrangements (WFH/Hybrid)",
    "Learning & development budget Rp 20 juta/tahun",
    "Mental health support & wellness programs",
    "Unlimited vacation policy",
    "Latest tech equipment & home office setup",
    "Team events & company retreats"
  ];

  return (
    <>
      <section>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Announcement Badge */}
            <div className="inline-flex items-center mb-12 px-6 py-3 text-sm bg-blue-50 text-gray-700 rounded-lg">
              <Star className="w-4 h-4 mr-2 font-bold" />
              <span className="font-semibold">Teknologi AI Terdepan untuk Pemrosesan Dokumen Tanpa Template</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Ubah Setiap Dokumen Menjadi{' '}
              <span className="text-primary-800 relative">
                Data Terstruktur
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-700 to-transparent rounded-full"></div>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 max-w-5xl mx-auto mb-16 leading-relaxed">
              Platform AI-driven IDP (Intelligent Document Processing) yang mengekstrak,
              memvalidasi, dan menyalurkan data dari dokumen tidak terstruktur, tanpa template
              untuk dokumen general dan tanpa rekayasa aturan, ke berbagai sistem bisnis dalam
              hitungan detik.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
              <div className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer min-h-[160px] border border-gray-100">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-12 h-12 text-primary-800 group-hover:text-primary-900 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary-800 transition-colors duration-300">99.8%</div>
                <div className="text-sm text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">Tingkat Akurasi</div>
              </div>
              <div className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer min-h-[160px] border border-gray-100">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-12 h-12 text-primary-800 group-hover:text-primary-900 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary-800 transition-colors duration-300">&lt; 30s</div>
                <div className="text-sm text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">Waktu Proses</div>
              </div>
              <div className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer min-h-[160px] border border-gray-100">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-12 h-12 text-primary-800 group-hover:text-primary-900 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary-800 transition-colors duration-300">85%</div>
                <div className="text-sm text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">Pengurangan Biaya</div>
              </div>
              <div className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer min-h-[160px] border border-gray-100">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-12 h-12 text-primary-800 group-hover:text-primary-900 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary-800 transition-colors duration-300">ISO 27001</div>
                <div className="text-sm text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">Sertifikasi</div>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
              <div className="flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full hover:bg-green-200/70 transition-colors duration-300 cursor-pointer">
                <CheckCircle className="w-4 h-4 mr-2" />
                Tanpa Template
              </div>
              <div className="flex items-center bg-primary-100 text-primary-800 px-6 py-3 rounded-full hover:bg-primary-200/70 transition-colors duration-300 cursor-pointer">
                <CheckCircle className="w-4 h-4 mr-2" />
                AI Pembelajaran Mandiri
              </div>
              <div className="flex items-center bg-purple-100 text-purple-800 px-6 py-3 rounded-full hover:bg-purple-200/70 transition-colors duration-300 cursor-pointer">
                <CheckCircle className="w-4 h-4 mr-2" />
                Deteksi Tabel Cerdas
              </div>
              <div className="flex items-center bg-orange-100 text-orange-800 px-6 py-3 rounded-full hover:bg-orange-200/70 transition-colors duration-300 cursor-pointer">
                <CheckCircle className="w-4 h-4 mr-2" />
                Output JSON Siap Pakai
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                className="px-8 py-3 text-lg bg-primary-800 text-white hover:bg-primary-900 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center shadow-lg"
                onClick={handleGetStartedClick}
              >
                Mulai Uji Coba Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Sertifikasi ISO 27001
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-600" />
                Sertifikasi GDPR
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-600" />
                SLA 99.9% Uptime
              </div>
            </div>

            {/* Social Proof */}
            <p className="text-sm text-gray-600 mb-16">
              Dipercaya 500+ perusahaan di seluruh dunia • Memproses 50 juta+ dokumen per bulan
            </p>
          </div>

          {/* How It Works Demo */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-12 mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Lihat Cara Kerjanya</h3>
                <p className="text-gray-600 text-lg">Dari dokumen kompleks menjadi JSON terstruktur dalam hitungan detik</p>
              </div>

              <div className="bg-white rounded-2xl p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                  {/* Input */}
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-red-100 rounded-3xl flex items-center justify-center mx-auto">
                      <span className="text-red-700 font-bold text-xl">PDF</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-3">Upload Dokumen Apapun</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        PDF, gambar, formulir hasil scan, dokumen tulisan tangan, tabel kompleks, invoice, kontrak
                      </p>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>✓ Support multi-halaman</div>
                      <div>✓ Pengenalan tulisan tangan</div>
                      <div>✓ Deteksi tabel otomatis</div>
                    </div>
                  </div>

                  {/* Processing */}
                  <div className="flex flex-col items-center space-y-6">
                    <div className="relative flex items-center justify-center">
                      <ArrowRight className="w-12 h-12 text-primary-800 animate-pulse z-10" />
                      <div className="absolute inset-0 w-20 h-20 -top-4 -left-4 border-2 border-dashed border-primary-800/30 rounded-full animate-spin"
                        style={{ animationDuration: '3s' }}></div>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-primary-800 mb-2">Pemrosesan AI</h4>
                      <p className="text-sm text-gray-600">
                        Algoritma ML canggih mengekstrak dan menyusun data secara otomatis
                      </p>
                    </div>
                  </div>

                  {/* Output */}
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-green-100 rounded-3xl flex items-center justify-center mx-auto">
                      <span className="text-green-700 font-bold text-xl">JSON</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-3">Data Terstruktur Siap Pakai</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        JSON bersih dan tervalidasi, siap untuk ERP, CRM, atau sistem bisnis apa pun
                      </p>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>✓ Format siap API</div>
                      <div>✓ Skor kepercayaan</div>
                      <div>✓ Validasi field otomatis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-12 px-6 py-3 text-sm bg-blue-50 text-gray-700 rounded-lg">
              <Cpu className="w-4 h-4 mr-2 font-bold" />
              <span className="font-semibold">AI Platform Terdepan</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Platform Pemrosesan Dokumen Paling Canggih di Indonesia
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dibangun dengan teknologi AI terdepan dan telah terbukti di lingkungan enterprise, platform kami memberikan akurasi, kecepatan, dan keandalan yang tak tertandingi untuk workflow pemrosesan dokumen paling kritis Anda.
            </p>
          </div>

          {/* Platform Features Tabs */}
          <div className="mb-24">
            <div className="flex justify-center mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-gray-100 rounded-2xl">
                {platformFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`flex flex-col items-center space-y-2 text-xs p-4 rounded-xl transition-all duration-300 ${activeTab === feature.id
                      ? 'bg-white text-primary-800 shadow-md'
                      : 'text-gray-600 hover:text-primary-800'
                      }`}
                  >
          <div className={`w-8 h-8 ${activeTab === feature.id ? 'text-primary-800' : 'text-gray-500'}`}>
                      {feature.icon}
                    </div>
                    <span className="text-center font-medium">{feature.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {platformFeatures.map((feature) => (
              <div
                key={feature.id}
        className={activeTab === feature.id ? 'block' : 'hidden'}
              >
                <div className="p-8 border-2 border-gray-200 rounded-3xl hover:border-primary-300 transition-colors duration-300 bg-white shadow-lg">
                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
                    {/* Feature Overview */}
                    <div className="xl:col-span-2 space-y-8">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-800">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4 text-gray-900">Fitur Utama:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {feature.features.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Capabilities Sidebar */}
                    <div className="xl:col-span-1">
                      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
                        <h4 className="font-semibold mb-6 text-gray-900">Key Metrics:</h4>
                        <div className="space-y-6">
                          {feature.capabilities.map((cap, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-2xl font-bold text-primary-800 mb-1">{cap.value}</div>
                              <div className="text-sm text-gray-600">{cap.name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-16">
            <Scan className="w-16 h-16 text-primary-800 mx-auto mb-6" />
            <h3 className="text-3xl font-semibold mb-6 text-gray-900">
              Siap Mulai Transformasi Digital?
            </h3>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              Bergabunglah dengan ribuan perusahaan yang telah mempercayakan pemrosesan dokumen mereka kepada platform AI kami
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className="px-10 py-3 text-lg bg-primary-800 hover:bg-primary-900 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center shadow-lg"
                onClick={handleDemoClick}
              >
                Jadwalkan Demo
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}