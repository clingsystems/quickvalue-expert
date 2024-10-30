import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PriceChartProps {
  data: Array<{
    date: string;
    price: number;
  }>;
}

export const PriceChart = ({ data }: PriceChartProps) => {
  return (
    <Card className="p-6">
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0066FF" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }}
              interval={6}
              stroke="#64748b"
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              domain={['dataMin - 500', 'dataMax + 500']}
              stroke="#64748b"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '6px'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#0066FF"
              fillOpacity={1}
              fill="url(#colorPrice)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};