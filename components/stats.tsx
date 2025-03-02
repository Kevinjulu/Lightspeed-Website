"use client"

import { motion } from "framer-motion"
import { Users, Wifi, Clock, Trophy } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Users",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Wifi,
      value: "4,000+",
      label: "Wi-Fi Hotspots",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Customer Support",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Trophy,
      value: "#1",
      label: "Internet Provider",
      color: "from-green-400 to-green-600",
    },
  ]

  return (
    <div className="py-24 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl transform transition-transform group-hover:scale-105" />
              <div className="relative p-6 rounded-2xl text-center">
                <div
                  className={`bg-gradient-to-r ${stat.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center transform transition-transform group-hover:rotate-12`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

