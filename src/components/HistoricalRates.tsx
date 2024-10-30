import { PriceChart } from "@/components/charts/PriceChart";

const data = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
  price: Math.floor(7000 + Math.random() * 3000)
}));

const HistoricalRates = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Historical Battery Rates</h2>
        <PriceChart data={data} />
      </div>
    </div>
  );
};

export default HistoricalRates;