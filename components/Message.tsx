"use client"

import { motion } from "framer-motion"

export function Message() {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-red-50 dark:bg-rose-950 text-center px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="max-w-3xl"
            >
                <h2 className="text-4xl md:text-6xl font-serif mb-8 text-rose-600 dark:text-rose-200">
                    Happy Valentine's Day
                </h2>
                <p className="text-lg md:text-2xl font-light leading-relaxed text-gray-700 dark:text-gray-300">
                    Every day with you is a gift. Thank you for being my partner, my best friend, and my love.
                    Here's to a lifetime of creating beautiful memories together.
                </p>
                <div className="mt-12 text-6xl">
                    ❤️
                </div>
            </motion.div>
        </section>
    )
}
