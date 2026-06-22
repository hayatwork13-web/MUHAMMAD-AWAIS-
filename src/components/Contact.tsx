import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    storeUrl: '',
    platform: 'Klaviyo',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate standard form submit API latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        storeUrl: '',
        platform: 'Klaviyo',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text / Info Column */}
          <div className="lg:col-span-5">
            <span className="text-[#2563EB] text-[11px] font-bold tracking-widest uppercase bg-[#F8FAFC] border border-[#E5E7EB] px-3 py-1 rounded">
              Get In Touch
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#111827] mt-4 mb-6">
              Request a Free Account Retention Strategy Audit
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#4B5563] leading-relaxed mb-8">
              Are your email flows generating less than 25% of your total store revenue? Leave your details here or reach out through direct systems. I will check your account triggers, segmentation hygiene, and templates personally.
            </p>

            {/* Direct Channels Cards */}
            <div className="space-y-4">
              {/* Business Email */}
              <div className="flex items-center space-x-3.5 p-4 border border-[#E5E7EB] rounded bg-[#F8FAFC]">
                <div className="w-9 h-9 bg-white border border-[#E5E7EB] text-[#2563EB] rounded flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#4B5563] block uppercase font-mono tracking-wider">Business Email</span>
                  <a href="mailto:hayatwork13@gmail.com" className="font-sans font-bold text-xs sm:text-sm text-[#111827] hover:text-[#2563EB] transition-colors">
                    hayatwork13@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp direct card */}
              <div className="flex items-center space-x-3.5 p-4 border border-[#E5E7EB] rounded bg-[#F8FAFC]">
                <div className="w-9 h-9 bg-white border border-[#E5E7EB] text-[#10B981] rounded flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.022-.04-.085-.063-.177-.11-.093-.045-.55-.272-.635-.302-.086-.03-.148-.045-.211.045-.063.09-.244.302-.298.363-.055.06-.11.068-.202.022a10.02 10.02 0 01-2.5-1.54 10.15 10.15 0 01-1.73-2.155c-.09-.153-.01-.235.06-.3l.182-.21c.063-.075.08-.12.12-.2.04-.08.02-.15-.01-.21-.03-.06-.211-.51-.29-.7-.078-.19-.157-.163-.211-.166-.055-.003-.117-.003-.18-.003a.348.348 0 00-.25.114c-.085.093-.327.32-.327.78 0 .46.335.905.38.97.046.062.66 1.01 1.6 1.417.224.096.398.155.535.198.225.072.43.061.593.037.181-.027.55-.224.63-.44a.79.79 0 00.055-.44c-.02-.04-.08-.063-.177-.11M12.002 2a9.995 9.995 0 00-8.666 14.981L2 22l5.135-1.348A9.99 9.99 0 0012.002 22a9.995 9.995 0 000-19.99" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#4B5563] block uppercase font-mono tracking-wider">WhatsApp</span>
                  <a href="https://wa.me/9231230471130" target="_blank" rel="noreferrer" className="font-sans font-bold text-xs sm:text-sm text-[#111827] hover:text-[#10B981] transition-colors">
                    031230471130
                  </a>
                </div>
              </div>

              {/* LinkedIn contact card */}
              <div className="flex items-center space-x-3.5 p-4 border border-[#E5E7EB] rounded bg-[#F8FAFC]">
                <div className="w-9 h-9 bg-white border border-[#E5E7EB] text-[#2563EB] rounded flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#4B5563] block uppercase font-mono tracking-wider">LinkedIn Profile</span>
                  <a href="https://www.linkedin.com/in/muhammadawais12" target="_blank" rel="noreferrer" className="font-sans font-bold text-xs sm:text-sm text-[#111827] hover:text-[#2563EB] transition-colors">
                    LinkedIn / Muhammad Awais
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#E5E7EB] rounded p-6 sm:p-8">
            <h3 className="font-sans font-bold text-xs text-[#111827] uppercase tracking-widest mb-6 pb-2 border-b border-[#E5E7EB]">
              Check Retention Health Metrics
            </h3>

            {submitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-sans font-extrabold text-[#111827] text-md mb-2">Audit Strategy Request Received!</h4>
                <p className="font-sans text-xs text-gray-500 max-w-sm mx-auto">
                  Thank you for submitting, Muhammad Awais will review your store’s general metrics and reach out directly at your email within 12 business hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-6 text-xs text-[#2563EB] bg-white border border-[#E5E7EB] px-4 py-2 rounded font-bold hover:bg-[#F8FAFC] transition uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-[#111827] uppercase tracking-wide mb-1.5">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alexis Carter"
                      className="w-full bg-white border border-[#E5E7EB] rounded px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>
                  {/* Business Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#111827] uppercase tracking-wide mb-1.5">Business Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. alexis@brand.com"
                      className="w-full bg-white border border-[#E5E7EB] rounded px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Store URL */}
                  <div>
                    <label className="block text-xs font-bold text-[#111827] uppercase tracking-wide mb-1.5">Store URL (Shopify / WooCommerce)</label>
                    <input
                      type="text"
                      name="storeUrl"
                      required
                      value={formData.storeUrl}
                      onChange={handleInputChange}
                      placeholder="e.g. www.your-brand.com"
                      className="w-full bg-white border border-[#E5E7EB] rounded px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>
                  {/* ESP Selection */}
                  <div>
                    <label className="block text-xs font-bold text-[#111827] uppercase tracking-wide mb-1.5">Active Email Platform (ESP)</label>
                    <select
                      name="platform"
                      value={formData.platform}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#E5E7EB] rounded px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#2563EB] transition-colors"
                    >
                      <option value="Klaviyo">Klaviyo Account</option>
                      <option value="Omnisend">Omnisend Account</option>
                      <option value="Shopify Email">Shopify Native Email</option>
                      <option value="Other / migrating">Other ESP / Migrating Soon</option>
                    </select>
                  </div>
                </div>

                {/* Cover Letter Inquire message */}
                <div>
                  <label className="block text-xs font-bold text-[#111827] uppercase tracking-wide mb-1.5">Describe Main Revenue Bottlenecks</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="e.g. Our open rates are hovering at 12%, and our abandoned cart flow hasn't been updated in 8 months..."
                    className="w-full bg-white border border-[#E5E7EB] rounded px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] disabled:bg-blue-400 text-white font-sans font-bold text-xs uppercase tracking-widest py-4 rounded transition cursor-pointer"
                >
                  {isSubmitting ? 'Checking Details...' : 'Request Free Audit & Consultation'}
                </button>
              </form>
            )}

            {/* Guaranteed safety note */}
            <p className="text-[10px] text-[#4B5563] text-center mt-4">
              I secure 100% strict confidential non-disclosure. No personal detail is sold or shared.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
