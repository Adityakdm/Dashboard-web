import { Home, User, BookOpen, BarChart3, Settings, Mic, Camera } from "lucide-react"

export const navigationItems = [
  { name: "Dashboard", icon: Home, href: "#", active: true },
  { name: "Profile", icon: User, href: "#" },
  { name: "Learning Path", icon: BookOpen, href: "#" },
  { name: "Analytics", icon: BarChart3, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
]

export const featureCards = [
  {
    title: "Talk to AI Tutor",
    description: "Talk to EaseLearn's Live AI",
    icon: Mic,
    isNew: true,
    gradient: "from-purple-600 to-blue-600",
  },
  {
    title: "Point & Ask",
    description: "Point Camera or Share to Ask",
    icon: Camera,
    isNew: false,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Talk to Notes",
    description: "Talk or Chat with notes/YT videos",
    icon: BookOpen,
    isNew: true,
    gradient: "from-cyan-600 to-teal-600",
  },
]
