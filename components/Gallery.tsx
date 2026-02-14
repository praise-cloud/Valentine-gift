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
    { src: "/p14.jpeg", alt: "Image", caption: "Legend" },
    { src: "/,ja.jpeg", alt: "new", caption: "new" },
    { src: "/IMG-20231013-WA0011.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20231126-WA0000.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20231129-WA0002.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20231219-WA0020.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20231222-WA0019.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20240107-WA0002.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20240107-WA0052.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20240107-WA0056.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20240107-WA0072.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20240107-WA0073.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20240109-WA0006.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20240205-WA0026.jpg", alt: "new", caption: "new" },
    { src: "/IMG_1065.JPG", alt: "new", caption: "new" },
    { src: "/IMG_20231003_131108_721.jpg", alt: "new", caption: "new" },
    { src: "/IMG_20231004_122330_689.jpg", alt: "new", caption: "new" },
    { src: "/IMG_20231114_150016_798.jpg", alt: "new", caption: "new" },
    { src: "/IMG_20231129_121708_229.jpg", alt: "new", caption: "new" },
    { src: "/IMG_20231129_131207_095.jpg", alt: "new", caption: "new" },
    { src: "/IMG_20240117_113233_351.jpg", alt: "new", caption: "new" },
    { src: "/IMG_20240125_160924_692.jpg", alt: "new", caption: "new" },
    { src: "/IMG_2263.JPG", alt: "new", caption: "new" },
    { src: "/IMG_2626.JPG", alt: "new", caption: "new" },
    { src: "/IMG_2634.JPG", alt: "new", caption: "new" },
    { src: "/IMG_4779.JPG", alt: "new", caption: "new" },
    { src: "/IMG_7959.JPG", alt: "new", caption: "new" },
    { src: "/IMG_7960.JPG", alt: "new", caption: "new" },
    { src: "/PXL_20260127_122511800.jpg", alt: "new", caption: "new" },
    { src: "/PXL_20260127_122514554.jpg", alt: "new", caption: "new" },
    { src: "/PXL_20260127_123015959.jpg", alt: "new", caption: "new" },
    { src: "/PXL_20260127_123017164.jpg", alt: "new", caption: "new" },
    { src: "/PXL_20260127_123020812.jpg", alt: "new", caption: "new" },
    { src: "/PXL_20260127_123026836.jpg", alt: "new", caption: "new" },
    { src: "/PXL_20260127_123122060.jpg", alt: "new", caption: "new" },
    { src: "/PXL_20260127_123123454.jpg", alt: "new", caption: "new" },
    { src: "/PXL_20260127_123220555.jpg", alt: "new", caption: "new" },
    { src: "/PXL_20260127_130133939.jpg", alt: "new", caption: "new" },
    { src: "/PXL_20260127_130138956.jpg", alt: "new", caption: "new" },
    { src: "/PXL_20260127_131944866.MP.jpg", alt: "new", caption: "new" },
    { src: "/Screenshot_20231025-232212.png", alt: "new", caption: "new" },
    { src: "/Screenshot_20231227-151226.png", alt: "new", caption: "new" },
    { src: "/Screenshot_20240105-092246.png", alt: "new", caption: "new" },
    { src: "/WhatsApp Image 2026-02-14 at 1.02.51 PM.jpeg", alt: "new", caption: "new" },
    { src: "/ael.jpeg", alt: "new", caption: "new" },
    { src: "/al.jpeg", alt: "new", caption: "new" },
    { src: "/amAEW.jpeg", alt: "new", caption: "new" },
    { src: "/ap.jpeg", alt: "new", caption: "new" },
    { src: "/awn.jpeg", alt: "new", caption: "new" },
    { src: "/babe.jpeg", alt: "new", caption: "new" },
    { src: "/baby.jpeg", alt: "new", caption: "new" },
    { src: "/bea.jpeg", alt: "new", caption: "new" },
    { src: "/cute.jpeg", alt: "new", caption: "new" },
    { src: "/des.jpeg", alt: "new", caption: "new" },
    { src: "/dksa.jpeg", alt: "new", caption: "new" },
    { src: "/eas.jpeg", alt: "new", caption: "new" },
    { src: "/hmmm.jpeg", alt: "new", caption: "new" },
    { src: "/jg.jpeg", alt: "new", caption: "new" },
    { src: "/ka.jpeg", alt: "new", caption: "new" },
    { src: "/kd.jpeg", alt: "new", caption: "new" },
    { src: "/kkl.jpeg", alt: "new", caption: "new" },
    { src: "/ko.jpeg", alt: "new", caption: "new" },
    { src: "/leals.jpeg", alt: "new", caption: "new" },
    { src: "/ll.jpeg", alt: "new", caption: "new" },
    { src: "/london.jpeg", alt: "new", caption: "new" },
    { src: "/ls.jpeg", alt: "new", caption: "new" },
    { src: "/mk.jpeg", alt: "new", caption: "new" },
    { src: "/ms.jpeg", alt: "new", caption: "new" },
    { src: "/mw.jpeg", alt: "new", caption: "new" },
    { src: "/ns.jpeg", alt: "new", caption: "new" },
    { src: "/nw.jpeg", alt: "new", caption: "new" },
    { src: "/okaaaaaa.jpeg", alt: "new", caption: "new" },
    { src: "/ol.jpeg", alt: "new", caption: "new" },
    { src: "/ow.jpeg", alt: "new", caption: "new" },
    { src: "/p.as.jpeg", alt: "new", caption: "new" },
    { src: "/pd.jpeg", alt: "new", caption: "new" },
    { src: "/plum.jpeg", alt: "new", caption: "new" },
    { src: "/poa.jpeg", alt: "new", caption: "new" },
    { src: "/qas.jpeg", alt: "new", caption: "new" },
    { src: "/qawd.jpeg", alt: "new", caption: "new" },
    { src: "/qws.jpeg", alt: "new", caption: "new" },
    { src: "/sla.jpeg", alt: "new", caption: "new" },
    { src: "/uw.jpeg", alt: "new", caption: "new" },
    { src: "/vvvv.jpeg", alt: "new", caption: "new" },
    { src: "/wassd.jpeg", alt: "new", caption: "new" },
    { src: "/we.jpeg", alt: "new", caption: "new" },
    { src: "/weqa.jpeg", alt: "new", caption: "new" },
    { src: "/wsas.jpeg", alt: "new", caption: "new" },
    { src: "/zea.jpeg", alt: "new", caption: "new" },
    { src: "/zzas.jpeg", alt: "new", caption: "new" },
    { src: "/IMG-20230621-WA0000.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230621-WA0003.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230621-WA0004.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230623-WA0026.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230623-WA0027.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230623-WA0028.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230623-WA0029.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230623-WA0030.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230623-WA0036.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230623-WA0037.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230624-WA0034.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230624-WA0035.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230624-WA0036.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230702-WA0022.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230702-WA0023.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230702-WA0024.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230702-WA0025.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230702-WA0026.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0027.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0079.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0080.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0081.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0082.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0083.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0084.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0085.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0086.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0087.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0088.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0089.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0090.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0092.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0094.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0095.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0096.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0097.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0098.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0100.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0101.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0102.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0103.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0104.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0105.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0106.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0108.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0109.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0110.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0111.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230705-WA0112.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230706-WA0008.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230706-WA0010.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230706-WA0011.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230706-WA0012.jpg", alt: "new", caption: "new" },
    { src: "/IMG-20230706-WA0013.jpg", alt: "new", caption: "new" }
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
        const totalImages = images.length;
        return images.map((img, index) => ({
            ...img,
            x: ((index * 137) % 80) + 10,
            rotate: ((index * 151) % 20) - 10,
            delay: index * 4, // Stagger the animation
            duration: totalImages * 2, // Ensure the animation is long enough for all images to have their turn
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
