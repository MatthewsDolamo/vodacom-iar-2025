"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const reports = [
  {
    title: "Integrated report",
    image: "/images/IR-thumb-cover.png",
    textColor: "text-white",
  },
  {
    title: "Consolidated and separate financial statements",
    image: "/images/IR-thumb-cover.png",
    textColor: "text-white",
    hasDownload: true,
  },
  {
    title: "Environmental, social and governance report",
    image: "/images/esg-thumb-cover.png",
    textColor: "text-white",
  },
  {
    title: "Climate and nature report",
    image: "/images/Climate-and-nature-cover.png",
    textColor: "text-gray-900",
  },
  {
    title: "Corporate governance report",
    image: "/images/cgr-thumb-cover.png",
    textColor: "text-white",
  },
  {
    title: "Remuneration report",
    image: "/images/rem-thumb-cover.png",
    textColor: "text-white",
  },
  {
    title: "Tax transparency report",
    image: "/images/ttr-thumb-cover.png",
    textColor: "text-white",
  },
]

export function ReportingSuite() {
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
      className="py-16 px-6 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-12" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-600">Welcome</span> to our reporting suite
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            Our reporting suite aims to meet the diverse information needs of Vodacom Group Limited's (Vodacom's or the
            Group's) stakeholders. This enables the Group's stakeholders to fairly assess our financial and ESG
            performance for the financial year ended 31 March 2025 (FY2025).
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {reports.map((report, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={report.image || "/placeholder.svg"}
                    alt={report.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {report.hasDownload && (
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                      <Download className="w-4 h-4 text-red-600" />
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 capitalize">
                      {report.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
