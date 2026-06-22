import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-slate-800">
          
          {/* Logo Name block */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]"></span>
              <span className="font-sans font-extrabold text-base tracking-tight uppercase tracking-wider">
                Muhammad Awais
              </span>
            </div>
            <p className="font-sans text-xs text-slate-400 max-w-sm leading-relaxed">
              Ecommerce Email Marketing Specialist. Setting up ROI-driven behavior triggers, custom HTML designs, and high deliverability audits for global Shopify stores.
            </p>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans font-bold text-[10px] text-slate-200 uppercase tracking-widest">Navigation</h4>
            <div className="flex flex-col space-y-2 text-xs text-slate-400">
              <a href="#about" className="hover:text-[#2563EB] transition-colors">About Bio</a>
              <a href="#services" className="hover:text-[#2563EB] transition-colors">Solutions Offered</a>
              <a href="#portfolio" className="hover:text-[#2563EB] transition-colors">Email Portfolio</a>
              <a href="#case-studies" className="hover:text-[#2563EB] transition-colors">Retention Case Studies</a>
            </div>
          </div>

          {/* Contact direct link section */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-sans font-bold text-[10px] text-slate-200 uppercase tracking-widest">Secure Channels</h4>
            <div className="flex flex-col space-y-2 text-xs text-slate-400 font-mono">
              <span>Email: <a href="mailto:hayatwork13@gmail.com" className="hover:text-[#2563EB] transition-colors">hayatwork13@gmail.com</a></span>
              <span>WhatsApp: <a href="https://wa.me/9231230471130" className="hover:text-[#2563EB] transition-colors">031230471130</a></span>
              
              {/* Profile links as icons */}
              <div className="flex space-x-3 pt-2">
                {/* Upwork */}
                <a
                  href="https://www.upwork.com/freelancers/muhammadawais12?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~017bb8ffcffd928169%2Fprofile"
                  target="_blank"
                  rel="noreferrer"
                  title="Verified Upwork Profile"
                  className="w-7 h-7 bg-slate-800 hover:bg-[#10B981] rounded flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.51 11.23a4.01 4.01 0 00-3.32-3.13 4.15 4.15 0 00-4 2.8c-1.32-2.18-2.61-4.86-3.15-7.4h-3v7.35a3.79 3.79 0 003.79 3.79v-2.32a1.47 1.47 0 01-1.47-1.47V4.93C7.9 7.4 9.11 9.94 10.37 12a4.12 4.12 0 001 2.37A4.15 4.15 0 0015 15.65a4.15 4.15 0 004.14-4.14 4.13 4.13 0 00-.63-.28z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/muhammadawais12"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile Connection"
                  className="w-7 h-7 bg-slate-800 hover:bg-[#2563EB] rounded flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <span>&copy; {currentYear} &bull; Muhammad Awais. All Rights Reserved.</span>
          <span className="font-mono">Verification Standing &bull; Top Rated Marketplace Agent</span>
        </div>

      </div>
    </footer>
  );
}
