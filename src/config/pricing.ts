export interface Feature {
  id: string;
  name: string;
  description?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number | "Custom";
  currency: string;
  billingPeriod: "monthly" | "yearly";
  description: string;
  features: Feature[];
  highlighted?: boolean;
}

export interface PricingConfig {
  region: string;
  currency: string;
  tiers: PricingTier[];
}

const createFeature = (id: string, name: string, description?: string): Feature => ({
  id,
  name,
  description,
});

const features = {
  basicLookups: createFeature("basic-lookups", "5 battery lookups per day"),
  marketData: createFeature("market-data", "Real-time market data"),
  basicReports: createFeature("basic-reports", "Basic valuation reports"),
  emailSupport: createFeature("email-support", "Email support"),
  advancedLookups: createFeature("advanced-lookups", "500 battery lookups per day"),
  apiAccess: createFeature("api-access", "API access"),
  advancedAnalytics: createFeature("advanced-analytics", "Advanced analytics"),
  prioritySupport: createFeature("priority-support", "Priority support"),
  bulkUploads: createFeature("bulk-uploads", "CSV bulk uploads"),
  detailedReports: createFeature("detailed-reports", "Detailed valuation reports"),
  unlimitedLookups: createFeature("unlimited-lookups", "Unlimited battery lookups"),
  erpIntegration: createFeature("erp-integration", "Full ERP integration"),
  customAnalytics: createFeature("custom-analytics", "Custom analytics"),
  premiumSupport: createFeature("premium-support", "24/7 priority support"),
  accountManager: createFeature("account-manager", "Dedicated account manager"),
  customReporting: createFeature("custom-reporting", "Custom reporting"),
};

export const pricingConfigs: Record<string, PricingConfig> = {
  US: {
    region: "United States",
    currency: "USD",
    tiers: [
      {
        id: "free",
        name: "Free",
        price: 0,
        currency: "USD",
        billingPeriod: "monthly",
        description: "Perfect for trying out our service",
        features: [
          features.basicLookups,
          features.marketData,
          features.basicReports,
          features.emailSupport,
        ],
      },
      {
        id: "pro",
        name: "Pro",
        price: 199,
        currency: "USD",
        billingPeriod: "monthly",
        description: "For growing businesses",
        highlighted: true,
        features: [
          features.advancedLookups,
          features.apiAccess,
          features.advancedAnalytics,
          features.prioritySupport,
          features.bulkUploads,
          features.detailedReports,
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "Custom",
        currency: "USD",
        billingPeriod: "monthly",
        description: "For large organizations",
        features: [
          features.unlimitedLookups,
          features.erpIntegration,
          features.customAnalytics,
          features.premiumSupport,
          features.accountManager,
          features.customReporting,
        ],
      },
    ],
  },
};

export const pricingPlans = pricingConfigs.US.tiers;