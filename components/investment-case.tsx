"use client"

import { motion } from "framer-motion"
import { MapPin, Users, Briefcase, TrendingUp, ArrowUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const countryData = [
  { name: "Egypt", customers: 48.3, position: { top: "15%", left: "55%" } },
  { name: "Ethiopia", customers: 8.8, position: { top: "25%", left: "60%" } },
  { name: "Kenya", customers: 48.2, position: { top: "35%", left: "62%" } },
  { name: "Tanzania", customers: 22.6, position: { top: "45%", left: "58%" } },
  { name: "DRC", customers: 23.4, position: { top: "40%", left: "50%" } },
  { name: "Mozambique", customers: 12.5, position: { top: "60%", left: "58%" } },
  { name: "Lesotho", customers: 1.6, position: { top: "70%", left: "52%" } },
  { name: "South Africa", customers: 46.0, position: { top: "75%", left: "50%" } },
]

const investmentPoints = [
  {
    number: "1",
    title: "Meaningful growth opportunities exist in our markets across connectivity, digital and financial services",
    metrics: [
      { label: "Population coverage", current: "574 million", projection: "650 million", icon: MapPin },
      { label: "Customers", current: "211 million", projection: ">260 million", icon: Users },
      { label: "FinTech customers", current: "88 million", projection: ">120 million", icon: Briefcase },
      { label: "Smartphone penetration", current: "64%", projection: ">75%", icon: TrendingUp },
    ],
  },
  {
    number: "2",
    title: "Our market leadership supports attractive ROCE",
  },
  {
    number: "3",
    title: "We are an infrastructure and asset owner",
  },
  {
    number: "4",
    title: "We are a responsible corporate citizen",
  },
]

export function InvestmentCase() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Add state for hover interactions
  const [hoveredCountry, setHoveredCountry] = useState(null)

  return (
    <motion.section
      className="py-16 px-6 bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" {...fadeInUp}>
          {/* Left Side - Africa Map */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              {/* Map Container */}
              <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-red-500 to-red-700 rounded-xl overflow-hidden">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Africa continent path */}
                  <path
                    d="M200 50 L220 45 L240 55 L260 70 L280 90 L290 110 L285 130 L275 150 L260 170 L240 185 L220 190 L200 188 L180 185 L160 170 L145 150 L135 130 L140 110 L150 90 L170 70 L190 55 Z"
                    fill="currentColor"
                    className="text-red-600 opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                  />

                  {/* Country markers with enhanced interactivity */}
                  {countryData.map((country, index) => (
                    <g key={country.name}>
                      <circle
                        cx={200 + (country.position.left.replace("%", "") - 50) * 2}
                        cy={100 + (country.position.top.replace("%", "") - 30) * 1.5}
                        r="8"
                        fill="white"
                        stroke="#dc2626"
                        strokeWidth="2"
                        className="hover:r-10 transition-all cursor-pointer"
                        onMouseEnter={() => setHoveredCountry(country.name)}
                        onMouseLeave={() => setHoveredCountry(null)}
                      />

                      {/* Tooltip */}
                      {hoveredCountry === country.name && (
                        <g>
                          <rect
                            x={210 + (country.position.left.replace("%", "") - 50) * 2}
                            y={90 + (country.position.top.replace("%", "") - 30) * 1.5}
                            width="80"
                            height="30"
                            fill="white"
                            rx="4"
                            className="drop-shadow-lg"
                          />
                          <text
                            x={220 + (country.position.left.replace("%", "") - 50) * 2}
                            y={105 + (country.position.top.replace("%", "") - 30) * 1.5}
                            className="text-sm font-semibold fill-gray-900"
                          >
                            {country.name}
                          </text>
                          <text
                            x={220 + (country.position.left.replace("%", "") - 50) * 2}
                            y={115 + (country.position.top.replace("%", "") - 30) * 1.5}
                            className="text-sm fill-red-600"
                          >
                            {country.customers}M
                          </text>
                        </g>
                      )}
                    </g>
                  ))}
                </svg>
              </div>

              {/* Customers Legend */}
              <div className="mt-6 flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-red-600" />
                  <span className="text-red-600 font-semibold">Customers</span>
                  <span className="text-gray-600">(million)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Investment Case */}
          <div>
            <motion.div className="mb-8" {...fadeInUp}>
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-red-600">Our investment case</span>
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {investmentPoints.map((point, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-l-4 border-l-red-600 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                          {point.number}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium leading-relaxed">{point.title}</p>

                          {point.metrics && (
                            <div className="mt-4 grid grid-cols-2 gap-4">
                              <div className="space-y-3">
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                  <span>Today</span>
                                </div>
                                {point.metrics.map((metric, metricIndex) => (
                                  <div key={metricIndex} className="flex items-center space-x-3">
                                    <metric.icon className="w-4 h-4 text-red-600" />
                                    <div>
                                      <div className="text-sm text-gray-600">{metric.label}</div>
                                      <div className="text-lg font-bold text-red-600">{metric.current}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="space-y-3">
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                  <span>FY2030 projection</span>
                                </div>
                                {point.metrics.map((metric, metricIndex) => (
                                  <div key={metricIndex} className="flex items-center space-x-3">
                                    <ArrowUp className="w-4 h-4 text-green-600" />
                                    <div>
                                      <div className="text-lg font-bold text-gray-900">{metric.projection}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
