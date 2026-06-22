import React from 'react';
import { METRICS } from '../data';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 border-b border-gray-100">
      {/* Decorative Grid Grid background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 bg-[#F8FAFC] border border-[#E5E7EB] text-[#2563EB] px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider w-fit mb-6">
              <span>Ecommerce Email Marketing Specialist</span>
            </div>

            {/* Headline */}
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight leading-tight mb-6">
              Helping Shopify Brands Grow Through <span className="text-[#2563EB]">Email.</span>
            </h1>

            {/* Subheadline */}
            <p className="font-sans font-normal text-sm sm:text-base text-[#4B5563] leading-relaxed mb-8 max-w-2xl">
              Specializing in Klaviyo &amp; Omnisend automation, lifecycle marketing, and customer retention for high-growth ecommerce stores. Converting cold purchasers into repeat brand advocates.
            </p>

            {/* Desktop CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onScrollTo('contact')}
                className="bg-[#2563EB] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-6 py-4 rounded transition text-center cursor-pointer"
              >
                Request Free Audit
              </button>
              <a
                href="https://www.upwork.com/freelancers/muhammadawais12?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~017bb8ffcffd928169%2Fprofile"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-[#E5E7EB] hover:bg-[#F8FAFC] text-[#111827] text-xs sm:text-sm font-bold uppercase tracking-widest px-6 py-4 rounded transition text-center flex items-center justify-center space-x-2"
              >
                <span>Upwork Profile</span>
              </a>
            </div>
          </div>

          {/* Right Visual Column (Premium Typographic Email Mock up - No Images) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Background Blob */}
            <div className="absolute -inset-4 bg-blue-50 rounded-2xl filter blur-xl opacity-60 z-0"></div>
            
            {/* Simulated Klaviyo Flow Panel */}
            <div className="relative z-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-xl shadow-gray-200/50">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-5">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <div className="text-[11px] font-mono text-gray-400 bg-gray-50 border border-gray-150 px-2 py-0.5 rounded">
                  Klaviyo Automation Engine v4
                </div>
              </div>

              {/* Automation Node 1 */}
              <div className="border border-blue-100 bg-blue-50/45 rounded-xl p-3.5 mb-4 relative">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold">1</div>
                <div className="text-[11px] font-mono text-blue-600 font-bold uppercase tracking-wider mb-1">TRIGGER EVENT</div>
                <div className="text-xs font-semibold text-gray-900">Checkout Started (Shopify API)</div>
                <div className="text-[11px] text-gray-500">Filters: Has Not Placed Order since starting checkout</div>
              </div>

              {/* Connecting Line */}
              <div className="w-0.5 h-6 bg-blue-200 mx-auto -mt-4 mb-1"></div>

              {/* Automation Node 2 */}
              <div className="border border-gray-100 bg-gray-50 rounded-xl p-3 mb-4 relative">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center text-[8px] text-white font-bold">2</div>
                <div className="text-[11px] font-mono text-gray-500 font-bold uppercase tracking-wider mb-0.5">TIMING DELAY</div>
                <div className="text-xs font-semibold text-gray-800">Wait precisely 4 Hours</div>
              </div>

              {/* Connecting Line */}
              <div className="w-0.5 h-6 bg-blue-200 mx-auto -mt-4 mb-1"></div>

              {/* Automation Node 3 - Email template send */}
              <div className="border border-emerald-100 bg-emerald-50/50 rounded-xl p-4 relative shadow-sm">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-white font-bold">3</div>
                
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[11px] font-mono text-emerald-700 font-bold uppercase tracking-wider bg-emerald-100/70 px-1.5 py-0.5 rounded">SEND EMAIL</span>
                    <h3 className="text-xs font-bold text-gray-900 mt-1">Flow #1: Abandoned Checkout Hero</h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-white border border-emerald-100 px-2.5 py-0.5 rounded-full">
                    +34.2% Lift
                  </span>
                </div>

                {/* Simulated Email Body preview */}
                <div className="bg-white border border-gray-150 rounded-lg p-3 text-[10px] text-gray-500 font-sans mt-2 space-y-2">
                  <div className="border-b border-gray-100 pb-1.5 font-semibold text-gray-800 flex justify-between">
                    <span>Subject: Did you leave these behind?</span>
                    <span className="text-emerald-600">A/B Configured</span>
                  </div>
                  <div className="h-2 w-2/3 bg-gray-100 rounded-sm"></div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-full bg-gray-50 rounded-sm"></div>
                    <div className="h-1.5 w-5/6 bg-gray-50 rounded-sm"></div>
                  </div>
                  <div className="flex justify-center">
                    <span className="inline-block bg-blue-600 text-white font-bold text-[8px] px-4 py-1.5 rounded">COMPLETE CHECKOUT (10% OFF AUTO-APPLIED)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
