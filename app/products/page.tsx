"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Wifi, Home, Building2, ArrowRight, Check, Star } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      title: "Home Internet",
      icon: Home,
      price: "1,575",
      period: "per month",
      features: [
        "Unlimited data",
        "Up to 20Mbps speed",
        "Free installation",
        "24/7 support",
        "Wi-Fi router included",
        "Parental controls",
      ],
      popular: true,
    },
    {
      title: "Business Internet",
      icon: Building2,
      price: "5,000",
      period: "per month",
      features: [
        "Dedicated bandwidth",
        "Up to 50Mbps speed",
        "99.9% uptime guarantee",
        "Priority support",
        "Static IP address",
        "Advanced security features",
      ],
    },
    {
      title: "Street Wi-Fi",
      icon: Wifi,
      price: "Free",
      period: "daily access",
      features: [
        "4,000+ hotspots",
        "Basic browsing speed",
        "Daily data allocation",
        "Available nationwide",
        "Easy login process",
        "Secure connection",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-purple-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect internet package for your needs. Whether you're a home user, business owner, or on the
            go, we've got you covered with our high-speed, reliable internet solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl" />
              <div className="relative p-8 rounded-2xl">
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" /> Popular
                  </div>
                )}
                <product.icon className="h-12 w-12 text-yellow-400 mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">{product.title}</h2>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">KES {product.price}</span>
                  <span className="text-gray-300 ml-2">{product.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-yellow-400 text-purple-900 hover:bg-yellow-500 py-6 text-lg font-semibold transition-all duration-200 ease-in-out transform hover:scale-105">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Light Speed?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Blazing Fast Speeds",
                description: "Experience lightning-fast internet that keeps up with your digital lifestyle.",
              },
              {
                title: "Reliable Connection",
                description: "Our robust network ensures you stay connected when it matters most.",
              },
              { title: "Exceptional Support", description: "Our dedicated team is always ready to assist you, 24/7." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl" />
                <div className="relative p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

