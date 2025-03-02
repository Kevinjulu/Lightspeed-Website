"use client"

import { motion } from "framer-motion"
import { Wifi, Shield, FastForwardIcon as Speed, Users, Clock, CreditCard, ArrowRight } from "lucide-react"

const features = [
  {
    title: "New Lower Install Price",
    description: "Get connected for less with our reduced installation fees",
    icon: CreditCard,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Expanding Across Kenya",
    description: "Growing our network to reach more communities every day",
    icon: Wifi,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "40,000+ FREE Hotspots",
    description: "Access free Wi-Fi at thousands of locations nationwide",
    icon: Users,
    color: "from-green-400 to-green-600",
  },
  {
    title: "24/7 Customer Support",
    description: "Expert help available whenever you need it",
    icon: Shield,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Unlimited Data Usage",
    description: "No caps, no throttling, just unlimited internet",
    icon: Speed,
    color: "from-red-400 to-red-600",
  },
  {
    title: "Affordable Plans",
    description: "Starting from only KES 1575 per month",
    icon: Clock,
    color: "from-indigo-400 to-indigo-600",
  },
]

export default function FeatureGrid() {
  return (
    <div className="py-24 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Light Speed!</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the best internet service in Kenya with our cutting-edge technology and customer-first approach
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg transform transition-transform group-hover:scale-[1.02]" />
              <div className="relative p-6 rounded-2xl">
                <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl inline-flex mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="flex items-center text-yellow-400 group-hover:text-yellow-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

