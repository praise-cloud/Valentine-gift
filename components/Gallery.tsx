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

    useEffect(() => {
        if (item.type === 'video' && videoRef.current) {
            const video = videoRef.current;
            video.play().catch(error => {
                console.log("Autoplay prevented for video: ", item.src);
            });
        }
    }, [item.type, item.src]);

    return (
        <div className="relative group w-full h-full bg-white/10 shadow-md overflow-hidden rounded-lg">
            {item.type === 'image' ? (
                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            ) : (
                <video ref={videoRef} src={item.src} autoPlay muted loop playsInline className="object-cover w-full h-full" />
            )}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
        </div>
    );
};

export function Gallery() {
  const media: Media[] = useMemo(() => [...images, ...videos], []);

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-4">
          {media.map((item, index) => (
            <div 
              key={item.src + index} 
              className={`${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} flex flex-col`}
            >
              <div className="flex-grow h-0">
                <MediaItem item={item} />
              </div>
              <p className="text-white mt-2 text-xs uppercase tracking-widest">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
