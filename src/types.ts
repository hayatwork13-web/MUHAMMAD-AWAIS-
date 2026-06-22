export interface Testimonial {
  id: string;
  clientName: string;
  companyName: string;
  reviewText: string;
  rating: number;
}

export interface MetricCard {
  id: string;
  title: string;
  value: string;
  subtext: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Klaviyo' | 'Omnisend' | 'Campaign' | 'Automation';
  description: string;
  metrics?: { label: string; value: string }[];
  templateType: 'welcome' | 'cart' | 'browse' | 'post_purchase';
}

export interface CaseStudy {
  id: string;
  title: string;
  brand: string;
  challenge: string;
  strategy: string;
  execution: string[];
  results: { label: string; value: string }[];
}
