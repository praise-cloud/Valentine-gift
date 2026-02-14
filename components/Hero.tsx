'use client'
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-widest leading-tight">
          HAPPY VALENTINE'S DAY
        </h1>
        <p className="text-lg md:text-2xl text-white mt-4 font-serif">
          My Babe Plum
        </p>
      </motion.div>
    </div>
  )
}
