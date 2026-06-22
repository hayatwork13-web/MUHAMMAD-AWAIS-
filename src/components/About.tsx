import React from 'react';

export default function About() {
  const skillsList = [
    'Klaviyo Email Automations',
    'Omnisend Multi-Channel Flows',
    'Shopify Email Segmentation',
    'Abandoned Checkout / Cart Rescue',
    'Replenishment / Cycle Marketing',
    'A/B Split Testing & Optimization',
    'HTML Email Responsive Design',
    'List Cleaning & Hygiene',
    'Domain Reputation & ISP Warming',
    'Advanced Customer Cohort Targeting'
  ];

  return (
    <section id="about" className="bg-white py-16 border-b border-[#E5E7EB] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left bio column */}
          <div className="lg:col-span-7">
            <span className="text-[#2563EB] text-[11px] font-bold tracking-widest uppercase bg-[#F8FAFC] border border-[#E5E7EB] px-3 py-1 rounded">
              Professional Biography
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#111827] mt-4 mb-6">
              Hi, I am Muhammad Awais.
            </h2>
            <div className="space-y-4 font-sans font-normal text-sm sm:text-base text-[#4B5563] leading-relaxed">
              <p>
                I am a dedicated <strong>Ecommerce Email Marketing Specialist</strong> with a heavy focus on ROI-driven automated workflows and campaign strategies. I work directly with Shopify store owners, founders, and retention leads to unlock more revenue and build high customer lifecycle values without relying solely on rising social ad spending.
              </p>
              <p>
                Unlike massive agencies that assign junior account executives to your critical campaigns, I handle every element of your email workflow setup personally. From coding responsive custom HTML templates to writing highly engaging copy and implementing state-of-the-art segmentation, your campaigns are crafted back-to-front by a senior professional.
              </p>
              <p>
                My setups are fully tailored to your specific customer funnel: I don’t just deploy standard layouts. I map buyer metrics, analyze churn points, and construct dynamic cross-sells, browse triggers, and replenishment flows to optimize conversions at every potential drop-off.
              </p>
            </div>

            {/* Area of Expertise blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="border border-[#E5E7EB] bg-[#F8FAFC] rounded p-5">
                <h4 className="font-sans font-bold text-sm text-[#111827] mb-2">My Conversion Promise</h4>
                <p className="font-sans text-xs text-[#4B5563] leading-relaxed">
                  Every flow, campaign, and template is developed to optimize deliverability, prevent spam triggers, and look beautiful in both light and dark modes.
                </p>
              </div>
              <div className="border border-[#E5E7EB] bg-[#F8FAFC] rounded p-5">
                <h4 className="font-sans font-bold text-sm text-[#111827] mb-2">Lifecycle Optimization</h4>
                <p className="font-sans text-xs text-[#4B5563] leading-relaxed">
                  We look at list building, purchase frequency, average order values (AOV), and customer retention rate to target maximum profitability.
                </p>
              </div>
            </div>
          </div>

          {/* Right expertise grids */}
          <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E5E7EB] rounded p-6 sm:p-8">
            <h3 className="font-sans font-extrabold text-xs text-[#111827] uppercase tracking-widest mb-4 border-b border-[#E5E7EB] pb-3">
              Technical Competencies
            </h3>
            <div className="space-y-3">
              {skillsList.map((skill, index) => (
                <div key={index} className="flex items-start space-x-2.5 text-sm">
                  <span className="text-[#2563EB] text-sm leading-none flex-shrink-0">●</span>
                  <span className="font-sans text-sm text-[#111827]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick credentials footer block */}
            <div className="mt-8 border-t border-[#E5E7EB] pt-6 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#4B5563]">Primary Platforms:</span>
                <span className="font-bold text-[#111827]">Klaviyo, Omnisend, Shopify</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#4B5563]">Typical Integration:</span>
                <span className="font-bold text-[#111827]">Shopify API, Recharge, Loop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
