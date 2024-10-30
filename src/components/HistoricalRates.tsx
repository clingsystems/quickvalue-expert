import { useEffect, useState } from 'react';
import { LazyPriceChart } from "@/components/charts/LazyPriceChart";

const data = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
  price: Math.floor(7000 + Math.random() * 3000)
}));

const HistoricalRates = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    const element = document.getElementById('historical-rates');
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="historical-rates" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Historical Battery Rates</h2>
        {shouldLoad && <LazyPriceChart data={data} />}
      </div>
    </div>
  );
};

export default HistoricalRates;