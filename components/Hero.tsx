"use client"

import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black text-white">
            <div className="absolute inset-0 z-0 opacity-30">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    {/* Placeholder for a background video or abstract animation */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-red-rose-petals-falling-slowly-3652-large.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-serif tracking-tighter mb-4"
                >
                    My Valentine
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-xl md:text-2xl font-light tracking-widest text-white/80"
                >
                    A journey through our moments
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="animate-bounce text-white/50">
                    Scroll Down
                </div>
            </motion.div>
        </section>
    )
}
