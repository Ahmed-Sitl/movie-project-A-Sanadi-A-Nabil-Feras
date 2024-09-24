import TrendingSection from "@/components/TrendingSection"
import Welcome from "@/components/Welcome"
import Image from "next/image"
import HeroSection from "@/components/HeroSection"
import WhatsPopularSection from "@/components/WhatsPopularSection"
import FreeToWatchSection from "@/components/FreeToWatchSection"
import HomeSection from "@/components/HomeSection"

export default function Home() {
  return (
    <div className=" flex flex-col  min-h-screen"> 
      <HeroSection />
      <HomeSection />
    </div>
  )
}
