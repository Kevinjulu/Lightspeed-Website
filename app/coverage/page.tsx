"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function CoveragePage() {
  const cities = [
    {
      name: "Nairobi",
      coverage: "95%",
      areas: ["CBD", "Westlands", "Kilimani", "Karen", "Eastlands"],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Mombasa",
      coverage: "85%",
      areas: ["Nyali", "Bamburi", "Tudor", "Likoni"],
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Kisumu",
      coverage: "80%",
      areas: ["CBD", "Milimani", "Kondele", "Nyamasaria"],
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Eldoret",
      coverage: "75%",
      areas: ["Town Center", "Pioneer", "Langas", "Kimumu"],
      color: "from-green-400 to-green-600",
    },
    {
      name: "Nakuru",
      coverage: "70%",
      areas: ["CBD", "London", "Milimani", "Free Area"],
      color: "from-red-400 to-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-purple-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Network Coverage</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Light Speed is available in major cities across Kenya, with new areas being added regularly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl" />
              <div className="relative p-8 rounded-2xl">
                <div className={`bg-gradient-to-r ${city.color} p-4 rounded-xl inline-flex mb-6`}>
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{city.name}</h2>
                <div className="mb-4">
                  <div className="text-gray-300 mb-2">Coverage</div>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${city.color}`} style={{ width: city.coverage }} />
                  </div>
                  <div className="text-right text-yellow-400 text-sm mt-1">{city.coverage}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-gray-300 mb-2">Available Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    {city.areas.map((area, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

