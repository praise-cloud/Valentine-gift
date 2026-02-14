"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { VideoPlayer } from "./VideoPlayer"

export function FloatingMedia({
  src,
  alt,
  caption,
  x,
  rotate,
  delay,
  duration,
  isVideo = false,
}: {
  src: string
  alt: string
  caption: string
  x: number
  rotate: number
  delay: number
  duration: number
  isVideo?: boolean
}) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isVideo) {
      setIsClicked(true)
    }
  }

  const handleClose = () => {
    setIsClicked(false)
  }

  return (
    <>
      <motion.a
        href="#"
        onClick={handleClick}
        style={{
          left: `${x}%`,
          transformOrigin: "center center",
        }}
        className={cn(
          "absolute w-48 md:w-64 aspect-[3/4] p-2 bg-white/90 shadow-lg backdrop-blur-sm cursor-pointer"
        )}
        initial={{ top: "100%", opacity: 0, rotate }}
        animate={{ top: "-50%", opacity: [0, 1, 1, 0], rotate }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay,
          opacity: {
            duration,
            times: [0, 0.1, 0.9, 1],
          },
        }}
      >
        <div className="relative w-full h-full overflow-hidden">
          {isVideo ? (
            <video
              src={src}
              className="object-cover w-full h-full"
              autoPlay
              muted
              loop
            />
          ) : (
            <Image src={src} alt={alt} fill className="object-cover" />
          )}
        </div>
        <div className="absolute -bottom-8 left-0 right-0 text-center">
          <span className="font-serif text-white text-lg tracking-widest drop-shadow-md">
            {caption}
          </span>
        </div>
      </motion.a>
      {isClicked && isVideo && (
        <VideoPlayer src={src} onClose={handleClose} />
      )}
    </>
  )
}
