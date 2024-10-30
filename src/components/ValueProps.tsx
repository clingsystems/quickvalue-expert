import { Gauge, RefreshCcw, Users } from "lucide-react";

const ValueProps = () => {
  const props = [
    {
      icon: <Gauge className="w-8 h-8 text-primary" />,
      title: "Instant Valuation",
      description: "Get accurate market values for your EV batteries in seconds, not days",
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-primary" />,
      title: "Real-Time Market Data",
      description: "Values updated in real-time based on current metal market prices",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Verified Recycler Network",
      description: "Connect directly with our network of trusted recycling partners",
    },
  ];

  return (
    <div className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {props.map((prop, index) => (
            <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex justify-center mb-4">{prop.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueProps;