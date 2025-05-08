"use client";

import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

interface BarChartProps {
  data: any[];
  xAxisKey: string;
  bars: {
    key: string;
    name: string;
    color: string;
  }[];
  height?: number | string;
}

export function BarChart({ 
  data, 
  xAxisKey, 
  bars,
  height = 400 
}: BarChartProps) {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey={xAxisKey} 
            className="text-sm fill-muted-foreground" 
          />
          <YAxis className="text-sm fill-muted-foreground" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--background))",
              borderColor: "hsl(var(--border))" 
            }}
            itemStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Legend />
          {bars.map((bar) => (
            <Bar
              key={bar.key}
              name={bar.name}
              dataKey={bar.key}
              fill={bar.color}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}