import React from 'react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  onOpenExporter: () => void;
}

export default function Header({ onScrollTo, onOpenExporter }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand Name */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#2563EB] rounded flex items-center justify-center text-white font-extrabold text-sm shadow-xs" id="header-monogram">M</div>
            <span className="font-sans font-extrabold text-xl text-[#111827] tracking-tight uppercase">
              Muhammad Awais
            </span>
            <span className="hidden sm:inline-block text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-150 uppercase tracking-wide">
              TOP RATED
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-[#4B5563]">
            <button
              onClick={() => onScrollTo('about')}
              className="hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onScrollTo('services')}
              className="hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => onScrollTo('portfolio')}
              className="hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => onScrollTo('case-studies')}
              className="hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Case Studies
            </button>
            <button
              onClick={() => onScrollTo('credibility')}
              className="hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Upwork Status
            </button>
          </nav>

          {/* CTA Group */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenExporter}
              className="hidden lg:inline-flex items-center space-x-1.5 text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-150 font-semibold px-3 py-1.5 rounded transition"
            >
              <span>Export Code</span>
            </button>
            
            <a
              href="https://www.upwork.com/freelancers/muhammadawais12?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~017bb8ffcffd928169%2Fprofile"
              target="_blank"
              rel="noreferrer"
              className="bg-[#2563EB] hover:bg-blue-700 text-white px-5 py-2 rounded text-sm font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>Hire Me On Upwork</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
