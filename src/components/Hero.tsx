import { Button } from "@/components/ui/button";
import { ArrowRight, Battery, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Battery className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium bg-blue-50 text-primary px-3 py-1 rounded-full">
              Instant EV Battery Valuation
            </span>
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Turn Your EV Battery Inventory Into Instant Value
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Upload your inventory spreadsheet and get real-time market valuations connected to metal prices. Connect directly with verified recyclers ready to buy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-lg px-8">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              Download Sample CSV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;