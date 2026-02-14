'use client'

import Image from 'next/image'
import React, { useRef, useMemo, useEffect } from 'react'
import { images } from '@/lib/images'
import { videos } from '@/lib/videos'

interface Media {
  src: string;
  alt: string;
  caption: string;
  type: 'image' | 'video';
}

const MediaItem = ({ item }: { item: Media }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const rotate = useMemo(() => Math.random() * 20 - 10, []);

    useEffect(() => {
        if (item.type === 'video' && videoRef.current) {
            const video = videoRef.current;
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {}).catch(error => {});
            }
        }
    }, [item.type]);

    return (
        <div 
            className="relative group w-full h-full bg-white/10 shadow-md overflow-hidden rounded-lg"
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            {item.type === 'image' ? (
                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            ) : (
                <video ref={videoRef} src={item.src} autoPlay muted loop className="object-cover w-full h-full" />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="font-serif text-white text-lg tracking-widest drop-shadow-md text-center p-2">
                    {item.caption}
                </span>
            </div>
        </div>
    );
};

export function Gallery() {
  const media: Media[] = useMemo(() => [...images, ...videos], []);

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {media.map((item, index) => (
            <div key={item.src + index} className="aspect-[3/4]">
              <MediaItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
