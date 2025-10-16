"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroBanner() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const scrollToReportingSuite = () => {
    const element = document.getElementById("reporting-suite")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.section
      className="relative text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image Container */}
      <div className="relative w-full">
        <div
          className="w-full h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-background.png')`,
          }}
        >
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="flex items-center justify-between h-full">
                {/* Left Side - Text Content */}
                <motion.div className="flex-1 max-w-2xl" {...fadeInUp}>
                  <motion.p className="text-lg md:text-xl font-medium mb-4 text-white/90" {...fadeInUp}>
                    Vodacom Group Limited
                  </motion.p>

                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
                    {...fadeInUp}
                    transition={{ delay: 0.2 }}
                  >
                    Integrated report
                  </motion.h1>

                  <motion.p className="text-lg md:text-xl mb-8 text-white/90" {...fadeInUp} transition={{ delay: 0.4 }}>
                    for the year ended 31 March 2025
                  </motion.p>

                  <motion.div className="mt-12" {...fadeInUp} transition={{ delay: 0.6 }}>
                    <p className="text-lg md:text-xl font-medium">Year in review</p>
                  </motion.div>
                </motion.div>

                {/* Right Side - Space for the image (handled by background) */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            </div>
          </div>

          {/* Further Together Badge - Bottom Right */}
          <motion.div
            className="absolute bottom-8 right-8 flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="text-white font-medium text-sm md:text-base">Further together</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold text-sm">V</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <Button
          variant="ghost"
          size="lg"
          onClick={scrollToReportingSuite}
          className="text-white hover:text-red-200 hover:bg-white/10 rounded-full p-4"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </Button>
      </motion.div>

      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-bg {
            background-size: contain;
            background-position: center bottom;
          }
        }
      `}</style>
    </motion.section>
  )
}
