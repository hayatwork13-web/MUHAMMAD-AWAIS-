import React from 'react';
import { CASE_STUDIES } from '../data';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-[#F8FAFC] py-16 border-b border-[#E5E7EB] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#2563EB] text-[11px] font-bold tracking-widest uppercase bg-white border border-[#E5E7EB] px-3 py-1 rounded">
            Proven Performance
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#111827] mt-4 mb-4">
            Real E-Commerce Retention Case Studies
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4B5563]">
            A granular breakdown of the challenges faced, structural strategies deployed, and verified financial outcomes generated for Shopify stores.
          </p>
        </div>

        {/* Case Studies Container */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-white border border-[#E5E7EB] rounded p-6 sm:p-10 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row justify-between lg:items-center border-b border-[#E5E7EB] pb-6 mb-8 gap-4">
                <div>
                  <span className="text-xs font-bold text-[#2563EB] font-sans block uppercase tracking-wider">
                    E-commerce Campaign Focus &bull; {study.brand}
                  </span>
                  <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#111827] mt-2">
                    {study.title}
                  </h3>
                </div>
                {/* Horizontal badge row */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white text-[#2563EB] text-[10px] font-bold px-3 py-1.5 rounded border border-[#E5E7EB] uppercase tracking-wider">
                    Klaviyo Managed
                  </span>
                  <span className="bg-white text-emerald-700 text-[10px] font-bold px-3 py-1.5 rounded border border-[#E5E7EB] uppercase tracking-wider">
                    ROI-Driven Flow
                  </span>
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                {/* Left side info blocks */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h4 className="font-sans font-bold text-xs text-[#111827] uppercase tracking-widest mb-2">
                      The Challenge
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-xs text-[#111827] uppercase tracking-widest mb-2">
                      The Strategy
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {study.strategy}
                    </p>
                  </div>

                  {/* Execution Steps */}
                  <div>
                    <h4 className="font-sans font-bold text-xs text-[#111827] uppercase tracking-widest mb-3">
                      Key Execution Accomplishments
                    </h4>
                    <ul className="space-y-2.5">
                      {study.execution.map((step, stepId) => (
                        <li key={stepId} className="flex items-start space-x-2.5">
                          <span className="w-5 h-5 rounded bg-[#F8FAFC] border border-[#E5E7EB] text-[#2563EB] font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                            {stepId + 1}
                          </span>
                          <span className="font-sans text-xs sm:text-sm text-[#4B5563]">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right side stats blocks */}
                <div className="lg:col-span-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded p-6 space-y-4">
                  <h4 className="font-sans font-bold text-xs text-[#111827] uppercase tracking-widest border-b border-[#E5E7EB] pb-2 mb-2">
                    Verified Revenue Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                    {study.results.map((res, resIdx) => (
                      <div key={resIdx} className="bg-white border border-[#E5E7EB] rounded p-4 shadow-2xs">
                        <span className="text-[9px] font-mono text-[#4B5563] block uppercase font-bold tracking-wider">
                          {res.label}
                        </span>
                        <span className="font-sans font-black text-xl sm:text-2xl text-emerald-600 mt-1 block">
                          {res.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
