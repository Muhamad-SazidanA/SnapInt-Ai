import React from 'react';

// Blog & Insights page – placeholder matching design pattern
export default function BlogPage() {
    return (
        <div className="bg-white text-gray-900">
            <section>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    {/* Concentric icon */}
                    <div className="mx-auto mb-10 w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-[#90A4BF] flex items-center justify-center">
                                <div className="w-6 h-6 rounded-full bg-[#3A5A78]" />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black">Blog & Insights</h1>
                    <p className="mt-4 text-lg text-slate-600">Latest articles on AI and document processing</p>

                    {/* Notice card */}
                    <div className="mt-10">
                        <div className="mx-auto max-w-4xl bg-slate-50 border border-slate-200 rounded-2xl p-8 text-slate-600">
                            This page is under development and will be available soon.
                        </div>
                    </div>

                    {/* Inline links */}
                    <div className="mt-10 text-slate-600">
                        <p>In the meantime, you can:</p>
                        <div className="mt-4 flex items-center justify-center text-sm">
                            <a onClick={() => window.history.back()} className="text-[#0B2A45] hover:underline cursor-pointer">← Go Back</a>
                            <span className="mx-3 text-slate-300">|</span>
                            <a href="/" className="text-[#0B2A45] hover:underline">Visit Home Page</a>
                            <span className="mx-3 text-slate-300">|</span>
                            <a href="mailto:support@snapint.ai" className="text-[#0B2A45] hover:underline">Contact Support</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

