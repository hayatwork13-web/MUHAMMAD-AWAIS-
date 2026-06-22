import { MetricCard, Service, PortfolioItem, CaseStudy, Testimonial } from './types';

export const METRICS: MetricCard[] = [
  {
    id: ' JSS',
    title: 'Upwork Job Success',
    value: '100%',
    subtext: 'Verified Top Rated Freelancer Status',
  },
  {
    id: 'projects',
    title: 'Completed Projects',
    value: '50+',
    subtext: 'Shopify & DTC Brands Optimized',
  },
  {
    id: 'hours',
    title: 'Upwork Hours Logged',
    value: '1,000+',
    subtext: 'Dedicated Campaign & Flow Management',
  },
  {
    id: 'rating',
    title: 'Client Satisfaction',
    value: '5.0 / 5.0',
    subtext: 'Across All Verified Reviews',
  }
];

export const SERVICES: Service[] = [
  {
    id: 'klaviyo',
    title: 'Klaviyo Email Marketing',
    description: 'Complete setup, migration, and daily optimization of your Klaviyo account. We design, copywrite, and target highly personalized email structures.',
    features: [
      'Segment strategy & list hygiene',
      'A/B testing of lines & body content',
      'Advanced behavioral custom logic',
      'Klaviyo dashboard & ROI reporting',
    ],
    iconName: 'Mail',
  },
  {
    id: 'omnisend',
    title: 'Omnisend Email Marketing',
    description: 'Unlock multi-channel retention strategies tailored specifically for Omnisend, combining automated emails, SMS touchpoints, and custom web push metrics.',
    features: [
      'Multi-channel flow configurations',
      'Signup form and exit-intent capture',
      'Targeted campaign broadcasting',
      'Optimized deliverability configurations',
    ],
    iconName: 'Send',
  },
  {
    id: 'shopify-email',
    title: 'Shopify Email Marketing',
    description: 'Seamlessly maximize the native Shopify Email tools to drive high-converting promotions and store transaction updates without complex high-overhead subscription fees.',
    features: [
      'Native Shopify segment syncing',
      'Brand style consistency matching',
      'High inbox deliverability setups',
      'Quick promotion setups',
    ],
    iconName: 'ShoppingBag',
  },
  {
    id: 'email-automations',
    title: 'Core Revenue Flows (Automations)',
    description: 'Invisible automated profit engines running 24/7. We map the entire customer lifecycle from landing on your site to becoming a lifelong loyal VIP buyer.',
    features: [
      'Welcome Series (First impression & conversion)',
      'Abandoned Cart (Win back high-intent users)',
      'Browse Abandonment (Nudge interested searchers)',
      'Post-Purchase & VIP Flows (Maximize LTV)',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'campaign-management',
    title: 'Campaign Management',
    description: 'Consistently schedule high-converting newsletter campaigns, product launches, flash sales, and newsletters that educate and sell simultaneously.',
    features: [
      'Monthly copywriting & content calendars',
      'Advanced layout structure & designs',
      'Predictive optimal timing delivery',
      'Spam-filter prevention checkers',
    ],
    iconName: 'Calendar',
  },
  {
    id: 'template-design',
    title: 'Premium Email Template Design',
    description: 'Bespoke, light, responsive-first HTML templates built to perform across Outlook, Gmail, Apple Mail, and mobile devices in light/dark formats.',
    features: [
      'Mobile-responsive layout hierarchies',
      'Modern, clean typographic grid styling',
      'Lightweight, spam-safe code footprints',
      'Consistent design system alignment',
    ],
    iconName: 'Layout',
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'welcome-flow',
    title: 'Organic Welcome Series Email',
    category: 'Automation',
    description: 'High-converting welcome campaign email template with clear value proposition, discount onboarding and founder story focus.',
    metrics: [
      { label: 'Open Rate', value: '52.4%' },
      { label: 'Click-Through Rate', value: '4.8%' },
      { label: 'Attributed Rev/Recip', value: '$3.40' }
    ],
    templateType: 'welcome',
  },
  {
    id: 'abandoned-cart',
    title: 'Premium Abandoned Cart Recovery',
    category: 'Klaviyo',
    description: 'High urgency flow with personalized placeholder items, customer social proof components, and safe-discount thresholds.',
    metrics: [
      { label: 'Recovery Rate', value: '14.2%' },
      { label: 'ROI Improvement', value: '8.4x' },
      { label: 'Unsubscribe', value: '< 0.1%' }
    ],
    templateType: 'cart',
  },
  {
    id: 'browse-abandon',
    title: 'Dynamic Brand Browse Abandonment',
    category: 'Omnisend',
    description: 'Friendly, personalized nudges targeting dynamic product catalog pages viewed by active subscribers.',
    metrics: [
      { label: 'Open Rate', value: '41.1%' },
      { label: 'Conversion Lift', value: '18%' },
      { label: 'Click Rate', value: '3.9%' }
    ],
    templateType: 'browse',
  },
  {
    id: 'vip-flow',
    title: 'VIP Post-Purchase & Thank You Flow',
    category: 'Automation',
    description: 'Fostering customer relationships by segmenting high-value buyers, offering personal founder messages, and early release rewards.',
    metrics: [
      { label: 'Repeat Purchase Rate', value: '31.2%' },
      { label: 'LTV Increase', value: '22%' },
      { label: 'Feedback Sentiment', value: '98% Positive' }
    ],
    templateType: 'post_purchase',
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apparel-case',
    title: 'DTC Premium Apparel Brand Revenue Uplift',
    brand: 'DTC Apparel Store',
    challenge: 'The brand relied heavily on Facebook Ads for acquisition but suffered from a 12% customer retention rate, leading to unsustainably high customer acquisition costs.',
    strategy: 'Restructured the Klaviyo core retention engine. Designed custom, split-path flows for buyers vs. non-buyers, personalized the post-purchase lifecycle, and introduced strategic content-driven newsletter campaigns to maintain active subscriber interest.',
    execution: [
      'Implemented advanced Welcome Series split by discount source and content interest.',
      'Constructed a 3-tier Abandoned Cart flow offering graduated incentives based on cart value.',
      'Established a VIP program segmenting top 10% highest lifetime customers with personalized loyalty campaigns.',
      'Migrated manual lists into highly sanitized segment structures to lift domain reputation and ensure inbox placement.',
    ],
    results: [
      { label: 'Email Attributed Rev', value: '38%' },
      { label: 'Revenue Growth', value: '+35,000 / mo' },
      { label: 'Automated Flow ROI', value: '12x' },
      { label: 'Deliverability Score', value: '99/100' }
    ]
  },
  {
    id: 'skincare-case',
    title: 'Skincare Retailer Customer Retention Recovery',
    brand: 'Eco-Friendly Skincare Co.',
    challenge: 'Subscribers were dropping off quickly after their first order. The existing Omnisend setup relied on stock generic templates with poor cross-sell automations, yielding less than 5% lifecycle revenue.',
    strategy: 'Introduced a targeted replenishment flow based on purchase cycle averages, a conversational browse-abandonment campaign, and elevated the design layout matching the premium organic branding aesthetic.',
    execution: [
      'Mapped exact replenishment cycles (30/60 days) to auto-trigger purchase order reminders with high click actions.',
      'Implemented customer education cards in Welcome and post-purchase sequences to outline skincare routines and build affinity.',
      'Designed beautifully minimalist, light-focused email templates optimized for dark mode readers.'
    ],
    results: [
      { label: 'Total Email Revenue', value: '29.5%' },
      { label: 'Replenishment CTR', value: '7.8%' },
      { label: 'Repeat Orders Lift', value: '2.4x' },
      { label: 'Active Subscribers', value: '+14,200' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Daniel K.',
    companyName: 'Founder, Lumina Threads Co.',
    reviewText: 'Muhammad is an absolute professional. He took over our stale Klaviyo account, completely redesigned our core automated flows, and within 30 days our email-attributed revenue went from 14% to 28%. His attention to detail, copywriting excellence, and understanding of DTC brand voice is outstanding. Highly recommended!',
    rating: 5,
  },
  {
    id: '2',
    clientName: 'Sarah M.',
    companyName: 'Marketing Director, Organix Skin',
    reviewText: 'Working with Muhammad has been the single best decision for our email marketing. He configured our Omnisend flows so beautifully and structured our monthly content calendar effortlessly. We received constant positive replies from our subscribers regarding how elegant our emails look. Job Success Score does not lie – he is top rated for a reason!',
    rating: 5,
  },
  {
    id: '3',
    clientName: 'Julian V.',
    companyName: 'Growth Lead, BoldGrip Athletics',
    reviewText: 'True expert. Delivered on-time, with detailed explanations for every strategy. Our browse abandonment and cart rescue revenue increased immediately. He understands Shopify integrations deeply. A top choice for any ecommerce store looking for an email specialist.',
    rating: 5,
  }
];
