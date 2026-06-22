import React from 'react';
import { SERVICES } from '../data';
import { Mail, Send, ShoppingBag, Cpu, Calendar, Layout } from 'lucide-react';

const iconsMap: { [key: string]: any } = {
  Mail: Mail,
  Send: Send,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
  Calendar: Calendar,
  Layout: Layout,
};

export default function Services() {
  return (
    <section id="services" className="bg-[#F8FAFC] py-16 border-b border-[#E5E7EB] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#2563EB] text-[11px] font-bold tracking-widest uppercase bg-white border border-[#E5E7EB] px-3 py-1 rounded">
            Specialized Solutions
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#111827] mt-4 mb-4">
            Email Marketing Services Built for E-Commerce Revenue Growth
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4B5563]">
            Professional workflow optimization, technical migration, deliverability audit, list cleaning, and campaign broadcasts that drive repeat customer transactions 24/7.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconsMap[service.iconName] || Mail;
            return (
              <div
                key={service.id}
                className="bg-white border border-[#E5E7EB] rounded p-6 sm:p-8 hover:border-[#2563EB] transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Block */}
                  <div className="w-10 h-10 rounded bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center text-[#2563EB] mb-6 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-sans font-extrabold text-[#111827] text-base sm:text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="border-t border-[#E5E7EB] pt-5 space-y-2.5 text-xs">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5">
                      <span className="text-[#2563EB] text-xs">●</span>
                      <span className="font-medium text-[#111827]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Footnote Badge */}
        <div className="mt-12 text-center bg-white border border-[#E5E7EB] rounded p-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-sans font-bold text-sm text-[#111827]">Multiple Integrations? Seamless Setup.</h4>
            <p className="font-sans text-xs text-[#4B5563] mt-1">I configure integration triggers across WooCommerce, Magento, Shopify Plus, and subscription partners.</p>
          </div>
          <span className="text-[10px] font-bold text-[#2563EB] bg-[#F8FAFC] border border-[#E5E7EB] px-3 py-1.5 rounded uppercase tracking-wide">
            100% Native Setup Guarantee
          </span>
        </div>

      </div>
    </section>
  );
}
