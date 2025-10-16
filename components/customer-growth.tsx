"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { quarter: "Q1 2024", customers: 128.5 },
  { quarter: "Q2 2024", customers: 130.2 },
  { quarter: "Q3 2024", customers: 132.1 },
  { quarter: "Q4 2024", customers: 133.8 },
  { quarter: "Q1 2025", customers: 135.2 },
]

export function CustomerGrowth() {
  return (
    <ChartContainer
      config={{
        customers: {
          label: "Customers (Millions)",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="customers"
            stroke="#dc2626"
            strokeWidth={3}
            dot={{ fill: "#dc2626", strokeWidth: 2, r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
