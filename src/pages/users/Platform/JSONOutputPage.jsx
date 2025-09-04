import React, { useState } from 'react';
import {
    FileJson,
    ArrowRight,
    Download,
    CheckCircle,
    Code,
    Clock,
    Shield,
    Zap,
    Globe,
    Copy,
    ExternalLink,
    Layers,
    Target,
    Database,
    Network,
} from 'lucide-react';

export default function JSONOutputPage() {
    const [activeTab, setActiveTab] = useState('invoice');

    const invoiceJson = `{
	"document_id": "inv_12345",
	"status": "completed",
	"processing_time_ms": 2847,
	"confidence_score": 98.5,
	"extracted_data": {
		"document_type": "invoice",
		"invoice_number": "INV-2024-001",
		"invoice_date": "2024-01-15",
		"due_date": "2024-02-15",
		"vendor": {
			"name": "PT Supplier Indonesia",
			"address": "Jl. Sudirman No. 123, Jakarta",
			"tax_id": "01.234.567.8-901.000",
			"confidence": 99.2
		},
		"customer": {
			"name": "PT Customer Solutions",
			"address": "Jl. Thamrin No. 456, Jakarta",
			"confidence": 97.8
		},
		"line_items": [
			{
				"description": "Consulting Services",
				"quantity": 1,
				"unit_price": 15000000,
				"total": 15000000,
				"confidence": 98.9
			}
		],
		"totals": {
			"subtotal": 15000000,
			"tax_amount": 1500000,
			"total_amount": 16500000,
			"confidence": 99.5
		}
	},
	"metadata": {
		"model_version": "v2.1.3",
		"processed_at": "2024-01-15T10:30:45Z",
		"file_type": "pdf",
		"page_count": 1,
		"language_detected": "id"
	}
}`;

    const kycJson = `{
	"document_id": "kyc_67890",
	"status": "completed",
	"processing_time_ms": 1523,
	"confidence_score": 99.1,
	"extracted_data": {
		"document_type": "ktp",
		"nik": "3171234567891234",
		"name": "BUDI SANTOSO",
		"birth_place": "JAKARTA",
		"birth_date": "1985-03-15",
		"gender": "LAKI-LAKI",
		"blood_type": "O",
		"address": "JL. MERDEKA NO. 123 RT/RW 001/002",
		"village": "MENTENG",
		"district": "MENTENG",
		"city": "JAKARTA PUSAT",
		"province": "DKI JAKARTA",
		"religion": "ISLAM",
		"marital_status": "KAWIN",
		"occupation": "KARYAWAN SWASTA",
		"nationality": "WNI",
		"valid_until": "SEUMUR HIDUP",
		"confidence_scores": {
			"nik": 99.8,
			"name": 98.9,
			"address": 97.2,
			"birth_date": 99.5
		}
	},
	"verification": {
		"document_authenticity": 98.7,
		"face_match_score": 96.4,
		"tampering_detected": false
	},
	"metadata": {
		"model_version": "kyc_v1.8.2",
		"processed_at": "2024-01-15T10:32:18Z",
		"ocr_method": "deep_learning",
		"image_quality": "high"
	}
}`;

    const poJson = `{
	"document_id": "po_54321",
	"status": "completed",
	"processing_time_ms": 3241,
	"confidence_score": 97.8,
	"extracted_data": {
		"document_type": "purchase_order",
		"po_number": "PO-2024-0015",
		"po_date": "2024-01-12",
		"delivery_date": "2024-01-25",
		"buyer": {
			"company": "PT Pembeli Utama",
			"contact_person": "John Doe",
			"email": "john.doe@pembeli.com",
			"phone": "+62 21-1234-5678",
			"confidence": 98.3
		},
		"supplier": {
			"company": "PT Supplier Terpercaya",
			"contact_person": "Jane Smith",
			"email": "jane@supplier.com",
			"confidence": 97.1
		},
		"items": [
			{
				"item_code": "ITM-001",
				"description": "Laptop Dell Inspiron 15",
				"quantity": 10,
				"unit_price": 8500000,
				"total_price": 85000000,
				"confidence": 98.7
			},
			{
				"item_code": "ITM-002",
				"description": "Mouse Wireless Logitech",
				"quantity": 10,
				"unit_price": 350000,
				"total_price": 3500000,
				"confidence": 99.1
			}
		],
		"terms": {
			"payment_terms": "NET 30",
			"shipping_terms": "FOB Destination",
			"total_amount": 88500000,
			"confidence": 98.9
		}
	},
	"validation": {
		"required_fields_present": true,
		"pricing_calculation_valid": true,
		"format_compliance": true
	},
	"metadata": {
		"model_version": "po_v1.4.1",
		"processed_at": "2024-01-12T14:20:33Z",
		"processing_method": "hybrid_ai",
		"complexity_score": "medium"
	}
}`;

    return (
        <div className="bg-gray-50 text-gray-900">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-24 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center mb-6 px-4 py-2 text-sm bg-blue-50 text-gray-700 rounded-lg">
                            <FileJson className="w-4 h-4 mr-2 text-primary-800" />
                            <span className="font-semibold">JSON API Output</span>
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            JSON API Output
                            <br />Siap Integrasi
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                            Structured JSON output yang konsisten dan standardized untuk easy integration ke ERP, CRM, RPA, dan sistem enterprise apapun. Lengkap dengan confidence scores, metadata, dan validation untuk production-ready automation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 rounded-lg bg-[#133E68] text-white hover:bg-[#0F3053] transition-colors inline-flex items-center justify-center">
                                View Live API Demo
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                            <button className="px-8 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-white transition-colors inline-flex items-center justify-center">
                                Download API Documentation
                                <Download className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">JSON Output Features</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade JSON structure dengan semua informasi yang dibutuhkan untuk automation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow p-8">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-gray-100 text-primary-800 flex items-center justify-center flex-shrink-0">
                                    <Layers className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">Standardized Schema</h3>
                                    <p className="text-gray-600 mb-4">Konsisten JSON structure untuk semua jenis dokumen</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Predefined schema untuk common document types</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Custom schema definition untuk specific use cases</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Backwards compatibility untuk schema updates</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Validation rules dan error handling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow p-8">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-gray-100 text-primary-800 flex items-center justify-center flex-shrink-0">
                                    <Target className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">Confidence Scoring</h3>
                                    <p className="text-gray-600 mb-4">Skor kepercayaan untuk setiap extracted field</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Field-level confidence scores (0-100%)</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Document-level quality assessment</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Flagging untuk low-confidence extractions</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Quality thresholds yang configurable</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow p-8">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-gray-100 text-primary-800 flex items-center justify-center flex-shrink-0">
                                    <Database className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">Rich Metadata</h3>
                                    <p className="text-gray-600 mb-4">Comprehensive metadata untuk tracking dan audit</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Processing timestamps dan duration</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Model version dan processing method used</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Source document information</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Error logs dan debugging information</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow p-8">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-gray-100 text-primary-800 flex items-center justify-center flex-shrink-0">
                                    <Network className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">Enterprise Integration</h3>
                                    <p className="text-gray-600 mb-4">Siap untuk enterprise system integration</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />RESTful API dengan OpenAPI spec</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Webhook notifications untuk async processing</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Batch processing untuk high volume</li>
                                        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5" />Rate limiting dan throttling controls</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sample JSON Responses (Tabs) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Sample JSON Responses</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Contoh nyata JSON output untuk dokumen umum</p>
                    </div>

                    {/* Segmented tabs */}
                    <div className="bg-blue-50 rounded-full p-1 w-full max-w-3xl mx-auto mb-8 grid grid-cols-3">
                        <button onClick={() => setActiveTab('invoice')} className={`text-sm font-medium rounded-full py-2.5 px-4 transition-all ${activeTab === 'invoice' ? 'bg-white shadow text-primary-800' : 'text-gray-600 hover:text-gray-900'}`}>Invoice</button>
                        <button onClick={() => setActiveTab('kyc')} className={`text-sm font-medium rounded-full py-2.5 px-4 transition-all ${activeTab === 'kyc' ? 'bg-white shadow text-primary-800' : 'text-gray-600 hover:text-gray-900'}`}>KYC Documents</button>
                        <button onClick={() => setActiveTab('po')} className={`text-sm font-medium rounded-full py-2.5 px-4 transition-all ${activeTab === 'po' ? 'bg-white shadow text-primary-800' : 'text-gray-600 hover:text-gray-900'}`}>Purchase Orders</button>
                    </div>

                    {/* Panels */}
                    {activeTab === 'invoice' && (
                        <div className="overflow-hidden rounded-xl border border-gray-200">
                            <div className="bg-gray-900 text-white px-6 py-5 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">Invoice Processing Response</h3>
                                    <p className="text-gray-300 text-sm">Standard response untuk invoice document processing</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="inline-flex items-center text-sm px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15">
                                        <Copy className="w-4 h-4 mr-2" />Copy
                                    </button>
                                    <button className="inline-flex items-center text-sm px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15">
                                        <Download className="w-4 h-4 mr-2" />Download
                                    </button>
                                </div>
                            </div>
                            <div className="bg-gray-900 text-green-400 p-6 overflow-x-auto">
                                <pre className="text-sm"><code>{invoiceJson}</code></pre>
                            </div>
                        </div>
                    )}

                    {activeTab === 'kyc' && (
                        <div className="overflow-hidden rounded-xl border border-gray-200">
                            <div className="bg-gray-900 text-white px-6 py-5 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">KYC Document Response</h3>
                                    <p className="text-gray-300 text-sm">Response untuk Indonesian ID card (KTP) processing</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="inline-flex items-center text-sm px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15">
                                        <Copy className="w-4 h-4 mr-2" />Copy
                                    </button>
                                    <button className="inline-flex items-center text-sm px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15">
                                        <Download className="w-4 h-4 mr-2" />Download
                                    </button>
                                </div>
                            </div>
                            <div className="bg-gray-900 text-green-400 p-6 overflow-x-auto">
                                <pre className="text-sm"><code>{kycJson}</code></pre>
                            </div>
                        </div>
                    )}

                    {activeTab === 'po' && (
                        <div className="overflow-hidden rounded-xl border border-gray-200">
                            <div className="bg-gray-900 text-white px-6 py-5 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">Purchase Order Response</h3>
                                    <p className="text-gray-300 text-sm">Standard response untuk purchase order document</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="inline-flex items-center text-sm px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15">
                                        <Copy className="w-4 h-4 mr-2" />Copy
                                    </button>
                                    <button className="inline-flex items-center text-sm px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15">
                                        <Download className="w-4 h-4 mr-2" />Download
                                    </button>
                                </div>
                            </div>
                            <div className="bg-gray-900 text-green-400 p-6 overflow-x-auto">
                                <pre className="text-sm"><code>{poJson}</code></pre>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Integration Examples */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Integration Examples</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Contoh integrasi JSON output ke sistem enterprise populer</p>
                    </div>

                    <div className="space-y-10">
                        {/* Example: SAP ERP */}
                        <div className="overflow-hidden rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-8 lg:p-10">
                                    <h3 className="text-2xl font-semibold mb-3">SAP ERP</h3>
                                    <p className="text-gray-600 mb-6">Direct integration dengan SAP untuk automated posting</p>
                                    <h4 className="font-semibold mb-3">Integration Steps:</h4>
                                    <ol className="space-y-3 mb-6 text-sm">
                                        <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-primary-800 text-white flex items-center justify-center text-xs mr-3 mt-0.5">1</span>Extract invoice data via API</li>
                                        <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-primary-800 text-white flex items-center justify-center text-xs mr-3 mt-0.5">2</span>Map JSON fields ke SAP document structure</li>
                                        <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-primary-800 text-white flex items-center justify-center text-xs mr-3 mt-0.5">3</span>Validate data dengan business rules</li>
                                        <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-primary-800 text-white flex items-center justify-center text-xs mr-3 mt-0.5">4</span>Auto-post ke SAP FI module</li>
                                    </ol>
                                    <button className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
                                        View Full Integration Guide
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </button>
                                </div>
                                <div className="bg-gray-900 p-6 lg:p-8 flex">
                                    <div className="w-full flex flex-col">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-gray-300 text-sm">Sample Integration Code</span>
                                            <Code className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre-wrap break-words">{`# SAP Integration Example
import requests
from sap_connector import SAPClient

# Process document
response = requests.post(
        'https://api.snapint.ai/v1/process',
		headers={'Authorization': 'Bearer YOUR_API_KEY'},
		json={'document_url': invoice_url}
)

# Extract and map data
invoice_data = response.json()['extracted_data']
sap_document = map_to_sap_format(invoice_data)

# Post to SAP
sap_client = SAPClient()
sap_client.create_invoice(sap_document)`}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Example: Microsoft Dynamics */}
                        <div className="overflow-hidden rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-8 lg:p-10">
                                    <h3 className="text-2xl font-semibold mb-3">Microsoft Dynamics</h3>
                                    <p className="text-gray-600 mb-6">Integration dengan Dynamics 365 untuk procurement workflow</p>
                                    <h4 className="font-semibold mb-3">Integration Steps:</h4>
                                    <ol className="space-y-3 mb-6 text-sm">
                                        <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-primary-800 text-white flex items-center justify-center text-xs mr-3 mt-0.5">1</span>Process PO documents automatically</li>
                                        <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-primary-800 text-white flex items-center justify-center text-xs mr-3 mt-0.5">2</span>Create vendor master data dari extracted info</li>
                                        <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-primary-800 text-white flex items-center justify-center text-xs mr-3 mt-0.5">3</span>Generate purchase requisitions</li>
                                        <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-primary-800 text-white flex items-center justify-center text-xs mr-3 mt-0.5">4</span>Trigger approval workflows</li>
                                    </ol>
                                    <button className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
                                        View Full Integration Guide
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </button>
                                </div>
                                <div className="bg-gray-900 p-6 lg:p-8 flex">
                                    <div className="w-full flex flex-col">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-gray-300 text-sm">Sample Integration Code</span>
                                            <Code className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre-wrap break-words">{`// Dynamics 365 Integration
const response = await fetch('https://api.snapint.ai/v1/process', {
	method: 'POST',
	headers: {
		'Authorization': 'Bearer YOUR_API_KEY',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({document_url: poUrl})
});

const poData = await response.json();
await dynamics.createPurchaseOrder({
	vendor: poData.extracted_data.supplier,
	items: poData.extracted_data.items,
	terms: poData.extracted_data.terms
});`}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Example: Custom RPA Workflow */}
                        <div className="overflow-hidden rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-8 lg:p-10">
                                    <h3 className="text-2xl font-semibold mb-3">Custom RPA Workflow</h3>
                                    <p className="text-gray-600 mb-6">Integration dengan UiPath/Automation Anywhere untuk end-to-end automation</p>
                                    <h4 className="font-semibold mb-3">Integration Steps:</h4>
                                    <ol className="space-y-3 mb-6 text-sm">
                                        <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-primary-800 text-white flex items-center justify-center text-xs mr-3 mt-0.5">1</span>Monitor folder untuk new documents</li>
                                        <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-primary-800 text-white flex items-center justify-center text-xs mr-3 mt-0.5">2</span>Send ke API untuk processing</li>
                                        <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-primary-800 text-white flex items-center justify-center text-xs mr-3 mt-0.5">3</span>Validate extracted data dengan business logic</li>
                                        <li className="flex items-start"><span className="w-6 h-6 rounded-full bg-primary-800 text-white flex items-center justify-center text-xs mr-3 mt-0.5">4</span>Update multiple downstream systems</li>
                                    </ol>
                                    <button className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
                                        View Full Integration Guide
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </button>
                                </div>
                                <div className="bg-gray-900 p-6 lg:p-8 flex">
                                    <div className="w-full flex flex-col">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-gray-300 text-sm">Sample Integration Code</span>
                                            <Code className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre-wrap break-words">{`# RPA Workflow Integration
def process_document_batch(folder_path):
		for file_path in monitor_folder(folder_path):
				# Upload and process
                result = snapint_client.process_document(file_path)
        
				# Validate business rules
				if validate_business_rules(result.extracted_data):
						# Update ERP
						erp_client.create_record(result.extracted_data)
						# Update CRM  
						crm_client.update_customer(result.extracted_data)
						# Archive document
						archive_document(file_path)
				else:
						queue_for_manual_review(file_path, result)`}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* API Performance Metrics */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">API Performance & Reliability</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Enterprise-grade performance metrics dan reliability guarantees</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                            <Clock className="w-12 h-12 text-primary-800 mx-auto mb-4" />
                            <div className="text-3xl font-bold text-gray-900 mb-1">&lt; 2s</div>
                            <div className="text-sm text-gray-600">Average API Response Time</div>
                            <div className="text-xs text-gray-500 mt-2">P95: &lt; 5s, P99: &lt; 10s</div>
                        </div>
                        <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                            <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
                            <div className="text-sm text-gray-600">Uptime SLA</div>
                            <div className="text-xs text-gray-500 mt-2">24/7 monitoring & alerts</div>
                        </div>
                        <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                            <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                            <div className="text-3xl font-bold text-gray-900 mb-1">10K</div>
                            <div className="text-sm text-gray-600">Requests per Minute</div>
                            <div className="text-xs text-gray-500 mt-2">Auto-scaling available</div>
                        </div>
                        <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                            <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                            <div className="text-3xl font-bold text-gray-900 mb-1">5</div>
                            <div className="text-sm text-gray-600">Global Regions</div>
                            <div className="text-xs text-gray-500 mt-2">Low latency worldwide</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-[#0B2A45] to-[#1D4E89] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Integrate JSON API?</h2>
                    <p className="text-lg sm:text-xl mb-10 opacity-90">Mulai membangun dengan dokumentasi API komprehensif dan contoh interaktif. Dapatkan API key dan mulai testing dalam 5 menit.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-10 py-3 rounded-lg bg-white text-primary-800 hover:bg-gray-100 inline-flex items-center justify-center font-medium">
                            Get API Key
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                        <button className="px-10 py-3 rounded-lg border border-white/80 text-white hover:bg-white hover:text-primary-800 inline-flex items-center justify-center font-medium">
                            View API Documentation
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
