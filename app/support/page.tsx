"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone, Mail, FileQuestion } from "lucide-react"

export default function SupportPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Talk to our support team",
      action: "0800 123 456",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat with us on WhatsApp",
      action: "0700 123 456",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email",
      action: "support@lightspeed.co.ke",
      color: "from-blue-400 to-blue-600",
    },
  ]

  const faqs = [
    {
      question: "How do I get started with Light Speed?",
      answer: "Simply choose a plan that suits your needs and our team will handle the installation process.",
    },
    {
      question: "What speeds can I expect?",
      answer: "Our home internet packages offer speeds up to 20Mbps, while business packages can reach 50Mbps.",
    },
    {
      question: "Is there a installation fee?",
      answer: "Yes, there's a one-time installation fee of KES 2,000, which includes all necessary equipment.",
    },
    {
      question: "How do I pay for my subscription?",
      answer: "We accept M-Pesa, bank transfers, and credit card payments for all our services.",
    },
  ]

  return (
    <div className="min-h-screen bg-purple-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Customer Support</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Need help? Our support team is available 24/7 to assist you with any questions or concerns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl" />
              <div className="relative p-8 rounded-2xl text-center">
                <div className={`bg-gradient-to-r ${method.color} p-4 rounded-xl inline-flex mb-6`}>
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="text-yellow-400 font-semibold">{method.action}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl" />
                <div className="relative p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
                    <FileQuestion className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 ml-9">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

