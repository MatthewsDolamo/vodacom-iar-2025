"use client"

import { RadarChart, PolarAngleAxis, PolarGrid, Radar, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { metric: "Revenue Growth", value: 89, fullMark: 100 },
  { metric: "Customer Satisfaction", value: 85, fullMark: 100 },
  { metric: "Network Quality", value: 92, fullMark: 100 },
  { metric: "Digital Services", value: 78, fullMark: 100 },
  { metric: "Sustainability", value: 82, fullMark: 100 },
  { metric: "Innovation", value: 88, fullMark: 100 },
]

export function PerformanceMetrics() {
  return (
    <ChartContainer
      config={{
        performance: {
          label: "Performance Score",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <Radar name="Performance" dataKey="value" stroke="#dc2626" fill="#dc2626" fillOpacity={0.3} />
          <ChartTooltip content={<ChartTooltipContent />} />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
