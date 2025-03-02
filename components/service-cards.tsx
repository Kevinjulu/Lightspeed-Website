"use client"

import { Home, Wifi, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ServiceCards() {
  const services = [
    {
      title: "Light Speed Home",
      icon: Home,
      color: "from-yellow-400 to-yellow-600",
      description: "Unlimited home Internet from just KES 1575 per month or KES 450 per week",
      features: ["Unlimited browsing", "Faster streaming", "No data caps", "Multiple devices"],
      button: "Get Light Speed Home",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-purple-900",
    },
    {
      title: "Light Speed Street",
      icon: Wifi,
      color: "from-purple-400 to-purple-600",
      description: "Free street internet every day on Africa's largest Wi-Fi network",
      features: ["4,000+ hotspots", "Free daily data", "Pay-as-you-go", "Nationwide coverage"],
      button: "Get Light Speed Street",
      buttonColor: "bg-purple-400 hover:bg-purple-500 text-white",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl transform transition-transform group-hover:scale-[1.02]" />
            <div className="relative p-8 rounded-2xl">
              <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl inline-flex mb-6`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">{service.title}</h2>
              <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
              <div className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-white text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Button
                  className={`${service.buttonColor} text-lg py-6 px-8 rounded-xl font-semibold flex items-center gap-2 transform transition-all hover:scale-105`}
                >
                  {service.button}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

