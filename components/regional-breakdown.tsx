"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "South Africa", value: 45.2, color: "#dc2626" },
  { name: "Tanzania", value: 18.7, color: "#ea580c" },
  { name: "DRC", value: 12.3, color: "#d97706" },
  { name: "Kenya", value: 10.8, color: "#ca8a04" },
  { name: "Mozambique", value: 8.1, color: "#65a30d" },
  { name: "Lesotho", value: 4.9, color: "#059669" },
]

export function RegionalBreakdown() {
  return (
    <ChartContainer
      config={{
        revenue: {
          label: "Revenue %",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
