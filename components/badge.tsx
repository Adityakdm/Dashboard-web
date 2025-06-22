import type React from "react"

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "secondary" | "success" | "warning" | "danger"
}

export function Badge({ children, className = "", variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-purple-600 text-white",
    secondary: "bg-gray-600 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-600 text-black",
    danger: "bg-red-600 text-white",
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
