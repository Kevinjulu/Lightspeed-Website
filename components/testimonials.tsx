"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "John Maweu Mwiti",
    role: "Small Business Owner",
    content: "Light Speed Internet has transformed the way I run my business. The speed and reliability are unmatched!",
    avatar: "/placeholder.svg",
  },
  {
    name: "Jane Okumu",
    role: "Student",
    content:
      "As a student, having access to Light Speed Street Wi-Fi has been a game-changer for my studies. It's fast and always available!",
    avatar: "/placeholder.svg",
  },
  {
    name: "David Kimani Njogu",
    role: "Freelancer",
    content:
      "Working from home has never been easier with Light Speed Home. The unlimited data means I never have to worry about running out of internet.",
    avatar: "/placeholder.svg",
  },
]

export default function Testimonials() {
  return (
    <div className="bg-purple-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-purple-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-purple-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

