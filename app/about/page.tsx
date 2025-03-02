"use client"

import { motion } from "framer-motion"
import { Users, Target, Heart, Award, Zap, Globe, Shield, Headphones } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Cities Covered", value: "5+" },
    { label: "Customer Satisfaction", value: "98%" },
    { label: "Years of Service", value: "5+" },
  ]

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly improving our services with latest technology.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building stronger communities through connectivity.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality service.",
    },
  ]

  const timeline = [
    { year: "2018", event: "Light Speed founded with a mission to connect Kenya" },
    { year: "2019", event: "Launched our first high-speed internet service in Nairobi" },
    { year: "2020", event: "Expanded to Mombasa and Kisumu, reaching 20,000 users" },
    { year: "2021", event: "Introduced Street Wi-Fi program with 1,000 hotspots" },
    { year: "2022", event: "Reached 50,000 active users across 5 major cities" },
    { year: "2023", event: "Launched advanced fiber optic network for businesses" },
  ]

  return (
    <div className="min-h-screen bg-purple-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About Light Speed</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connecting Kenya with high-speed internet, one community at a time.
            We believe in making internet accessible to everyone, powering innovation and growth across the nation.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                At Light Speed, our mission is to bridge the digital divide in Kenya by providing fast, reliable, and affordable internet access to all. We believe that connectivity is a catalyst for economic growth, education, and social progress.
              </p>
              <p className="text-gray-300 text-lg">
                Through innovative technology and community-focused initiatives, we're committed to empowering individuals, businesses, and communities across Kenya to thrive in the digital age.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Light Speed Mission"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl" />
                <div className="relative p-6 rounded-2xl text-center">
                  <value.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.year}</h3>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Light Speed?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", description: "Experience blazing fast internet speeds" },
              { icon: Globe, title: "Wide Coverage", description: "Serving major cities across Kenya" },
              { icon: Shield, title: "Secure Connection", description: "Advanced security measures to protect your data" },
              { icon: Headphones, title: "24/7 Support", description: "Always here to help, any time, any day" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl" />
                <div className="relative p-6 rounded-2xl text-center">
                  <item.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
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
