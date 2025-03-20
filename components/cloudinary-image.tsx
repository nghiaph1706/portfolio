"use client"

import Image from "next/image"
import { useState } from "react"

interface CloudinaryImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function CloudinaryImage({ src, alt, width, height, className = "", priority = false }: CloudinaryImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Function to handle image load error
  const handleError = () => {
    console.error(`Failed to load image: ${src}`)
    // Fallback to a placeholder if the image fails to load
    return "/placeholder.svg"
  }

  return (
    <div className={`relative ${className} ${isLoading ? "animate-pulse bg-muted" : ""}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        priority={priority}
        unoptimized={true}
      />
    </div>
  )
}

