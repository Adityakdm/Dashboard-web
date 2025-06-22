import type React from "react"

interface AvatarProps {
  children: React.ReactNode
  className?: string
}

export function Avatar({ children, className = "" }: AvatarProps) {
  return <div className={`relative inline-flex items-center justify-center rounded-full ${className}`}>{children}</div>
}

export function AvatarImage({ src, alt = "", className = "" }: { src?: string; alt?: string; className?: string }) {
  if (!src) return null

  return (
    <img src={src || "/placeholder.svg"} alt={alt} className={`w-full h-full object-cover rounded-full ${className}`} />
  )
}

export function AvatarFallback({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center w-full h-full rounded-full bg-gray-600 text-white font-medium ${className}`}
    >
      {children}
    </div>
  )
}
