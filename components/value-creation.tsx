"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const capitals = [
  {
    code: "FC",
    title: "Financial capital",
    metric: "ROCE of",
    value: "23.5%",
    subtext: "FY2024: 23.1%",
    bgColor: "bg-white",
    textColor: "text-gray-900",
  },
  {
    code: "IC",
    title: "Intellectual capital",
    metric: "Served",
    value: "87.7 million",
    subtext: "financial services customers",
    note: "FY2024: 78.9 million",
    bgColor: "bg-gray-800",
    textColor: "text-white",
  },
  {
    code: "MC",
    title: "Manufactured capital",
    value: "R20.3 billion",
    subtext: "capital investment in network capacity and resilience",
    note: "FY2024: R20.4 billion",
    bgColor: "bg-gray-200",
    textColor: "text-gray-900",
  },
  {
    code: "SRC",
    title: "Social and relationship capital",
    metric: "Launched TechStart to upskill",
    value: "One million",
    subtext: "youth",
    bgColor: "bg-white",
    textColor: "text-gray-900",
  },
  {
    code: "HC",
    title: "Human capital",
    value: "41.2%",
    metric: "of management and senior leadership roles are held by",
    highlight: "women",
    subtext: "up from 39.3%",
    bgColor: "bg-gray-200",
    textColor: "text-gray-900",
  },
  {
    code: "NC",
    title: "Natural capital",
    metrics: [
      {
        value: "67%",
        subtext: "reduction in scope 1 and 2 market-based GHG emissions",
        note: "FY2024: 28% reduction",
      },
      {
        value: "100%",
        subtext: "of network equipment sent for reuse, reselling or recycling",
        note: "FY2024: 93%",
      },
    ],
    bgColor: "bg-gray-800",
    textColor: "text-white",
  },
]

export function ValueCreation() {
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

  return (
    <motion.section
      className="py-16 px-6 bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Side - Title and Image */}
          <div className="lg:col-span-1">
            <motion.div className="mb-8" {...fadeInUp}>
              <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 mb-6">
                <h2 className="text-2xl font-bold">Our value creation in practice</h2>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Download className="w-4 h-4 text-red-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Woman using mobile phone"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>

            <motion.div
              className="mt-6 flex justify-end"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" className="bg-white text-red-600 border-red-600 hover:bg-red-50">
                Our capitals
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Capitals Grid */}
          <div className="lg:col-span-2">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {capitals.map((capital, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className={`${capital.bgColor} ${capital.textColor} border-0 shadow-lg h-full`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-600 text-white rounded flex items-center justify-center font-bold text-sm">
                            {capital.code}
                          </div>
                          <span className="font-semibold text-sm">{capital.title}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {capital.metrics ? (
                          // Natural Capital - Multiple metrics
                          capital.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="space-y-2">
                              <div className="text-3xl font-bold">{metric.value}</div>
                              <p className="text-sm leading-relaxed opacity-90">{metric.subtext}</p>
                              {metric.note && (
                                <div className="bg-white/10 px-2 py-1 rounded text-xs">{metric.note}</div>
                              )}
                            </div>
                          ))
                        ) : (
                          // Single metric capitals
                          <>
                            {capital.metric && <p className="text-sm opacity-80 mb-2">{capital.metric}</p>}
                            <div className="text-3xl font-bold">
                              {capital.highlight ? (
                                <>
                                  {capital.value} <span className="text-red-500">{capital.highlight}</span>
                                </>
                              ) : (
                                capital.value
                              )}
                            </div>
                            <p className="text-sm leading-relaxed opacity-90">{capital.subtext}</p>
                            {capital.note && (
                              <div className="bg-black/10 px-2 py-1 rounded text-xs mt-2">{capital.note}</div>
                            )}
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
