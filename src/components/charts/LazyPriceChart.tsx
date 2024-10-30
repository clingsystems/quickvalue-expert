import { Suspense, lazy } from 'react';
import { Card } from "@/components/ui/card";

// Lazy load the PriceChart component
const PriceChart = lazy(() => import('./PriceChart'));

interface LazyPriceChartProps {
  data: Array<{
    date: string;
    price: number;
  }>;
}

export const LazyPriceChart = ({ data }: LazyPriceChartProps) => {
  return (
    <Card className="p-6">
      <Suspense fallback={
        <div className="h-[400px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      }>
        <PriceChart data={data} />
      </Suspense>
    </Card>
  );
};

export default LazyPriceChart;