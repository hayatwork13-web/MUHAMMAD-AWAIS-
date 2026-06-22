import React from 'react';

export default function UpworkCredibility() {
  return (
    <section id="credibility" className="bg-[#F8FAFC] py-16 border-b border-[#E5E7EB] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main box card representing Upwork verified status */}
        <div className="bg-white border border-[#E5E7EB] rounded p-8 sm:p-12 relative overflow-hidden">
          
          {/* Top-right floating background indicator elements */}
          <div className="absolute right-0 top-0 w-48 h-48 bg-emerald-50/20 rounded-full filter blur-3xl opacity-60 pointer-events-none -z-0"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left description text column */}
            <div className="lg:col-span-7">
              {/* Badge visual indicator */}
              <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100 text-[#10B981] px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider mb-6">
                <svg className="w-4 h-4 text-[#10B981] fill-current" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Upwork Verified Credibility Status</span>
              </div>

              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#111827] mb-4 tracking-tight leading-tight">
                Top Rated Ecommerce Partner on Upwork Global
              </h2>
              
              <p className="font-sans text-sm sm:text-base text-[#4B5563] leading-relaxed mb-6">
                My profile is backed by Upwork's highest performance tier. I maintain a strict 100% Job Success Score (JSS) on multi-month retainer work spanning email automation architecture, Klaviyo segment audits, and full lifecycle marketing.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-gray-700 font-sans mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-[#2563EB] font-bold">●</span>
                  <span><strong className="text-[#111827]">Top Rated Badge:</strong> Dedicated focus, reliable communication, and master-level execution.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#2563EB] font-bold">●</span>
                  <span><strong className="text-[#111827]">100% Success Ratio:</strong> Multi-year track record without a single dissatisfied client contract.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#2563EB] font-bold">●</span>
                  <span><strong className="text-[#111827]">Secure Escrow Framework:</strong> All work can be securely contracted via Upwork for payment protection.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.upwork.com/freelancers/muhammadawais12?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~017bb8ffcffd928169%2Fprofile"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#10B981] hover:bg-[#0e9f6e] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-4 rounded transition inline-flex items-center space-x-2"
                >
                  <span>Hire Me on Upwork Now</span>
                </a>
              </div>
            </div>

            {/* Right scorecard column */}
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E5E7EB] rounded p-6 sm:p-8 space-y-6">
              
              {/* Upwork visual stamp simulated */}
              <div className="text-center border-b border-[#E5E7EB] pb-5">
                <span className="font-serif italic font-extrabold text-[#10B981] text-2xl tracking-tight">upwork</span>
                <span className="block text-[10px] text-[#4B5563] font-mono tracking-widest mt-1 uppercase">Official Talent Marketplace</span>
              </div>

              {/* Verified Metrics blocks */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3.5 bg-white border border-[#E5E7EB] rounded">
                  <span className="text-xs text-[#4B5563] font-sans">Tier Standing:</span>
                  <span className="text-[10px] font-bold text-white bg-[#10B981] px-2.5 py-1 rounded uppercase tracking-wide">
                    TOP RATED
                  </span>
                </div>

                <div className="flex justify-between items-center p-3.5 bg-white border border-[#E5E7EB] rounded">
                  <span className="text-xs text-[#4B5563] font-sans">Job Success Score:</span>
                  <span className="text-xs font-bold text-[#111827]">100% Success</span>
                </div>

                <div className="flex justify-between items-center p-3.5 bg-white border border-[#E5E7EB] rounded">
                  <span className="text-xs text-[#4B5563] font-sans">Total Hours Logged:</span>
                  <span className="text-xs font-bold text-[#111827]">1,000+ Hours</span>
                </div>

                <div className="flex justify-between items-center p-3.5 bg-white border border-[#E5E7EB] rounded">
                  <span className="text-xs text-[#4B5563] font-sans">Client Engagement Rating:</span>
                  <span className="text-xs font-bold text-[rgb(245,158,11)] flex items-center gap-1">
                    5.0 / 5.0 ★
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
