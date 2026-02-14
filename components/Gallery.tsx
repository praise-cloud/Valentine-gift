"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import React from "react"

const images = [
    { src: "/IMG-20260121-WA0039.jpg", alt: "Us", caption: "MAGIC" },
    { src: "/IMG-20260203-WA0023.jpg", alt: "Together", caption: "DREAMS" },
    { src: "/IMG-20260203-WA0025.jpg", alt: "Love", caption: "FOREVER" },
    { src: "/IMG_2620.JPG", alt: "Adventure", caption: "FLY" },
    { src: "/PXL_20260127_123030757.jpg", alt: "Smile", caption: "LIGHT" },
    { src: "/b06fa58b-2d53-469e-bb50-0d70ad493242.jpg", alt: "Forever", caption: "ALWAYS" },
    { src: "/074979f7-d726-4c43-ba46-83bc21bee1c5.jpg", alt: "Image", caption: "Explore" },
    { src: "/333d2fd4-1ad8-4755-9f27-5868a97deba8.jpg", alt: "Image", caption: "Discover" },
    { src: "/47d480d3-a154-4a18-bdcc-7638c789f64e.JPG", alt: "Image", caption: "Journey" },
    { src: "/IMG-20260121-WA0036.jpg", alt: "Image", caption: "Create" },
    { src: "/IMG-20260121-WA0040.jpg", alt: "Image", caption: "Imagine" },
    { src: "/IMG-20260121-WA0041.jpg", alt: "Image", caption: "Inspire" },
    { src: "/IMG-20260121-WA0042.jpg", alt: "Image", caption: "Wonder" },
    { src: "/IMG-20260203-WA0023(1).jpg", alt: "Image", caption: "Believe" },
    { src: "/IMG-20260203-WA0024.jpg", alt: "Image", caption: "Hope" },
    { src: "/IMG-20260203-WA0026.jpg", alt: "Image", caption: "Shine" },
    { src: "/IMG_9714.JPG", alt: "Image", caption: "Bliss" },
    { src: "/e857564e-7b00-4e4b-a338-c5aaaa821f61.JPG", alt: "Image", caption: "Peace" },
    { src: "/p1.jpeg", alt: "Image", caption: "Unity" },
    { src: "/p2.jpeg", alt: "Image", caption: "Harmony" },
    { src: "/p3.jpeg", alt: "Image", caption: "Serenity" },
    { src: "/p4.jpeg", alt: "Image", caption: "Courage" },
    { src: "/p5.jpeg", alt: "Image", caption: "Strength" },
    { src: "/p6.jpeg", alt: "Image", caption: "Wisdom" },
    { src: "/p7.jpeg", alt: "Image", caption: "Freedom" },
    { src: "/p8.jpeg", alt: "Image", caption: "Growth" },
    { src: "/p9.jpeg", alt: "Image", caption: "Success" },
    { src: "/p10.jpeg", alt: "Image", caption: "Glory" },
    { src: "/p12.jpeg", alt: "Image", caption: "Victory" },
    { src: "/p13.jpeg", alt: "Image", caption: "Triumph" },
    { src: "/p14.jpeg", alt: "Image", caption: "Legend" }
]

function FloatingImage({
    src,
    alt,
    caption,
    x,
    rotate,
    delay,
    duration
}: {
    src: string
    alt: string
    caption: string
    x: number
    rotate: number
    delay: number
    duration: number
}) {
    return (
        <motion.a
            href="#"
            style={{
                left: `${x}%`,
                rotate: rotate,
                transformOrigin: "center center",
            }}
            className={cn(
                "absolute w-48 md:w-64 aspect-[3/4] p-2 bg-white/90 shadow-lg backdrop-blur-sm cursor-pointer",
                "top-0" // Start from top for y animation
            )}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-100vh", opacity: [0, 1, 1, 0] }}
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
                <Image src={src} alt={alt} fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="font-serif text-white text-lg tracking-widest drop-shadow-md">
                    {caption}
                </span>
            </div>
        </motion.a>
    )
}

export function Gallery() {
    const galleryRef = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: galleryRef,
        offset: ["start start", "end end"],
    })

    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1.05, 1.05, 0.8])
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

    const animationDetails = React.useMemo(() => {
        return images.map((img, index) => ({
            ...img,
            x: ((index * 137) % 80) + 10,
            rotate: ((index * 151) % 20) - 10,
            delay: Math.random() * images.length * 0.4,
            duration: 25 + Math.random() * 20,
        }))
    }, [])

    return (
        <section ref={galleryRef} className="relative h-[250vh] bg-black">
            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.div
                    style={{ scale, opacity }}
                    className="w-full h-full flex items-center justify-center"
                >
                    <div className="relative w-full h-full">
                        {/* Starry background */}
                        <div className="absolute inset-0 z-0">
                            {[...Array(200)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute bg-white rounded-full opacity-50 animate-pulse"
                                    style={{
                                        width: Math.random() * 2.5 + 'px',
                                        height: Math.random() * 2.5 + 'px',
                                        top: Math.random() * 100 + '%',
                                        left: Math.random() * 100 + '%',
                                        animationDuration: Math.random() * 6 + 4 + 's',
                                        animationDelay: Math.random() * 3 + 's',
                                    }}
                                />
                            ))}
                        </div>

                        {/* Floating Images */}
                        <div className="relative z-10 w-full h-full">
                            {animationDetails.map(details => (
                                <FloatingImage key={details.src} {...details} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
