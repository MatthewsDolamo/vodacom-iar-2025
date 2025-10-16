"use client"

import { motion } from "framer-motion"
import { ArrowUp, TrendingUp, Users, Globe, Smartphone, Wifi } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RevenueChart } from "@/components/revenue-chart"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { RegionalBreakdown } from "@/components/regional-breakdown"
import { CustomerGrowth } from "@/components/customer-growth"
import { ReportingSuite } from "@/components/reporting-suite"
import { LeadershipSection } from "@/components/leadership-section"
import { InvestmentCase } from "@/components/investment-case"
import { ValueCreation } from "@/components/value-creation"
import { StrategicEvolution } from "@/components/strategic-evolution"
import { StrategyEvolving } from "@/components/strategy-evolving"
import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function VodacomIAR2025() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header Component */}
      <Header />

      {/* Hero Banner Component */}
      <HeroBanner />

      {/* Key Statistics Section */}
      <motion.section
        className="py-12 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Users, label: "Active Customers", value: "135.2M", growth: "+8.5%" },
              { icon: Globe, label: "Countries", value: "8", growth: "Stable" },
              { icon: Smartphone, label: "Data Revenue", value: "R89.2B", growth: "+12.3%" },
              { icon: Wifi, label: "Network Coverage", value: "95.8%", growth: "+2.1%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 text-center border border-red-200"
                variants={fadeInUp}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-red-600" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{stat.value}</h3>
                <p className="text-gray-700 mb-1">{stat.label}</p>
                <span className="text-green-600 text-sm flex items-center justify-center">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  {stat.growth}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Reporting Suite Section with ID for scroll target */}
      <div id="reporting-suite">
        <ReportingSuite />
      </div>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Investment Case Section */}
      <InvestmentCase />

      {/* Value Creation Section */}
      <ValueCreation />

      {/* Strategic Evolution Section */}
      <StrategicEvolution />

      {/* Strategy Evolving Section */}
      <StrategyEvolving />

      {/* Financial Highlights */}
      <motion.section
        className="py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Highlights</h2>
            <p className="text-xl text-gray-600">Strong performance across all key metrics</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-red-600" />
                    Revenue Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RevenueChart />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Regional Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <RegionalBreakdown />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Key Performance Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <PerformanceMetrics />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Customer Growth Trajectory</CardTitle>
                </CardHeader>
                <CardContent>
                  <CustomerGrowth />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Achievements */}
      <motion.section
        className="py-16 px-6 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">2025 Key Achievements</h2>
            <p className="text-xl text-gray-600">Milestones that define our success</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "5G Network Expansion",
                description: "Launched 5G services in 45 major cities across our markets",
                metric: "45 Cities",
              },
              {
                title: "Digital Financial Services",
                description: "M-Pesa transactions reached record highs with enhanced security",
                metric: "R2.1T Volume",
              },
              {
                title: "Sustainability Goals",
                description: "Achieved 65% renewable energy usage across our operations",
                metric: "65% Green Energy",
              },
              {
                title: "Customer Satisfaction",
                description: "Improved Net Promoter Score across all markets",
                metric: "NPS +15 points",
              },
              {
                title: "Digital Inclusion",
                description: "Connected 2.8M new customers to digital services",
                metric: "2.8M New Users",
              },
              {
                title: "Innovation Investment",
                description: "Increased R&D spending to drive future technologies",
                metric: "R8.5B Investment",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <div className="text-2xl font-bold text-red-600">{achievement.metric}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-12 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Vodacom Group</h3>
              <p className="text-gray-400">Connecting for a better future</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">© 2025 Vodacom Group Limited. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            This integrated annual report demonstrates our commitment to transparency, sustainability, and creating
            shared value for all stakeholders.
          </p>
        </div>
      </motion.footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
