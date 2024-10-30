import { FileSpreadsheet, LineChart, Wallet, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileSpreadsheet className="w-12 h-12 text-primary" />,
      title: "Upload Your Inventory",
      description: "Simply upload your CSV file containing battery specifications",
    },
    {
      icon: <LineChart className="w-12 h-12 text-primary" />,
      title: "Get Market Values",
      description: "Receive instant valuations based on real-time market data",
    },
    {
      icon: <Wallet className="w-12 h-12 text-primary" />,
      title: "Connect with Buyers",
      description: "Get matched with recyclers ready to purchase your inventory",
    },
  ];

  return (
    <div id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-12 -right-6 transform translate-x-1/2">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;