
"use client"

import React from "react"

export function VideoPlayer({
  src,
  onClose,
}: {
  src: string
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <video
        src={src}
        className="max-w-full max-h-full"
        autoPlay
        controls
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
