import React from 'react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#2563EB] text-[11px] font-bold tracking-widest uppercase bg-[#F8FAFC] border border-[#E5E7EB] px-3 py-1 rounded">
            Client Feedback
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#111827] mt-4 mb-4">
            Words From Global Store Founders &amp; Operators
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4B5563]">
            Read verified feedback from global store owners regarding our automated design setups, high click open rates, and general responsiveness.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F8FAFC] border border-[#E5E7EB] rounded p-6 sm:p-8 flex flex-col justify-between hover:border-[#2563EB] transition-colors duration-200"
            >
              <div>
                {/* Visual Rating Row */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed italic mb-6">
                  "{t.reviewText}"
                </p>
              </div>

              {/* Author Footer info */}
              <div className="border-t border-[#E5E7EB] pt-4 mt-auto">
                <span className="font-sans font-extrabold text-sm text-[#111827] block">
                  {t.clientName}
                </span>
                <span className="font-sans text-xs text-[#4B5563] block mt-0.5">
                  {t.companyName}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View Upwork CTA block */}
        <div className="text-center">
          <a
            href="https://www.upwork.com/freelancers/muhammadawais12?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~017bb8ffcffd928169%2Fprofile"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 bg-white border border-[#E5E7EB] hover:bg-[#F8FAFC] text-[#111827] text-xs sm:text-sm font-bold uppercase tracking-widest px-6 py-4 rounded transition"
          >
            <svg className="w-4 h-4 fill-current text-[#14a800]" viewBox="0 0 24 24">
              <path d="M18.51 11.23a4.01 4.01 0 00-3.32-3.13 4.15 4.15 0 00-4 2.8c-1.32-2.18-2.61-4.86-3.15-7.4h-3v7.35a3.79 3.79 0 003.79 3.79v-2.32a1.47 1.47 0 01-1.47-1.47V4.93C7.9 7.4 9.11 9.94 10.37 12a4.12 4.12 0 001 2.37A4.15 4.15 0 0015 15.65a4.15 4.15 0 004.14-4.14 4.13 4.13 0 00-.63-.28z"/>
            </svg>
            <span>View Verified Upwork Reviews</span>
          </a>
        </div>

      </div>
    </section>
  );
}
