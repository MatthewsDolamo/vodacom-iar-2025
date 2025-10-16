"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Download, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const executives = [
  {
    name: "Raisibe Morathi",
    title: "CFO's statement",
    image: "/placeholder.svg?height=400&width=300",
    statement:
      "As we conclude the Vision 2025 strategy, I reflect proudly on the progress we have made over the past five years in diversifying Vodacom's geographic reach and product portfolio.",
    hasDownload: true,
    downloadText: "Annual financial statements",
  },
  {
    name: "Shameel Joosub",
    title: "CEO's statement",
    image: "/placeholder.svg?height=400&width=300",
    statement:
      "Our commitment to connecting communities and driving digital transformation across Africa remains unwavering as we enter a new era of growth.",
    hasDownload: false,
    downloadText: "",
  },
  {
    name: "Takalani Netshitenzhe",
    title: "External Affairs Director",
    image: "/placeholder.svg?height=400&width=300",
    statement:
      "Building sustainable relationships with governments and communities is at the heart of our expansion strategy across the continent.",
    hasDownload: false,
    downloadText: "",
  },
  {
    name: "Matimba Mbungela",
    title: "Technology Director",
    image: "/placeholder.svg?height=400&width=300",
    statement:
      "Innovation and technological advancement drive our mission to provide world-class connectivity solutions to our customers.",
    hasDownload: false,
    downloadText: "",
  },
  {
    name: "Yolanda Cuba",
    title: "Human Resources Director",
    image: "/placeholder.svg?height=400&width=300",
    statement:
      "Our people are our greatest asset, and we continue to invest in developing talent that will shape the future of telecommunications in Africa.",
    hasDownload: false,
    downloadText: "",
  },
]

export function LeadershipSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % executives.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + executives.length) % executives.length)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <motion.section
      className="py-16 px-6 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-8" {...fadeInUp}>
          <div className="flex items-center mb-6">
            <div className="bg-red-100 rounded-full p-3 mr-4">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">i</span>
              </div>
            </div>
            <span className="text-red-600 font-semibold">Interactive</span>
          </div>
        </motion.div>

        <div className="relative">
          {/* Executive Photos */}
          <motion.div className="flex justify-center mb-8 overflow-hidden" {...fadeInUp}>
            <div className="flex space-x-4 md:space-x-8">
              {executives.map((exec, index) => (
                <motion.div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    index === currentSlide ? "scale-110 z-10" : "scale-90 opacity-60 hover:opacity-80"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: index === currentSlide ? 1.1 : 0.95 }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={exec.image || "/placeholder.svg"}
                      alt={exec.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {index === currentSlide && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-600 rounded-full"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statement Card */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600 z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>

                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      <span className="text-red-600">{executives[currentSlide].title.split("'")[0]}'s</span>{" "}
                      <span className="text-gray-900">statement</span>
                    </h3>

                    <p className="text-lg font-semibold text-gray-900 mb-4">{executives[currentSlide].name}</p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{executives[currentSlide].statement}</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>

                      {executives[currentSlide].hasDownload && (
                        <Button
                          variant="outline"
                          className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white bg-transparent"
                        >
                          <Info className="w-4 h-4 mr-2" />
                          {executives[currentSlide].downloadText}
                        </Button>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600 z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {executives.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-red-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
