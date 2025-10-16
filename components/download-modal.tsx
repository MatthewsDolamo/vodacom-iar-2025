"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

const fullReports = [
  { name: "Integrated report", size: "13.23 MB", url: "#" },
  { name: "Consolidated and separate financial statements", size: "5.33 MB", url: "#" },
  { name: "ESG report", size: "6.99 MB", url: "#" },
  { name: "Climate and nature report", size: "3.17 MB", url: "#" },
  { name: "Corporate governance report", size: "9.49 MB", url: "#" },
  { name: "Remuneration report", size: "1.90 MB", url: "#" },
  { name: "Tax transparency report", size: "2.69 MB", url: "#" },
]

const sectionDownloads = [
  {
    name: "Introduction",
    subsections: [
      { name: "About our report", size: "0.08 MB", url: "#" },
      { name: "Who we are", size: "0.20 MB", url: "#" },
      { name: "Where we operate", size: "0.36 MB", url: "#" },
      { name: "Our material matters", size: "0.38 MB", url: "#" },
      { name: "Our value creation in practice", size: "0.19 MB", url: "#" },
    ],
  },
  {
    name: "Our governance",
    subsections: [
      { name: "Chairman's statement", size: "0.13 MB", url: "#" },
      { name: "Who governs us", size: "3.03 MB", url: "#" },
      { name: "Board governance at a glance", size: "0.19 MB", url: "#" },
      { name: "Who leads us", size: "3.11 MB", url: "#" },
    ],
  },
  {
    name: "Our business",
    subsections: [
      { name: "CEO's statement", size: "0.25 MB", url: "#" },
      { name: "Our approach to value creation", size: "0.14 MB", url: "#" },
      { name: "Our ESG framework", size: "0.08 MB", url: "#" },
      { name: "Our Vision 2025 strategic ambitions", size: "0.17 MB", url: "#" },
      { name: "Measuring our value creation", size: "0.09 MB", url: "#" },
      { name: "Our strategic evolution", size: "0.13 MB", url: "#" },
      { name: "What we offer", size: "0.21 MB", url: "#" },
      { name: "Our growth formula", size: "0.08 MB", url: "#" },
      { name: "Our investment case", size: "0.12 MB", url: "#" },
      { name: "Our principal risks and associated opportunities", size: "0.44 MB", url: "#" },
      { name: "Responding to hot topics impacting our operating context", size: "0.64 MB", url: "#" },
    ],
  },
]

const capitalsPerformance = [
  { name: "How the capitals impact our purpose and strategy", size: "0.14 MB", url: "#" },
  { name: "Our business model", size: "0.12 MB", url: "#" },
  { name: "Financial capital", size: "0.55 MB", url: "#" },
  { name: "– Condensed financial statements", size: "0.06 MB", url: "#" },
  { name: "Manufactured capital", size: "0.27 MB", url: "#" },
  { name: "Intellectual capital", size: "0.44 MB", url: "#" },
  { name: "Social and relationship capital", size: "0.77 MB", url: "#" },
  { name: "Natural capital", size: "0.40 MB", url: "#" },
  { name: "Human capital", size: "0.30 MB", url: "#" },
  { name: "– Remunerating to reward value creation", size: "0.40 MB", url: "#" },
]

const additionalFinancial = [
  { name: "Five-year historic review", size: "0.04 MB", url: "#" },
  { name: "Five-year historic review by segment", size: "0.04 MB", url: "#" },
  { name: "Share information", size: "0.12 MB", url: "#" },
]

const administration = [
  { name: "Disclaimer", size: "0.05 MB", url: "#" },
  { name: "Glossary", size: "0.04 MB", url: "#" },
  { name: "Corporate information", size: "0.13 MB", url: "#" },
]

const otherDocuments = [
  { name: "Notice of annual general meeting", size: "4.39 MB", url: "#" },
  { name: "Form of proxy", size: "0.50 MB", url: "#" },
  { name: "Electronic participation meeting guide", size: "0.25 MB", url: "#" },
  { name: "ESG addendum", size: "2.56 MB", url: "#" },
  { name: "ESG addendum methodology", size: "1.89 MB", url: "#" },
  { name: "Interests in subsidiaries and JVs", size: "1.10 MB", url: "#" },
  { name: "ISO9001 certificate", size: "0.80 MB", url: "#" },
  { name: "Environmental policy statement", size: "0.10 MB", url: "#" },
  { name: "Occupational safety and health policy", size: "0.00 MB", url: "#" },
  { name: "Vodacom SA BEE certificate", size: "0.58 MB", url: "#" },
  { name: "Vodacom Group BEE certificate", size: "0.58 MB", url: "#" },
]

const excelDocuments = [
  { name: "Five year historic review", size: "0.02 MB", url: "#" },
  { name: "Five year historic review by segment", size: "0.02 MB", url: "#" },
  { name: "Consolidated income statement", size: "0.01 MB", url: "#" },
  { name: "Consolidated statement of comprehensive income", size: "0.01 MB", url: "#" },
  { name: "Consolidated statement of financial position", size: "0.02 MB", url: "#" },
  { name: "Consolidated statement of changes in equity", size: "0.02 MB", url: "#" },
  { name: "Consolidated statement of cash flows", size: "0.01 MB", url: "#" },
]

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const handleDownload = (url: string, filename: string) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading: ${filename} from ${url}`)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center pt-8 px-4"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
              {/* Close Button */}
              <div className="absolute top-4 right-4 z-10">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  Close X
                </Button>
              </div>

              {/* Content - 4 Column Grid */}
              <div className="grid grid-cols-4 max-h-[90vh] overflow-y-auto">
                {/* Column 1 - Our 2025 reporting suite */}
                <div className="col-span-1 bg-red-600 text-white p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">Our 2025 reporting suite</h3>
                    <h4 className="text-lg font-semibold mb-4">Full report downloads</h4>
                  </div>

                  <div className="space-y-3">
                    {fullReports.map((report, index) => (
                      <button
                        key={index}
                        onClick={() => handleDownload(report.url, report.name)}
                        className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-left"
                      >
                        <div className="flex items-center space-x-3">
                          <Download className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm font-medium">{report.name}</span>
                        </div>
                        <span className="text-xs text-red-100">{report.size}</span>
                      </button>
                    ))}
                  </div>

                  {/* Background Image */}
                  <div className="mt-8">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="People using mobile devices"
                      className="w-full rounded-lg opacity-80"
                    />
                  </div>
                </div>

                {/* Columns 2 & 3 - Integrated report 2025 (col-span-2) */}
                <div className="col-span-2 p-6 bg-white">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-red-600 mb-2">Integrated report 2025</h3>
                    <h4 className="text-lg font-semibold text-gray-900">Section downloads</h4>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    {/* Left side of center columns */}
                    <div className="space-y-6">
                      {/* Section Downloads */}
                      {sectionDownloads.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h5 className="font-bold text-gray-900 mb-3 flex items-center">
                            {section.name}
                            <Download className="w-4 h-4 ml-2 text-red-600" />
                          </h5>
                          <div className="space-y-2">
                            {section.subsections.map((subsection, subIndex) => (
                              <button
                                key={subIndex}
                                onClick={() => handleDownload(subsection.url, subsection.name)}
                                className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded text-left"
                              >
                                <span className="text-sm text-gray-700">{subsection.name}</span>
                                <span className="text-xs text-gray-500">{subsection.size}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right side of center columns */}
                    <div className="space-y-6">
                      {/* Our Capitals Performance */}
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3 flex items-center">
                          Our capitals performance
                          <Download className="w-4 h-4 ml-2 text-red-600" />
                        </h5>
                        <div className="space-y-2">
                          {capitalsPerformance.map((item, index) => (
                            <button
                              key={index}
                              onClick={() => handleDownload(item.url, item.name)}
                              className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded text-left"
                            >
                              <span className="text-sm text-gray-700">{item.name}</span>
                              <span className="text-xs text-gray-500">{item.size}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Additional Financial Information */}
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3 flex items-center">
                          Additional financial information
                          <Download className="w-4 h-4 ml-2 text-red-600" />
                        </h5>
                        <div className="space-y-2">
                          {additionalFinancial.map((item, index) => (
                            <button
                              key={index}
                              onClick={() => handleDownload(item.url, item.name)}
                              className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded text-left"
                            >
                              <span className="text-sm text-gray-700">{item.name}</span>
                              <span className="text-xs text-gray-500">{item.size}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Administration */}
                      <div>
                        <h5 className="font-bold text-gray-900 mb-3 flex items-center">
                          Administration
                          <Download className="w-4 h-4 ml-2 text-red-600" />
                        </h5>
                        <div className="space-y-2">
                          {administration.map((item, index) => (
                            <button
                              key={index}
                              onClick={() => handleDownload(item.url, item.name)}
                              className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded text-left"
                            >
                              <span className="text-sm text-gray-700">{item.name}</span>
                              <span className="text-xs text-gray-500">{item.size}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 4 - Other Documents & Excel Documents */}
                <div className="col-span-1 bg-gray-100 p-6">
                  <div className="space-y-6">
                    {/* Other Documents */}
                    <div>
                      <h5 className="font-bold text-red-600 mb-3">Other documents</h5>
                      <div className="space-y-2">
                        {otherDocuments.map((doc, index) => (
                          <button
                            key={index}
                            onClick={() => handleDownload(doc.url, doc.name)}
                            className="w-full flex items-center justify-between p-2 hover:bg-white rounded text-left"
                          >
                            <span className="text-xs text-gray-700">{doc.name}</span>
                            <span className="text-xs text-gray-500">{doc.size}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Excel Documents */}
                    <div>
                      <h5 className="font-bold text-red-600 mb-3">Excel documents</h5>
                      <div className="space-y-2">
                        {excelDocuments.map((doc, index) => (
                          <button
                            key={index}
                            onClick={() => handleDownload(doc.url, doc.name)}
                            className="w-full flex items-center justify-between p-2 hover:bg-white rounded text-left"
                          >
                            <span className="text-xs text-gray-700">{doc.name}</span>
                            <span className="text-xs text-gray-500">{doc.size}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
