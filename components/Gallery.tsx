'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import React, { useState, useEffect, useMemo } from 'react'

const media = [
    { type: 'image', src: '/IMG-20260121-WA0039.jpg', alt: 'Us', caption: 'MAGIC' },
    { type: 'image', src: '/IMG-20260203-WA0023.jpg', alt: 'Together', caption: 'DREAMS' },
    { type: 'image', src: '/IMG-20260203-WA0025.jpg', alt: 'Love', caption: 'FOREVER' },
    { type: 'image', src: '/IMG_2620.JPG', alt: 'Adventure', caption: 'FLY' },
    { type: 'image', src: '/PXL_20260127_123030757.jpg', alt: 'Smile', caption: 'LIGHT' },
    { type: 'image', src: '/b06fa58b-2d53-469e-bb50-0d70ad493242.jpg', alt: 'Forever', caption: 'ALWAYS' },
    { type: 'image', src: '/074979f7-d726-4c43-ba46-83bc21bee1c5.jpg', alt: 'Image', caption: 'Explore' },
    { type: 'video', src: '/24521.mp4', alt: 'Video', caption: 'Journey' },
    { type: 'video', src: '/IMG_2503.MP4', alt: 'Video', caption: 'Create' },
    { type: 'video', src: '/IMG_2504.MP4', alt: 'Video', caption: 'Imagine' },
    { type: 'video', src: '/VID-20221118-WA0008.mp4', alt: 'Video', caption: 'Inspire' },
    { type: 'video', src: '/VID-20230623-WA0038.mp4', alt: 'Video', caption: 'Wonder' },
    { type: 'video', src: '/VID-20230623-WA0039.mp4', alt: 'Video', caption: 'Believe' },
    { type: 'video', src: '/VID-20230624-WA0037.mp4', alt: 'Video', caption: 'Hope' },
    { type: 'video', src: '/VID-20230705-WA0028.mp4', alt: 'Video', caption: 'Shine' },
    { type: 'video', src: '/VID-20230705-WA0091.mp4', alt: 'Video', caption: 'Bliss' },
    { type: 'video', src: '/VID-20230705-WA0099.mp4', alt: 'Video', caption: 'Peace' },
    { type: 'video', src: '/VID-20230705-WA0107.mp4', alt: 'Video', caption: 'Unity' },
];

const MediaItem = ({ item, isVisible }) => {
    const animationProps = {
        initial: { opacity: 0, y: 100, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -100, scale: 0.9 },
        transition: { duration: 1.5, ease: 'easeInOut' },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div {...animationProps} className="absolute w-full h-full">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="relative w-48 md:w-64 aspect-[3/4] p-2 bg-white/90 shadow-lg backdrop-blur-sm">
                            {item.type === 'image' ? (
                                <Image src={item.src} alt={item.alt} fill className="object-cover" />
                            ) : (
                                <video src={item.src} autoPlay muted loop className="object-cover w-full h-full" />
                            )}
                            <div className="absolute -bottom-8 left-0 right-0 text-center">
                                <span className="font-serif text-white text-lg tracking-widest drop-shadow-md">
                                    {item.caption}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const galleryRef = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: galleryRef,
        offset: ['start start', 'end end'],
    })

    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1.05, 1.05, 0.8])
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

    const [isMounted, setIsMounted] = React.useState(false)

    useEffect(() => {
        setIsMounted(true)
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={galleryRef} className="relative h-[250vh] bg-black">
            <div className="sticky top-0 h-screen overflow-hidden">
                <motion.div
                    style={{ scale, opacity }}
                    className="w-full h-full flex items-center justify-center"
                >
                    <div className="relative w-full h-full">
                        {isMounted && (
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
                        )}

                        <div className="relative z-10 w-full h-full">
                           {media.map((item, index) => (
                                <MediaItem key={item.src} item={item} isVisible={currentIndex === index} />
                           ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
