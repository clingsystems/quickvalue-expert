import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
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

  return (
    <div id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that's right for your business</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold">
                    {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && <span className="text-gray-600 ml-2">/month</span>}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://battery-guide-helper-48.gptengineer.run/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;