"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-gray-900/80 backdrop-blur-xl border-b border-gray-700 p-4 hover:bg-gray-900/90 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white hover:bg-gray-700 hover:text-purple-300 hover:scale-110 transition-all duration-200"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center space-x-4 ml-auto">
          <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-purple-500 hover:scale-110 transition-all duration-200">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="bg-purple-600 text-white hover:bg-purple-700"></AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
