"use client"

import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Music, Pause, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function MusicPlayer() {
    const [playing, setPlaying] = useState(false)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="hidden">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=GxldQ9eX2wo"
                    playing={playing}
                    loop
                    volume={0.6}
                    width="0"
                    height="0"
                    config={{
                        youtube: {
                            playerVars: { showinfo: 0 }
                        }
                    }}
                />
            </div>

            <motion.button
                onClick={() => setPlaying(!playing)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group relative flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-lg hover:bg-white/20 transition-all overflow-hidden"
            >
                <div className={`absolute inset-0 bg-rose-500/20 rounded-full transition-transform duration-1000 ${playing ? 'animate-pulse' : 'scale-0'}`} />

                {playing ? (
                    <Pause size={20} className="relative z-10 fill-white" />
                ) : (
                    <Play size={20} className="relative z-10 fill-white ml-1" />
                )}
            </motion.button>

            <AnimatePresence>
                {!playing && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/80 pointer-events-none"
                    >
                        Play Music
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
