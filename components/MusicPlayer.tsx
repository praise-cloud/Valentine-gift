'use client'

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
            <div className="absolute top-0 left-0 w-0 h-0">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=GxldQ9eX2wo"
                    playing={playing}
                    loop
                    volume={0.6}
                    width="100%"
                    height="100%"
                    config={{
                        youtube: {
                            playerVars: { showinfo: 0 }
                        }
                    }}
                />
            </div>

            <button
                onClick={() => setPlaying(!playing)}
                className="w-12 h-12 rounded-full bg-rose-500/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-white hover:bg-rose-600 transition-colors"
                aria-label={playing ? 'Pause music' : 'Play music'}
            >
                <AnimatePresence mode="wait">
                    {playing ? (
                        <motion.div
                            key="pause"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                        >
                            <Pause size={20} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="play"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                        >
                            <Play size={20} className="ml-0.5" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
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
