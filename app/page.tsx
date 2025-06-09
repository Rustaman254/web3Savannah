"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, MapPin, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { AnimatedBanner } from "@/components/animated-banner"
import { ServiceFooter } from "@/components/service-footer"
import LoadingScreen from "@/components/loading-screen"
import LandingPage from "@/components/loading-page"

export default function Home() {
  const [showLanding, setShowLanding] = useState(false)

  const handleLoadingComplete = () => {
    setShowLanding(true)
  }
  return (
    <>
      {!showLanding && <LoadingScreen onComplete={handleLoadingComplete} />}
      <LandingPage/>
    </>

  )
}
