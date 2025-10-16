"use client"

import { motion } from "framer-motion"
import { Users, Globe, Shield } from "lucide-react"

const purposePillars = [
  {
    icon: Users,
    title: "Empowering people",
    description: "Enabling digital inclusion and skills development",
  },
  {
    icon: Globe,
    title: "Protecting the planet",
    description: "Sustainable operations and environmental responsibility",
  },
  {
    icon: Shield,
    title: "Maintaining trust",
    description: "Ethical business practices and data protection",
  },
]

const strategicAmbitions = [
  {
    number: "1",
    title: "Africa's leading communications company",
    color: "bg-red-700",
  },
  {
    number: "2",
    title: "Diversify and differentiate with our digital ecosystem",
    color: "bg-red-600",
  },
  {
    number: "3",
    title: "Optimised, future-ready TechCo",
    color: "bg-red-500",
  },
]

const strategicPillars = [
  { id: "S1", title: "Healthy markets and leadership", color: "text-red-600" },
  { id: "S2", title: "Secure leadership in mobile and fixed", color: "text-red-600" },
  { id: "S3", title: "Scale financial and digital services", color: "text-red-600" },
  { id: "S4", title: "Digital partner of choice for enterprises", color: "text-red-600" },
  { id: "S5", title: "Effortless loyalty and customer experience", color: "text-red-600" },
  { id: "S6", title: "Personalisation through CVM and Big Data", color: "text-red-600" },
  { id: "S7", title: "Optimise assets through sharing", color: "text-red-600" },
  { id: "S8", title: "Technology leadership in network and IT", color: "text-red-600" },
  { id: "S9", title: "TechCo organisation and culture", color: "text-red-600" },
  { id: "S10", title: "Trusted brand and reputation", color: "text-red-600" },
]

export function StrategicEvolution() {
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
      className="py-16 px-6 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Title and Description */}
          <div className="lg:col-span-3">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-red-600">Our strategic evolution –</span>
                <br />
                <span className="text-red-600">the System of Advantage</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our strategy – the System of Advantage – is evolving but continues to be driven by our purpose.
                Following the successful conclusion of Vision 2025, we are transitioning to Vision 2030. In FY2025, we
                assessed our strategic ambitions and reframed them as three strategic imperatives to ensure they remain
                fit for purpose as we enter our next growth phase. While the fundamentals within our strategy remain
                consistent, we have refined our 10 strategic pillars to seven strategic priorities to better articulate
                how we will manage our business going forward. These shifts account for changes to our operations
                internally, as well as changes in our broader operating context.
              </p>
            </motion.div>
          </div>

          {/* Center Column - Purpose Pillars */}
          <div className="lg:col-span-3">
            <motion.div
              className="bg-red-600 rounded-2xl p-8 text-white h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Our purpose pillars</h3>
              <p className="text-red-100 mb-8 text-sm">
                We enable an inclusive, sustainable and trusted digital society where individuals and businesses can
                thrive.
              </p>

              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {purposePillars.map((pillar, index) => (
                  <motion.div key={index} variants={fadeInUp} className="bg-white rounded-lg p-4 text-gray-900">
                    <div className="flex items-center space-x-3 mb-2">
                      <pillar.icon className="w-5 h-5 text-red-600" />
                      <h4 className="font-semibold">{pillar.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Vision 2025 Framework */}
          <div className="lg:col-span-6">
            <motion.div
              className="bg-gray-50 rounded-2xl p-8 border-2 border-red-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <div className="inline-block bg-white border-2 border-red-600 rounded-full px-6 py-2 mb-4">
                  <span className="text-red-600 font-bold">Vision 2025</span>
                </div>
                <div className="grid grid-cols-2 gap-8 text-sm text-gray-600">
                  <div>STRATEGIC AMBITIONS</div>
                  <div>STRATEGIC PILLARS</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Strategic Ambitions */}
                <div className="space-y-4">
                  {strategicAmbitions.map((ambition, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={`w-8 h-8 ${ambition.color} text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}
                      >
                        {ambition.number}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 leading-tight">
                          Ambition {ambition.number}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">{ambition.title}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Strategic Pillars */}
                <div className="space-y-2">
                  {strategicPillars.map((pillar, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 text-xs"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className={`${pillar.color} font-semibold`}>{pillar.id}</span>
                      <span className="text-gray-700">{pillar.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Vision 2030 Circle */}
              <motion.div
                className="absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex flex-col items-center justify-center text-white text-center shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-lg font-bold">Evolving to</span>
                <span className="text-sm">Vision 2030</span>
                <span className="text-xs mt-1">Positioned to</span>
                <span className="text-xs font-semibold">accelerate growth</span>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs">🎯</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
