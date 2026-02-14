'use client'

import { useState, useRef, useEffect } from 'react'
import { Music, Pause, Play, Volume1, Volume2, VolumeX } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function MusicPlayer() {
  const [playing, setPlaying] = useState(true)
  const [volume, setVolume] = useState(0.1)
  const [isHovering, setIsHovering] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlayback = () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setPlaying(!playing)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
  }

  const getVolumeIcon = () => {
    if (volume === 0) {
      return <VolumeX size={20} />
    } else if (volume <= 0.5) {
      return <Volume1 size={20} />
    } else {
      return <Volume2 size={20} />
    }
  }

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-2"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="flex items-center bg-white/20 backdrop-blur-sm rounded-full p-2"
          >
            <div className="text-white mr-2">
              {getVolumeIcon()}
            </div>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <audio
        ref={audioRef}
        src="/music/ytmp3free.cc_stephen-sanchez-until-i-found-you-official-video-youtubemp3free.org.mp3"
        loop
        autoPlay
        volume={volume}
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
