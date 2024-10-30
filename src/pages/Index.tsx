import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import CustomerReviews from "@/components/CustomerReviews";
import HistoricalRates from "@/components/HistoricalRates";
import CTASection from "@/components/CTASection";
import ERPIntegrations from "@/components/ERPIntegrations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProps />
      <HowItWorks />
      <Features />
      <ERPIntegrations />
      <CustomerReviews />
      <HistoricalRates />
      <CTASection />
    </div>
  );
};

export default Index;