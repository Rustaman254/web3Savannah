"use client";

import { useState } from "react";
import LoadingScreen from "@/components/loading-screen";
import LandingPage from "@/components/loading-page"; // Assuming this is the file for LandingPage

export default function Home() {
  const [showLanding, setShowLanding] = useState(false);

  const handleLoadingComplete = () => {
    setShowLanding(true);
  };

  return (
    <>
      {!showLanding && <LoadingScreen onComplete={handleLoadingComplete} />}
      <LandingPage isLoading={!showLanding} />
    </>
  );
}