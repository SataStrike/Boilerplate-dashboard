import { SiteHeader } from "@/components/site-header";
import { BarChart } from "@/components/bar-chart";
import { chartData, chartConfig } from './data';

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
        
        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-medium mb-4">User Activity by Device</h2>
          
          <BarChart 
            data={chartData}
            xAxisKey="month"
            bars={[
              {
                key: "desktop",
                name: chartConfig.labels.desktop,
                color: chartConfig.colors.desktop
              },
              {
                key: "mobile",
                name: chartConfig.labels.mobile,
                color: chartConfig.colors.mobile
              }
            ]}
          />
        </div>
      </main>
    </div>
  );
}
