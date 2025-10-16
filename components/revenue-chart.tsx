"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { year: "2021", revenue: 87.5, growth: 5.2 },
  { year: "2022", revenue: 92.1, growth: 5.3 },
  { year: "2023", revenue: 98.7, growth: 7.2 },
  { year: "2024", revenue: 106.3, growth: 7.7 },
  { year: "2025", revenue: 115.8, growth: 8.9 },
]

export function RevenueChart() {
  return (
    <ChartContainer
      config={{
        revenue: {
          label: "Revenue (R Billions)",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="revenue" fill="#dc2626" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
