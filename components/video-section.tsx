"use client"

import { motion, useInView } from "framer-motion"
import { Play } from "lucide-react"
import { useRef, useEffect } from "react"

export default function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const iframe = document.getElementById("promo-video") as HTMLIFrameElement
      if (iframe) {
        iframe.src += "&autoplay=1"
      }
    }
  }, [isInView])

  return (
    <div className="py-24 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative aspect-video rounded-2xl overflow-hidden group"
          >
            <iframe
              id="promo-video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TNQsmPf24go?mute=1&controls=0&loop=1&playlist=TNQsmPf24go"
              title="Light Speed Internet Promo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-purple-900 ml-1" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Internet in Every Home in Africa</h2>
            <p className="text-gray-300 text-lg">
              We connect the unconnected, improving their lives through unlimited access to knowledge & opportunities.
              Join us in our mission to bring affordable internet to every African household.
            </p>
            <div className="flex gap-4">
              <span className="text-yellow-400 font-semibold">#BeUnlimited</span>
              <span className="text-yellow-400 font-semibold">www.LightSpeed.co.ke</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

