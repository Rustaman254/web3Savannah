"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  // Simulate loading progress
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + Math.random() * 10, 100))
      } else {
        // Start exit animation
        setTimeout(() => {
          setIsExiting(true)
        }, 800)
      }
    }, 200)

    return () => clearTimeout(timer)
  }, [progress])

  const handleExitComplete = () => {
    onComplete()
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900"
          style={{ zIndex: 50 }} // Initial z-index
          exit={{
            opacity: 0,
            scale: 1.1,
            zIndex: 12, // Set z-index to 12 on exit
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                  exit: { duration: 0.5 },
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: progress === 100 ? [0, -8, 0] : [0, -8, 0],
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: -20,
              }}
              transition={{
                opacity: { duration: 1 },
                scale: { duration: 1.2, type: "spring", stiffness: 100 },
                y: {
                  duration: 3,
                  repeat: progress === 100 ? 0 : Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
                exit: { duration: 1, ease: "easeInOut" },
              }}
            >
              <img src="/web3-savannah-logo.png" alt="Web3 Savannah Logo" className="w-full h-full drop-shadow-lg" />
            </motion.div>

            {/* Loading progress bar */}
            <motion.div
              className="w-64 md:w-80 h-1 bg-gray-800 rounded-full mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                y: 10,
              }}
              transition={{
                delay: 0.5,
                exit: { duration: 0.8 },
              }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="text-gray-400 mt-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                y: 10,
              }}
              transition={{
                delay: 0.7,
                exit: { duration: 0.6 },
              }}
            >
              {progress === 100 ? "Complete!" : `Loading... ${Math.round(progress)}%`}
            </motion.p>
          </div>

          {/* Overlay for smooth transition */}
          <motion.div
            className="absolute inset-0 bg-gray-900"
            initial={{ opacity: 0 }}
            exit={{
              opacity: 1,
            }}
            transition={{
              exit: { duration: 0.3, delay: 0.7 },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}