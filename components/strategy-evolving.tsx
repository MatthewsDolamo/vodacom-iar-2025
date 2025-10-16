"use client"

import { motion } from "framer-motion"
import { Play, QrCode, TrendingUp, DollarSign, BarChart3, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const accelerationPillars = [
  {
    title: "Purpose",
    color: "bg-red-600",
    items: [
      "Elevating purpose and leveraging partnerships to scale impact",
      "Increasing our brand affinity and reputation",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Customer",
    color: "bg-red-600",
    items: [
      "Earning customer loyalty through simplicity and transparency",
      "Refining omnichannel customer engagement, while leveraging the digital power of our super-apps",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Growth",
    color: "bg-red-600",
    items: ["Scaling connectivity leadership beyond mobile", "Deepening financial and digital inclusion"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Invest",
    color: "bg-red-600",
    items: [
      "Secure technology leadership by scaling artificial intelligence (AI)-powered operations and more infrastructure sharing",
      "Accelerating investment in skills and diversity to drive a customer-centric people culture",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const keyAmbitions = [
  {
    icon: TrendingUp,
    title: "Double-digit EBITDA growth",
    color: "text-red-600",
  },
  {
    icon: DollarSign,
    title: "Hard currency earnings growth potential",
    color: "text-red-600",
  },
  {
    icon: BarChart3,
    title: "Return on capital employed (ROCE) to remain stable/improve",
    color: "text-gray-300",
  },
  {
    icon: Leaf,
    title: "ESG leader",
    color: "text-red-600",
  },
]

export function StrategyEvolving() {
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
    <div className="bg-white">
      {/* Top Banner */}
      <motion.section
        className="bg-gradient-to-r from-red-800 to-red-600 text-white py-12 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div className="flex-1 mb-8 lg:mb-0" {...fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Our strategy <span className="italic">is evolving</span>
              </h2>
              <p className="text-xl text-red-100">
                A strong finish to Vision 2025 as we evolve the System of Advantage
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                <QrCode className="w-24 h-24 text-gray-800" />
              </div>
              <Button className="bg-white text-red-600 hover:bg-red-50 font-semibold px-6 py-2 rounded-full">
                <Play className="w-4 h-4 mr-2" />
                Watch here
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Acceleration Opportunities */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <div className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full mb-8">
              <span className="text-lg font-semibold">
                Acceleration opportunities as we transition from Vision 2025 to Vision 2030
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Four Pillars */}
            <div className="lg:col-span-4">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {accelerationPillars.map((pillar, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full overflow-hidden">
                      <div className={`${pillar.color} text-white p-4 text-center`}>
                        <h3 className="text-xl font-bold">{pillar.title}</h3>
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-3 mb-4">
                          {pillar.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                        <div className="h-32 bg-gray-100 rounded-lg overflow-hidden mt-4">
                          <img
                            src={pillar.image || "/placeholder.svg"}
                            alt={`${pillar.title} illustration`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Key Ambitions Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-gray-800 text-white rounded-2xl p-6 h-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-6">Our key ambitions for shareholders to 2030</h3>

                <div className="space-y-6">
                  {keyAmbitions.map((ambition, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ambition.icon className={`w-6 h-6 ${ambition.color} flex-shrink-0 mt-1`} />
                      <p className="text-sm leading-relaxed">{ambition.title}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
