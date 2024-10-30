import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-primary">BatteryValue</div>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How it works</a>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;