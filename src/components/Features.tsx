import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    "Instant valuation of EV battery inventory",
    "Real-time metal market price integration",
    "Verified recycler network",
    "Secure data handling",
    "Detailed valuation reports",
    "Direct recycler connections",
    "Market trend analytics",
    "Bulk inventory processing",
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-gray-600">
            Comprehensive tools to maximize the value of your EV battery inventory
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;