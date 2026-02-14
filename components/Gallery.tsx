"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const images = [
    { src: "/IMG-20260121-WA0039.jpg", alt: "Us", caption: "MAGIC" },
    { src: "/IMG-20260203-WA0023.jpg", alt: "Together", caption: "DREAMS" },
    { src: "/IMG-20260203-WA0025.jpg", alt: "Love", caption: "FOREVER" },
    { src: "/IMG_2620.JPG", alt: "Adventure", caption: "FLY" },
    { src: "/PXL_20260127_123030757.jpg", alt: "Smile", caption: "LIGHT" },
    { src: "/WhatsApp Image 2026-01-15 at 5.48.14 PM.jpeg", alt: "Memories", caption: "US" },
    { src: "/b06fa58b-2d53-469e-bb50-0d70ad493242.jpg", alt: "Forever", caption: "ALWAYS" },
]

// Random positioning helpers
const randomPosition = (i: number) => {
    // Deterministic pseudo-random based on index to ensure hydration match
    const x = ((i * 37) % 70) + 10 // 10% to 80% left
    const y = ((i * 53) % 40) // offset
    const rotate = ((i * 13) % 30) - 15 // -15 to +15 deg
    return { x, y, rotate }
}

function FloatingImage({ src, alt, caption, index }: { src: string, alt: string, caption: string, index: number }) {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const { x, rotate } = randomPosition(index)

    // Different speeds for parallax depth (some move faster than others)
    const yInfo = useTransform(scrollYProgress, [0, 1], [0, -300 - (index * 50)])

    return (
        <motion.div
            ref={containerRef}
            style={{
                y: yInfo,
                left: `${x}%`,
                rotate: rotate,
            }}
            className={cn(
                "absolute w-48 md:w-64 aspect-[3/4] p-2 bg-white/90 shadow-lg backdrop-blur-sm",
                index % 2 === 0 ? "z-10" : "z-0"
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div className="relative w-full h-full overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="font-serif text-white text-lg tracking-widest drop-shadow-md">{caption}</span>
            </div>
        </motion.div>
    )
}

export function Gallery() {
    const containerRef = useRef(null)

    return (
        <section ref={containerRef} className="relative min-h-[250vh] bg-neutral-950 overflow-hidden">
            {/* Starry background effect */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full opacity-20 animate-pulse"
                        style={{
                            width: Math.random() * 3 + 'px',
                            height: Math.random() * 3 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animationDuration: Math.random() * 3 + 2 + 's'
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 w-full h-full pt-40 pb-40">
                {images.map((img, index) => (
                    // Staggering the vertical position manually to spread them out over the tall section
                    <div key={index} className="relative h-[30vh]">
                        <FloatingImage {...img} index={index} />
                    </div>
                ))}
            </div>
        </section>
    )
}
