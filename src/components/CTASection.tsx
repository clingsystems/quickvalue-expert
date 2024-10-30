import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Maximize Your Battery Value?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join leading vehicle manufacturers who are already using our platform to optimize their battery inventory value.
        </p>
        <a href="https://battery-guide-helper-48.gptengineer.run/" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="secondary" className="text-primary text-lg px-8">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default CTASection;