"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DownloadModal } from "@/components/download-modal"
import { useState } from "react"

export function Header() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  return (
    <>
      <motion.header
        className="bg-white text-gray-900 py-4 px-6 shadow-sm relative z-30"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - Vodacom Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-gray-900">vodacom</span>
          </div>

          {/* Center - FY2025 Integrated report */}
          <div className="hidden md:block text-center">
            <h1 className="text-lg font-bold text-gray-900">
              <span className="font-bold">FY2025</span> Integrated report
            </h1>
          </div>

          {/* Right - Downloads Button */}
          <Button
            variant="outline"
            className="bg-white border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 font-semibold px-6 py-2 rounded-full"
            onClick={() => setIsDownloadModalOpen(true)}
          >
            Downloads
          </Button>
        </div>

        {/* Mobile Center Text */}
        <div className="md:hidden text-center mt-2">
          <h1 className="text-sm font-bold text-gray-900">
            <span className="font-bold">FY2025</span> Integrated report
          </h1>
        </div>
      </motion.header>

      {/* Download Modal */}
      <DownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
    </>
  )
}
