import HeroBanner from "@/components/hero-banner"
import ServiceCards from "@/components/service-cards"
import VideoSection from "@/components/video-section"
import FeatureGrid from "@/components/feature-grid"
import CoverageSection from "@/components/coverage-section"
import Stats from "@/components/stats"

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative">
        <HeroBanner />
        <div className="relative z-10 -mt-24">
          <ServiceCards />
        </div>
        <Stats />
        <VideoSection />
        <FeatureGrid />
        <CoverageSection />
      </div>
    </div>
  )
}

