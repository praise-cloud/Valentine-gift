'use client'

import { useState, useRef } from 'react'
import { Music, Pause, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function MusicPlayer() {
  const [playing, setPlaying] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlayback = () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/music/ytmp3free.cc_stephen-sanchez-until-i-found-you-official-video-youtubemp3free.org.mp3"
        loop
        autoPlay
        volume={0.1}
      />

      <button
        onClick={togglePlayback}
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
    </div>
  )
}
