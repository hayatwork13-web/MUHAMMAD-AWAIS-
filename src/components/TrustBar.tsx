import React from 'react';
import { METRICS } from '../data';

export default function TrustBar() {
  return (
    <section className="bg-[#F8FAFC] border-b border-[#E5E7EB] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header indicator */}
        <div className="text-center mb-8">
          <span className="text-[#2563EB] text-[11px] font-bold tracking-widest uppercase bg-white border border-[#E5E7EB] px-3 py-1 rounded">
            Verified Upwork Status &amp; Performance
          </span>
          <h3 className="font-sans font-extrabold text-2xl text-[#111827] mt-3">
            Top Rated on Upwork with 100% Client Satisfaction
          </h3>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-white border border-[#E5E7EB] rounded p-6 shadow-xs flex flex-col justify-between hover:border-[#2563EB] transition-colors duration-200"
            >
              <div>
                <span className="text-[10px] font-mono text-[#4B5563] font-bold tracking-wider block uppercase mb-1">
                  {metric.title}
                </span>
                <span className="font-sans font-extrabold text-3xl text-[#111827] tracking-tight">
                  {metric.value}
                </span>
              </div>
              <p className="font-sans font-normal text-xs text-[#4B5563] mt-2 border-t border-[#E5E7EB] pt-2">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
