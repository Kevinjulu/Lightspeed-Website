"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HeroBanner() {
  return (
    <div className="relative bg-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff0a_1px,transparent_1px),linear-gradient(-45deg,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-8">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span>Special February Offer - Save up to 20%</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Faster, More Flexible,
              <br />
              Better Value Internet
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto mb-8">
              Experience lightning-fast internet with unlimited data, no caps, and pure speed for your home and
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 group px-8 py-6 text-lg">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/coverage">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/20 backdrop-blur-sm hover:bg-white/10 px-8 py-6 text-lg"
                >
                  View Coverage
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              { label: "Regular", price: "1750", period: "per month", save: "175" },
              { label: "Weekly", price: "450", period: "per week" },
              { label: "Installation", price: "2000", period: "one-time", original: "2500" },
            ].map((plan, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-xl rounded-xl transform transition-transform group-hover:scale-105" />
                <div className="relative p-6 rounded-xl border border-white/10">
                  <div className="text-white mb-2">{plan.label}</div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-sm">KES</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <div className="text-sm text-white">{plan.period}</div>
                  {plan.save && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full">
                      Save KES {plan.save}
                    </div>
                  )}
                  {plan.original && (
                    <div className="text-sm text-gray-400 line-through mt-1">Was KES {plan.original}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900 to-transparent" />
    </div>
  )
}

