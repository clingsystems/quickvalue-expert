export interface PricingPlan {
  name: string;
  price: string | number;
  description: string;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for trying out our service",
    features: [
      "5 battery lookups per day",
      "Real-time market data",
      "Basic valuation reports",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "199",
    description: "For growing businesses",
    features: [
      "500 battery lookups per day",
      "API access",
      "Advanced analytics",
      "Priority support",
      "CSV bulk uploads",
      "Detailed valuation reports"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited battery lookups",
      "Full ERP integration",
      "Custom analytics",
      "24/7 priority support",
      "Dedicated account manager",
      "Custom reporting"
    ]
  }
];