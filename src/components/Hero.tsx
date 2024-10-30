import { Button } from "@/components/ui/button";
import { ArrowRight, Battery, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://media.istockphoto.com/id/1925055660/sv/video/aerial-view-wind-turbines-at-sunset.mp4?s=mp4-640x640-is&k=20&c=TMXG6IhlRg5A3LLyhXnI-nfexdGM46z67zqQtHZkEz8="
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Battery className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium bg-blue-50 text-primary px-3 py-1 rounded-full">
              Instant EV Battery Valuation
            </span>
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white max-w-3xl mx-auto leading-tight">
            Turn Your EV Battery Inventory Into Instant Value
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Upload your inventory spreadsheet and get real-time market valuations connected to metal prices. Connect directly with verified recyclers ready to buy.
          </p>
          <div className="flex justify-center">
            <a href="https://battery-guide-helper-48.gptengineer.run/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;