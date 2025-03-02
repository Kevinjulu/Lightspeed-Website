"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"

export default function CoverageSection() {
  return (
    <div className="py-24 bg-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff0a_1px,transparent_1px),linear-gradient(-45deg,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-8">
            <MapPin className="h-4 w-4 text-yellow-400" />
            <span>Coverage Expanding Daily</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready for Light Speed! in Your Area?</h2>
          <p className="text-purple-200 max-w-2xl mx-auto mb-8">
            We're rapidly expanding across Kenya. Enter your location to check availability and be notified when we
            reach your neighborhood.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="text"
              placeholder="Enter your location"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Button className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 group">
              Check Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

