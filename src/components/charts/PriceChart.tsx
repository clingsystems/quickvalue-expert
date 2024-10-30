import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chartThemes, chartConfig } from './chart-config';
import { useTheme } from 'next-themes';

interface PriceChartProps {
  data: Array<{
    date: string;
    price: number;
  }>;
}

export const PriceChart = ({ data }: PriceChartProps) => {
  const { theme = 'light' } = useTheme();
  const currentTheme = chartThemes[theme as keyof typeof chartThemes];

  return (
    <Card className="p-6">
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={chartConfig.margin}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={currentTheme.gradientStart} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={currentTheme.gradientEnd} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={currentTheme.gridColor} />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }}
              interval={6}
              stroke={currentTheme.lineColor}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              domain={['dataMin - 500', 'dataMax + 500']}
              stroke={currentTheme.lineColor}
            />
            <Tooltip 
              contentStyle={chartConfig.tooltipStyle}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke={currentTheme.lineColor}
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