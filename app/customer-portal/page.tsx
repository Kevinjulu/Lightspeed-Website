"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, User, Wifi, BarChart, CreditCard } from "lucide-react"

export default function CustomerPortalPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    console.log("Login attempted with:", email, password)
  }

  return (
    <div className="min-h-screen bg-purple-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold text-white mb-6">Welcome to Your Light Speed Portal</h1>
            <p className="text-xl text-gray-300 mb-8">
              Access your account, manage your services, and enjoy exclusive benefits as a Light Speed customer.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Wifi, text: "Monitor Usage" },
                { icon: BarChart, text: "View Analytics" },
                { icon: CreditCard, text: "Pay Bills" },
                { icon: Lock, text: "Secure Access" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <item.icon className="h-6 w-6 text-purple-900" />
                  </div>
                  <span className="text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl" />
            <div className="relative p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Log In</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 w-full"
                      placeholder="Enter your email"
                      required
                    />
                    <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 w-full"
                      placeholder="Enter your password"
                      required
                    />
                    <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-yellow-400 text-purple-900 hover:bg-yellow-500 py-6 text-lg font-semibold transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Log In to Your Account
                </Button>
              </form>
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-yellow-400 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

