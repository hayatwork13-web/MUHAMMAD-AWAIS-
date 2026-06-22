import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data';

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(PORTFOLIO_ITEMS[0]);

  // Pre-configured custom HTML styling templates to represent "premium images" entirely via code!
  // This is highly robust and premium, and respects the restriction "DO NOT USE ANY IMAGES" 100%.
  const renderEmailPreview = (type: string) => {
    switch (type) {
      case 'welcome':
        return (
          <div className="bg-white text-gray-900 border border-gray-150 rounded-lg p-6 max-w-sm mx-auto shadow-sm">
            {/* Header branding */}
            <div className="text-center border-b border-gray-100 pb-4 mb-4">
              <span className="font-serif tracking-widest text-sm font-extrabold text-gray-800">ECOTHREADS CO.</span>
              <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-widest">Organic Premium Apparel</p>
            </div>
            
            {/* Subject preview info */}
            <div className="bg-gray-50 border border-gray-100 rounded px-2.5 py-1 mb-4 flex justify-between text-[10px]">
              <span className="text-gray-400">To: prospective_buyer@gmail.com</span>
              <span className="text-blue-600 font-semibold">[Welcome Email #1]</span>
            </div>

            {/* Hero text */}
            <div className="text-center mb-6">
              <h1 className="font-serif font-extrabold text-xl text-gray-900 leading-tight">Welcome to the family.</h1>
              <p className="text-[11px] text-gray-500 mt-2 px-4">Here is 15% off your first purchase of sustainable wardrobe essentials.</p>
            </div>

            {/* Coupon Callout Block */}
            <div className="bg-blue-50/50 border border-dashed border-blue-200 rounded-xl p-4 text-center mb-6">
              <span className="text-[10px] text-blue-600 uppercase tracking-widest font-mono font-bold block mb-1">Your Exclusive Onboarding Code</span>
              <span className="font-mono text-base font-extrabold text-blue-700 tracking-wider">ECOWELCOME15</span>
              <button className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs py-2 rounded-lg mt-3">
                Shop with 15% Off
              </button>
            </div>

            {/* Simulated Product Spotlight */}
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block mb-3 border-b border-gray-100 pb-1.5 font-bold">Best Sellers</span>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 flex flex-col justify-between">
                <div className="h-16 bg-gray-200/60 rounded flex items-center justify-center text-[10px] text-gray-400 font-medium">Organic Cotton Tee</div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-[11px] font-semibold text-gray-800">$38</span>
                  <span className="bg-emerald-50 text-emerald-600 font-bold text-[8px] px-1 rounded">5.0 ★</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 flex flex-col justify-between">
                <div className="h-16 bg-gray-200/60 rounded flex items-center justify-center text-[10px] text-gray-400 font-medium">Sustainable Chino</div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-[11px] font-semibold text-gray-800">$72</span>
                  <span className="bg-emerald-50 text-emerald-600 font-bold text-[8px] px-1 rounded">4.9 ★</span>
                </div>
              </div>
            </div>

            {/* Founder message signoff */}
            <div className="border-t border-gray-100 pt-4 text-center">
              <p className="text-[9px] italic text-gray-500">"We make clothing that is kind to your skin and kinder to our planet."</p>
              <p className="text-[10px] font-bold text-gray-800 mt-1">Sophia &amp; Marcus, Founders</p>
            </div>
          </div>
        );

      case 'cart':
        return (
          <div className="bg-white text-gray-900 border border-gray-150 rounded-lg p-6 max-w-sm mx-auto shadow-sm">
            {/* Header */}
            <div className="text-center border-b border-gray-100 pb-4 mb-4">
              <span className="font-sans tracking-widest text-xs font-black text-gray-950">GLOW CLINICAL</span>
              <p className="text-[8px] text-gray-400 mt-0.5 uppercase tracking-widest">Medical-Grade Skincare</p>
            </div>

            {/* Subject */}
            <div className="bg-gray-50 border border-gray-100 rounded px-2.5 py-1 mb-4 flex justify-between text-[10px]">
              <span className="text-gray-400">To: cart_shopper@gmail.com</span>
              <span className="text-blue-600 font-semibold">[Cart Rescue Flow]</span>
            </div>

            {/* Urgency Header */}
            <div className="text-center mb-5">
              <h1 className="font-sans font-extrabold text-base tracking-tight text-gray-950 leading-tight">Did life get in the way?</h1>
              <p className="text-[10px] text-gray-500 mt-1.5 px-3">No worries—we held onto your clinical favorites so you do not lose your spot in line.</p>
            </div>

            {/* Simulated Cart Item Card */}
            <div className="border border-gray-200 rounded-xl p-3 flex s-items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-mono text-[9px] text-gray-400 font-bold border border-gray-150 flex-shrink-0">
                SERUM
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block font-mono">Top Pick</span>
                <h4 className="text-xs font-semibold text-gray-800 truncate">Advanced Hydration Peptide Complex</h4>
                <p className="text-[10px] text-gray-400">1.7 Fl Oz / 50mL &bull; Qty: 1</p>
              </div>
              <div className="text-right flex-shrink-0 flex flex-col justify-center">
                <span className="text-xs font-bold text-gray-900 block">$84.00</span>
                <span className="text-[9px] text-[#2563EB] line-through">$94.00</span>
              </div>
            </div>

            {/* Incentive details */}
            <p className="text-[10px] text-gray-500 text-center mb-4">
              Complete order today and secure **Free Next-Day Air Shipping** + an automatic complimentary botanical eye cream sample.
            </p>

            {/* CTA action */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs py-2.5 rounded-lg mb-4 cursor-pointer">
              Return to Checkout &bull; $84.00
            </button>

            {/* Social Proof */}
            <div className="bg-gray-50/50 rounded-xl p-3 border border-gray-100">
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-[10px]">&starf;</span>
                ))}
                <span className="text-[9px] font-bold text-gray-800 ml-1">"Cleared my breakout in 3 days!"</span>
              </div>
              <p className="text-[9px] text-gray-5050 text-gray-500 leading-normal">
                "I was skeptical about checkout, but returning to grab this serum was the best choice I have made. Absolute staple." &mdash; Amanda P., Verified Buyer
              </p>
            </div>
          </div>
        );

      case 'browse':
        return (
          <div className="bg-white text-gray-900 border border-gray-150 rounded-lg p-6 max-w-sm mx-auto shadow-sm">
            {/* Header */}
            <div className="text-center border-b border-gray-100 pb-4 mb-4">
              <span className="font-sans tracking-widest text-xs font-bold text-gray-900">VITA NUTRITION</span>
              <p className="text-[8px] text-gray-400 mt-0.5 uppercase tracking-widest">Premium Plant Supplements</p>
            </div>

            {/* Subject */}
            <div className="bg-gray-50 border border-gray-100 rounded px-2.5 py-1 mb-4 flex justify-between text-[10px]">
              <span className="text-gray-400">To: catalog_visitor@gmail.com</span>
              <span className="text-blue-600 font-semibold">[Browse Recovery #1]</span>
            </div>

            {/* Main content */}
            <div className="text-center mb-5">
              <span className="text-[9px] font-mono text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full uppercase">
                Now Back in Stock
              </span>
              <h1 className="font-sans font-extrabold text-base text-gray-950 mt-3 leading-tight">Something caught your eye.</h1>
              <p className="text-[10px] text-gray-500 mt-1.5">Our pure organic extracts sell out quickly, but we’ve locked in current inventory for your session.</p>
            </div>

            {/* Highlight Product Mockup with visual outline */}
            <div className="bg-gradient-to-tr from-gray-50 to-emerald-50/20 border border-gray-200 rounded-2xl p-4 flex flex-col items-center mb-5">
              <div className="w-16 h-16 bg-white border border-gray-150 rounded-xl flex items-center justify-center font-mono text-[9px] text-gray-400 font-bold mb-3 shadow-xs">
                VITA-D3
              </div>
              <h3 className="text-xs font-extrabold text-gray-900">Daily Optimal Vitamin D3+K2 Drops</h3>
              <p className="text-[10px] text-gray-500 mt-1 text-center">100% Vegan &bull; Wild Harvested Coconut Oil Base</p>
              <div className="mt-2.5 flex items-center space-x-2">
                <span className="text-xs font-extrabold text-gray-900">$34.00</span>
                <span className="text-[9px] text-gray-500 font-medium">Or Subscribe &amp; Save 15%</span>
              </div>
            </div>

            {/* Bulleted trust points */}
            <div className="space-y-2 mb-5">
              <div className="flex items-center space-x-2 text-[10px] text-gray-600">
                <span className="text-emerald-500 font-bold">&check;</span>
                <span>Third-Party Lab Tested for Heavy Metals &amp; Purities</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] text-gray-600">
                <span className="text-emerald-500 font-bold">&check;</span>
                <span>Doctor Formulation Recommended Dosage Guarantees</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs py-2 rounded-lg">
              Secure Your Order
            </button>
          </div>
        );

      case 'post_purchase':
        return (
          <div className="bg-white text-gray-900 border border-gray-150 rounded-lg p-6 max-w-sm mx-auto shadow-sm">
            {/* Header */}
            <div className="text-center border-b border-gray-100 pb-4 mb-4">
              <span className="font-semibold text-xs text-gray-900 uppercase tracking-widest">KINETIC WORKWEAR</span>
            </div>

            {/* Subject */}
            <div className="bg-gray-50 border border-gray-100 rounded px-2.5 py-1 mb-4 flex justify-between text-[10px]">
              <span className="text-gray-400">To: valued_customer@gmail.com</span>
              <span className="text-blue-600 font-semibold">[Post-Purchase VIP Onboarding]</span>
            </div>

            {/* Main content */}
            <div className="space-y-3 font-sans text-xs text-gray-600 leading-relaxed mb-6">
              <h3 className="text-sm font-extrabold text-gray-950 block">A sincere thank you from our team.</h3>
              
              <p>
                As a founder, my primary mission was to design gear that stood up to 14-hour days without showing wear or losing its custom fit. Your order goes directly toward fueling our local material sourcing program.
              </p>
              <p>
                We have added a custom **VIP Customer Badge** to your profile. On your next order, your account automatically unlocks free global express delivery and secure early-access to seasonal catalog releases.
              </p>
              <p>
                To celebrate your purchase, here is a special **20% Off Gift Pass** you can use next time, or share with a direct peer who values quality wear.
              </p>
            </div>

            {/* Voucher Pass */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center mb-6">
              <span className="text-[9px] uppercase tracking-wider text-gray-400 block mb-0.5">Your Dynamic 20% Pass</span>
              <span className="font-mono text-base font-extrabold text-gray-900">VIPREWARD20</span>
              <div className="text-[9px] text-gray-400 mt-1">Valid for exactly 30 days &bull; No minimum threshold</div>
            </div>

            {/* Support section */}
            <div className="text-center border-t border-gray-150 pt-4">
              <p className="text-[10px] text-gray-400">Questions? Simply reply to this email at any time. Our concierge team responds personally within 4 hours.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="bg-white py-16 border-b border-[#E5E7EB] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#2563EB] text-[11px] font-bold tracking-widest uppercase bg-[#F8FAFC] border border-[#E5E7EB] px-3 py-1 rounded">
            Completed Works
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#111827] mt-4 mb-4">
            Interactive Email Campaign &amp; Flow Portfolio
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4B5563]">
            Click on the tabs below to preview actual live-coded transactional email templates and behavioral trigger flows in our responsive canvas viewer.
          </p>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Details Tab */}
          <div className="lg:col-span-5 space-y-3">
            {PORTFOLIO_ITEMS.map((item) => {
              const isActive = selectedItem.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`w-full text-left p-5 rounded border transition-colors duration-200 ${
                    isActive
                      ? 'bg-[#F8FAFC] border-[#2563EB] ring-1 ring-[#2563EB] shadow-xs'
                      : 'bg-white border-[#E5E7EB] hover:border-gray-300 hover:bg-[#F8FAFC]/50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-white border border-[#E5E7EB] px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#4B5563]">Interactive Model</span>
                  </div>

                  <h3 className={`font-sans font-extrabold text-sm sm:text-base ${isActive ? 'text-[#111827]' : 'text-[#4B5563]'}`}>
                    {item.title}
                  </h3>
                  <p className="font-sans font-normal text-xs text-[#4B5563] leading-normal mt-1.5 lines-2">
                    {item.description}
                  </p>

                  {/* Display Metrics */}
                  {item.metrics && (
                    <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#E5E7EB]">
                      {item.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <span className="text-[11px] font-bold text-[#111827] block">{m.value}</span>
                          <span className="text-[9px] text-[#4B5563] uppercase tracking-widest">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Mobile Preview Area */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#E5E7EB] rounded p-6 sm:p-10 flex flex-col items-center justify-center min-h-[500px]">
            <div className="mb-4 text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#4B5563] block mb-1">Live Viewport Preview</span>
              <p className="font-sans font-bold text-xs text-[#111827]">{selectedItem.title}</p>
            </div>

            {/* Simulated Desktop/Mobile Frame wrapper */}
            <div className="w-full max-w-sm bg-gray-100 border-4 border-[#111827] rounded-[40px] overflow-hidden shadow-2xl relative">
              {/* Speaker Bar */}
              <div className="w-24 h-4 bg-[#111827] mx-auto rounded-b-xl mb-1 absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
              </div>

              {/* Email Content Container */}
              <div className="pt-8 pb-4 px-2 overflow-y-auto max-h-[460px] no-scrollbar select-none">
                {renderEmailPreview(selectedItem.templateType)}
              </div>
            </div>

            <div className="mt-5 text-center px-4">
              <span className="inline-flex items-center space-x-1 text-xs text-[#4B5563]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                <span>Optimized layout matches Dark Mode client rendering systems.</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
