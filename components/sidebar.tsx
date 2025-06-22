"use client"

import { X, Search, Crown, Plus, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { navigationItems } from "@/lib/data"
import type { NavigationItem } from "@/lib/types"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden transition-opacity duration-300 ease-in-out"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900/95 backdrop-blur-xl border-r border-gray-700 transform transition-all duration-300 ease-in-out shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <SidebarHeader onClose={onClose} />
        <SidebarNavigation onClose={onClose} />
        <SidebarUserProfile />
      </div>
    </>
  )
}

function SidebarHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-700 hover:bg-gray-800/50 transition-colors duration-200">
      <div className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-200">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
          <span className="text-white font-bold text-sm">E</span>
        </div>
        <div>
          <h1 className="text-white font-semibold hover:text-purple-300 transition-colors duration-200">
            EaseLearn AI
          </h1>
          <Badge
            variant="secondary"
            className="text-xs hover:bg-purple-600 hover:text-white transition-colors duration-200"
          >
            Beta
          </Badge>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-white hover:bg-gray-700 hover:text-purple-300 hover:scale-110 transition-all duration-200"
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </Button>
    </div>
  )
}

function SidebarNavigation({ onClose }: { onClose: () => void }) {
  return (
    <nav className="p-4 space-y-2">
      <div className="flex flex-col space-y-3 mb-6">
        <Button className="bg-purple-600 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 text-white w-full justify-start transition-all duration-200">
          <Home className="w-4 h-4 mr-2" />
          Dashboard
        </Button>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 text-white w-full justify-start transition-all duration-200">
          <Plus className="w-4 h-4 mr-2" />
          New Topic
        </Button>
      </div>

      <SearchBar />

      {navigationItems.map((item) => (
        <NavigationLink key={item.name} item={item} onClose={onClose} />
      ))}
    </nav>
  )
}

function SearchBar() {
  return (
    <div className="relative mb-4 group">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-hover:text-purple-400 transition-colors duration-200" />
      <Input
        placeholder="Search Previous Learnings..."
        className="pl-10 bg-gray-800/70 border-gray-600 text-white placeholder-gray-400 hover:bg-gray-700/70 hover:border-purple-500 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-200"
      />
    </div>
  )
}

function NavigationLink({ item, onClose }: { item: NavigationItem; onClose: () => void }) {
  return (
    <a
      href={item.href}
      onClick={onClose}
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer group ${
        item.active
          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
          : "text-gray-300 hover:bg-gray-800 hover:text-white hover:scale-105 hover:shadow-md"
      }`}
    >
      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
      <span className="group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
    </a>
  )
}

function SidebarUserProfile() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 hover:bg-gray-800/50 transition-colors duration-200">
      <div className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform duration-200 group">
        <Avatar className="w-10 h-10 hover:ring-2 hover:ring-purple-500 transition-all duration-200">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback className="bg-purple-600 text-white group-hover:bg-purple-700"></AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="text-white font-medium group-hover:text-purple-300 transition-colors duration-200">USER</p>
          <p className="text-gray-400 text-sm flex items-center group-hover:text-gray-300 transition-colors duration-200">
            <Crown className="w-3 h-3 mr-1 group-hover:text-yellow-400 transition-colors duration-200" />
            Basic
          </p>
        </div>
      </div>
    </div>
  )
}
