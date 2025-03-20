"use client"

import { Cloudinary } from "@cloudinary/url-gen"
import { CloudinaryContext } from "@cloudinary/react"
import type { ReactNode } from "react"

interface CloudinaryProviderProps {
  children: ReactNode
}

export function CloudinaryProvider({ children }: CloudinaryProviderProps) {
  // Initialize Cloudinary
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dlzcd1lii", // Your Cloudinary cloud name
    },
  })

  return <CloudinaryContext cloudName="dlzcd1lii">{children}</CloudinaryContext>
}

